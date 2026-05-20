import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { AppNav } from '../../components/AppNav';
import { useWardrobeStore } from '../../../store/wardrobeStore';
import { mockUsers, mockWardrobeItems, statusLabels, statusColors, getUserById } from '../../../data/mockData';

const STAT_STYLE: React.CSSProperties = {
  background: '#0f0f0f',
  border: '1px solid #1e1e1e',
  padding: '28px 32px',
};

export function AdminDashboard() {
  const navigate = useNavigate();
  const projects = useWardrobeStore(s => s.projects);

  const stats = [
    { label: 'Active Projects', value: projects.filter(p => p.status !== 'finalized').length },
    { label: 'Total Clients',   value: mockUsers.filter(u => u.role === 'client').length },
    { label: 'Designers',       value: mockUsers.filter(u => u.role === 'designer').length },
    { label: 'Items Configured', value: mockWardrobeItems.length },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff' }}>
      <AppNav />

      <div style={{ paddingTop: 96, paddingLeft: 80, paddingRight: 80, paddingBottom: 80 }}>

        {/* Page header */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#2d7a5c', marginBottom: 10 }}>
            Admin
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 300, letterSpacing: '0.08em', color: '#fff' }}>
            Dashboard
          </h1>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: '#1e1e1e', marginBottom: 56 }}>
          {stats.map((s, i) => (
            <motion.div key={s.label} style={STAT_STYLE} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 42, fontWeight: 300, color: '#fff', lineHeight: 1, marginBottom: 8 }}>
                {s.value}
              </div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects table */}
        <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 20 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 400, letterSpacing: '0.12em', color: '#fff' }}>
            All Projects
          </h2>
          <div style={{ flex: 1, height: 1, background: '#1e1e1e' }} />
        </div>

        <div style={{ border: '1px solid #1e1e1e' }}>
          {/* Table header */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 100px', borderBottom: '1px solid #1e1e1e', padding: '12px 24px' }}>
            {['Project', 'Client', 'Designer', 'Status', ''].map(h => (
              <span key={h} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>
                {h}
              </span>
            ))}
          </div>

          {projects.length === 0 && (
            <div style={{ padding: '64px 24px', textAlign: 'center' }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 18, color: 'rgba(255,255,255,0.2)' }}>
                No projects yet.
              </p>
            </div>
          )}

          {projects.map((p, i) => {
            const client = getUserById(p.clientId);
            const designer = getUserById(p.designerId);
            const items = mockWardrobeItems.filter(w => w.projectId === p.id);
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => navigate(`/admin/project/${p.id}`)}
                style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 100px', padding: '20px 24px', borderBottom: '1px solid #111', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#0f0f0f')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', color: '#fff', marginBottom: 3 }}>
                    {p.name}
                  </div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)' }}>
                    {items.length} items · Updated {new Date(p.updatedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                  </div>
                </div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.55)', alignSelf: 'center' }}>
                  {client?.name}
                </div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.55)', alignSelf: 'center' }}>
                  {designer?.name}
                </div>
                <div style={{ alignSelf: 'center' }}>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: statusColors[p.status], border: `1px solid ${statusColors[p.status]}40`, padding: '3px 8px' }}>
                    {statusLabels[p.status]}
                  </span>
                </div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', alignSelf: 'center' }}>
                  View →
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
