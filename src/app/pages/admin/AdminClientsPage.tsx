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
    <div className="editorial-page">
      <AppNav />
      <div style={{ paddingTop: 96, paddingLeft: 'clamp(16px, 5vw, 80px)', paddingRight: 'clamp(16px, 5vw, 80px)', paddingBottom: 80 }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#21493F', marginBottom: 10 }}>Admin</p>
          <h1 style={{ fontFamily: "'Inter', sans-serif", fontSize: isMobile ? 28 : 36, fontWeight: 300, letterSpacing: '0.08em', color: '#1B1B1B' }}>Clients</h1>
        </div>

        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: '#D9DFDA' }}>
            {clients.map((c, i) => {
              const clientProjects = projects.filter(p => p.clientId === c.id);
              return (
                <motion.div key={c.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
                  style={{ background: '#F8F7F4', padding: '20px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', color: '#1B1B1B', marginBottom: 4 }}>{c.name}</div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.05em', color: '#70767A' }}>{c.email}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 16 }}>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 22, color: '#1B1B1B' }}>{clientProjects.length}</div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#70767A' }}>Projects</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div style={{ border: '1px solid #D9DFDA' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr', borderBottom: '1px solid #D9DFDA', padding: '12px 24px' }}>
              {['Name', 'Email', 'Projects'].map(h => (
                <span key={h} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#70767A' }}>{h}</span>
              ))}
            </div>
            {clients.map((c, i) => {
              const clientProjects = projects.filter(p => p.clientId === c.id);
              return (
                <motion.div key={c.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
                  style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr', padding: '20px 24px', borderBottom: '1px solid #F1F2EF' }}>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', color: '#1B1B1B' }}>{c.name}</div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.05em', color: '#70767A', alignSelf: 'center' }}>{c.email}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 22, color: '#1B1B1B', alignSelf: 'center' }}>{clientProjects.length}</div>
                </motion.div>
              );
            })}
            {clients.length === 0 && (
              <div style={{ padding: '64px 24px', textAlign: 'center' }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontStyle: 'italic', fontSize: 18, color: '#70767A' }}>No clients yet.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
