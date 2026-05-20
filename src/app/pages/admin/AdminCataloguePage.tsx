import { AppNav } from '../../components/AppNav';
import { CATS } from '../../../data/catalog';
import { motion } from 'motion/react';

export function AdminCataloguePage() {
  const allMen     = CATS.men;
  const allWomen   = CATS.women;
  const allKids    = CATS.kids;

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff' }}>
      <AppNav />
      <div style={{ paddingTop: 96, paddingLeft: 80, paddingRight: 80, paddingBottom: 80 }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#2d7a5c', marginBottom: 10 }}>Admin</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 300, letterSpacing: '0.08em', color: '#fff' }}>Catalogue</h1>
        </div>

        {([
          { label: 'Men', cats: allMen },
          { label: 'Women', cats: allWomen },
          { label: 'Kids', cats: allKids },
        ] as const).map(section => (
          <div key={section.label} style={{ marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 400, letterSpacing: '0.12em', color: '#fff' }}>{section.label}</h2>
              <div style={{ flex: 1, height: 1, background: '#1e1e1e' }} />
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.25)' }}>{section.cats.length} categories</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: '#1e1e1e' }}>
              {section.cats.map((cat, i) => (
                <motion.div key={cat.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }}
                  style={{ background: '#0a0a0a', overflow: 'hidden', position: 'relative' }}>
                  <div style={{ height: 120, overflow: 'hidden' }}>
                    <img src={cat.img} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }}
                      onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                  </div>
                  <div style={{ padding: '14px 16px' }}>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 7, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: 4 }}>{cat.parent}</div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontWeight: 400, color: '#fff', marginBottom: 4 }}>{cat.name}</div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 7.5, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.3)', lineHeight: 1.4 }}>{cat.tag}</div>
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
