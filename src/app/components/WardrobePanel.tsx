import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ArrowRight, ChevronDown, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useWardrobeStore } from '../../store/wardrobeStore';
import { getProductById } from '../../data/catalog';
import { StoragePanel, RetailPanel } from './StorageRetailPanels';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import type { WardrobeZone } from '../../types';

interface WardrobePanelProps {
  open: boolean;
  onClose: () => void;
}

const ZONE_OPTS: { id: WardrobeZone; label: string }[] = [
  { id: 'hanging-full', label: 'Full Rail' },
  { id: 'hanging-half', label: 'Half Rail' },
  { id: 'shelving',     label: 'Shelving' },
  { id: 'drawers',      label: 'Drawers' },
  { id: 'shoe-rack',    label: 'Shoe Rack' },
  { id: 'accessories',  label: 'Accessories' },
];

export function WardrobePanel({ open, onClose }: WardrobePanelProps) {
  const navigate = useNavigate();
  const { activeProject, items, removeItem, updateItemZone, updateItemQuantity } = useWardrobeStore();
  const projectItems = activeProject ? items.filter(i => i.projectId === activeProject.id) : [];
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const { isMobile } = useBreakpoint();

  const handleGoToProject = () => {
    if (activeProject) {
      onClose();
      navigate(`/designer/project/${activeProject.id}`);
    }
  };

  const panelStyle: React.CSSProperties = isMobile
    ? { position: 'fixed', bottom: 0, left: 0, right: 0, width: '100%', maxHeight: '85vh', background: '#F8F7F4', border: '1px solid #D9DFDA', zIndex: 101, display: 'flex', flexDirection: 'column', borderRadius: '16px 16px 0 0' }
    : { position: 'fixed', top: 0, right: 0, bottom: 0, width: 400, background: '#F8F7F4', border: '1px solid #D9DFDA', zIndex: 101, display: 'flex', flexDirection: 'column' };

  const initial = isMobile ? { y: '100%' } : { x: '100%' };
  const animate = isMobile ? { y: 0 } : { x: 0 };
  const exit = isMobile ? { y: '100%' } : { x: '100%' };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 100 }}
          />

          <motion.div
            initial={initial}
            animate={animate}
            exit={exit}
            transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={panelStyle}
          >
            {/* Header */}
            <div style={{ padding: '24px 28px', borderBottom: '1px solid #D9DFDA', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
              <div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#21493F', marginBottom: 4 }}>
                  Wardrobe
                </p>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 20, fontWeight: 400, letterSpacing: '0.1em', color: '#1B1B1B' }}>
                  {activeProject?.name?.split('—')[0]?.trim() ?? 'No Project'}
                </h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: '#70767A' }}>{projectItems.length} items</span>
                <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#70767A' }}>
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Items */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '12px 0' }}>
              {projectItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '48px 28px' }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontStyle: 'italic', fontSize: 15, color: '#70767A' }}>
                    No items added yet.
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: '#D9DFDA' }}>
                  {projectItems.map(item => {
                    const isExpanded = expandedId === item.id;
                    const prod = getProductById(item.categoryId);

                    return (
                      <div key={item.id} style={{ background: '#F8F7F4' }}>
                        {/* Item row */}
                        <div
                          style={{ padding: '12px 16px', display: 'flex', gap: 14, alignItems: 'center', cursor: 'pointer' }}
                          onClick={() => setExpandedId(isExpanded ? null : item.id)}
                        >
                          <img
                            src={item.img}
                            alt={item.name}
                            style={{ width: 56, height: 76, objectFit: 'cover', flexShrink: 0, filter: 'brightness(0.85)' }}
                            referrerPolicy="no-referrer"
                          />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1B1B1B', marginBottom: 3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {item.name}
                            </div>
                            <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: '#3A3A3A', marginBottom: 2 }}>
                              {item.variant}
                            </div>
                            <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: '#70767A', marginBottom: 6 }}>
                              {item.brand} · Qty {item.quantity}
                            </div>
                            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#21493F', background: 'rgba(45,122,92,0.1)', border: '1px solid rgba(45,122,92,0.2)', padding: '2px 7px' }}>
                              {ZONE_OPTS.find(z => z.id === item.zone)?.label ?? item.zone}
                            </span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                              <ChevronDown size={12} color="#70767A" />
                            </motion.div>
                            {confirmDeleteId === item.id ? (
                              <div style={{ display: 'flex', gap: 4 }} onClick={e => e.stopPropagation()}>
                                <button
                                  onClick={() => { removeItem(item.id); setConfirmDeleteId(null); if (expandedId === item.id) setExpandedId(null); }}
                                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: 7, background: '#9F3A2F', color: '#FFFFFF', border: 'none', padding: '3px 7px', cursor: 'pointer', letterSpacing: '0.08em' }}
                                >
                                  Remove
                                </button>
                                <button
                                  onClick={() => setConfirmDeleteId(null)}
                                  style={{ background: 'none', border: '1px solid #A7B9AE', color: '#70767A', padding: '3px 6px', cursor: 'pointer', fontFamily: "'Poppins', sans-serif", fontSize: 7 }}
                                >
                                  ✕
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={e => { e.stopPropagation(); setConfirmDeleteId(item.id); }}
                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#70767A', transition: 'color 0.2s' }}
                                onMouseEnter={e => (e.currentTarget.style.color = '#ff6b6b')}
                                onMouseLeave={e => (e.currentTarget.style.color = '#70767A')}
                              >
                                <Trash2 size={12} />
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Expanded panel */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              style={{ overflow: 'hidden' }}
                            >
                              <div style={{ borderTop: '1px solid #D9DFDA', padding: '14px 16px' }}>

                                {/* Quantity */}
                                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#70767A', marginBottom: 8 }}>Quantity</p>
                                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #D9DFDA', width: 'fit-content', marginBottom: 14 }}>
                                  <button
                                    onClick={() => updateItemQuantity(item.id, Math.max(1, item.quantity - 1))}
                                    style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F1F2EF', border: 'none', cursor: 'pointer', color: '#70767A', borderRight: '1px solid #D9DFDA' }}
                                  >
                                    <Minus size={9} />
                                  </button>
                                  <span style={{ width: 40, textAlign: 'center', fontFamily: "'Poppins', sans-serif", fontSize: 12, color: '#1B1B1B' }}>{item.quantity}</span>
                                  <button
                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                    style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F1F2EF', border: 'none', cursor: 'pointer', color: '#70767A', borderLeft: '1px solid #D9DFDA' }}
                                  >
                                    <Plus size={9} />
                                  </button>
                                </div>

                                {/* Zone selector */}
                                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#70767A', marginBottom: 8 }}>Wardrobe Zone</p>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3, marginBottom: 14 }}>
                                  {ZONE_OPTS.map(z => (
                                    <button
                                      key={z.id}
                                      onClick={() => updateItemZone(item.id, z.id)}
                                      style={{
                                        padding: '6px 4px',
                                        textAlign: 'center',
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: 10,
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        background: item.zone === z.id ? 'rgba(45,122,92,0.12)' : 'none',
                                        color: item.zone === z.id ? '#21493F' : '#70767A',
                                        border: `1px solid ${item.zone === z.id ? 'rgba(45,122,92,0.4)' : '#D9DFDA'}`,
                                        cursor: 'pointer',
                                        transition: 'all 0.15s',
                                      }}
                                    >
                                      {z.label}
                                    </button>
                                  ))}
                                </div>

                                {/* Storage & retail */}
                                {(prod.storage || prod.retail) && (
                                  <div style={{ borderTop: '1px solid #D9DFDA', paddingTop: 12 }}>
                                    {prod.storage && <StoragePanel storage={prod.storage} compact />}
                                    {prod.retail && (
                                      <div style={{ borderTop: prod.storage ? '1px solid #D9DFDA' : 'none', paddingTop: prod.storage ? 12 : 0 }}>
                                        <RetailPanel retail={prod.retail} compact />
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div style={{ padding: '20px 28px', borderTop: '1px solid #D9DFDA', flexShrink: 0 }}>
              <button
                onClick={handleGoToProject}
                className="flex items-center justify-center gap-2"
                style={{ width: '100%', fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', background: '#21493F', color: '#FFFFFF', border: 'none', padding: '14px', cursor: 'pointer', transition: 'background 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#21493F')}
                onMouseLeave={e => (e.currentTarget.style.background = '#21493F')}
              >
                View Project <ArrowRight size={12} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
