import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { AppNav } from '../../components/AppNav';
import { useWardrobeStore } from '../../../store/wardrobeStore';
import { mockUsers, mockWardrobeItems, statusLabels, statusColors, getUserById } from '../../../data/mockData';
import { useBreakpoint } from '../../../hooks/useBreakpoint';

const STAT_STYLE: React.CSSProperties = {
  background: 'rgba(255,255,255,0.86)',
  border: '1px solid #D9DFDA',
  padding: '28px 32px',
  borderRadius: 8,
};

export function AdminDashboard() {
  const navigate = useNavigate();
  const projects = useWardrobeStore(s => s.projects);
  const { isMobile, isTablet } = useBreakpoint();

  const stats = [
    { label: 'Active Projects', value: projects.filter(p => p.status !== 'finalized').length },
    { label: 'Total Clients',   value: mockUsers.filter(u => u.role === 'client').length },
    { label: 'Designers',       value: mockUsers.filter(u => u.role === 'designer').length },
    { label: 'Items Configured', value: mockWardrobeItems.length },
  ];

  const statsGridCols = isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)';

  return (
    <div className="editorial-page">
      <AppNav />

      <div style={{ paddingTop: 96, paddingLeft: 'clamp(16px, 5vw, 80px)', paddingRight: 'clamp(16px, 5vw, 80px)', paddingBottom: 80 }}>

        {/* Page header */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#21493F', marginBottom: 10 }}>
            Admin
          </p>
          <h1 style={{ fontFamily: "'Inter', sans-serif", fontSize: isMobile ? 28 : isTablet ? 32 : 36, fontWeight: 300, letterSpacing: '0.08em', color: '#1B1B1B' }}>
            Dashboard
          </h1>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: statsGridCols, gap: 16, marginBottom: 56 }}>
          {stats.map((s, i) => (
            <motion.div key={s.label} style={STAT_STYLE} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: isMobile ? 32 : 42, fontWeight: 300, color: '#1B1B1B', lineHeight: 1, marginBottom: 8 }}>
                {s.value}
              </div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#70767A' }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects table */}
        <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 20 }}>
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 20, fontWeight: 400, letterSpacing: '0.12em', color: '#1B1B1B' }}>
            All Projects
          </h2>
          <div style={{ flex: 1, height: 1, background: '#D9DFDA' }} />
        </div>

        <div className="editorial-card" style={{ overflow: 'hidden' }}>
          {/* Table header — hidden on mobile via CSS class */}
          {!isMobile && (
            <div className="admin-table-header" style={{ display: 'grid', gridTemplateColumns: isTablet ? '2fr 1fr 1fr 100px' : '2fr 1fr 1fr 1fr 100px', borderBottom: '1px solid #D9DFDA', padding: '12px 24px' }}>
              {(isTablet ? ['Project', 'Client', 'Status', ''] : ['Project', 'Client', 'Designer', 'Status', '']).map(h => (
                <span key={h} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#70767A' }}>
                  {h}
                </span>
              ))}
            </div>
          )}

          {projects.length === 0 && (
            <div style={{ padding: '64px 24px', textAlign: 'center' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontStyle: 'italic', fontSize: 18, color: '#70767A' }}>
                No projects yet.
              </p>
            </div>
          )}

          {projects.map((p, i) => {
            const client = getUserById(p.clientId);
            const designer = getUserById(p.designerId);
            const items = mockWardrobeItems.filter(w => w.projectId === p.id);

            if (isMobile) {
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => navigate(`/admin/project/${p.id}`)}
                  className="admin-table-row"
                  style={{ padding: '20px 16px', borderBottom: '1px solid #F1F2EF', cursor: 'pointer', transition: 'background 0.2s', display: 'flex', flexDirection: 'column', gap: 8 }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#FFFFFF')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', color: '#1B1B1B' }}>{p.name}</div>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: statusColors[p.status], border: `1px solid ${statusColors[p.status]}40`, padding: '3px 8px', flexShrink: 0, marginLeft: 8 }}>
                      {statusLabels[p.status]}
                    </span>
                  </div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.1em', color: '#70767A' }}>
                    {items.length} items · {client?.name} · {designer?.name}
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => navigate(`/admin/project/${p.id}`)}
                style={{ display: 'grid', gridTemplateColumns: isTablet ? '2fr 1fr 1fr 100px' : '2fr 1fr 1fr 1fr 100px', padding: '20px 24px', borderBottom: '1px solid #F1F2EF', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#FFFFFF')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', color: '#1B1B1B', marginBottom: 3 }}>
                    {p.name}
                  </div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.1em', color: '#70767A' }}>
                    {items.length} items · Updated {new Date(p.updatedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                  </div>
                </div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.08em', color: '#70767A', alignSelf: 'center' }}>
                  {client?.name}
                </div>
                {!isTablet && (
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.08em', color: '#70767A', alignSelf: 'center' }}>
                    {designer?.name}
                  </div>
                )}
                <div style={{ alignSelf: 'center' }}>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: statusColors[p.status], border: `1px solid ${statusColors[p.status]}40`, padding: '3px 8px' }}>
                    {statusLabels[p.status]}
                  </span>
                </div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#70767A', alignSelf: 'center' }}>
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
