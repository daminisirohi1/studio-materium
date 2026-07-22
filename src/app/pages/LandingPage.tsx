import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { WardrobeNav } from '../components/WardrobeNav';
import { WardrobePanel } from '../components/WardrobePanel';
import { useWardrobeStore } from '../../store/wardrobeStore';
import { useAuthStore } from '../../store/authStore';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import type { Gender } from '../../types';

const HERO_IMAGES: Record<Gender, string[]> = {
  men: [
    '/kc/black tie formalwear/tuxedo (1).jpg',
    '/kc/suits & tailoring/suits/suit (1).jpg',
    '/kc/casuals/casuals (1).jpg',
  ],
  women: [
    '/kc/dress/dress (1).jpg',
    '/kc/dress/dress (5).jpg',
    '/kc/jumpsuits/jumpsuit (1).jpg',
  ],
  kids: [
    '/kc/kidswear/kidswear (1).jpg',
    '/kc/kidswear/kidswear (2).jpg',
    '/kc/kidswear/kidswear (3).jpg',
  ],
};

export function LandingPage() {
  const navigate = useNavigate();
  const user = useAuthStore(s => s.user);
  const { activeProject } = useWardrobeStore();
  const [hoveredGender, setHoveredGender] = useState<Gender | null>(null);
  const [slideIdx, setSlideIdx] = useState(0);
  const [panelOpen, setPanelOpen] = useState(false);
  const { isMobile, isTablet } = useBreakpoint();

  const handleGenderClick = (g: Gender) => {
    navigate(`/wardrobe/categories?gender=${g}`);
  };

  const genderFontSize = isMobile ? 'clamp(32px, 8vw, 48px)' : isTablet ? 'clamp(36px, 5vw, 52px)' : 'clamp(38px, 4.5vw, 60px)';

  return (
    <div className="relative min-h-screen overflow-hidden editorial-page">
      <WardrobeNav gender={hoveredGender || 'men'} onGenderSelect={handleGenderClick} onOpenTray={() => setPanelOpen(true)} showGenderTabs={false} />

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(248,247,244,0.98) 0%, rgba(255,255,255,0.92) 48%, rgba(241,242,239,0.98) 100%)',
          transition: 'opacity 0.8s',
          opacity: hoveredGender ? 0 : 1,
        }}
      />

      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 14% 20%, rgba(33,73,63,0.08), transparent 22%)' }} />

      <AnimatePresence>
        {hoveredGender && HERO_IMAGES[hoveredGender].map((src, i) => (
          i === slideIdx % HERO_IMAGES[hoveredGender].length && (
            <motion.div
              key={`${hoveredGender}-${i}`}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
            >
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(248,247,244,0.82) 0%, rgba(248,247,244,0.18) 42%, rgba(248,247,244,0.88) 100%)', zIndex: 1 }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(248,247,244,0.84) 0%, transparent 42%, transparent 64%, rgba(248,247,244,0.78) 100%)', zIndex: 1 }} />
              <motion.img
                src={src}
                alt={hoveredGender}
                className="absolute inset-0 h-full w-full object-cover"
                animate={{ scale: [1.07, 1] }}
                transition={{ duration: 9, ease: 'easeInOut' }}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      <div className="relative flex min-h-screen items-center justify-center" style={{ zIndex: 10, paddingTop: 56 }}>
        <div style={{ width: '100%', paddingLeft: isMobile ? 24 : 0, paddingRight: isMobile ? 24 : 0 }}>
          {activeProject && user?.role === 'designer' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#21493F', textAlign: 'center', marginBottom: 20 }}
            >
              Configuring — {activeProject.name.split('—')[0].trim()}
            </motion.p>
          )}

          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: isMobile ? 8 : 9, letterSpacing: '0.5em', textTransform: 'uppercase', color: '#70767A', textAlign: 'center', marginBottom: 36 }}>
            {activeProject && user?.role === 'designer' ? 'Select category' : 'New Collection — Spring / Summer 2026'}
          </p>

          <div
            className="flex items-center justify-center"
            style={{
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? 32 : 42,
            }}
          >
            {(['men', 'women', 'kids'] as Gender[]).map((g, i) => (
              <span key={g} className="flex items-center" style={{ gap: isMobile ? 0 : 42, flexDirection: isMobile ? 'column' : 'row' }}>
                <motion.button
                  onMouseEnter={() => { if (!isMobile) { setHoveredGender(g); setSlideIdx(0); } }}
                  onMouseLeave={() => { if (!isMobile) setHoveredGender(null); }}
                  onClick={() => handleGenderClick(g)}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: genderFontSize,
                    fontWeight: 400,
                    color: '#21493F',
                    textDecoration: 'none',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    position: 'relative',
                    padding: '0 0 14px',
                    transition: 'letter-spacing 0.5s',
                    borderRadius: 0,
                  }}
                  whileHover={{ letterSpacing: '0.3em' }}
                >
                  {g.charAt(0).toUpperCase() + g.slice(1)}
                  <motion.span
                    style={{ position: 'absolute', bottom: 0, left: '50%', translateX: '-50%', height: 1, background: '#21493F' }}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
                {!isMobile && i < 2 && <span style={{ color: '#A7B9AE', fontSize: 18, fontWeight: 300 }}>|</span>}
              </span>
            ))}
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: isMobile ? '24px 24px' : '36px 64px' }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontStyle: 'italic', fontSize: isMobile ? 13 : 15, color: '#70767A', letterSpacing: '0.1em' }}>
            Crafted with precision. Worn with intention.
          </span>
        </div>
      </div>

      <WardrobePanel open={panelOpen} onClose={() => setPanelOpen(false)} />
    </div>
  );
}
