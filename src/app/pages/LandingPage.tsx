import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { WardrobeNav } from '../components/WardrobeNav';
import { WardrobePanel } from '../components/WardrobePanel';
import { useWardrobeStore } from '../../store/wardrobeStore';
import { useAuthStore } from '../../store/authStore';
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

  const handleGenderClick = (g: Gender) => {
    navigate(`/wardrobe/categories?gender=${g}`);
  };

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: '#080808' }}>
      <WardrobeNav gender={hoveredGender || 'men'} onGenderSelect={handleGenderClick} onOpenTray={() => setPanelOpen(true)} />

      {/* Background layers */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 55% 40%, #1c1c1c 0%, #080808 70%)', transition: 'opacity 0.8s', opacity: hoveredGender ? 0 : 1 }} />

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
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.55) 100%)', zIndex: 1 }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.3) 100%)', zIndex: 1 }} />
              <motion.img
                src={src}
                alt={hoveredGender}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{ scale: [1.07, 1] }}
                transition={{ duration: 9, ease: 'easeInOut' }}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Main hero content */}
      <div className="relative flex items-center justify-center min-h-screen" style={{ zIndex: 10, paddingTop: 56 }}>
        <div>
          {/* Eyebrow */}
          {activeProject && user?.role === 'designer' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#c9a96e', textAlign: 'center', marginBottom: 20 }}
            >
              Configuring — {activeProject.name.split('—')[0].trim()}
            </motion.p>
          )}

          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, letterSpacing: '0.5em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginBottom: 36 }}>
            {activeProject && user?.role === 'designer' ? 'Select category' : 'New Collection — Spring / Summer 2026'}
          </p>

          {/* Watermark */}
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '8.5vw', fontWeight: 300, color: 'rgba(255,255,255,0.04)', letterSpacing: '0.2em', textTransform: 'uppercase', lineHeight: 1, marginBottom: 72, textAlign: 'center', userSelect: 'none', whiteSpace: 'nowrap' }}>
            Studio Materium
          </div>

          {/* Gender links */}
          <div className="flex items-center justify-center" style={{ gap: 60 }}>
            {(['men', 'women', 'kids'] as Gender[]).map((g, i) => (
              <span key={g} className="flex items-center" style={{ gap: 60 }}>
                <motion.button
                  onMouseEnter={() => { setHoveredGender(g); setSlideIdx(0); }}
                  onMouseLeave={() => setHoveredGender(null)}
                  onClick={() => handleGenderClick(g)}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(38px, 4.5vw, 60px)',
                    fontWeight: 400,
                    color: '#fff',
                    textDecoration: 'none',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    position: 'relative',
                    paddingBottom: 14,
                    transition: 'letter-spacing 0.5s',
                  }}
                  whileHover={{ letterSpacing: '0.3em' }}
                >
                  {g.charAt(0).toUpperCase() + g.slice(1)}
                  <motion.span
                    style={{ position: 'absolute', bottom: 0, left: '50%', translateX: '-50%', height: 1, background: 'rgba(255,255,255,0.55)' }}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
                {i < 2 && <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: 22, fontWeight: 100 }}>|</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Footer tagline */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '36px 64px' }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 15, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
            Crafted with precision. Worn with intention.
          </span>
        </div>
      </div>

      <WardrobePanel open={panelOpen} onClose={() => setPanelOpen(false)} />
    </div>
  );
}
