import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { AppNav } from '../../components/AppNav';
import { useAuthStore } from '../../../store/authStore';
import { useWardrobeStore } from '../../../store/wardrobeStore';
import { getUserById, statusLabels, statusColors } from '../../../data/mockData';
import { useBreakpoint } from '../../../hooks/useBreakpoint';

const STATUS_ORDER: Record<string, number> = { configuring: 0, review: 1, revisions: 2, briefing: 3, finalized: 4 };

export function DesignerDashboard() {
  const navigate = useNavigate();
  const user = useAuthStore(s => s.user);
  const { projects, items, setActiveProject } = useWardrobeStore();
  const { isMobile, isTablet } = useBreakpoint();

  const myProjects = projects
    .filter(p => p.designerId === user?.id)
    .sort((a, b) => (STATUS_ORDER[a.status] ?? 9) - (STATUS_ORDER[b.status] ?? 9));

  const openProject = (projectId: string) => {
    navigate(`/designer/project/${projectId}`);
  };

  const startBuilding = (e: React.MouseEvent, projectId: string) => {
    e.stopPropagation();
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setActiveProject(project);
      navigate('/wardrobe');
    }
  };

  const gridCols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(auto-fill, minmax(300px, 1fr))';

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff' }}>
      <AppNav />

      <div style={{ paddingTop: 96, paddingLeft: 'clamp(16px, 5vw, 80px)', paddingRight: 'clamp(16px, 5vw, 80px)', paddingBottom: 80 }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#2d7a5c', marginBottom: 10 }}>
            {user?.name}
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 28 : isTablet ? 32 : 36, fontWeight: 300, letterSpacing: '0.08em', color: '#fff' }}>
            My Projects
          </h1>
        </div>

        {/* Project cards */}
        {myProjects.length === 0 && (
          <div style={{ padding: '80px 0', textAlign: 'center' }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 18, color: 'rgba(255,255,255,0.2)' }}>
              No projects assigned yet.
            </p>
          </div>
        )}
        <div style={{ display: 'grid', gridTemplateColumns: gridCols, gap: 1, background: myProjects.length > 0 ? '#1e1e1e' : 'transparent' }}>
          {myProjects.map((p, i) => {
            const client = getUserById(p.clientId);
            const projectItems = items.filter(i => i.projectId === p.id);
            const approved = projectItems.filter(i => i.status === 'approved').length;
            const flagged = projectItems.filter(i => i.status === 'flagged').length;
            const isActive = p.status === 'configuring' || p.status === 'revisions';

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => openProject(p.id)}
                style={{ background: '#0a0a0a', padding: '32px', cursor: 'pointer', transition: 'background 0.2s', position: 'relative' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#0f0f0f')}
                onMouseLeave={e => (e.currentTarget.style.background = '#0a0a0a')}
              >
                {/* Status badge */}
                <div style={{ marginBottom: 20 }}>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.25em', textTransform: 'uppercase', color: statusColors[p.status], border: `1px solid ${statusColors[p.status]}40`, padding: '3px 8px' }}>
                    {statusLabels[p.status]}
                  </span>
                </div>

                {/* Project name */}
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 400, letterSpacing: '0.1em', color: '#fff', marginBottom: 6, lineHeight: 1.3 }}>
                  {p.name}
                </h3>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>
                  {client?.name} · Updated {new Date(p.updatedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                </p>

                {/* Approval progress bar */}
                {projectItems.length > 0 && (
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ height: 2, background: '#1a1a1a', marginBottom: 6, position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${Math.round((approved / projectItems.length) * 100)}%`, background: '#2d7a5c', transition: 'width 0.4s' }} />
                    </div>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 7.5, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
                      {Math.round((approved / projectItems.length) * 100)}% approved
                    </span>
                  </div>
                )}

                {/* Item stats */}
                {projectItems.length > 0 && (
                  <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                    <div>
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: '#fff' }}>{projectItems.length}</div>
                      <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Items</div>
                    </div>
                    <div style={{ width: 1, background: '#1e1e1e' }} />
                    <div>
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: '#2d7a5c' }}>{approved}</div>
                      <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Approved</div>
                    </div>
                    {flagged > 0 && (
                      <>
                        <div style={{ width: 1, background: '#1e1e1e' }} />
                        <div>
                          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: '#c9a96e' }}>{flagged}</div>
                          <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Flagged</div>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Actions */}
                {isActive && (
                  <button
                    onClick={e => startBuilding(e, p.id)}
                    className="flex items-center gap-2"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', background: '#fff', color: '#000', border: 'none', padding: '10px 18px', cursor: 'pointer', transition: 'background 0.3s' }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#c9a96e')}
                    onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
                  >
                    <Plus size={12} />
                    Add Items
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
