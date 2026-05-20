import { useParams, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Plus, Trash2, Send } from 'lucide-react';
import { useState } from 'react';
import { AppNav } from '../../components/AppNav';
import { useWardrobeStore } from '../../../store/wardrobeStore';
import { getUserById, getClientProfile, statusLabels, statusColors } from '../../../data/mockData';
import type { WardrobeItem, WardrobeZone } from '../../../types';

const ZONES: { id: WardrobeZone; label: string }[] = [
  { id: 'hanging-full', label: 'Full-Length Rail' },
  { id: 'hanging-half', label: 'Half-Length Rail' },
  { id: 'shelving',     label: 'Shelving' },
  { id: 'drawers',      label: 'Drawers' },
  { id: 'shoe-rack',    label: 'Shoe Rack' },
  { id: 'accessories',  label: 'Accessories' },
];

const STATUS_BG: Record<WardrobeItem['status'], string> = {
  pending:  'rgba(255,255,255,0.06)',
  approved: 'rgba(45,122,92,0.12)',
  flagged:  'rgba(201,169,110,0.12)',
};
const STATUS_DOT: Record<WardrobeItem['status'], string> = {
  pending:  '#555',
  approved: '#2d7a5c',
  flagged:  '#c9a96e',
};

export function ProjectView() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { projects, items, setActiveProject, removeItem, updateItemZone, updateProjectStatus } = useWardrobeStore();
  const [expandedZone, setExpandedZone] = useState<WardrobeZone | null>('hanging-full');

  const project = projects.find(p => p.id === projectId);
  if (!project) return <div style={{ color: '#fff', padding: 80 }}>Project not found.</div>;

  const client = getUserById(project.clientId);
  const profile = getClientProfile(project.clientId);
  const projectItems = items.filter(i => i.projectId === projectId);

  const itemsByZone = ZONES.reduce<Record<WardrobeZone, WardrobeItem[]>>((acc, z) => {
    acc[z.id] = projectItems.filter(i => i.zone === z.id);
    return acc;
  }, {} as Record<WardrobeZone, WardrobeItem[]>);

  const handleAddItems = () => {
    setActiveProject(project);
    navigate('/wardrobe');
  };

  const handleSubmitForReview = () => {
    updateProjectStatus(project.id, 'review');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff' }}>
      <AppNav />

      <div style={{ paddingTop: 80 }}>

        {/* Project banner */}
        <div style={{ padding: '40px 80px', borderBottom: '1px solid #1a1a1a', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <button onClick={() => navigate('/designer')} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', background: 'none', border: 'none', cursor: 'pointer' }}>
                ← Projects
              </button>
              <span style={{ color: '#2a2a2a' }}>·</span>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, letterSpacing: '0.25em', textTransform: 'uppercase', color: statusColors[project.status], border: `1px solid ${statusColors[project.status]}40`, padding: '2px 7px' }}>
                {statusLabels[project.status]}
              </span>
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 300, letterSpacing: '0.08em', color: '#fff', marginBottom: 6 }}>
              {project.name}
            </h1>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)' }}>
              {client?.name} · {projectItems.length} items configured
            </p>
          </div>
          <div className="flex gap-3">
            {(project.status === 'configuring' || project.status === 'revisions') && (
              <>
                <button onClick={handleAddItems} className="flex items-center gap-2" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', background: 'none', color: '#fff', border: '1px solid #333', padding: '10px 18px', cursor: 'pointer', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; }}>
                  <Plus size={12} /> Add Items
                </button>
                <button onClick={handleSubmitForReview} className="flex items-center gap-2" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', background: '#fff', color: '#000', border: 'none', padding: '10px 18px', cursor: 'pointer', transition: 'background 0.3s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#c9a96e')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#fff')}>
                  <Send size={12} /> Submit for Review
                </button>
              </>
            )}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', minHeight: 'calc(100vh - 200px)' }}>

          {/* Left — client profile */}
          <div style={{ borderRight: '1px solid #1a1a1a', padding: '40px 32px' }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Client Profile</p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 400, color: '#fff', marginBottom: 4 }}>{client?.name}</h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, color: 'rgba(255,255,255,0.3)', marginBottom: 28 }}>{client?.email}</p>

            {profile && (
              <div className="flex flex-col gap-5">
                {[
                  { label: 'Occasions', items: profile.occasions },
                  { label: 'Preferred Brands', items: profile.preferredBrands },
                  { label: 'Colour Palette', items: profile.colorPalette },
                  { label: 'Lifestyle', items: profile.lifestyle },
                ].map(section => (
                  <div key={section.label}>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: 8, paddingBottom: 6, borderBottom: '1px solid #1a1a1a' }}>
                      {section.label}
                    </p>
                    {section.items.map(item => (
                      <p key={item} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.5)', marginBottom: 4, lineHeight: 1.5 }}>
                        — {item}
                      </p>
                    ))}
                  </div>
                ))}
                {profile.notes && (
                  <div>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: 8, paddingBottom: 6, borderBottom: '1px solid #1a1a1a' }}>Notes</p>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{profile.notes}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right — configured items by zone */}
          <div style={{ padding: '40px 48px' }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 24 }}>Wardrobe Configuration</p>

            {ZONES.map(zone => {
              const zoneItems = itemsByZone[zone.id];
              if (zoneItems.length === 0) return null;
              const isOpen = expandedZone === zone.id;

              return (
                <div key={zone.id} style={{ marginBottom: 1, background: '#0f0f0f', border: '1px solid #1a1a1a' }}>
                  <button
                    onClick={() => setExpandedZone(isOpen ? null : zone.id)}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', background: 'none', border: 'none', cursor: 'pointer', color: '#fff' }}
                  >
                    <div className="flex items-center gap-3">
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>{zone.label}</span>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, color: 'rgba(255,255,255,0.25)' }}>{zoneItems.length} items</span>
                    </div>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={14} color="rgba(255,255,255,0.3)" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ padding: '0 24px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                          {zoneItems.map(item => (
                            <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', background: STATUS_BG[item.status], border: `1px solid ${STATUS_DOT[item.status]}20` }}>
                              <img src={item.img} alt={item.name} style={{ width: 52, height: 72, objectFit: 'cover', flexShrink: 0 }} referrerPolicy="no-referrer" />
                              <div style={{ flex: 1 }}>
                                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', marginBottom: 3 }}>{item.name}</div>
                                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.4)', marginBottom: 2 }}>{item.variant} · {item.material}</div>
                                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, color: 'rgba(255,255,255,0.3)' }}>{item.brand} · Qty {item.quantity}</div>
                                {item.clientNote && (
                                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, color: '#c9a96e', marginTop: 4, fontStyle: 'italic' }}>"{item.clientNote}"</div>
                                )}
                              </div>
                              <div className="flex items-center gap-3">
                                <div style={{ width: 6, height: 6, borderRadius: '50%', background: STATUS_DOT[item.status] }} />
                                <button onClick={() => removeItem(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.2)', transition: 'color 0.2s' }}
                                  onMouseEnter={e => (e.currentTarget.style.color = '#ff6b6b')}
                                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.2)')}>
                                  <Trash2 size={13} />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {projectItems.length === 0 && (
              <div style={{ textAlign: 'center', padding: '64px 0' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 18, color: 'rgba(255,255,255,0.2)', marginBottom: 20 }}>No items configured yet.</p>
                <button onClick={handleAddItems} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', background: '#fff', color: '#000', border: 'none', padding: '12px 24px', cursor: 'pointer' }}>
                  Open Wardrobe Builder
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
