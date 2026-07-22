import { AppNav } from '../../components/AppNav';
import { CATS } from '../../../data/catalog';
import { useBreakpoint } from '../../../hooks/useBreakpoint';
import { motion } from 'motion/react';

export function AdminCataloguePage() {
  const allMen     = CATS.men;
  const allWomen   = CATS.women;
  const allKids    = CATS.kids;
  const { isMobile, isTablet } = useBreakpoint();

  const gridCols = isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)';

  return (
    <div className="editorial-page">
      <AppNav />
      <div style={{ paddingTop: 96, paddingLeft: 'clamp(16px, 5vw, 80px)', paddingRight: 'clamp(16px, 5vw, 80px)', paddingBottom: 80 }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#21493F', marginBottom: 10 }}>Admin</p>
          <h1 style={{ fontFamily: "'Inter', sans-serif", fontSize: isMobile ? 28 : 36, fontWeight: 300, letterSpacing: '0.08em', color: '#1B1B1B' }}>Catalogue</h1>
        </div>

        {([
          { label: 'Men', cats: allMen },
          { label: 'Women', cats: allWomen },
          { label: 'Kids', cats: allKids },
        ] as const).map(section => (
          <div key={section.label} style={{ marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
              <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 20, fontWeight: 400, letterSpacing: '0.12em', color: '#1B1B1B' }}>{section.label}</h2>
              <div style={{ flex: 1, height: 1, background: '#D9DFDA' }} />
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.2em', color: '#70767A' }}>{section.cats.length} categories</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: gridCols, gap: 1, background: '#D9DFDA' }}>
              {section.cats.map((cat, i) => (
                <motion.div key={cat.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }}
                  style={{ background: '#F8F7F4', overflow: 'hidden', position: 'relative' }}>
                  <div style={{ height: isMobile ? 80 : 120, overflow: 'hidden' }}>
                    <img src={cat.img} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }}
                      onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                  </div>
                  <div style={{ padding: isMobile ? '10px 12px' : '14px 16px' }}>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 7, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#21493F', marginBottom: 4 }}>{cat.parent}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: isMobile ? 13 : 15, fontWeight: 400, color: '#1B1B1B', marginBottom: 4 }}>{cat.name}</div>
                    {!isMobile && (
                      <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 7.5, letterSpacing: '0.08em', color: '#70767A', lineHeight: 1.4 }}>{cat.tag}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
