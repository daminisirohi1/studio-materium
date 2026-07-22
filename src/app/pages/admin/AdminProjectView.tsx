import { useParams, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { AppNav } from '../../components/AppNav';
import { useWardrobeStore } from '../../../store/wardrobeStore';
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

const STATUS_DOT: Record<WardrobeItem['status'], string> = {
  pending:  '#70767A',
  approved: '#21493F',
  flagged:  '#21493F',
};

export function AdminProjectView() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { projects, items, updateProjectStatus } = useWardrobeStore();
  const [expandedZone, setExpandedZone] = useState<WardrobeZone | null>('hanging-full');
  const { isMobile, isTablet } = useBreakpoint();

  const project = projects.find(p => p.id === projectId);
  if (!project) return <div style={{ color: '#1B1B1B', padding: 80 }}>Project not found.</div>;

  const client   = getUserById(project.clientId);
  const designer = getUserById(project.designerId);
  const profile  = getClientProfile(project.clientId);
  const projectItems = items.filter(i => i.projectId === projectId);

  const itemsByZone = ZONES.reduce<Record<WardrobeZone, WardrobeItem[]>>((acc, z) => {
    acc[z.id] = projectItems.filter(i => i.zone === z.id);
    return acc;
  }, {} as Record<WardrobeZone, WardrobeItem[]>);

  const approved = projectItems.filter(i => i.status === 'approved').length;
  const flagged  = projectItems.filter(i => i.status === 'flagged').length;

  const STATUS_ACTIONS: { label: string; next: typeof project.status; condition: boolean }[] = [
    { label: 'Mark In Review',  next: 'review',      condition: project.status === 'configuring' || project.status === 'briefing' },
    { label: 'Mark Revisions',  next: 'revisions',   condition: project.status === 'review' },
    { label: 'Mark Finalized',  next: 'finalized',   condition: project.status === 'review' || project.status === 'revisions' },
  ];

  const isNarrow = isMobile || isTablet;
  const bannerPadding = isMobile ? '24px 16px' : isTablet ? '32px 32px' : '40px 80px';

  return (
    <div className="editorial-page">
      <AppNav />

      <div style={{ paddingTop: 80 }}>
        {/* Banner */}
        <div style={{ padding: bannerPadding, borderBottom: '1px solid #D9DFDA', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: isNarrow ? 'wrap' : 'nowrap', gap: isNarrow ? 16 : 0 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <button onClick={() => navigate('/admin')} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#70767A', background: 'none', border: 'none', cursor: 'pointer' }}>
                ← Admin
              </button>
              <span style={{ color: '#D9DFDA' }}>·</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.25em', textTransform: 'uppercase', color: statusColors[project.status], border: `1px solid ${statusColors[project.status]}40`, padding: '2px 7px' }}>
                {statusLabels[project.status]}
              </span>
            </div>
            <h1 style={{ fontFamily: "'Inter', sans-serif", fontSize: isMobile ? 22 : 28, fontWeight: 300, letterSpacing: '0.08em', color: '#1B1B1B', marginBottom: 6 }}>
              {project.name}
            </h1>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.06em', color: '#70767A' }}>
              Client: {client?.name} · Designer: {designer?.name} · {projectItems.length} items
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: isNarrow ? 'flex-start' : 'flex-end' }}>
            <div style={{ display: 'flex', gap: 20, marginBottom: 8 }}>
              <div style={{ textAlign: isNarrow ? 'left' : 'right' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 24, color: '#21493F' }}>{approved}</div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#70767A' }}>Approved</div>
              </div>
              <div style={{ textAlign: isNarrow ? 'left' : 'right' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 24, color: '#21493F' }}>{flagged}</div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#70767A' }}>Flagged</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {STATUS_ACTIONS.filter(a => a.condition).map(a => (
                <button key={a.next} onClick={() => updateProjectStatus(project.id, a.next)}
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', background: 'none', color: '#70767A', border: '1px solid #A7B9AE', padding: '8px 14px', cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#1B1B1B'; e.currentTarget.style.color = '#1B1B1B'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#A7B9AE'; e.currentTarget.style.color = '#70767A'; }}>
                  {a.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '320px 1fr', minHeight: 'calc(100vh - 220px)' }}>
          {/* Left — client profile */}
          <div style={{ borderRight: isNarrow ? 'none' : '1px solid #D9DFDA', borderBottom: isNarrow ? '1px solid #D9DFDA' : 'none', padding: isMobile ? '24px 16px' : isTablet ? '28px 24px' : '40px 32px' }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#70767A', marginBottom: 20 }}>Client Profile</p>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 400, color: '#1B1B1B', marginBottom: 4 }}>{client?.name}</h3>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, color: '#70767A', marginBottom: 28 }}>{client?.email}</p>

            {profile && (
              <div className="flex flex-col gap-5">
                {[
                  { label: 'Occasions',        items: profile.occasions },
                  { label: 'Preferred Brands', items: profile.preferredBrands },
                  { label: 'Colour Palette',   items: profile.colorPalette },
                  { label: 'Lifestyle',        items: profile.lifestyle },
                ].map(section => (
                  <div key={section.label}>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#21493F', marginBottom: 8, paddingBottom: 6, borderBottom: '1px solid #D9DFDA' }}>
                      {section.label}
                    </p>
                    {section.items.map(item => (
                      <p key={item} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.05em', color: '#70767A', marginBottom: 4, lineHeight: 1.5 }}>
                        — {item}
                      </p>
                    ))}
                  </div>
                ))}
                {profile.notes && (
                  <div>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#21493F', marginBottom: 8, paddingBottom: 6, borderBottom: '1px solid #D9DFDA' }}>Notes</p>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.05em', color: '#70767A', lineHeight: 1.7 }}>{profile.notes}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right — items by zone (read-only) */}
          <div style={{ padding: isMobile ? '24px 16px' : isTablet ? '28px 24px' : '40px 48px' }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#70767A', marginBottom: 24 }}>Wardrobe Configuration</p>

            {ZONES.map(zone => {
              const zoneItems = itemsByZone[zone.id];
              if (zoneItems.length === 0) return null;
              const isOpen = expandedZone === zone.id;

              return (
                <div key={zone.id} style={{ marginBottom: 1, background: '#FFFFFF', border: '1px solid #D9DFDA' }}>
                  <button
                    onClick={() => setExpandedZone(isOpen ? null : zone.id)}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', background: 'none', border: 'none', cursor: 'pointer', color: '#1B1B1B' }}
                  >
                    <div className="flex items-center gap-3">
                      <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#70767A' }}>{zone.label}</span>
                      <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, color: '#70767A' }}>{zoneItems.length} items</span>
                    </div>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={14} color="#70767A" />
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
                            <div key={item.id} style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', gap: 14, padding: '14px 16px', background: '#F1F2EF', border: '1px solid #D9DFDA', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                              <img src={item.img} alt={item.name} style={{ width: 52, height: 72, objectFit: 'cover', flexShrink: 0 }} referrerPolicy="no-referrer" onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                              <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1B1B1B', marginBottom: 3 }}>{item.name}</div>
                                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.06em', color: '#70767A', marginBottom: 2 }}>{item.variant} · {item.material}</div>
                                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, color: '#70767A' }}>{item.brand} · Qty {item.quantity}</div>
                                {item.clientNote && (
                                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, color: '#21493F', marginTop: 4, fontStyle: 'italic' }}>"{item.clientNote}"</div>
                                )}
                              </div>
                              <div style={{ width: 6, height: 6, borderRadius: '50%', background: STATUS_DOT[item.status], flexShrink: 0 }} />
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
                <p style={{ fontFamily: "'Inter', sans-serif", fontStyle: 'italic', fontSize: 18, color: '#70767A' }}>
                  No items configured yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
