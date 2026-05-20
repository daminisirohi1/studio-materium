import { useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Plus, Minus } from 'lucide-react';
import { WardrobeNav } from '../components/WardrobeNav';
import { WardrobePanel } from '../components/WardrobePanel';
import { StorageAccordion, RetailAccordion } from '../components/StorageRetailPanels';
import { CATS, getProductById } from '../../data/catalog';
import { useAuthStore } from '../../store/authStore';
import { useWardrobeStore } from '../../store/wardrobeStore';
import type { Gender, WardrobeZone, CatalogItem, CatalogProduct } from '../../types';

// ─── Constants ────────────────────────────────────────────────────────────────

const ZONE_OPTS: { id: WardrobeZone; label: string }[] = [
  { id: 'hanging-full', label: 'Full Rail' },
  { id: 'hanging-half', label: 'Half Rail' },
  { id: 'shelving',     label: 'Shelving' },
  { id: 'drawers',      label: 'Drawers' },
  { id: 'shoe-rack',    label: 'Shoe Rack' },
  { id: 'accessories',  label: 'Accessories' },
];

const BRAND_DOMAINS: Record<string, string> = {
  'Tom Ford':           'tomford.com',
  'Brioni':             'brioni.com',
  'Canali':             'canali.com',
  'Hugo Boss':          'hugoboss.com',
  'Ralph Lauren':       'ralphlauren.com',
  'Zara':               'zara.com',
  'Massimo Dutti':      'massimodutti.com',
  'Acne Studios':       'acnestudios.com',
  'COS':                'cos.com',
  'Loro Piana':         'loropiana.com',
  "Drake's":            'drakes.com',
  'Boglioli':           'boglioli.it',
  'Ermenegildo Zegna':  'zegna.com',
  'Kiton':              'kiton.com',
  'Turnbull & Asser':   'turnbullandasser.co.uk',
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function defaultZone(categoryId: string): WardrobeZone {
  if (categoryId.includes('footwear')) return 'shoe-rack';
  if (['jewellery','watches','bags','scarves','belts','eyewear'].some(k => categoryId.includes(k))) return 'accessories';
  if (['shirts','trousers'].some(k => categoryId.includes(k))) return 'shelving';
  return 'hanging-full';
}

function getMaterialImg(mat: string): string {
  const k = mat.toLowerCase();
  if (k.includes('cashmere'))  return '/kc/scarfs/scarfs (1).jpg';
  if (k.includes('barathea'))  return '/kc/suits & tailoring/suits/Regular Fit — Plain.jpg';
  if (k.includes('velvet'))    return '/kc/suits & tailoring/blazers/Velvet.jpg';
  if (k.includes('merino'))    return '/kc/shirts & tops/polo shirts/Merino Polo Fine-Knit (1).jpg';
  if (k.includes('wool'))      return '/kc/suits & tailoring/suits/Classic Fit — Check.jpg';
  if (k.includes('silk'))      return '/kc/shirts & tops/Women Blouses/Silk Blouse Classic Button (1).jpg';
  if (k.includes('satin'))     return '/kc/dress/dress (8).jpg';
  if (k.includes('chiffon'))   return '/kc/dress/dress (3).jpg';
  if (k.includes('crepe'))     return '/kc/dress/dress (5).jpg';
  if (k.includes('linen'))     return '/kc/suits & tailoring/blazers/solid linen Unstructured Blazer.jpg';
  if (k.includes('denim'))     return '/kc/jeans/jeans (1).jpg';
  if (k.includes('jersey'))    return '/kc/suits & tailoring/blazers/Jersey Knit.jpg';
  if (k.includes('suede'))     return '/kc/footwear/formal shoes/Monk Strap/double monk (1).jpg';
  if (k.includes('leather'))   return '/kc/footwear/formal shoes/oxford/Plain Cap Toe (1).jpg';
  if (k.includes('canvas'))    return '/kc/footwear/Casual Shoes/sneaker/Canvas Low-Top (1).jpg';
  if (k.includes('cotton'))    return '/kc/shirts & tops/Formal shirts/Button-Down OCBD Slim.jpg';
  return '/kc/casuals/casuals (1).jpg';
}

function getAllBrands(allBrands: Record<string, string[]>): string[] {
  return Object.values(allBrands).flat();
}

function getAccessories(product: CatalogProduct, itemName: string): CatalogItem[] {
  return product.sections.flatMap(s => s.items).filter(i => i.name !== itemName).slice(0, 8);
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface ConfigState {
  sectionTitle: string;
  item: CatalogItem;
  variant: string;
  material: string;
  color: string;
  selectedAccessories: string[];
  brand: string;
  zone: WardrobeZone;
  qty: number;
}

// ─── Brand Logo ───────────────────────────────────────────────────────────────

function BrandLogo({ name, selected, onClick }: { name: string; selected: boolean; onClick: () => void }) {
  const [err, setErr] = useState(false);
  const domain = BRAND_DOMAINS[name];

  return (
    <button
      onClick={onClick}
      style={{
        width: 148, height: 72,
        background: '#ffffff',
        border: `2px solid ${selected ? '#c9a96e' : 'rgba(255,255,255,0)'}`,
        boxShadow: selected ? '0 0 0 3px rgba(201,169,110,0.2)' : 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', transition: 'all 0.2s',
        padding: 12, flexShrink: 0,
        opacity: selected ? 1 : 0.7,
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
      onMouseLeave={e => (e.currentTarget.style.opacity = selected ? '1' : '0.7')}
    >
      {domain && !err ? (
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt={name}
          onError={() => setErr(true)}
          referrerPolicy="no-referrer"
          style={{ maxWidth: 120, maxHeight: 44, objectFit: 'contain', display: 'block' }}
        />
      ) : (
        <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 7.5, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#111', fontWeight: 600, textAlign: 'center' }}>
          {name}
        </span>
      )}
    </button>
  );
}

// ─── Row label ────────────────────────────────────────────────────────────────

function RowLabel({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
      <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 7.5, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', whiteSpace: 'nowrap' }}>{label}</span>
      <div style={{ flex: 1, height: 1, background: '#1a1a1a' }} />
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export function TypePage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const user = useAuthStore(s => s.user);
  const { activeProject, addItem, items } = useWardrobeStore();

  const [config, setConfig] = useState<ConfigState | null>(null);
  const [wardrobePanelOpen, setWardrobePanelOpen] = useState(false);
  const [added, setAdded] = useState(false);

  const gender = (searchParams.get('gender') || 'men') as Gender;
  const id = categoryId ?? '';
  const cat = CATS[gender]?.find(c => c.id === id) ?? CATS.men.find(c => c.id === id);
  const product = getProductById(id);

  const projectItems = activeProject ? items.filter(i => i.projectId === activeProject.id) : [];
  const allBrands = product.retail?.brands ?? {};
  const brands = getAllBrands(allBrands);
  const accessories = config ? getAccessories(product, config.item.name) : [];

  const canAdd = !!(user?.role === 'designer' && activeProject);

  const handleSelectItem = (sectionTitle: string, item: CatalogItem) => {
    const variants  = item.sub ? item.sub.split(' · ') : [];
    const materials = item.mat ? item.mat.split(', ') : [];
    const colors    = item.col ? item.col.split(',') : [];
    setConfig({
      sectionTitle,
      item,
      variant: variants[0] ?? '',
      material: materials[0] ?? '',
      color: colors[0] ?? '',
      selectedAccessories: [],
      brand: brands[0] ?? '',
      zone: defaultZone(id),
      qty: 1,
    });
  };

  const patch = (p: Partial<ConfigState>) => setConfig(prev => prev ? { ...prev, ...p } : prev);

  const toggleAccessory = (name: string) => {
    if (!config) return;
    const has = config.selectedAccessories.includes(name);
    patch({ selectedAccessories: has ? config.selectedAccessories.filter(a => a !== name) : [...config.selectedAccessories, name] });
  };

  const handleAdd = () => {
    if (!activeProject || !config) return;
    addItem({
      projectId: activeProject.id,
      categoryId: id,
      categoryName: cat?.name ?? id,
      sectionTitle: config.sectionTitle,
      name: config.item.name,
      variant: config.variant,
      material: config.material,
      color: config.color,
      accessories: config.selectedAccessories,
      brand: config.brand,
      quantity: config.qty,
      zone: config.zone,
      img: config.item.img,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2400);
  };

  return (
    <div style={{ background: '#080808', color: '#fff' }}>
      <WardrobeNav gender={gender} onGenderSelect={(g) => navigate(`/wardrobe/categories?gender=${g}`)} onOpenTray={() => setWardrobePanelOpen(true)} showGenderTabs={false} categoryName={cat?.name ?? id} />

      <div style={{ paddingTop: 56, display: 'flex', height: 'calc(100vh - 56px)', overflow: 'hidden' }}>

        {/* ── LEFT 40%: Browse grid ────────────────────────────────────────── */}
        <div style={{ flex: '0 0 40%', overflowY: 'auto', borderRight: '1px solid #1a1a1a' }}>

          {/* Compact banner */}
          <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
            <img src={product.banner} alt={cat?.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.35)' }} referrerPolicy="no-referrer" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 20%, rgba(8,8,8,1) 100%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 28px' }}>
              <button onClick={() => navigate(`/wardrobe/categories?gender=${gender}`)} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 7, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', background: 'none', border: 'none', cursor: 'pointer', marginBottom: 6, display: 'block' }}>
                ← {gender.charAt(0).toUpperCase() + gender.slice(1)}
              </button>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 300, letterSpacing: '0.1em', color: '#fff' }}>{cat?.name ?? id}</h1>
            </div>
          </div>

          {/* Sections */}
          <div style={{ padding: '28px 20px 0' }}>
            {product.sections.map((section, si) => (
              <div key={section.title} style={{ marginBottom: 36 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', whiteSpace: 'nowrap' }}>{section.title}</h2>
                  <div style={{ flex: 1, height: 1, background: '#1a1a1a' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
                  {section.items.map((item, ii) => {
                    const isSelected = config?.item === item;
                    return (
                      <motion.button
                        key={`${si}-${ii}`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: ii * 0.04 }}
                        onClick={() => handleSelectItem(section.title, item)}
                        style={{ padding: 0, background: 'none', border: `2px solid ${isSelected ? '#c9a96e' : 'transparent'}`, cursor: 'pointer', textAlign: 'left', transition: 'border-color 0.2s' }}
                      >
                        <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
                          <motion.img
                            src={item.img} alt={item.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: isSelected ? 'brightness(0.85)' : 'brightness(0.6)' }}
                            whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}
                            referrerPolicy="no-referrer"
                          />
                          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)' }} />
                          {isSelected && (
                            <div style={{ position: 'absolute', top: 6, right: 6, width: 18, height: 18, background: '#c9a96e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <Check size={9} color="#000" />
                            </div>
                          )}
                          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 8px' }}>
                            <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 7.5, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: isSelected ? '#c9a96e' : '#fff', marginBottom: 2 }}>{item.name}</div>
                            {item.sub && <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 6, color: 'rgba(255,255,255,0.35)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.sub.split(' · ').slice(0, 2).join(' · ')}</div>}
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div style={{ height: 40 }} />
        </div>

        {/* ── RIGHT 60%: Configurator ──────────────────────────────────────── */}
        <div style={{ flex: '0 0 60%', overflowY: 'auto', background: '#0a0a0a' }}>
          <AnimatePresence mode="wait">
            {!config ? (
              /* Empty state */
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, padding: 48 }}
              >
                <div style={{ position: 'relative', width: '100%', height: 320, overflow: 'hidden' }}>
                  <img src={product.banner} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.25)' }} referrerPolicy="no-referrer" />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 22, fontWeight: 300, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em' }}>
                      Select an item to configure
                    </p>
                    <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(201,169,110,0.4), transparent)' }} />
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Configurator */
              <motion.div key={config.item.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>

                {/* Hero image */}
                <div style={{ position: 'relative', height: 360, overflow: 'hidden' }}>
                  <img src={config.item.img} alt={config.item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.65)' }} referrerPolicy="no-referrer" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 55%)' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 36px' }}>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: 6 }}>{config.sectionTitle}</p>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 300, letterSpacing: '0.08em', color: '#fff' }}>{config.item.name}</h2>
                    {config.item.sub && <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', marginTop: 6 }}>{config.item.sub}</p>}
                  </div>
                </div>

                {/* Options */}
                <div style={{ padding: '28px 36px' }}>

                  {/* Variant */}
                  {config.item.sub && config.item.sub.split(' · ').length > 1 && (
                    <div style={{ marginBottom: 28 }}>
                      <RowLabel label="Variant" />
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {config.item.sub.split(' · ').map(v => (
                          <button key={v} onClick={() => patch({ variant: v })} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 7.5, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '7px 14px', background: config.variant === v ? '#fff' : 'none', color: config.variant === v ? '#000' : 'rgba(255,255,255,0.4)', border: `1px solid ${config.variant === v ? '#fff' : '#2a2a2a'}`, cursor: 'pointer', transition: 'all 0.2s' }}>
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Material */}
                  {config.item.mat && (
                    <div style={{ marginBottom: 28 }}>
                      <RowLabel label="Material" />
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        {config.item.mat.split(', ').map(m => (
                          <button key={m} onClick={() => patch({ material: m })} style={{ padding: 0, background: 'none', border: `2px solid ${config.material === m ? '#c9a96e' : 'transparent'}`, cursor: 'pointer', position: 'relative', transition: 'border-color 0.2s' }}>
                            <div style={{ width: 90, height: 90, overflow: 'hidden' }}>
                              <img src={getMaterialImg(m)} alt={m} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: config.material === m ? 'brightness(0.9)' : 'brightness(0.45)', transition: 'filter 0.2s' }} referrerPolicy="no-referrer" />
                            </div>
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.72)', padding: '3px 4px' }}>
                              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 5.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: config.material === m ? '#c9a96e' : 'rgba(255,255,255,0.5)', textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.split(' ').slice(-1)[0]}</p>
                            </div>
                            {config.material === m && (
                              <div style={{ position: 'absolute', top: 4, right: 4, width: 16, height: 16, background: '#c9a96e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Check size={9} color="#000" />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                      {config.material && <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', marginTop: 8 }}>{config.material}</p>}
                    </div>
                  )}

                  {/* Colour */}
                  {config.item.col && (
                    <div style={{ marginBottom: 28 }}>
                      <RowLabel label="Colour" />
                      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                        {config.item.col.split(',').map(c => (
                          <button key={c} onClick={() => patch({ color: c })} title={c} style={{ width: 40, height: 40, borderRadius: '50%', background: c, border: 'none', cursor: 'pointer', outline: config.color === c ? '2px solid #c9a96e' : '1px solid rgba(255,255,255,0.1)', outlineOffset: config.color === c ? 3 : 0, transition: 'outline 0.2s, outline-offset 0.2s' }} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Accessories */}
                  {accessories.length > 0 && (
                    <div style={{ marginBottom: 28 }}>
                      <RowLabel label="Accessories" />
                      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 6 }}>
                        {accessories.map(acc => {
                          const sel = config.selectedAccessories.includes(acc.name);
                          return (
                            <button key={acc.name} onClick={() => toggleAccessory(acc.name)} style={{ flex: '0 0 auto', width: 100, padding: 0, background: 'none', border: `2px solid ${sel ? '#c9a96e' : '#1a1a1a'}`, cursor: 'pointer', position: 'relative', transition: 'border-color 0.2s' }}>
                              <div style={{ height: 120, overflow: 'hidden' }}>
                                <img src={acc.img} alt={acc.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: sel ? 'brightness(0.85)' : 'brightness(0.45)', transition: 'filter 0.2s' }} referrerPolicy="no-referrer" />
                              </div>
                              <div style={{ padding: '5px 4px', background: sel ? 'rgba(201,169,110,0.07)' : '#0d0d0d' }}>
                                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 6, letterSpacing: '0.1em', textTransform: 'uppercase', color: sel ? '#c9a96e' : 'rgba(255,255,255,0.35)', textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{acc.name}</p>
                              </div>
                              {sel && (
                                <div style={{ position: 'absolute', top: 5, right: 5, width: 18, height: 18, background: '#c9a96e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                  <Check size={10} color="#000" />
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Brands — flat grid, actual logos */}
                  {brands.length > 0 && (
                    <div style={{ marginBottom: 28 }}>
                      <RowLabel label="Brand" />
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {brands.map(b => (
                          <BrandLogo key={b} name={b} selected={config.brand === b} onClick={() => patch({ brand: b })} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Wardrobe Zone */}
                  <div style={{ marginBottom: 28 }}>
                    <RowLabel label="Wardrobe Zone" />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
                      {ZONE_OPTS.map(z => (
                        <button key={z.id} onClick={() => patch({ zone: z.id })} style={{ padding: '11px 8px', textAlign: 'center', background: config.zone === z.id ? 'rgba(45,122,92,0.1)' : 'none', color: config.zone === z.id ? '#2d7a5c' : 'rgba(255,255,255,0.3)', border: `1px solid ${config.zone === z.id ? 'rgba(45,122,92,0.4)' : '#1e1e1e'}`, cursor: 'pointer', transition: 'all 0.2s', fontFamily: "'Poppins', sans-serif", fontSize: 7.5, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                          {z.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity + Add */}
                  <div>
                    <RowLabel label="Quantity" />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #2a2a2a' }}>
                        <button onClick={() => patch({ qty: Math.max(1, config.qty - 1) })} style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#111', border: 'none', cursor: 'pointer', color: '#fff', borderRight: '1px solid #2a2a2a' }}><Minus size={10} /></button>
                        <span style={{ width: 52, textAlign: 'center', fontFamily: "'Poppins', sans-serif", fontSize: 14, color: '#fff' }}>{config.qty}</span>
                        <button onClick={() => patch({ qty: config.qty + 1 })} style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#111', border: 'none', cursor: 'pointer', color: '#fff', borderLeft: '1px solid #2a2a2a' }}><Plus size={10} /></button>
                      </div>

                      {canAdd ? (
                        <button
                          onClick={handleAdd}
                          style={{ flex: 1, fontFamily: "'Poppins', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', background: added ? '#2d7a5c' : '#fff', color: added ? '#fff' : '#000', border: 'none', height: 40, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'background 0.35s, color 0.35s' }}
                        >
                          {added ? <><Check size={12} /> Added</> : 'Add to Wardrobe'}
                        </button>
                      ) : (
                        <div style={{ flex: 1, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #1a1a1a', fontFamily: "'Poppins', sans-serif", fontSize: 7.5, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
                          Select a project to add items
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Storage & Retail accordions — shown once an item is selected */}
                {product.storage && <StorageAccordion storage={product.storage} />}
                {product.retail && <RetailAccordion retail={product.retail} />}
                <div style={{ height: 40 }} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <WardrobePanel open={wardrobePanelOpen} onClose={() => setWardrobePanelOpen(false)} />
    </div>
  );
}
