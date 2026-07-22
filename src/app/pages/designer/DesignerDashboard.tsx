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
    <div className="editorial-page">
      <AppNav />

      <div style={{ paddingTop: 96, paddingLeft: 'clamp(16px, 5vw, 80px)', paddingRight: 'clamp(16px, 5vw, 80px)', paddingBottom: 80 }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#21493F', marginBottom: 10 }}>
            {user?.name}
          </p>
          <h1 style={{ fontFamily: "'Inter', sans-serif", fontSize: isMobile ? 28 : isTablet ? 32 : 36, fontWeight: 300, letterSpacing: '0.08em', color: '#1B1B1B' }}>
            My Projects
          </h1>
        </div>

        {/* Project cards */}
        {myProjects.length === 0 && (
          <div style={{ padding: '80px 0', textAlign: 'center' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontStyle: 'italic', fontSize: 18, color: '#70767A' }}>
              No projects assigned yet.
            </p>
          </div>
        )}
        <div style={{ display: 'grid', gridTemplateColumns: gridCols, gap: 16 }}>
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
                className="editorial-card"
                style={{ background: 'rgba(255,255,255,0.82)', padding: '32px', cursor: 'pointer', transition: 'background 0.2s', position: 'relative' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#FFFFFF')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.82)')}
              >
                {/* Status badge */}
                <div style={{ marginBottom: 20 }}>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.25em', textTransform: 'uppercase', color: statusColors[p.status], border: `1px solid ${statusColors[p.status]}40`, padding: '3px 8px' }}>
                    {statusLabels[p.status]}
                  </span>
                </div>

                {/* Project name */}
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 20, fontWeight: 400, letterSpacing: '0.1em', color: '#1B1B1B', marginBottom: 6, lineHeight: 1.3 }}>
                  {p.name}
                </h3>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.08em', color: '#70767A', marginBottom: 16 }}>
                  {client?.name} · Updated {new Date(p.updatedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                </p>

                {/* Approval progress bar */}
                {projectItems.length > 0 && (
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ height: 2, background: '#D9DFDA', marginBottom: 6, position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${Math.round((approved / projectItems.length) * 100)}%`, background: '#21493F', transition: 'width 0.4s' }} />
                    </div>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 7.5, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#70767A' }}>
                      {Math.round((approved / projectItems.length) * 100)}% approved
                    </span>
                  </div>
                )}

                {/* Item stats */}
                {projectItems.length > 0 && (
                  <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                    <div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 22, color: '#1B1B1B' }}>{projectItems.length}</div>
                      <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#70767A' }}>Items</div>
                    </div>
                    <div style={{ width: 1, background: '#D9DFDA' }} />
                    <div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 22, color: '#21493F' }}>{approved}</div>
                      <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#70767A' }}>Approved</div>
                    </div>
                    {flagged > 0 && (
                      <>
                        <div style={{ width: 1, background: '#D9DFDA' }} />
                        <div>
                          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 22, color: '#21493F' }}>{flagged}</div>
                          <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#70767A' }}>Flagged</div>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Actions */}
                {isActive && (
                  <button
                    onClick={e => startBuilding(e, p.id)}
                    className="editorial-action flex items-center gap-2"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', background: '#21493F', color: '#FFFFFF', border: '1px solid #21493F', padding: '10px 18px', cursor: 'pointer' }}
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
