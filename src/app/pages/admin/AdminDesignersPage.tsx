import { AppNav } from '../../components/AppNav';
import { mockUsers, statusLabels, statusColors } from '../../../data/mockData';
import { useWardrobeStore } from '../../../store/wardrobeStore';
import { motion } from 'motion/react';

export function AdminDesignersPage() {
  const { projects } = useWardrobeStore();
  const designers = mockUsers.filter(u => u.role === 'designer');

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff' }}>
      <AppNav />
      <div style={{ paddingTop: 96, paddingLeft: 80, paddingRight: 80, paddingBottom: 80 }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#2d7a5c', marginBottom: 10 }}>Admin</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 300, letterSpacing: '0.08em', color: '#fff' }}>Designers</h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: designers.length > 0 ? '#1e1e1e' : 'transparent' }}>
          {designers.map((d, i) => {
            const designerProjects = projects.filter(p => p.designerId === d.id);
            const active = designerProjects.filter(p => p.status === 'configuring' || p.status === 'revisions').length;
            return (
              <motion.div key={d.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                style={{ background: '#0a0a0a', padding: '32px' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 400, letterSpacing: '0.1em', color: '#fff', marginBottom: 4 }}>{d.name}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, color: 'rgba(255,255,255,0.35)', marginBottom: 24 }}>{d.email}</p>
                <div style={{ display: 'flex', gap: 20 }}>
                  <div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: '#fff' }}>{designerProjects.length}</div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Total</div>
                  </div>
                  <div style={{ width: 1, background: '#1e1e1e' }} />
                  <div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: '#2d7a5c' }}>{active}</div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Active</div>
                  </div>
                </div>
                {designerProjects.length > 0 && (
                  <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {designerProjects.slice(0, 3).map(p => (
                      <div key={p.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em' }}>{p.name.split('—')[0].trim()}</span>
                        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase', color: statusColors[p.status] }}>{statusLabels[p.status]}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {designers.length === 0 && (
          <div style={{ padding: '80px 0', textAlign: 'center' }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 18, color: 'rgba(255,255,255,0.2)' }}>No designers yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
