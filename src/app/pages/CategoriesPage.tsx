import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { motion } from 'motion/react';
import { WardrobeNav } from '../components/WardrobeNav';
import { WardrobePanel } from '../components/WardrobePanel';
import { CATS } from '../../data/catalog';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import type { Gender } from '../../types';

export function CategoriesPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [panelOpen, setPanelOpen] = useState(false);
  const [search, setSearch] = useState('');
  const { isMobile, isTablet } = useBreakpoint();

  const gender = (searchParams.get('gender') || 'men') as Gender;
  const cats = CATS[gender] ?? CATS.men;

  const filtered = search.trim()
    ? cats.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.tag.toLowerCase().includes(search.toLowerCase()))
    : cats;

  const groups = filtered.reduce<Record<string, typeof cats>>((acc, cat) => {
    (acc[cat.parent] ??= []).push(cat);
    return acc;
  }, {});

  const handleGenderSelect = (g: Gender) => { setSearch(''); setSearchParams({ gender: g }); };

  const sidePadding = 'clamp(16px, 5vw, 80px)';
  const gridCols = isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(3, 1fr)' : 'repeat(auto-fill, minmax(196px, 1fr))';

  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#fff' }}>
      <WardrobeNav gender={gender} onGenderSelect={handleGenderSelect} onOpenTray={() => setPanelOpen(true)} />

      <div style={{ paddingTop: 56 }}>

        {/* Search */}
        <div style={{ padding: `32px ${sidePadding} 0` }}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search categories…"
            style={{ width: '100%', maxWidth: isMobile ? '100%' : 380, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#fff', padding: '10px 16px', fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.06em', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        {/* Groups */}
        <div style={{ padding: `32px ${sidePadding} 80px` }}>
          {Object.keys(groups).length === 0 && (
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 16, color: 'rgba(255,255,255,0.2)', padding: '40px 0' }}>
              No categories match "{search}".
            </p>
          )}
          {Object.entries(groups).map(([groupName, groupCats]) => (
            <div key={groupName} style={{ marginBottom: 52 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 24 }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#c9a96e', whiteSpace: 'nowrap' }}>
                  {groupName}
                </p>
                <div style={{ flex: 1, height: 1, background: '#1a1a1a' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: gridCols, gap: 2 }}>
                {groupCats.map((cat, idx) => (
                  <motion.button
                    key={cat.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={() => navigate(`/wardrobe/item/${cat.id}?gender=${gender}`)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0, position: 'relative', overflow: 'hidden' }}
                  >
                    <div style={{ position: 'relative', aspectRatio: '3 / 4', overflow: 'hidden' }}>
                      <motion.img
                        src={cat.img}
                        alt={cat.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.65)' }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.55 }}
                        referrerPolicy="no-referrer"
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)' }} />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 16px' }}>
                        <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: isMobile ? 7.5 : 9, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#fff', marginBottom: 4 }}>
                          {cat.name}
                        </div>
                        <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: isMobile ? 6 : 7, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
                          {cat.tag}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <WardrobePanel open={panelOpen} onClose={() => setPanelOpen(false)} />
    </div>
  );
}
