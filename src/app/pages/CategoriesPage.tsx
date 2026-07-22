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
    ? cats.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
    : cats;

  const groups = filtered.reduce<Record<string, typeof cats>>((acc, cat) => {
    (acc[cat.parent] ??= []).push(cat);
    return acc;
  }, {});

  const handleGenderSelect = (g: Gender) => { setSearch(''); setSearchParams({ gender: g }); };

  const sidePadding = 'clamp(16px, 5vw, 80px)';
  const gridCols = isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(3, 1fr)' : 'repeat(auto-fill, minmax(220px, 1fr))';

  return (
    <div className="editorial-page">
      <WardrobeNav gender={gender} onGenderSelect={handleGenderSelect} onOpenTray={() => setPanelOpen(true)} />

      <div style={{ paddingTop: 56 }}>
        <div style={{ padding: `40px ${sidePadding} 0` }}>
          <div className="editorial-panel" style={{ padding: isMobile ? 18 : 22, display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 18, alignItems: isMobile ? 'stretch' : 'center', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#21493F', marginBottom: 8 }}>
                Curated catalogue
              </p>
              <h1 style={{ fontFamily: "'Inter', sans-serif", fontSize: isMobile ? 28 : 36, fontWeight: 300, letterSpacing: '0.08em', color: '#1B1B1B' }}>
                {gender.charAt(0).toUpperCase() + gender.slice(1)}
              </h1>
            </div>

            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search categories..."
              className="editorial-input"
              style={{ width: '100%', maxWidth: isMobile ? '100%' : 380, background: 'rgba(255,255,255,0.7)', border: '1px solid #D9DFDA', color: '#1B1B1B', padding: '12px 16px', fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.06em', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
        </div>

        <div style={{ padding: `40px ${sidePadding} 80px` }}>
          {Object.keys(groups).length === 0 && (
            <p style={{ fontFamily: "'Inter', sans-serif", fontStyle: 'italic', fontSize: 16, color: '#70767A', padding: '40px 0' }}>
              No categories match "{search}".
            </p>
          )}
          {Object.entries(groups).map(([groupName, groupCats]) => (
            <div key={groupName} style={{ marginBottom: 56 }}>
              <div className="editorial-divider-title" style={{ marginBottom: 24 }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#21493F', whiteSpace: 'nowrap' }}>
                  {groupName}
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: gridCols, gap: 16 }}>
                {groupCats.map((cat, idx) => (
                  <motion.button
                    key={cat.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={() => navigate(`/wardrobe/item/${cat.id}?gender=${gender}`)}
                    className="editorial-card"
                    style={{ background: '#FFFFFF', cursor: 'pointer', textAlign: 'left', padding: 0, position: 'relative', overflow: 'hidden', borderRadius: 8 }}
                  >
                    <div style={{ position: 'relative', aspectRatio: '3 / 4', overflow: 'hidden' }}>
                      <motion.img
                        src={cat.img}
                        alt={cat.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.55 }}
                        referrerPolicy="no-referrer"
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,24,22,0.78) 0%, rgba(20,24,22,0.08) 55%)' }} />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 16px' }}>
                        <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: isMobile ? 10 : 14, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FFFFFF', marginBottom: 4, lineHeight: 1.2 }}>
                          {cat.name}
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
