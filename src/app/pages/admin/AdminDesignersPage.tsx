import { AppNav } from '../../components/AppNav';
import { mockUsers, statusLabels, statusColors } from '../../../data/mockData';
import { useWardrobeStore } from '../../../store/wardrobeStore';
import { useBreakpoint } from '../../../hooks/useBreakpoint';
import { motion } from 'motion/react';

export function AdminDesignersPage() {
  const { projects } = useWardrobeStore();
  const designers = mockUsers.filter(u => u.role === 'designer');
  const { isMobile, isTablet } = useBreakpoint();

  const gridCols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';

  return (
    <div className="editorial-page">
      <AppNav />
      <div style={{ paddingTop: 96, paddingLeft: 'clamp(16px, 5vw, 80px)', paddingRight: 'clamp(16px, 5vw, 80px)', paddingBottom: 80 }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#21493F', marginBottom: 10 }}>Admin</p>
          <h1 style={{ fontFamily: "'Inter', sans-serif", fontSize: isMobile ? 28 : 36, fontWeight: 300, letterSpacing: '0.08em', color: '#1B1B1B' }}>Designers</h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: gridCols, gap: 1, background: designers.length > 0 ? '#D9DFDA' : 'transparent' }}>
          {designers.map((d, i) => {
            const designerProjects = projects.filter(p => p.designerId === d.id);
            const active = designerProjects.filter(p => p.status === 'configuring' || p.status === 'revisions').length;
            return (
              <motion.div key={d.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                style={{ background: '#F8F7F4', padding: '32px' }}>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 20, fontWeight: 400, letterSpacing: '0.1em', color: '#1B1B1B', marginBottom: 4 }}>{d.name}</h3>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, color: '#70767A', marginBottom: 24 }}>{d.email}</p>
                <div style={{ display: 'flex', gap: 20 }}>
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 28, color: '#1B1B1B' }}>{designerProjects.length}</div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#70767A' }}>Total</div>
                  </div>
                  <div style={{ width: 1, background: '#D9DFDA' }} />
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 28, color: '#21493F' }}>{active}</div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#70767A' }}>Active</div>
                  </div>
                </div>
                {designerProjects.length > 0 && (
                  <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {designerProjects.slice(0, 3).map(p => (
                      <div key={p.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, color: '#70767A', letterSpacing: '0.06em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginRight: 8 }}>{p.name.split('—')[0].trim()}</span>
                        <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase', color: statusColors[p.status], flexShrink: 0 }}>{statusLabels[p.status]}</span>
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
            <p style={{ fontFamily: "'Inter', sans-serif", fontStyle: 'italic', fontSize: 18, color: '#70767A' }}>No designers yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
