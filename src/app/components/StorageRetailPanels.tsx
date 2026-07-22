import { useState } from 'react';
import type React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import type { StorageInfo, RetailInfo } from '../../types';

const LBL: React.CSSProperties = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: 11,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: '#70767A',
};

const VAL: React.CSSProperties = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: 13,
  letterSpacing: '0.05em',
  color: '#1B1B1B',
  lineHeight: 1.55,
};

const HD: React.CSSProperties = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: 11,
  letterSpacing: '0.32em',
  textTransform: 'uppercase',
  color: '#21493F',
  marginBottom: 12,
  display: 'block',
};

function Divider({ compact }: { compact: boolean }) {
  return <div style={{ height: 1, background: '#D9DFDA', margin: compact ? '14px 0' : '22px 0' }} />;
}

export function CareIconGrid({ care, compact = false }: { care: StorageInfo['care']; compact?: boolean }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fill, minmax(${compact ? 62 : 80}px, 1fr))`, gap: compact ? 6 : 8 }}>
      {care.map(c => (
        <div
          key={c.lbl}
          style={{
            background: '#FFFFFF',
            border: '1px solid #E5E5E5',
            borderRadius: 8,
            padding: compact ? '10px 8px' : '14px 10px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <div style={{ fontSize: compact ? 20 : 26 }}>{c.ico}</div>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: compact ? 9 : 11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#1B1B1B',
              lineHeight: 1.45,
              textAlign: 'center',
            }}
          >
            {c.lbl}
          </p>
        </div>
      ))}
    </div>
  );
}

function WashingTable({ washing, compact }: { washing: NonNullable<StorageInfo['washing']>; compact: boolean }) {
  const rows: [string, string][] = [
    ['Temperature', washing.temp],
    ['Cycle', washing.cycle],
    ['Drying', washing.dry],
    ['Ironing', washing.iron],
    ...(washing.special ? [['Special Care', washing.special] as [string, string]] : []),
  ];

  return (
    <div style={{ border: '1px solid #E5E5E5', borderRadius: 8, overflow: 'hidden', background: '#FFFFFF' }}>
      {rows.map(([k, v], idx) => (
        <div
          key={k}
          style={{
            display: 'grid',
            gridTemplateColumns: compact ? '118px 1fr' : '132px 1fr',
            gap: compact ? 12 : 16,
            alignItems: 'start',
            padding: compact ? '11px 14px' : '13px 16px',
            borderBottom: idx < rows.length - 1 ? '1px solid #E5E5E5' : 'none',
          }}
        >
          <span style={{ ...LBL, fontSize: compact ? 9.5 : 10.5, color: '#1B1B1B' }}>{k}</span>
          <span style={{ ...VAL, fontSize: compact ? 11 : 12.5 }}>{v}</span>
        </div>
      ))}
    </div>
  );
}

export function BlueprintViz({ blueprint, compact = false }: { blueprint: NonNullable<StorageInfo['blueprint']>; compact?: boolean }) {
  const totalZones = blueprint.length;
  const width = compact ? 320 : 820;
  const height = compact ? 300 : 620;
  const rackX = compact ? 124 : 284;
  const rackW = compact ? 132 : 264;
  const rackTop = compact ? 20 : 38;
  const rackBottom = height - (compact ? 34 : 72);
  const usableH = rackBottom - rackTop;
  const rowH = usableH / Math.max(totalZones, 1);
  const leftX = compact ? 40 : 44;
  const leftLineX = compact ? 92 : 184;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 12 : 16 }}>
      <div style={{ background: '#FFFFFF', borderRadius: 8, padding: compact ? 0 : '8px 0 4px', minHeight: compact ? 260 : 620, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="100%" viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Wardrobe blueprint technical diagram" style={{ display: 'block', maxWidth: compact ? 320 : 760 }}>
          <defs>
            <marker id="specArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 z" fill="#1B1B1B" />
            </marker>
          </defs>

          <rect x="0" y="0" width={width} height={height} fill="#FFFFFF" />

          <text x={leftX} y={22} fill="#70767A" fontSize={compact ? 7 : 9} fontFamily="Poppins" letterSpacing="0.22em">180 cm</text>
          <text x={leftX} y={rackTop + rowH + 14} fill="#70767A" fontSize={compact ? 7 : 9} fontFamily="Poppins" letterSpacing="0.22em">30 cm</text>
          <text x={leftX} y={rackBottom - 8} fill="#70767A" fontSize={compact ? 7 : 9} fontFamily="Poppins" letterSpacing="0.22em">20 cm</text>

          <line x1={leftLineX} y1={rackTop - 4} x2={leftLineX} y2={rackBottom} stroke="#1B1B1B" strokeWidth="1" markerStart="url(#specArrow)" markerEnd="url(#specArrow)" />
          <line x1={leftLineX - 4} y1={rackTop - 4} x2={leftLineX + 6} y2={rackTop - 4} stroke="#1B1B1B" strokeWidth="1" />
          <line x1={leftLineX - 4} y1={rackTop + rowH} x2={leftLineX + 6} y2={rackTop + rowH} stroke="#1B1B1B" strokeWidth="1" />
          <line x1={leftLineX - 4} y1={rackBottom} x2={leftLineX + 6} y2={rackBottom} stroke="#1B1B1B" strokeWidth="1" />

          <rect x={rackX - 2} y={rackTop - 10} width={rackW + 4} height={rackBottom - rackTop + 10} fill="none" stroke="#1B1B1B" strokeWidth="1.1" />
          <line x1={rackX + 12} y1={rackTop + 14} x2={rackX + rackW - 12} y2={rackTop + 14} stroke="#1B1B1B" strokeWidth="1.1" />

          {blueprint.map((zone, i) => {
            const rowTop = rackTop + rowH * i;
            const rowCenter = rowTop + rowH / 2;
            const isLast = i === totalZones - 1;
            const lz = zone.zone.toLowerCase();
            const isHang = lz.includes('hang') || lz.includes('jacket') || lz.includes('suit') || lz.includes('shirt') || lz.includes('dress') || lz.includes('coat');
            const isShelf = lz.includes('shelf') || lz.includes('fold') || lz.includes('knitwear');
            const isDraw = lz.includes('draw') || lz.includes('access') || lz.includes('laundry');
            const isShoe = lz.includes('shoe') || lz.includes('boot');

            return (
              <g key={zone.zone}>
                {!isLast && <line x1={rackX} y1={rowTop + rowH} x2={rackX + rackW} y2={rowTop + rowH} stroke="#E5E5E5" strokeWidth="1" />}
                <line x1={leftLineX} y1={rowCenter} x2={rackX - 16} y2={rowCenter} stroke="#21493F" strokeWidth="0.9" markerEnd="url(#specArrow)" />

                {isHang ? (
                  <g transform={`translate(${rackX + 12}, ${rowTop + 20})`}>
                    <line x1="0" y1="0" x2={rackW - 24} y2="0" stroke="#1B1B1B" strokeWidth="1.1" />
                  </g>
                ) : isShelf ? (
                  <g transform={`translate(${rackX + 18}, ${rowTop + 14})`}>
                    <rect x="0" y="0" width={rackW - 36} height="26" fill="none" stroke="#21493F" strokeWidth="1" />
                    <line x1="18" y1="13" x2={rackW - 54} y2="13" stroke="#1B1B1B" strokeWidth="1" />
                  </g>
                ) : isDraw ? (
                  <g transform={`translate(${rackX + 18}, ${rowTop + 14})`}>
                    <rect x="0" y="0" width={rackW - 36} height="18" fill="none" stroke="#21493F" strokeWidth="1" />
                    <line x1="12" y1="9" x2={rackW - 60} y2="9" stroke="#1B1B1B" strokeWidth="1" />
                    <rect x="0" y="22" width={rackW - 36} height="18" fill="none" stroke="#21493F" strokeWidth="1" />
                    <line x1="12" y1="31" x2={rackW - 60} y2="31" stroke="#1B1B1B" strokeWidth="1" />
                  </g>
                ) : isShoe ? (
                  <g transform={`translate(${rackX + 12}, ${rowTop + 20})`}>
                    {[0, 44, 88].map(x => (
                      <path key={x} d={`M ${x} 18 Q ${x + 8} 6 ${x + 22} 14 L ${x + 22} 18 L ${x + 2} 18 Z`} fill="none" stroke="#21493F" strokeWidth="1" />
                    ))}
                  </g>
                ) : null}
              </g>
            );
          })}

          <line x1={rackX} y1={rackBottom + 12} x2={rackX + rackW} y2={rackBottom + 12} stroke="#21493F" strokeWidth="0.9" markerStart="url(#specArrow)" markerEnd="url(#specArrow)" />
          <line x1={rackX} y1={rackBottom + 6} x2={rackX} y2={rackBottom + 18} stroke="#1B1B1B" strokeWidth="1" />
          <line x1={rackX + rackW} y1={rackBottom + 6} x2={rackX + rackW} y2={rackBottom + 18} stroke="#1B1B1B" strokeWidth="1" />
          <text x={rackX + rackW / 2} y={rackBottom + 26} textAnchor="middle" fill="#1B1B1B" fontSize={compact ? 7 : 9} fontFamily="Poppins" letterSpacing="0.18em">DEPTH</text>
        </svg>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 10 : 12 }}>
        {blueprint.map((zone, i) => (
          <div
            key={zone.zone}
            style={{
              padding: compact ? '14px 16px' : '24px 28px',
              border: '1px solid #E5E5E5',
              borderRadius: 8,
              background: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start', marginBottom: 14 }}>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: compact ? 11 : 13, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#21493F' }}>{zone.zone}</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: compact ? 10 : 11, letterSpacing: '0.08em', color: '#1B1B1B' }}>{zone.height}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: zone.note ? 12 : 0, paddingBottom: zone.note ? 12 : 0, borderBottom: zone.note ? '1px solid #E5E5E5' : 'none' }}>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: compact ? 9 : 10, letterSpacing: '0.12em', color: '#70767A', textTransform: 'uppercase' }}>Rail depth</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: compact ? 12 : 13, letterSpacing: '0.06em', color: '#1B1B1B' }}>{zone.depth}</span>
            </div>
            {zone.note && <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: compact ? 10 : 11, color: '#70767A', lineHeight: 1.7 }}>{zone.note}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export function HangerViz({ hangers, compact = false }: { hangers: NonNullable<StorageInfo['hangers']>; compact?: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 12 : 18 }}>
      {hangers.map((h, idx) => (
        <div
          key={idx}
          style={{
            background: '#FFFFFF',
            border: '1px solid #E5E5E5',
            borderRadius: 8,
            padding: compact ? '16px' : '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: compact ? 14 : 18,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: compact ? '4px 0 6px' : '8px 0 12px' }}>
            <svg width="100%" viewBox="0 0 720 260" role="img" aria-label={h.type} style={{ display: 'block', maxWidth: compact ? 360 : 760 }}>
              <defs>
                <marker id={`hangerArrow-${idx}`} markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 z" fill="#1B1B1B" />
                </marker>
              </defs>

              <rect x="0" y="0" width="720" height="260" fill="#FFFFFF" />
              <line x1="84" y1="44" x2="636" y2="44" stroke="#1B1B1B" strokeWidth="1.1" />

              {[180, 360, 540].map(cx => (
                <g key={cx}>
                  <line x1={cx} y1="44" x2={cx} y2="62" stroke="#1B1B1B" strokeWidth="1" />
                  <path d={`M ${cx} 62 Q ${cx - 24} 72 ${cx - 28} 88 Q ${cx - 28} 96 ${cx - 20} 100 L ${cx + 20} 100 Q ${cx + 28} 96 ${cx + 28} 88 Q ${cx + 24} 72 ${cx} 62`} fill="none" stroke="#21493F" strokeWidth="1.2" strokeLinejoin="round" />
                  <line x1={cx - 22} y1="100" x2={cx + 22} y2="100" stroke="#1B1B1B" strokeWidth="1" />
                  <path d={`M ${cx - 14} 100 L ${cx - 14} 154 L ${cx + 14} 154 L ${cx + 14} 100`} fill="none" stroke="#E5E5E5" strokeWidth="1" />
                </g>
              ))}

              <line x1="126" y1="184" x2="594" y2="184" stroke="#21493F" strokeWidth="1" markerStart={`url(#hangerArrow-${idx})`} markerEnd={`url(#hangerArrow-${idx})`} />
              <line x1="126" y1="176" x2="126" y2="192" stroke="#1B1B1B" strokeWidth="1" />
              <line x1="594" y1="176" x2="594" y2="192" stroke="#1B1B1B" strokeWidth="1" />
              <text x="360" y="179" textAnchor="middle" fill="#1B1B1B" fontSize="9" fontFamily="Poppins" letterSpacing="0.14em">8-10 CM SPACING</text>
              <text x="360" y="214" textAnchor="middle" fill="#21493F" fontSize="9" fontFamily="Poppins" letterSpacing="0.14em">TECHNICAL HANGER DETAIL</text>
            </svg>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 10 : 14, minWidth: 0 }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: compact ? 11 : 13, color: '#1B1B1B', letterSpacing: '0.14em', textTransform: 'uppercase', lineHeight: 1.4 }}>
              {h.type}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 10 : 12 }}>
              {h.barDia && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ ...LBL, fontSize: compact ? 9 : 10.5, color: '#1B1B1B' }}>Bar diameter</span>
                  <span style={{ ...VAL, fontSize: compact ? 11 : 13 }}>{h.barDia}</span>
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ ...LBL, fontSize: compact ? 9 : 10.5, color: '#1B1B1B' }}>Spacing</span>
                <span style={{ ...VAL, fontSize: compact ? 11 : 13 }}>{h.spacing}</span>
              </div>

              {h.note && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ ...LBL, fontSize: compact ? 9 : 10.5, color: '#1B1B1B' }}>Description</span>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: compact ? 10 : 12, color: '#70767A', lineHeight: 1.8 }}>{h.note}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function StoragePanel({ storage, compact = false }: { storage: StorageInfo; compact?: boolean }) {
  return (
    <div style={{ padding: compact ? '0 0 16px' : '4px 28px 32px' }}>
      <CareIconGrid care={storage.care} compact={compact} />

      {storage.washing && (
        <>
          <Divider compact={compact} />
          <span style={{ ...HD, fontSize: compact ? 7 : 8 }}>Washing Instructions</span>
          <WashingTable washing={storage.washing} compact={compact} />
        </>
      )}

      {storage.hangers && storage.hangers.length > 0 && (
        <>
          <Divider compact={compact} />
          <span style={{ ...HD, fontSize: compact ? 7 : 8 }}>Hanger System</span>
          <div style={{ marginTop: compact ? 8 : 12 }}>
            <HangerViz hangers={storage.hangers} compact={compact} />
          </div>
        </>
      )}

      {storage.blueprint && storage.blueprint.length > 0 && (
        <>
          <Divider compact={compact} />
          <span style={{ ...HD, fontSize: compact ? 7 : 8 }}>Wardrobe Blueprint</span>
          <div style={{ marginTop: compact ? 8 : 12 }}>
            <BlueprintViz blueprint={storage.blueprint} compact={compact} />
          </div>
        </>
      )}

      {storage.tips.length > 0 && (
        <>
          <Divider compact={compact} />
          <span style={{ ...HD, fontSize: compact ? 7 : 8 }}>Care Tips</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 6 : 8 }}>
            {storage.tips.map(t => (
              <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ color: '#21493F', fontSize: compact ? 8 : 10, flexShrink: 0, marginTop: 1 }}>-</span>
                <p style={{ ...VAL, fontSize: compact ? 11 : 13 }}>{t}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function RetailPanel({ retail }: { retail: RetailInfo; compact?: boolean }) {
  void retail;
  return null;
}

export function StorageAccordion({ storage }: { storage: StorageInfo }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderTop: '1px solid #D9DFDA' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '18px 28px',
          background: open ? '#F1F2EF' : 'none',
          border: 'none',
          cursor: 'pointer',
          transition: 'background 0.2s',
        }}
      >
        <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: open ? '#1B1B1B' : '#70767A', transition: 'color 0.2s' }}>
          Storage &amp; Washing Instructions
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={15} color={open ? '#3A3A3A' : '#70767A'} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
            <StoragePanel storage={storage} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function RetailAccordion({ retail }: { retail: RetailInfo }) {
  void retail;
  return null;
}
