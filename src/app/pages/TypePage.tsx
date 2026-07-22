import { useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Plus, Minus, ArrowLeft } from 'lucide-react';
import { WardrobeNav } from '../components/WardrobeNav';
import { WardrobePanel } from '../components/WardrobePanel';
import { CATS, getProductById } from '../../data/catalog';
import { useAuthStore } from '../../store/authStore';
import { useWardrobeStore } from '../../store/wardrobeStore';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import type { Gender, WardrobeZone, CatalogItem } from '../../types';

// ─── Constants ────────────────────────────────────────────────────────────────

const ZONE_OPTS: { id: WardrobeZone; label: string }[] = [
  { id: 'hanging-full', label: 'Full Rail' },
  { id: 'hanging-half', label: 'Half Rail' },
  { id: 'shelving',     label: 'Shelving' },
  { id: 'drawers',      label: 'Drawers' },
  { id: 'shoe-rack',    label: 'Shoe Rack' },
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
  if (['jewellery','watches','bags','scarves','belts','eyewear'].some(k => categoryId.includes(k))) return 'drawers';
  if (['shirts','trousers'].some(k => categoryId.includes(k))) return 'shelving';
  return 'hanging-full';
}

function getMaterialImg(mat: string): string {
  const k = mat.toLowerCase();
  if (k.includes('cashmere'))  return 'https://commons.wikimedia.org/wiki/Special:FilePath/Beige_wool_texture.jpg';
  if (k.includes('barathea'))  return 'https://d3hv0iapr9wffe.cloudfront.net/7/1/images/catalog/i/xl_8897-22765.jpg';
  if (k.includes('velvet'))    return 'https://commons.wikimedia.org/wiki/Special:FilePath/Velvet_fabric.jpg';
  if (k.includes('merino'))    return 'https://commons.wikimedia.org/wiki/Special:FilePath/Blue_wool_texture.png';
  if (k.includes('wool'))      return 'https://commons.wikimedia.org/wiki/Special:FilePath/Beige_wool_texture.jpg';
  if (k.includes('silk'))      return 'https://commons.wikimedia.org/wiki/Special:FilePath/Fabric_close_up.jpg';
  if (k.includes('satin'))     return 'https://commons.wikimedia.org/wiki/Special:FilePath/2008-03-19_Silk_Fabrics.jpg';
  if (k.includes('chiffon'))   return 'https://commons.wikimedia.org/wiki/Special:FilePath/2008-03-19_Silk_Fabrics.jpg';
  if (k.includes('crepe'))     return 'https://commons.wikimedia.org/wiki/Special:FilePath/2008-03-19_Silk_Fabrics.jpg';
  if (k.includes('linen'))     return 'https://commons.wikimedia.org/wiki/Special:FilePath/Linen%2C_Texture_%282242358989%29.jpg';
  if (k.includes('denim'))     return 'https://commons.wikimedia.org/wiki/Special:FilePath/Close-up_of_Denim_Fabric.jpg';
  if (k.includes('jersey'))    return 'https://commons.wikimedia.org/wiki/Special:FilePath/Fabric_close_up.jpg';
  if (k.includes('suede'))     return 'https://commons.wikimedia.org/wiki/Special:FilePath/LeatherTexture.jpg';
  if (k.includes('leather'))   return 'https://commons.wikimedia.org/wiki/Special:FilePath/LeatherTexture.jpg';
  if (k.includes('canvas'))    return 'https://commons.wikimedia.org/wiki/Special:FilePath/Close_up_of_cotton_duck_canvas.JPG';
  if (k.includes('cotton'))    return 'https://commons.wikimedia.org/wiki/Special:FilePath/Cotton_fabric.jpg';
  return 'https://commons.wikimedia.org/wiki/Special:FilePath/Fabric_close_up.jpg';
}

function getAllBrands(allBrands: Record<string, string[]>): string[] {
  return Object.values(allBrands).flat();
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
        background: '#FFFFFF',
        border: `1px solid ${selected ? '#21493F' : '#D9DFDA'}`,
        boxShadow: selected ? '0 0 0 1px rgba(33,73,63,0.14)' : 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', transition: 'all 0.2s',
        padding: 12, flexShrink: 0,
        opacity: selected ? 1 : 0.88,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.opacity = '1';
        if (!selected) e.currentTarget.style.borderColor = '#3A6A61';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.opacity = selected ? '1' : '0.88';
        e.currentTarget.style.borderColor = selected ? '#21493F' : '#D9DFDA';
      }}
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
        <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#1B1B1B', fontWeight: 600, textAlign: 'center' }}>
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
      <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#70767A', whiteSpace: 'nowrap' }}>{label}</span>
      <div style={{ flex: 1, height: 1, background: '#D9DFDA' }} />
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export function TypePage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const user = useAuthStore(s => s.user);
  const { activeProject, addItem } = useWardrobeStore();
  const { isMobile, isTablet } = useBreakpoint();

  const [config, setConfig] = useState<ConfigState | null>(null);
  const [wardrobePanelOpen, setWardrobePanelOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const [mobileView, setMobileView] = useState<'list' | 'detail'>('list');

  const gender = (searchParams.get('gender') || 'men') as Gender;
  const id = categoryId ?? '';
  const cat = CATS[gender]?.find(c => c.id === id) ?? CATS.men.find(c => c.id === id);
  const product = getProductById(id);

  const allBrands = product.retail?.brands ?? {};
  const brands = getAllBrands(allBrands);
  const flatItems = product.sections.flatMap(section => section.items);
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
    if (isMobile || isTablet) setMobileView('detail');
  };

  const patch = (p: Partial<ConfigState>) => setConfig(prev => prev ? { ...prev, ...p } : prev);

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

  const isNarrow = isMobile || isTablet;

  const leftWidth = isMobile ? '100%' : isTablet ? '40%' : '40%';
  const rightWidth = isMobile ? '100%' : isTablet ? '60%' : '60%';

  const leftPanel = (
    <div style={{ flex: isNarrow ? 'none' : '0 0 40%', width: isNarrow ? leftWidth : undefined, overflowY: 'auto', borderRight: isNarrow ? 'none' : '1px solid #D9DFDA', display: isNarrow && mobileView === 'detail' ? 'none' : 'block' }}>

      {/* Compact banner */}
    <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
        <img src={product.banner} alt={cat?.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.24) saturate(0.92)' }} referrerPolicy="no-referrer" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,8,8,0.08) 0%, rgba(8,8,8,0.22) 45%, rgba(8,8,8,0.92) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 28px' }}>
          <button onClick={() => navigate(`/wardrobe/categories?gender=${gender}`)} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#70767A', background: 'none', border: 'none', cursor: 'pointer', marginBottom: 6, display: 'block' }}>
            ← {gender.charAt(0).toUpperCase() + gender.slice(1)}
          </button>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, fontWeight: 500, letterSpacing: '0.04em', color: '#F8F7F4', lineHeight: 0.95 }}>{cat?.name ?? id}</h1>
        </div>
      </div>

      {/* Items */}
      <div style={{ padding: '28px 20px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
          {flatItems.map((item, ii) => {
            const isSelected = config?.item === item;
            return (
              <motion.button
                key={`${item.name}-${ii}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: ii * 0.04 }}
                onClick={() => handleSelectItem(cat?.name ?? id, item)}
                style={{ padding: 0, background: 'none', border: `2px solid ${isSelected ? '#21493F' : 'transparent'}`, cursor: 'pointer', textAlign: 'left', transition: 'border-color 0.2s' }}
              >
                <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
                  <motion.img
                    src={item.img} alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: isSelected ? 'brightness(0.72)' : 'brightness(0.54)' }}
                    whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}
                    referrerPolicy="no-referrer"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.84) 0%, rgba(0,0,0,0.2) 45%, transparent 72%)' }} />
                  {isSelected && (
                    <div style={{ position: 'absolute', top: 6, right: 6, width: 18, height: 18, background: '#21493F', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Check size={9} color="#FFFFFF" />
                    </div>
                  )}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 8px' }}>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#F8F7F4', marginBottom: 2, textShadow: '0 1px 2px rgba(0,0,0,0.28)' }}>{item.name}</div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <div style={{ height: 24 }} />
      <div style={{ height: 40 }} />
    </div>
  );

  const rightPanel = (
    <div style={{ flex: isNarrow ? 'none' : '0 0 60%', width: isNarrow ? rightWidth : undefined, overflowY: 'auto', background: '#F8F7F4', display: isNarrow && mobileView === 'list' ? 'none' : 'block' }}>
      <AnimatePresence mode="wait">
        {!config ? (
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
                <p style={{ fontFamily: "'Inter', sans-serif", fontStyle: 'italic', fontSize: 22, fontWeight: 300, color: '#70767A', letterSpacing: '0.08em' }}>
                  Select an item to configure
                </p>
                <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(33,73,63,0.4), transparent)' }} />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div key={config.item.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>

            {/* Back button on mobile/tablet */}
            {isNarrow && (
              <div style={{ padding: '16px 20px 0' }}>
                <button
                  onClick={() => setMobileView('list')}
                  style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', color: '#70767A', fontFamily: "'Poppins', sans-serif", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', padding: 0 }}
                >
                  <ArrowLeft size={12} /> Back to list
                </button>
              </div>
            )}

            {/* Hero image */}
            <div style={{ position: 'relative', height: isNarrow ? 260 : 360, overflow: 'hidden' }}>
              <img src={config.item.img} alt={config.item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6) saturate(0.95)' }} referrerPolicy="no-referrer" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.28) 42%, transparent 72%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 36px' }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#A7B9AE', marginBottom: 6 }}>{config.sectionTitle}</p>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isNarrow ? 36 : 56, fontWeight: 500, letterSpacing: '0.02em', color: '#F8F7F4', lineHeight: 0.95 }}>{config.item.name}</h2>
                {config.item.sub && <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, letterSpacing: '0.1em', color: '#D9DFDA', marginTop: 8 }}>{config.item.sub}</p>}
              </div>
            </div>

            {/* Options */}
            <div style={{ padding: isNarrow ? '20px 20px' : '28px 36px' }}>

              {/* Variant */}
              {config.item.sub && config.item.sub.split(' · ').length > 1 && (
                <div style={{ marginBottom: 28 }}>
                  <RowLabel label="Variant" />
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {config.item.sub.split(' · ').map(v => (
                      <button
                        key={v}
                        onClick={() => patch({ variant: v })}
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '8px 16px', background: config.variant === v ? '#21493F' : '#FFFFFF', color: config.variant === v ? '#FFFFFF' : '#70767A', border: `1px solid ${config.variant === v ? '#21493F' : '#D9DFDA'}`, cursor: 'pointer', transition: 'all 0.2s' }}
                        onMouseEnter={e => {
                          if (config.variant !== v) {
                            e.currentTarget.style.background = '#3A6A61';
                            e.currentTarget.style.color = '#FFFFFF';
                            e.currentTarget.style.borderColor = '#3A6A61';
                          }
                        }}
                        onMouseLeave={e => {
                          if (config.variant !== v) {
                            e.currentTarget.style.background = '#FFFFFF';
                            e.currentTarget.style.color = '#70767A';
                            e.currentTarget.style.borderColor = '#D9DFDA';
                          }
                        }}
                      >
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
                      <button key={m} onClick={() => patch({ material: m })} style={{ padding: 0, background: 'none', border: `2px solid ${config.material === m ? '#21493F' : 'transparent'}`, cursor: 'pointer', position: 'relative', transition: 'border-color 0.2s' }}>
                        <div style={{ width: 110, height: 110, overflow: 'hidden', position: 'relative', background: '#1B1B1B' }}>
                          <img src={getMaterialImg(m)} alt={m} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: config.material === m ? 'brightness(0.85) saturate(0.95)' : 'brightness(0.52) saturate(0.9)', transition: 'filter 0.2s' }} referrerPolicy="no-referrer" />
                          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 54%, rgba(0,0,0,0.12) 100%)' }} />
                          <div style={{ position: 'absolute', bottom: 8, left: 8, right: 8 }}>
                            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FFFFFF', textAlign: 'left', lineHeight: 1.2, textShadow: '0 1px 2px rgba(0,0,0,0.35)' }}>{m}</p>
                          </div>
                        </div>
                        {config.material === m && (
                          <div style={{ position: 'absolute', top: 4, right: 4, width: 16, height: 16, background: '#21493F', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Check size={9} color="#FFFFFF" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  {config.material && <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, letterSpacing: '0.1em', color: '#3A3A3A', marginTop: 8 }}>{config.material}</p>}
                </div>
              )}

              {/* Colour */}
              {config.item.col && (
                <div style={{ marginBottom: 28 }}>
                  <RowLabel label="Colour" />
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    {config.item.col.split(',').map(c => (
                      <button key={c} onClick={() => patch({ color: c })} title={c} style={{ width: 40, height: 40, borderRadius: '50%', background: c, border: 'none', cursor: 'pointer', outline: config.color === c ? '2px solid #21493F' : '1px solid #D9DFDA', outlineOffset: config.color === c ? 3 : 0, transition: 'outline 0.2s, outline-offset 0.2s' }} />
                    ))}
                  </div>
                </div>
              )}

              {/* Brands */}
              {brands.length > 0 && (
                <div style={{ marginBottom: 28 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#1B1B1B', whiteSpace: 'nowrap' }}>Brand</span>
                    <div style={{ flex: 1, height: 1, background: '#D9DFDA' }} />
                  </div>
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
                    <button
                      key={z.id}
                      onClick={() => patch({ zone: z.id })}
                      style={{ padding: '11px 8px', textAlign: 'center', background: config.zone === z.id ? '#21493F' : '#FFFFFF', color: config.zone === z.id ? '#FFFFFF' : '#70767A', border: `1px solid ${config.zone === z.id ? '#21493F' : '#D9DFDA'}`, cursor: 'pointer', transition: 'all 0.2s', fontFamily: "'Poppins', sans-serif", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}
                      onMouseEnter={e => {
                        if (config.zone !== z.id) {
                          e.currentTarget.style.background = '#3A6A61';
                          e.currentTarget.style.color = '#FFFFFF';
                          e.currentTarget.style.borderColor = '#3A6A61';
                        }
                      }}
                      onMouseLeave={e => {
                        if (config.zone !== z.id) {
                          e.currentTarget.style.background = '#FFFFFF';
                          e.currentTarget.style.color = '#70767A';
                          e.currentTarget.style.borderColor = '#D9DFDA';
                        }
                      }}
                    >
                      {z.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity + Add */}
              <div>
                <RowLabel label="Quantity" />
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #D9DFDA' }}>
                    <button onClick={() => patch({ qty: Math.max(1, config.qty - 1) })} style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F1F2EF', border: 'none', cursor: 'pointer', color: '#1B1B1B', borderRight: '1px solid #D9DFDA' }}><Minus size={10} /></button>
                    <span style={{ width: 52, textAlign: 'center', fontFamily: "'Poppins', sans-serif", fontSize: 14, color: '#1B1B1B' }}>{config.qty}</span>
                    <button onClick={() => patch({ qty: config.qty + 1 })} style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F1F2EF', border: 'none', cursor: 'pointer', color: '#1B1B1B', borderLeft: '1px solid #D9DFDA' }}><Plus size={10} /></button>
                  </div>

                  {canAdd ? (
                    <button
                      onClick={handleAdd}
                      style={{ flex: 1, fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', background: added ? '#21493F' : '#1B1B1B', color: '#FFFFFF', border: 'none', height: 44, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'background 0.35s, color 0.35s' }}
                    >
                      {added ? <><Check size={12} /> Added</> : 'Add to Wardrobe'}
                    </button>
                  ) : (
                    <div style={{ flex: 1, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #D9DFDA', fontFamily: "'Poppins', sans-serif", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#70767A' }}>
                      Select a project to add items
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div style={{ height: 40 }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div style={{ background: '#F8F7F4', color: '#1B1B1B' }}>
      <WardrobeNav gender={gender} onGenderSelect={(g) => navigate(`/wardrobe/categories?gender=${g}`)} onOpenTray={() => setWardrobePanelOpen(true)} showGenderTabs={false} categoryName={cat?.name ?? id} />

      <div style={{ paddingTop: 56, display: 'flex', height: 'calc(100vh - 56px)', overflow: 'hidden', flexDirection: 'row' }}>
        {isNarrow ? (
          <>
            {mobileView === 'list' ? leftPanel : rightPanel}
          </>
        ) : (
          <>
            {leftPanel}
            {rightPanel}
          </>
        )}
      </div>

      <WardrobePanel open={wardrobePanelOpen} onClose={() => setWardrobePanelOpen(false)} />
    </div>
  );
}
