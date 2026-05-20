import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ArrowRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useWardrobeStore } from '../../store/wardrobeStore';
import { getProductById } from '../../data/catalog';
import { StoragePanel, RetailPanel } from './StorageRetailPanels';

interface WardrobePanelProps {
  open: boolean;
  onClose: () => void;
}

export function WardrobePanel({ open, onClose }: WardrobePanelProps) {
  const navigate = useNavigate();
  const { activeProject, items, removeItem } = useWardrobeStore();
  const projectItems = activeProject ? items.filter(i => i.projectId === activeProject.id) : [];
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleGoToProject = () => {
    if (activeProject) {
      onClose();
      navigate(`/designer/project/${activeProject.id}`);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 100 }}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: 380, background: '#0a0a0a', border: '1px solid #1a1a1a', zIndex: 101, display: 'flex', flexDirection: 'column' }}
          >
            {/* Header */}
            <div style={{ padding: '24px 28px', borderBottom: '1px solid #1a1a1a', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
              <div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#2d7a5c', marginBottom: 4 }}>
                  Wardrobe
                </p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 400, letterSpacing: '0.1em', color: '#fff' }}>
                  {activeProject?.name?.split('—')[0]?.trim() ?? 'No Project'}
                </h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, color: 'rgba(255,255,255,0.35)' }}>{projectItems.length} items</span>
                <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)' }}>
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Items */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '16px 28px' }}>
              {projectItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 15, color: 'rgba(255,255,255,0.2)' }}>
                    No items added yet.
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: '#1a1a1a' }}>
                  {projectItems.map(item => {
                    const isExpanded = expandedId === item.id;
                    const prod = getProductById(item.categoryId);
                    const storage = prod.storage;
                    const retail = prod.retail;
                    return (
                      <div key={item.id} style={{ background: '#0a0a0a' }}>
                        {/* Item row */}
                        <div
                          style={{ padding: '14px 16px', display: 'flex', gap: 12, alignItems: 'center', cursor: 'pointer' }}
                          onClick={() => setExpandedId(isExpanded ? null : item.id)}
                        >
                          <img src={item.img} alt={item.name} style={{ width: 44, height: 60, objectFit: 'cover', flexShrink: 0, filter: 'brightness(0.8)' }} referrerPolicy="no-referrer" />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', marginBottom: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {item.name}
                            </div>
                            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, color: 'rgba(255,255,255,0.35)' }}>
                              {item.variant} · Qty {item.quantity}
                            </div>
                            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, color: 'rgba(255,255,255,0.25)' }}>
                              {item.brand}
                            </div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                              <ChevronDown size={11} color="rgba(255,255,255,0.25)" />
                            </motion.div>
                            <button
                              onClick={e => { e.stopPropagation(); removeItem(item.id); }}
                              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.2)', transition: 'color 0.2s' }}
                              onMouseEnter={e => (e.currentTarget.style.color = '#ff6b6b')}
                              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.2)')}
                            >
                              <Trash2 size={12} />
                            </button>
                          </div>
                        </div>

                        {/* Expanded storage + retail */}
                        <AnimatePresence>
                          {isExpanded && (storage || retail) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              style={{ overflow: 'hidden' }}
                            >
                              <div style={{ borderTop: '1px solid #141414', padding: '12px 16px 4px' }}>
                                {storage && <StoragePanel storage={storage} compact />}
                                {retail && (
                                  <div style={{ borderTop: storage ? '1px solid #161616' : 'none', paddingTop: storage ? 12 : 0 }}>
                                    <RetailPanel retail={retail} compact />
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
            <div style={{ padding: '20px 28px', borderTop: '1px solid #1a1a1a', flexShrink: 0 }}>
              <button
                onClick={handleGoToProject}
                className="flex items-center justify-center gap-2"
                style={{ width: '100%', fontFamily: "'Montserrat', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', background: '#fff', color: '#000', border: 'none', padding: '13px', cursor: 'pointer', transition: 'background 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#c9a96e')}
                onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
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
