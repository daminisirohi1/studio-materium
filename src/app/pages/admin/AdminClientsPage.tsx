import { AppNav } from '../../components/AppNav';
import { mockUsers } from '../../../data/mockData';
import { useWardrobeStore } from '../../../store/wardrobeStore';
import { motion } from 'motion/react';

export function AdminClientsPage() {
  const { projects } = useWardrobeStore();
  const clients = mockUsers.filter(u => u.role === 'client');

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff' }}>
      <AppNav />
      <div style={{ paddingTop: 96, paddingLeft: 80, paddingRight: 80, paddingBottom: 80 }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#2d7a5c', marginBottom: 10 }}>Admin</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 300, letterSpacing: '0.08em', color: '#fff' }}>Clients</h1>
        </div>

        <div style={{ border: '1px solid #1e1e1e' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr', borderBottom: '1px solid #1e1e1e', padding: '12px 24px' }}>
            {['Name', 'Email', 'Projects'].map(h => (
              <span key={h} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>{h}</span>
            ))}
          </div>
          {clients.map((c, i) => {
            const clientProjects = projects.filter(p => p.clientId === c.id);
            return (
              <motion.div key={c.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
                style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr', padding: '20px 24px', borderBottom: '1px solid #111' }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', color: '#fff' }}>{c.name}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.4)', alignSelf: 'center' }}>{c.email}</div>
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
      </div>
    </div>
  );
}
