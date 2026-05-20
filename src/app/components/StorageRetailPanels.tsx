import { useState } from 'react';
import type React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import type { StorageInfo, RetailInfo } from '../../types';

// ─── Style tokens ─────────────────────────────────────────────────────────────

const LBL: React.CSSProperties = { fontFamily: "'Montserrat', sans-serif", fontSize: 7, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', whiteSpace: 'nowrap' };
const VAL: React.CSSProperties = { fontFamily: "'Montserrat', sans-serif", fontSize: 8, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 };
const HD: React.CSSProperties = { fontFamily: "'Montserrat', sans-serif", fontSize: 7, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: 10, display: 'block' };

const PALETTE = [
  { bg: 'rgba(201,169,110,0.09)', border: 'rgba(201,169,110,0.28)', accent: '#c9a96e' },
  { bg: 'rgba(45,122,92,0.09)',   border: 'rgba(45,122,92,0.28)',   accent: '#2d7a5c' },
  { bg: 'rgba(80,110,200,0.09)',  border: 'rgba(80,110,200,0.22)',  accent: '#7090cc' },
  { bg: 'rgba(180,80,60,0.09)',   border: 'rgba(180,80,60,0.22)',   accent: '#b45040' },
  { bg: 'rgba(120,120,120,0.09)', border: 'rgba(120,120,120,0.2)',  accent: '#888' },
];

function Divider({ compact }: { compact: boolean }) {
  return <div style={{ height: 1, background: '#161616', margin: compact ? '12px 0' : '18px 0' }} />;
}

// ─── Care Icon Grid ───────────────────────────────────────────────────────────

export function CareIconGrid({ care, compact = false }: { care: StorageInfo['care']; compact?: boolean }) {
  return (
    <div style={{ display: 'flex', gap: compact ? 6 : 10, flexWrap: 'wrap' }}>
      {care.map(c => (
        <div key={c.lbl} style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          padding: compact ? '8px 9px' : '11px 13px',
          textAlign: 'center',
          minWidth: compact ? 54 : 68,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 5,
        }}>
          <div style={{ fontSize: compact ? 17 : 22 }}>{c.ico}</div>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: compact ? 5 : 5.5, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', lineHeight: 1.45, textAlign: 'center' }}>{c.lbl}</p>
        </div>
      ))}
    </div>
  );
}

// ─── Blueprint Diagram ────────────────────────────────────────────────────────

export function BlueprintViz({ blueprint, compact = false }: { blueprint: NonNullable<StorageInfo['blueprint']>; compact?: boolean }) {
  const colW = compact ? 46 : 62;

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(5,9,20,0.97) 0%, rgba(3,7,16,0.99) 100%)',
      border: '1px solid rgba(255,255,255,0.07)',
      padding: compact ? '12px 12px 14px' : '16px',
    }}>
      <div style={{ display: 'flex', gap: compact ? 10 : 14, alignItems: 'stretch' }}>

        {/* ── Wardrobe silhouette ── */}
        <div style={{ width: colW, flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
          {/* Cornice */}
          <div style={{ height: 5, background: 'rgba(255,255,255,0.06)', borderRadius: '2px 2px 0 0', border: '1px solid rgba(255,255,255,0.1)', borderBottom: 'none' }} />
          {/* Zone bands */}
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', flex: 1 }}>
            {blueprint.map((zone, i) => {
              const p = PALETTE[i % PALETTE.length];
              const heightNum = zone.height.match(/(\d+)/)?.[1];
              return (
                <div key={zone.zone} style={{
                  flex: 1,
                  background: p.bg,
                  borderBottom: i < blueprint.length - 1 ? '1px dashed rgba(255,255,255,0.07)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: compact ? 24 : 30,
                  position: 'relative',
                  gap: 3,
                }}>
                  {/* Zone rail indicator */}
                  <div style={{ width: '52%', height: 1, background: p.border }} />
                  {/* Height stamp */}
                  {heightNum && (
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: compact ? 4 : 5, color: p.accent, opacity: 0.85, letterSpacing: '0.06em' }}>
                      {heightNum}cm
                    </span>
                  )}
                  {/* Side tick marks */}
                  <div style={{ position: 'absolute', left: 0, top: '50%', width: 5, height: 1, background: p.border, transform: 'translateY(-50%)' }} />
                  <div style={{ position: 'absolute', right: 0, top: '50%', width: 5, height: 1, background: p.border, transform: 'translateY(-50%)' }} />
                </div>
              );
            })}
          </div>
          {/* Floor slab */}
          <div style={{ height: 5, background: 'rgba(255,255,255,0.07)', borderRadius: '0 0 2px 2px', border: '1px solid rgba(255,255,255,0.12)', borderTop: '2px solid rgba(255,255,255,0.16)' }} />

          {/* Depth arrow */}
          {!compact && (
            <div style={{ marginTop: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <span style={{ color: 'rgba(255,255,255,0.14)', fontSize: 7, lineHeight: 1 }}>◄</span>
                <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.1)' }} />
                <span style={{ color: 'rgba(255,255,255,0.14)', fontSize: 7, lineHeight: 1 }}>►</span>
              </div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 4.5, color: 'rgba(255,255,255,0.18)', letterSpacing: '0.22em', textAlign: 'center', marginTop: 3 }}>DEPTH</p>
            </div>
          )}
        </div>

        {/* ── Zone cards ── */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {blueprint.map((zone, i) => {
            const p = PALETTE[i % PALETTE.length];
            return (
              <div key={zone.zone} style={{
                flex: 1,
                background: p.bg,
                border: `1px solid ${p.border}`,
                padding: compact ? '6px 9px' : '8px 11px',
                minHeight: compact ? 24 : 30,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: compact ? 2 : 3,
              }}>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: compact ? 6.5 : 7.5, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: p.accent }}>
                  {zone.zone}
                </span>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <span style={{ ...LBL, fontSize: compact ? 5.5 : 6.5 }}>H — {zone.height}</span>
                  <span style={{ ...LBL, fontSize: compact ? 5.5 : 6.5 }}>D — {zone.depth}</span>
                </div>
                {!compact && (
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 5.5, color: 'rgba(255,255,255,0.2)', lineHeight: 1.45, letterSpacing: '0.04em' }}>
                    {zone.note}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Hanger Visualization ─────────────────────────────────────────────────────

export function HangerViz({ hangers, compact = false }: { hangers: NonNullable<StorageInfo['hangers']>; compact?: boolean }) {
  const sw = compact ? 46 : 58;
  const sh = compact ? 38 : 48;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 6 : 10 }}>
      {hangers.map((h, idx) => (
        <div key={idx} style={{
          background: 'linear-gradient(135deg, rgba(5,9,20,0.97) 0%, rgba(3,7,16,0.99) 100%)',
          border: '1px solid rgba(255,255,255,0.07)',
          padding: compact ? '10px 12px' : '14px 16px',
          display: 'flex',
          gap: compact ? 12 : 18,
          alignItems: 'flex-start',
        }}>
          {/* SVG hanger */}
          <div style={{ flexShrink: 0 }}>
            <svg width={sw} height={sh} viewBox="0 0 58 48">
              {/* Rail bar */}
              <rect x="1" y="3" width="56" height="4" rx="2" fill="rgba(201,169,110,0.18)" stroke="rgba(201,169,110,0.38)" strokeWidth="0.6" />
              {/* Spacing ticks on rail */}
              <line x1="12" y1="1" x2="12" y2="8" stroke="rgba(201,169,110,0.3)" strokeWidth="0.8" />
              <line x1="46" y1="1" x2="46" y2="8" stroke="rgba(201,169,110,0.3)" strokeWidth="0.8" />
              <line x1="12" y1="4.5" x2="46" y2="4.5" stroke="rgba(201,169,110,0.12)" strokeWidth="0.5" strokeDasharray="2,2" />
              {/* Spacing label */}
              <text x="21" y="2" fill="rgba(201,169,110,0.5)" fontSize="4" fontFamily="Montserrat" letterSpacing="0.3">spacing</text>
              {/* Hook curve */}
              <path
                d="M 29 7 L 29 13 Q 29 17 25 19 Q 16 22 8 27 Q 3 30 3 35 Q 3 42 10 44 Q 18 46 29 46 Q 40 46 48 44 Q 55 42 55 35 Q 55 30 50 27 Q 42 22 33 19 Q 29 17 29 13"
                fill="none"
                stroke="rgba(201,169,110,0.45)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Shoulder width callout */}
              <line x1="3" y1="44" x2="55" y2="44" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" strokeDasharray="1.5,2" />
            </svg>
          </div>

          {/* Specs */}
          <div style={{ flex: 1 }}>
            <p style={{ ...VAL, fontSize: compact ? 7 : 7.5, marginBottom: compact ? 5 : 6 }}>{h.type}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 3 : 4 }}>
              {h.barDia && (
                <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
                  <span style={{ ...LBL, fontSize: compact ? 5.5 : 6.5, minWidth: 40 }}>Bar Ø</span>
                  <span style={{ ...VAL, fontSize: compact ? 6.5 : 7 }}>{h.barDia}</span>
                </div>
              )}
              <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
                <span style={{ ...LBL, fontSize: compact ? 5.5 : 6.5, minWidth: 40 }}>Spacing</span>
                <span style={{ ...VAL, fontSize: compact ? 6.5 : 7 }}>{h.spacing}</span>
              </div>
              {h.note && (
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: compact ? 5.5 : 6, color: 'rgba(255,255,255,0.22)', lineHeight: 1.45, marginTop: 2 }}>
                  {h.note}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Lighting Visualization ───────────────────────────────────────────────────

export function LightingViz({ lighting, compact = false }: { lighting: NonNullable<RetailInfo['lighting']>; compact?: boolean }) {
  const angleDeg = Math.min(65, parseInt(lighting.angle.match(/(\d+)/)?.[1] ?? '30'));
  const angleRad = angleDeg * Math.PI / 180;
  const coneH = compact ? 58 : 76;
  const svgW  = compact ? 72 : 92;
  const cx    = svgW / 2;
  const spreadX = Math.min(cx - 2, Math.tan(angleRad) * coneH);
  const conePoints = `${cx},9 ${cx - spreadX},${coneH + 9} ${cx + spreadX},${coneH + 9}`;

  // CCT colour
  const cctNum = parseInt(lighting.cct.match(/(\d{4})/)?.[1] ?? '3500');
  const warmth = Math.max(0, Math.min(1, (cctNum - 2700) / (6500 - 2700)));
  const lightFill = `rgba(${Math.round(255 - warmth * 60)}, ${Math.round(210 + warmth * 25)}, ${Math.round(80 + warmth * 175)}, 0.13)`;

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(5,9,20,0.97) 0%, rgba(3,7,16,0.99) 100%)',
      border: '1px solid rgba(255,255,255,0.07)',
      padding: compact ? '12px' : '16px',
      display: 'flex',
      gap: compact ? 12 : 20,
      alignItems: 'flex-start',
    }}>
      {/* SVG light cone diagram */}
      <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <svg width={svgW} height={coneH + 16} viewBox={`0 0 ${svgW} ${coneH + 16}`}>
          {/* Ceiling rail */}
          <rect x="0" y="0" width={svgW} height="5" rx="1" fill="rgba(255,255,255,0.05)" />
          <rect x="0" y="5" width={svgW} height="1" fill="rgba(255,255,255,0.08)" />
          {/* Track fixture body */}
          <rect x={cx - 7} y="4" width="14" height="6" rx="2" fill="rgba(255,220,140,0.28)" />
          <ellipse cx={cx} cy="10" rx="4.5" ry="2" fill="rgba(255,225,155,0.6)" />
          {/* Cone */}
          <polygon points={conePoints} fill={lightFill} stroke="rgba(255,200,100,0.1)" strokeWidth="0.5" />
          {/* Beam edge lines */}
          <line x1={cx} y1="10" x2={cx - spreadX} y2={coneH + 9} stroke="rgba(255,200,100,0.12)" strokeWidth="0.6" strokeDasharray="3,3" />
          <line x1={cx} y1="10" x2={cx + spreadX} y2={coneH + 9} stroke="rgba(255,200,100,0.12)" strokeWidth="0.6" strokeDasharray="3,3" />
          {/* Angle arc */}
          <path
            d={`M ${cx} 14 L ${cx - 16 * Math.sin(angleRad)},${14 + 16 * Math.cos(angleRad)} A 16 16 0 0 1 ${cx + 16 * Math.sin(angleRad)},${14 + 16 * Math.cos(angleRad)}`}
            fill="none"
            stroke="rgba(201,169,110,0.5)"
            strokeWidth="0.9"
            strokeDasharray="2,2"
          />
          {/* Angle label */}
          <text
            x={cx + 18 * Math.sin(angleRad) + 2}
            y={14 + 18 * Math.cos(angleRad)}
            fill="rgba(201,169,110,0.75)"
            fontSize={compact ? 5.5 : 6.5}
            fontFamily="Montserrat"
            letterSpacing="0.4"
          >{angleDeg}°</text>
          {/* Lux at beam centre */}
          <text x={cx - 9} y={coneH / 2 + 14} fill="rgba(255,255,255,0.3)" fontSize={compact ? 5.5 : 6.5} fontFamily="Montserrat">
            {lighting.lux.split(/[–-]/)[0].trim()}
          </text>
          <text x={cx - 4} y={coneH / 2 + 23} fill="rgba(255,255,255,0.18)" fontSize={compact ? 4.5 : 5.5} fontFamily="Montserrat">lux</text>
          {/* Floor */}
          <rect x="0" y={coneH + 10} width={svgW} height="2" rx="1" fill="rgba(255,255,255,0.06)" />
          <rect x="0" y={coneH + 12} width={svgW} height="1" fill="rgba(255,255,255,0.03)" />
        </svg>

        {/* CCT gradient bar */}
        <div>
          <div style={{ height: 4, borderRadius: 2, background: 'linear-gradient(to right, #ff9933, #ffcc55, #fff5d6, #eef4ff, #bbcfff)', position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: -3,
              left: `${warmth * 100}%`,
              transform: 'translateX(-50%)',
              width: 2,
              height: 10,
              background: '#c9a96e',
              borderRadius: 1,
            }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 4.5, color: 'rgba(255,160,50,0.45)' }}>2700K</span>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 4.5, color: 'rgba(180,210,255,0.45)' }}>6500K</span>
          </div>
        </div>
      </div>

      {/* Spec rows */}
      <div style={{ flex: 1 }}>
        {([
          ['Angle', lighting.angle],
          ['Illuminance', lighting.lux],
          ['Colour Temp', lighting.cct],
          ...(lighting.fixture ? [['Fixture', lighting.fixture]] : []),
        ] as [string, string][]).map(([k, v]) => (
          <div key={k} style={{ display: 'flex', gap: 8, marginBottom: compact ? 6 : 7, alignItems: 'flex-start' }}>
            <span style={{ ...LBL, fontSize: compact ? 5.5 : 7, minWidth: compact ? 50 : 62, paddingTop: 1 }}>{k}</span>
            <span style={{ ...VAL, fontSize: compact ? 7 : 7.5 }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Display Dimensions ───────────────────────────────────────────────────────

export function DimensionViz({ dimensions, compact = false }: { dimensions: NonNullable<RetailInfo['dimensions']>; compact?: boolean }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
      {dimensions.map((d, i) => {
        const p = PALETTE[i % PALETTE.length];
        return (
          <div key={d.label} style={{
            background: 'rgba(5,9,20,0.8)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderLeft: `3px solid ${p.border}`,
            padding: compact ? '8px 10px' : '10px 13px',
          }}>
            <p style={{ ...VAL, fontSize: compact ? 8 : 9.5, color: '#e8e8e8', fontWeight: 500, marginBottom: 3 }}>{d.value}</p>
            <p style={{ ...LBL, fontSize: compact ? 5.5 : 6.5, whiteSpace: 'normal', lineHeight: 1.4 }}>{d.label}</p>
          </div>
        );
      })}
    </div>
  );
}

// ─── Full Storage Panel ───────────────────────────────────────────────────────

export function StoragePanel({ storage, compact = false }: { storage: StorageInfo; compact?: boolean }) {
  const pad = compact ? '0 0 16px' : '4px 32px 28px';
  const headSz = compact ? 6 : 7;

  return (
    <div style={{ padding: pad }}>

      <CareIconGrid care={storage.care} compact={compact} />

      {storage.washing && (
        <>
          <Divider compact={compact} />
          <span style={{ ...HD, fontSize: headSz }}>Washing Instructions</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: compact ? '5px 14px' : '6px 20px' }}>
            {([
              ['Temperature', storage.washing.temp],
              ['Cycle',       storage.washing.cycle],
              ['Drying',      storage.washing.dry],
              ['Ironing',     storage.washing.iron],
              ...(storage.washing.special ? [['Special Care', storage.washing.special]] : []),
            ] as [string, string][]).map(([k, v]) => (
              <div key={k} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <span style={{ ...LBL, fontSize: compact ? 5.5 : 7, paddingTop: 1, minWidth: compact ? 44 : 56 }}>{k}</span>
                <span style={{ ...VAL, fontSize: compact ? 6.5 : 7.5 }}>{v}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {storage.hangers && storage.hangers.length > 0 && (
        <>
          <Divider compact={compact} />
          <span style={{ ...HD, fontSize: headSz }}>Hanger System</span>
          <HangerViz hangers={storage.hangers} compact={compact} />
        </>
      )}

      {storage.blueprint && storage.blueprint.length > 0 && (
        <>
          <Divider compact={compact} />
          <span style={{ ...HD, fontSize: headSz }}>Wardrobe Blueprint</span>
          <BlueprintViz blueprint={storage.blueprint} compact={compact} />
        </>
      )}

      {storage.tips.length > 0 && (
        <>
          <Divider compact={compact} />
          <span style={{ ...HD, fontSize: headSz }}>Care Tips</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 4 : 3 }}>
            {storage.tips.map(t => <p key={t} style={{ ...VAL, fontSize: compact ? 6.5 : 7.5 }}>— {t}</p>)}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Full Retail Panel ────────────────────────────────────────────────────────

export function RetailPanel({ retail, compact = false }: { retail: RetailInfo; compact?: boolean }) {
  const pad = compact ? '0 0 16px' : '4px 32px 28px';
  const headSz = compact ? 6 : 7;

  return (
    <div style={{ padding: pad }}>

      {retail.lighting && (
        <>
          <span style={{ ...HD, fontSize: headSz }}>Lighting Specification</span>
          <LightingViz lighting={retail.lighting} compact={compact} />
        </>
      )}

      {retail.dimensions && retail.dimensions.length > 0 && (
        <>
          <Divider compact={compact} />
          <span style={{ ...HD, fontSize: headSz }}>Display Dimensions</span>
          <DimensionViz dimensions={retail.dimensions} compact={compact} />
        </>
      )}

      <Divider compact={compact} />
      <span style={{ ...HD, fontSize: headSz }}>Showcase Guidelines</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 4 : 3 }}>
        {retail.tips.map(t => <p key={t} style={{ ...VAL, fontSize: compact ? 6.5 : 7.5 }}>— {t}</p>)}
      </div>
    </div>
  );
}

// ─── Accordion wrappers (used in TypePage) ────────────────────────────────────

export function StorageAccordion({ storage }: { storage: StorageInfo }) {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ borderTop: '1px solid #1a1a1a' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>Storage & Care</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={13} color="rgba(255,255,255,0.3)" />
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
  const [open, setOpen] = useState(true);
  return (
    <div style={{ borderTop: '1px solid #1a1a1a' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>Retail Display</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={13} color="rgba(255,255,255,0.3)" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
            <RetailPanel retail={retail} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
