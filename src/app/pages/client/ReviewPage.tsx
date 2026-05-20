import { useParams, useNavigate } from 'react-router';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Flag, MessageSquare, X } from 'lucide-react';
import { AppNav } from '../../components/AppNav';
import { useWardrobeStore } from '../../../store/wardrobeStore';
import { getUserById, statusLabels, statusColors } from '../../../data/mockData';
import type { WardrobeItem } from '../../../types';

const ZONES = [
  { id: 'hanging-full',  label: 'Full-Length Rail' },
  { id: 'hanging-half',  label: 'Half-Length Rail' },
  { id: 'shelving',      label: 'Shelving' },
  { id: 'drawers',       label: 'Drawers' },
  { id: 'shoe-rack',     label: 'Shoe Rack' },
  { id: 'accessories',   label: 'Accessories' },
] as const;

function ItemCard({ item, onApprove, onFlag }: { item: WardrobeItem; onApprove: () => void; onFlag: (note: string) => void }) {
  const [showNote, setShowNote] = useState(false);
  const [note, setNote] = useState('');

  const submitFlag = () => {
    onFlag(note);
    setShowNote(false);
    setNote('');
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        background: item.status === 'approved' ? 'rgba(45,122,92,0.08)' : item.status === 'flagged' ? 'rgba(201,169,110,0.08)' : '#0f0f0f',
        border: `1px solid ${item.status === 'approved' ? 'rgba(45,122,92,0.25)' : item.status === 'flagged' ? 'rgba(201,169,110,0.25)' : '#1a1a1a'}`,
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', gap: 20, padding: '20px 24px' }}>
        {/* Image */}
        <div style={{ flexShrink: 0, width: 72, height: 96, overflow: 'hidden' }}>
          <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)' }} referrerPolicy="no-referrer" />
        </div>

        {/* Info */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
            <div>
              <h4 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', marginBottom: 2 }}>
                {item.name}
              </h4>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)' }}>
                {item.variant} · {item.material}
              </p>
            </div>
            {item.status !== 'pending' && (
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: item.status === 'approved' ? '#2d7a5c' : '#c9a96e', border: `1px solid ${item.status === 'approved' ? 'rgba(45,122,92,0.4)' : 'rgba(201,169,110,0.4)'}`, padding: '2px 7px' }}>
                {item.status}
              </span>
            )}
          </div>

          <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, color: 'rgba(255,255,255,0.35)' }}>{item.brand}</span>
            <span style={{ color: '#2a2a2a' }}>·</span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, color: 'rgba(255,255,255,0.35)' }}>Qty {item.quantity}</span>
            <span style={{ color: '#2a2a2a' }}>·</span>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: item.color || '#333', border: '1px solid rgba(255,255,255,0.15)', alignSelf: 'center' }} />
          </div>

          {item.clientNote && (
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, color: '#c9a96e', fontStyle: 'italic', marginBottom: 8 }}>
              Your note: "{item.clientNote}"
            </p>
          )}

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onApprove}
              disabled={item.status === 'approved'}
              className="flex items-center gap-2"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', background: item.status === 'approved' ? 'rgba(45,122,92,0.2)' : 'none', color: item.status === 'approved' ? '#2d7a5c' : 'rgba(255,255,255,0.4)', border: `1px solid ${item.status === 'approved' ? 'rgba(45,122,92,0.4)' : '#333'}`, padding: '6px 12px', cursor: item.status === 'approved' ? 'default' : 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => { if (item.status !== 'approved') { e.currentTarget.style.borderColor = '#2d7a5c'; e.currentTarget.style.color = '#2d7a5c'; } }}
              onMouseLeave={e => { if (item.status !== 'approved') { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; } }}
            >
              <CheckCircle size={10} /> Approve
            </button>

            <button
              onClick={() => setShowNote(!showNote)}
              className="flex items-center gap-2"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', background: item.status === 'flagged' ? 'rgba(201,169,110,0.15)' : 'none', color: item.status === 'flagged' ? '#c9a96e' : 'rgba(255,255,255,0.4)', border: `1px solid ${item.status === 'flagged' ? 'rgba(201,169,110,0.4)' : '#333'}`, padding: '6px 12px', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a96e'; e.currentTarget.style.color = '#c9a96e'; }}
              onMouseLeave={e => { if (item.status !== 'flagged') { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; } }}
            >
              <Flag size={10} /> Flag
            </button>
          </div>
        </div>
      </div>

      {/* Note input */}
      <AnimatePresence>
        {showNote && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden', borderTop: '1px solid #1a1a1a' }}
          >
            <div style={{ padding: '16px 24px', display: 'flex', gap: 12 }}>
              <input
                value={note}
                onChange={e => setNote(e.target.value)}
                placeholder="Describe your feedback…"
                style={{ flex: 1, background: '#111', border: '1px solid #2a2a2a', color: '#fff', padding: '8px 12px', fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.05em', outline: 'none' }}
                onKeyDown={e => { if (e.key === 'Enter') submitFlag(); }}
              />
              <button onClick={submitFlag} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', background: '#c9a96e', color: '#000', border: 'none', padding: '8px 16px', cursor: 'pointer' }}>
                Send
              </button>
              <button onClick={() => setShowNote(false)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', cursor: 'pointer' }}>
                <X size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ReviewPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { projects, items, updateItemStatus } = useWardrobeStore();

  const project = projects.find(p => p.id === projectId);
  if (!project) return <div style={{ color: '#fff', padding: 80 }}>Project not found.</div>;

  const designer = getUserById(project.designerId);
  const projectItems = items.filter(i => i.projectId === projectId);

  const approveAll = () => {
    projectItems.filter(i => i.status === 'pending').forEach(i => updateItemStatus(i.id, 'approved'));
  };
  const approved = projectItems.filter(i => i.status === 'approved').length;
  const pending = projectItems.filter(i => i.status === 'pending').length;

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff' }}>
      <AppNav />

      <div style={{ paddingTop: 80 }}>
        {/* Header */}
        <div style={{ padding: '40px 80px', borderBottom: '1px solid #1a1a1a' }}>
          <button onClick={() => navigate('/client')} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', background: 'none', border: 'none', cursor: 'pointer', marginBottom: 16 }}>
            ← My Wardrobes
          </button>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 300, letterSpacing: '0.08em', color: '#fff', marginBottom: 6 }}>
                {project.name}
              </h1>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>
                Designed by {designer?.name} · {projectItems.length} items
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
              {pending > 0 && (
                <button
                  onClick={approveAll}
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', background: '#2d7a5c', color: '#fff', border: 'none', padding: '10px 18px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, transition: 'background 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#236347')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#2d7a5c')}
                >
                  <CheckCircle size={11} /> Approve All ({pending})
                </button>
              )}
              <div style={{ display: 'flex', gap: 24, textAlign: 'right' }}>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: '#2d7a5c' }}>{approved}</div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Approved</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: '#c9a96e' }}>{pending}</div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Pending</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Items by zone */}
        <div style={{ padding: '48px 80px' }}>
          {ZONES.map(zone => {
            const zoneItems = projectItems.filter(i => i.zone === zone.id);
            if (zoneItems.length === 0) return null;

            return (
              <div key={zone.id} style={{ marginBottom: 48 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', whiteSpace: 'nowrap' }}>
                    {zone.label}
                  </h2>
                  <div style={{ flex: 1, height: 1, background: '#1a1a1a' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, background: '#1a1a1a' }}>
                  {zoneItems.map(item => (
                    <ItemCard
                      key={item.id}
                      item={item}
                      onApprove={() => updateItemStatus(item.id, 'approved')}
                      onFlag={(note) => updateItemStatus(item.id, 'flagged', note)}
                    />
                  ))}
                </div>
              </div>
            );
          })}

          {projectItems.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 20, color: 'rgba(255,255,255,0.2)' }}>
                Your designer is currently configuring your wardrobe.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
