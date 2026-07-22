import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { AppNav } from '../../components/AppNav';
import { useAuthStore } from '../../../store/authStore';
import { useWardrobeStore } from '../../../store/wardrobeStore';
import { getUserById, statusLabels, statusColors } from '../../../data/mockData';
import { useBreakpoint } from '../../../hooks/useBreakpoint';
import { CheckCircle, Flag } from 'lucide-react';

export function ClientDashboard() {
  const navigate = useNavigate();
  const user = useAuthStore(s => s.user);
  const { projects, items } = useWardrobeStore();
  const { isMobile } = useBreakpoint();

  const myProjects = projects.filter(p => p.clientId === user?.id);

  return (
    <div className="editorial-page">
      <AppNav />

      <div style={{ paddingTop: 96, paddingLeft: 'clamp(16px, 5vw, 80px)', paddingRight: 'clamp(16px, 5vw, 80px)', paddingBottom: 80 }}>
        <div style={{ marginBottom: 56 }}>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#21493F', marginBottom: 10 }}>
            Welcome back
          </p>
          <h1 style={{ fontFamily: "'Inter', sans-serif", fontSize: isMobile ? 32 : 40, fontWeight: 300, letterSpacing: '0.08em', color: '#1B1B1B' }}>
            {user?.name?.split(' ')[0]}
          </h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {myProjects.map((p, i) => {
            const projectItems = items.filter(item => item.projectId === p.id);
            const approved = projectItems.filter(i => i.status === 'approved').length;
            const flagged = projectItems.filter(i => i.status === 'flagged').length;
            const pending = projectItems.filter(i => i.status === 'pending').length;
            const designer = getUserById(p.designerId);
            const isViewable = p.status === 'review' || p.status === 'revisions' || p.status === 'finalized';

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => isViewable && navigate(`/client/review/${p.id}`)}
                className="editorial-card"
                style={{ background: 'rgba(255,255,255,0.82)', padding: isMobile ? '24px 16px' : '36px 40px', cursor: isViewable ? 'pointer' : 'default', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: isMobile ? 20 : 32, alignItems: isMobile ? 'flex-start' : 'center', transition: 'background 0.2s' }}
                onMouseEnter={e => { if (isViewable) e.currentTarget.style.background = '#FFFFFF'; }}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.82)')}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
                    <span className="editorial-badge" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.25em', textTransform: 'uppercase', color: statusColors[p.status], border: `1px solid ${statusColors[p.status]}40`, padding: '3px 8px' }}>
                      {statusLabels[p.status]}
                    </span>
                    {isViewable && pending > 0 && (
                      <span className="editorial-badge" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1B1B1B', background: 'rgba(33,73,63,0.12)', border: '1px solid rgba(33,73,63,0.22)', padding: '3px 8px' }}>
                        {pending} awaiting review
                      </span>
                    )}
                  </div>

                  <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: isMobile ? 18 : 22, fontWeight: 400, letterSpacing: '0.08em', color: isViewable ? '#1B1B1B' : '#70767A', marginBottom: 6 }}>
                    {p.name}
                  </h2>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.06em', color: '#70767A' }}>
                    Designed by {designer?.name} · {projectItems.length} items
                  </p>
                  {!isViewable && (
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8.5, letterSpacing: '0.08em', color: '#70767A', marginTop: 8, fontStyle: 'italic' }}>
                      {p.status === 'briefing' ? 'Your designer is preparing the brief.' : 'Your designer is currently configuring this wardrobe.'}
                    </p>
                  )}
                </div>

                <div style={{ display: 'flex', gap: isMobile ? 16 : 24, textAlign: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                  {[
                    { icon: <CheckCircle size={14} color="#21493F" />, value: approved, label: 'Approved' },
                    { icon: <Flag size={14} color="#21493F" />, value: flagged, label: 'Flagged' },
                  ].map(stat => (
                    <div key={stat.label}>
                      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>{stat.icon}</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 22, color: '#1B1B1B' }}>{stat.value}</div>
                      <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#70767A' }}>{stat.label}</div>
                    </div>
                  ))}
                  {isViewable && (
                    <button
                      onClick={() => navigate(`/client/review/${p.id}`)}
                      className="editorial-action"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', background: '#21493F', color: '#FFFFFF', border: '1px solid #21493F', padding: '10px 18px', cursor: 'pointer', whiteSpace: 'nowrap' }}
                    >
                      Review →
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
