import { useParams, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Plus, Trash2, Send } from 'lucide-react';
import { useState } from 'react';
import { AppNav } from '../../components/AppNav';
import { useWardrobeStore } from '../../../store/wardrobeStore';
import { useNotificationStore } from '../../../store/notificationStore';
import { getUserById, getClientProfile, statusLabels, statusColors } from '../../../data/mockData';
import { useBreakpoint } from '../../../hooks/useBreakpoint';
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
  const { projects, items, setActiveProject, removeItem, updateItemZone, updateProjectStatus, updateDesignerNote } = useWardrobeStore();
  const { addNotification } = useNotificationStore();
  const [expandedZone, setExpandedZone] = useState<WardrobeZone | null>('hanging-full');
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [noteItemId, setNoteItemId] = useState<string | null>(null);
  const [noteText, setNoteText] = useState('');
  const { isMobile, isTablet } = useBreakpoint();

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
    addNotification({ type: 'review-submitted', message: `${project.name} has been submitted for client review`, projectId: project.id });
  };

  const saveDesignerNote = (itemId: string) => {
    if (noteText.trim()) updateDesignerNote(itemId, noteText.trim());
    setNoteItemId(null);
    setNoteText('');
  };

  const isNarrow = isMobile || isTablet;
  const bannerPadding = isMobile ? '24px 16px' : isTablet ? '32px 32px' : '40px 80px';
  const sidebarWidth = isMobile ? '100%' : isTablet ? '260px' : '320px';

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff' }}>
      <AppNav />

      <div style={{ paddingTop: 80 }}>

        {/* Project banner */}
        <div style={{ padding: bannerPadding, borderBottom: '1px solid #1a1a1a', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: isMobile ? 'wrap' : 'nowrap', gap: isMobile ? 16 : 0 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
              <button onClick={() => navigate('/designer')} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', background: 'none', border: 'none', cursor: 'pointer' }}>
                ← Projects
              </button>
              <span style={{ color: '#2a2a2a' }}>·</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.25em', textTransform: 'uppercase', color: statusColors[project.status], border: `1px solid ${statusColors[project.status]}40`, padding: '2px 7px' }}>
                {statusLabels[project.status]}
              </span>
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 22 : 28, fontWeight: 300, letterSpacing: '0.08em', color: '#fff', marginBottom: 6 }}>
              {project.name}
            </h1>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', marginBottom: 12 }}>
              {client?.name} · {projectItems.length} items configured
            </p>
            {(() => {
              const filledZones = ZONES.filter(z => itemsByZone[z.id]?.length > 0).length;
              return (
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ display: 'flex', gap: 3 }}>
                    {ZONES.map(z => (
                      <div key={z.id} style={{ width: 24, height: 3, borderRadius: 1.5, background: itemsByZone[z.id]?.length > 0 ? '#2d7a5c' : '#222' }} />
                    ))}
                  </div>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
                    {filledZones}/{ZONES.length} zones
                  </span>
                </div>
              );
            })()}
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', flexShrink: 0 }}>
            {(project.status === 'configuring' || project.status === 'revisions') && (
              <>
                <button onClick={handleAddItems} className="flex items-center gap-2" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', background: 'none', color: '#fff', border: '1px solid #333', padding: '10px 18px', cursor: 'pointer', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; }}>
                  <Plus size={12} /> Add Items
                </button>
                <button
                  onClick={handleSubmitForReview}
                  disabled={projectItems.length === 0}
                  className="flex items-center gap-2"
                  title={projectItems.length === 0 ? 'Add items before submitting' : undefined}
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', background: projectItems.length === 0 ? '#222' : '#fff', color: projectItems.length === 0 ? 'rgba(255,255,255,0.2)' : '#000', border: 'none', padding: '10px 18px', cursor: projectItems.length === 0 ? 'not-allowed' : 'pointer', transition: 'background 0.3s' }}
                  onMouseEnter={e => { if (projectItems.length > 0) e.currentTarget.style.background = '#c9a96e'; }}
                  onMouseLeave={e => { if (projectItems.length > 0) e.currentTarget.style.background = '#fff'; }}
                >
                  <Send size={12} /> {project.status === 'revisions' ? 'Resubmit for Review' : 'Submit for Review'}
                </button>
              </>
            )}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : `${sidebarWidth} 1fr`, minHeight: 'calc(100vh - 200px)' }}>

          {/* Left — client profile */}
          <div style={{ borderRight: isNarrow ? 'none' : '1px solid #1a1a1a', borderBottom: isNarrow ? '1px solid #1a1a1a' : 'none', padding: isMobile ? '24px 16px' : isTablet ? '28px 24px' : '40px 32px' }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Client Profile</p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 400, color: '#fff', marginBottom: 4 }}>{client?.name}</h3>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, color: 'rgba(255,255,255,0.3)', marginBottom: 28 }}>{client?.email}</p>

            {profile && (
              <div className="flex flex-col gap-5">
                {[
                  { label: 'Occasions', items: profile.occasions },
                  { label: 'Preferred Brands', items: profile.preferredBrands },
                  { label: 'Colour Palette', items: profile.colorPalette },
                  { label: 'Lifestyle', items: profile.lifestyle },
                ].map(section => (
                  <div key={section.label}>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: 8, paddingBottom: 6, borderBottom: '1px solid #1a1a1a' }}>
                      {section.label}
                    </p>
                    {section.items.map(item => (
                      <p key={item} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.5)', marginBottom: 4, lineHeight: 1.5 }}>
                        — {item}
                      </p>
                    ))}
                  </div>
                ))}
                {profile.notes && (
                  <div>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: 8, paddingBottom: 6, borderBottom: '1px solid #1a1a1a' }}>Notes</p>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{profile.notes}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right — configured items by zone */}
          <div style={{ padding: isMobile ? '24px 16px' : isTablet ? '28px 24px' : '40px 48px' }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 24 }}>Wardrobe Configuration</p>

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
                      <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>{zone.label}</span>
                      <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, color: 'rgba(255,255,255,0.25)' }}>{zoneItems.length} items</span>
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
                            <div key={item.id} style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', gap: 14, padding: '14px 16px', background: STATUS_BG[item.status], border: `1px solid ${STATUS_DOT[item.status]}20`, flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                              <img src={item.img} alt={item.name} style={{ width: 52, height: 72, objectFit: 'cover', flexShrink: 0 }} referrerPolicy="no-referrer" />
                              <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', marginBottom: 3 }}>{item.name}</div>
                                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.4)', marginBottom: 2 }}>{item.variant} · {item.material}</div>
                                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, color: 'rgba(255,255,255,0.3)' }}>{item.brand} · Qty {item.quantity}</div>
                                {item.clientNote && (
                                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, color: '#c9a96e', marginTop: 4, fontStyle: 'italic' }}>Client: "{item.clientNote}"</div>
                                )}
                                {item.designerNote && noteItemId !== item.id && (
                                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, color: 'rgba(255,255,255,0.5)', marginTop: 4, fontStyle: 'italic' }}>Note: "{item.designerNote}"</div>
                                )}
                                {item.status === 'flagged' && noteItemId !== item.id && (
                                  <button
                                    onClick={() => { setNoteItemId(item.id); setNoteText(item.designerNote ?? ''); }}
                                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c9a96e', background: 'none', border: '1px solid rgba(201,169,110,0.3)', padding: '3px 8px', cursor: 'pointer', marginTop: 6 }}
                                  >
                                    {item.designerNote ? 'Edit Note' : '+ Add Note'}
                                  </button>
                                )}
                                {noteItemId === item.id && (
                                  <div style={{ display: 'flex', gap: 6, marginTop: 6, flexWrap: 'wrap' }}>
                                    <input
                                      autoFocus
                                      value={noteText}
                                      onChange={e => setNoteText(e.target.value)}
                                      placeholder="Response to client…"
                                      onKeyDown={e => { if (e.key === 'Enter') saveDesignerNote(item.id); if (e.key === 'Escape') { setNoteItemId(null); setNoteText(''); } }}
                                      style={{ flex: 1, minWidth: 120, background: '#111', border: '1px solid #2a2a2a', color: '#fff', padding: '5px 8px', fontFamily: "'Poppins', sans-serif", fontSize: 9, outline: 'none' }}
                                    />
                                    <button onClick={() => saveDesignerNote(item.id)} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, background: '#c9a96e', color: '#000', border: 'none', padding: '4px 10px', cursor: 'pointer' }}>Save</button>
                                    <button onClick={() => { setNoteItemId(null); setNoteText(''); }} style={{ background: 'none', border: '1px solid #333', color: 'rgba(255,255,255,0.3)', padding: '4px 6px', cursor: 'pointer', fontSize: 10 }}>✕</button>
                                  </div>
                                )}
                              </div>
                              <div className="flex items-center gap-3">
                                <div style={{ width: 6, height: 6, borderRadius: '50%', background: STATUS_DOT[item.status] }} />
                                {confirmDeleteId === item.id ? (
                                  <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                                    <button
                                      onClick={() => { removeItem(item.id); setConfirmDeleteId(null); }}
                                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: 7.5, letterSpacing: '0.1em', background: '#c0392b', color: '#fff', border: 'none', padding: '3px 8px', cursor: 'pointer' }}
                                    >
                                      Remove
                                    </button>
                                    <button
                                      onClick={() => setConfirmDeleteId(null)}
                                      style={{ background: 'none', border: '1px solid #333', color: 'rgba(255,255,255,0.4)', padding: '3px 6px', cursor: 'pointer', fontFamily: "'Poppins', sans-serif", fontSize: 7.5 }}
                                    >
                                      ✕
                                    </button>
                                  </div>
                                ) : (
                                  <button
                                    onClick={() => setConfirmDeleteId(item.id)}
                                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.2)', transition: 'color 0.2s' }}
                                    onMouseEnter={e => (e.currentTarget.style.color = '#ff6b6b')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.2)')}
                                  >
                                    <Trash2 size={13} />
                                  </button>
                                )}
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
                <button onClick={handleAddItems} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', background: '#fff', color: '#000', border: 'none', padding: '12px 24px', cursor: 'pointer' }}>
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
