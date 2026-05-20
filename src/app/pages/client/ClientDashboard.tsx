import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { AppNav } from '../../components/AppNav';
import { useAuthStore } from '../../../store/authStore';
import { useWardrobeStore } from '../../../store/wardrobeStore';
import { getUserById, statusLabels, statusColors } from '../../../data/mockData';
import { CheckCircle, Flag } from 'lucide-react';

export function ClientDashboard() {
  const navigate = useNavigate();
  const user = useAuthStore(s => s.user);
  const { projects, items } = useWardrobeStore();

  const myProjects = projects.filter(p => p.clientId === user?.id);

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff' }}>
      <AppNav />

      <div style={{ paddingTop: 96, paddingLeft: 80, paddingRight: 80, paddingBottom: 80 }}>

        <div style={{ marginBottom: 56 }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#2d7a5c', marginBottom: 10 }}>
            Welcome back
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 40, fontWeight: 300, letterSpacing: '0.08em', color: '#fff' }}>
            {user?.name?.split(' ')[0]}
          </h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: '#1e1e1e' }}>
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
                style={{ background: '#0a0a0a', padding: '36px 40px', cursor: isViewable ? 'pointer' : 'default', display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center', transition: 'background 0.2s', opacity: isViewable ? 1 : 0.55 }}
                onMouseEnter={e => { if (isViewable) e.currentTarget.style.background = '#0f0f0f'; }}
                onMouseLeave={e => (e.currentTarget.style.background = '#0a0a0a')}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, letterSpacing: '0.25em', textTransform: 'uppercase', color: statusColors[p.status], border: `1px solid ${statusColors[p.status]}40`, padding: '3px 8px' }}>
                      {statusLabels[p.status]}
                    </span>
                    {isViewable && pending > 0 && (
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', background: '#c9a96e', padding: '3px 8px' }}>
                        {pending} awaiting review
                      </span>
                    )}
                  </div>

                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, letterSpacing: '0.08em', color: '#fff', marginBottom: 6 }}>
                    {p.name}
                  </h2>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.35)' }}>
                    Designed by {designer?.name} · {projectItems.length} items
                  </p>
                </div>

                <div style={{ display: 'flex', gap: 24, textAlign: 'center' }}>
                  {[
                    { icon: <CheckCircle size={14} color="#2d7a5c" />, value: approved, label: 'Approved' },
                    { icon: <Flag size={14} color="#c9a96e" />, value: flagged, label: 'Flagged' },
                  ].map(stat => (
                    <div key={stat.label}>
                      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>{stat.icon}</div>
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: '#fff' }}>{stat.value}</div>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>{stat.label}</div>
                    </div>
                  ))}
                  {isViewable && (
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', alignSelf: 'center' }}>
                    Review →
                  </div>
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
