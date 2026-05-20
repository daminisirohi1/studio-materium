import { AppNav } from '../../components/AppNav';
import { mockUsers } from '../../../data/mockData';
import { useWardrobeStore } from '../../../store/wardrobeStore';
import { useBreakpoint } from '../../../hooks/useBreakpoint';
import { motion } from 'motion/react';

export function AdminClientsPage() {
  const { projects } = useWardrobeStore();
  const clients = mockUsers.filter(u => u.role === 'client');
  const { isMobile } = useBreakpoint();

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff' }}>
      <AppNav />
      <div style={{ paddingTop: 96, paddingLeft: 'clamp(16px, 5vw, 80px)', paddingRight: 'clamp(16px, 5vw, 80px)', paddingBottom: 80 }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#2d7a5c', marginBottom: 10 }}>Admin</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 28 : 36, fontWeight: 300, letterSpacing: '0.08em', color: '#fff' }}>Clients</h1>
        </div>

        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: '#1e1e1e' }}>
            {clients.map((c, i) => {
              const clientProjects = projects.filter(p => p.clientId === c.id);
              return (
                <motion.div key={c.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
                  style={{ background: '#0a0a0a', padding: '20px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', color: '#fff', marginBottom: 4 }}>{c.name}</div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.4)' }}>{c.email}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 16 }}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: '#fff' }}>{clientProjects.length}</div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Projects</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div style={{ border: '1px solid #1e1e1e' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr', borderBottom: '1px solid #1e1e1e', padding: '12px 24px' }}>
              {['Name', 'Email', 'Projects'].map(h => (
                <span key={h} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>{h}</span>
              ))}
            </div>
            {clients.map((c, i) => {
              const clientProjects = projects.filter(p => p.clientId === c.id);
              return (
                <motion.div key={c.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
                  style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr', padding: '20px 24px', borderBottom: '1px solid #111' }}>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', color: '#fff' }}>{c.name}</div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.4)', alignSelf: 'center' }}>{c.email}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: '#fff', alignSelf: 'center' }}>{clientProjects.length}</div>
                </motion.div>
              );
            })}
            {clients.length === 0 && (
              <div style={{ padding: '64px 24px', textAlign: 'center' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 18, color: 'rgba(255,255,255,0.2)' }}>No clients yet.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
