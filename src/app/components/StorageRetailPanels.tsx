import { useState } from 'react';
import type React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import type { StorageInfo, RetailInfo } from '../../types';

// ─── Style tokens ─────────────────────────────────────────────────────────────

const LBL: React.CSSProperties = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: 9,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.3)',
};
const VAL: React.CSSProperties = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: 10,
  letterSpacing: '0.06em',
  color: 'rgba(255,255,255,0.7)',
  lineHeight: 1.55,
};
const HD: React.CSSProperties = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: 8,
  letterSpacing: '0.32em',
  textTransform: 'uppercase',
  color: '#c9a96e',
  marginBottom: 12,
  display: 'block',
};

const PALETTE = [
  { bg: 'rgba(201,169,110,0.08)', border: 'rgba(201,169,110,0.3)',  accent: '#c9a96e' },
  { bg: 'rgba(45,122,92,0.08)',   border: 'rgba(45,122,92,0.3)',    accent: '#2d7a5c' },
  { bg: 'rgba(80,110,200,0.08)', border: 'rgba(80,110,200,0.25)',  accent: '#7090cc' },
  { bg: 'rgba(180,80,60,0.08)',  border: 'rgba(180,80,60,0.25)',   accent: '#c06050' },
  { bg: 'rgba(140,100,180,0.08)',border: 'rgba(140,100,180,0.25)', accent: '#9070c0' },
];

function Divider({ compact }: { compact: boolean }) {
  return <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', margin: compact ? '14px 0' : '22px 0' }} />;
}

// ─── Care Icon Grid ───────────────────────────────────────────────────────────

export function CareIconGrid({ care, compact = false }: { care: StorageInfo['care']; compact?: boolean }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fill, minmax(${compact ? 62 : 80}px, 1fr))`, gap: compact ? 6 : 8 }}>
      {care.map(c => (
        <div key={c.lbl} style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderTop: '2px solid rgba(201,169,110,0.2)',
          padding: compact ? '10px 8px' : '14px 10px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
        }}>
          <div style={{ fontSize: compact ? 20 : 26 }}>{c.ico}</div>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: compact ? 6.5 : 7.5,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
            lineHeight: 1.45,
            textAlign: 'center',
          }}>{c.lbl}</p>
        </div>
      ))}
    </div>
  );
}

// ─── Blueprint Diagram ────────────────────────────────────────────────────────

export function BlueprintViz({ blueprint, compact = false }: { blueprint: NonNullable<StorageInfo['blueprint']>; compact?: boolean }) {
  const totalZones = blueprint.length;

  return (
    <div style={{ display: 'flex', gap: compact ? 10 : 16, alignItems: 'stretch' }}>

      {/* ── Left: architectural drawing ── */}
      <div style={{
        flexShrink: 0,
        width: compact ? 100 : 130,
        background: '#0a1628',
        border: '1px solid rgba(100,160,255,0.15)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Blueprint grid */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="bpgrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(100,160,255,0.06)" strokeWidth="0.5" />
            </pattern>
            <pattern id="bpgrid2" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(100,160,255,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bpgrid)" />
          <rect width="100%" height="100%" fill="url(#bpgrid2)" />
        </svg>

        {/* Wardrobe body */}
        <div style={{ position: 'relative', margin: compact ? '10px 12px' : '14px 16px', display: 'flex', flexDirection: 'column', height: compact ? 'calc(100% - 20px)' : 'calc(100% - 28px)' }}>
          {/* Top cornice */}
          <div style={{ height: compact ? 6 : 8, background: 'rgba(100,160,255,0.12)', border: '1px solid rgba(100,160,255,0.3)', borderBottom: 'none', borderRadius: '1px 1px 0 0' }} />

          {/* Zone rows */}
          <div style={{ border: '1px solid rgba(100,160,255,0.25)', flex: 1, display: 'flex', flexDirection: 'column' }}>
            {blueprint.map((zone, i) => {
              const p = PALETTE[i % PALETTE.length];
              const isLast = i === totalZones - 1;
              // Determine zone icon
              const lz = zone.zone.toLowerCase();
              const isHang  = lz.includes('hang') || lz.includes('jacket') || lz.includes('suit') || lz.includes('shirt') || lz.includes('dress') || lz.includes('coat');
              const isShelf = lz.includes('shelf') || lz.includes('fold') || lz.includes('knitwear');
              const isDraw  = lz.includes('draw') || lz.includes('access') || lz.includes('laundry');
              const isShoe  = lz.includes('shoe') || lz.includes('boot');

              return (
                <div key={zone.zone} style={{
                  flex: 1,
                  borderBottom: !isLast ? `1px dashed rgba(100,160,255,0.15)` : 'none',
                  background: `rgba(100,160,255,0.025)`,
                  position: 'relative',
                  minHeight: compact ? 22 : 28,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}>
                  {/* Zone interior element */}
                  {isHang && (
                    <svg width="100%" height="100%" viewBox="0 0 80 28" preserveAspectRatio="xMidYMid meet" style={{ opacity: 0.4 }}>
                      {/* hanging rod */}
                      <line x1="5" y1="6" x2="75" y2="6" stroke={p.accent} strokeWidth="1.2" />
                      {/* garment silhouettes */}
                      {[14, 28, 42, 56].map(x => (
                        <g key={x} transform={`translate(${x}, 6)`}>
                          <line x1="0" y1="0" x2="0" y2="4" stroke={p.accent} strokeWidth="0.8" />
                          <path d="M-6,4 Q-8,10 -7,18 L7,18 Q8,10 6,4 Z" fill={p.bg} stroke={p.border} strokeWidth="0.6" />
                        </g>
                      ))}
                    </svg>
                  )}
                  {isShelf && (
                    <svg width="100%" height="100%" viewBox="0 0 80 28" preserveAspectRatio="xMidYMid meet" style={{ opacity: 0.4 }}>
                      <rect x="5" y="14" width="70" height="1.5" fill={p.accent} opacity="0.5" />
                      <rect x="8" y="7" width="18" height="7" rx="0.5" fill={p.bg} stroke={p.border} strokeWidth="0.6" />
                      <rect x="31" y="7" width="18" height="7" rx="0.5" fill={p.bg} stroke={p.border} strokeWidth="0.6" />
                      <rect x="54" y="7" width="18" height="7" rx="0.5" fill={p.bg} stroke={p.border} strokeWidth="0.6" />
                    </svg>
                  )}
                  {isDraw && (
                    <svg width="100%" height="100%" viewBox="0 0 80 28" preserveAspectRatio="xMidYMid meet" style={{ opacity: 0.4 }}>
                      <rect x="8" y="4" width="64" height="10" rx="1" fill={p.bg} stroke={p.border} strokeWidth="0.7" />
                      <rect x="8" y="16" width="64" height="9" rx="1" fill={p.bg} stroke={p.border} strokeWidth="0.7" />
                      <circle cx="40" cy="9" r="2" fill={p.accent} opacity="0.5" />
                      <circle cx="40" cy="20.5" r="2" fill={p.accent} opacity="0.5" />
                    </svg>
                  )}
                  {isShoe && (
                    <svg width="100%" height="100%" viewBox="0 0 80 28" preserveAspectRatio="xMidYMid meet" style={{ opacity: 0.4 }}>
                      {[10, 32, 54].map(x => (
                        <ellipse key={x} cx={x + 8} cy="16" rx="8" ry="4" fill={p.bg} stroke={p.border} strokeWidth="0.7" />
                      ))}
                    </svg>
                  )}

                  {/* Height label */}
                  <span style={{
                    position: 'absolute',
                    right: 3,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: compact ? 4.5 : 5.5,
                    color: 'rgba(100,180,255,0.45)',
                    letterSpacing: '0.05em',
                  }}>
                    {zone.height.match(/\d+/)?.[0]}
                  </span>

                  {/* Left dimension tick */}
                  <div style={{ position: 'absolute', left: 0, top: 0, width: 3, height: '100%', borderRight: `1px solid ${p.border}`, opacity: 0.5 }} />
                </div>
              );
            })}
          </div>

          {/* Floor */}
          <div style={{
            height: compact ? 4 : 6,
            background: 'rgba(100,160,255,0.1)',
            border: '1px solid rgba(100,160,255,0.3)',
            borderTop: '2px solid rgba(100,160,255,0.35)',
            borderRadius: '0 0 1px 1px',
          }} />

          {/* Depth annotation */}
          <div style={{ marginTop: 5, display: 'flex', alignItems: 'center', gap: 2 }}>
            <span style={{ color: 'rgba(100,160,255,0.3)', fontSize: 6 }}>◄</span>
            <div style={{ flex: 1, height: 0.5, background: 'rgba(100,160,255,0.2)' }} />
            <span style={{ color: 'rgba(100,160,255,0.3)', fontSize: 6 }}>►</span>
          </div>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 5, color: 'rgba(100,160,255,0.3)', letterSpacing: '0.3em', textAlign: 'center', marginTop: 2 }}>DEPTH</p>
        </div>
      </div>

      {/* ── Right: zone data cards ── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
        {blueprint.map((zone, i) => {
          const p = PALETTE[i % PALETTE.length];
          return (
            <div key={zone.zone} style={{
              flex: 1,
              background: p.bg,
              border: `1px solid ${p.border}`,
              borderLeft: `3px solid ${p.accent}`,
              padding: compact ? '8px 10px' : '10px 13px',
              minHeight: compact ? 22 : 28,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: compact ? 3 : 4,
            }}>
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: compact ? 7.5 : 9,
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: p.accent,
              }}>
                {zone.zone}
              </span>
              <div style={{ display: 'flex', gap: compact ? 8 : 14, flexWrap: 'wrap' }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: compact ? 7 : 8, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em' }}>
                  H {zone.height}
                </span>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: compact ? 7 : 8, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em' }}>
                  D {zone.depth}
                </span>
              </div>
              {!compact && zone.note && (
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 7, color: 'rgba(255,255,255,0.22)', lineHeight: 1.5, letterSpacing: '0.04em' }}>
                  {zone.note}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Hanger Visualization ─────────────────────────────────────────────────────

export function HangerViz({ hangers, compact = false }: { hangers: NonNullable<StorageInfo['hangers']>; compact?: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 8 : 12 }}>
      {hangers.map((h, idx) => (
        <div key={idx} style={{
          background: 'linear-gradient(135deg, #09111f 0%, #060c18 100%)',
          border: '1px solid rgba(255,255,255,0.07)',
          padding: compact ? '12px 14px' : '16px 20px',
          display: 'flex',
          gap: compact ? 14 : 22,
          alignItems: 'center',
        }}>
          {/* SVG — rod with hangers */}
          <div style={{ flexShrink: 0 }}>
            <svg width={compact ? 90 : 110} height={compact ? 62 : 78} viewBox="0 0 110 78">
              {/* Wall mount brackets */}
              <rect x="4"  y="10" width="6" height="14" rx="1" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.14)" strokeWidth="0.6" />
              <rect x="100" y="10" width="6" height="14" rx="1" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.14)" strokeWidth="0.6" />

              {/* Hanging rod */}
              <rect x="4" y="17" width="102" height="5" rx="2.5"
                fill="rgba(201,169,110,0.15)"
                stroke="rgba(201,169,110,0.4)"
                strokeWidth="0.8"
              />
              {/* Rod highlight */}
              <rect x="6" y="18" width="98" height="1.5" rx="0.75" fill="rgba(201,169,110,0.2)" />

              {/* Three hangers */}
              {[24, 55, 86].map((cx, hi) => (
                <g key={hi}>
                  {/* Hanging hook */}
                  <path
                    d={`M ${cx} 22 L ${cx} 26 Q ${cx} 30 ${cx - 2} 32`}
                    fill="none"
                    stroke="rgba(201,169,110,0.55)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  {/* Hanger body */}
                  <path
                    d={`M ${cx} 32 Q ${cx - 18} 38 ${cx - 20} 46 Q ${cx - 20} 50 ${cx - 14} 52 L ${cx + 14} 52 Q ${cx + 20} 50 ${cx + 20} 46 Q ${cx + 18} 38 ${cx} 32`}
                    fill="rgba(201,169,110,0.07)"
                    stroke="rgba(201,169,110,0.35)"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                  {/* Cross bar */}
                  <line x1={cx - 14} y1="52" x2={cx + 14} y2="52" stroke="rgba(201,169,110,0.3)" strokeWidth="1.1" />

                  {/* Garment silhouette */}
                  <rect
                    x={cx - 13}
                    y="52"
                    width="26"
                    height={compact ? 16 : 20}
                    rx="1"
                    fill={`rgba(255,255,255,${hi === 1 ? 0.04 : 0.025})`}
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="0.5"
                  />
                </g>
              ))}

              {/* Spacing dimension callout */}
              <line x1="24" y1="6" x2="55" y2="6" stroke="rgba(201,169,110,0.25)" strokeWidth="0.6" />
              <line x1="24" y1="4" x2="24" y2="8" stroke="rgba(201,169,110,0.25)" strokeWidth="0.6" />
              <line x1="55" y1="4" x2="55" y2="8" stroke="rgba(201,169,110,0.25)" strokeWidth="0.6" />
              <text x="31" y="4" fill="rgba(201,169,110,0.45)" fontSize="5" fontFamily="Poppins" letterSpacing="0.15">spacing</text>
            </svg>
          </div>

          {/* Specs */}
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: compact ? 9 : 10, color: 'rgba(255,255,255,0.7)', marginBottom: compact ? 8 : 10, letterSpacing: '0.06em' }}>
              {h.type}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 5 : 6 }}>
              {h.barDia && (
                <div style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}>
                  <span style={{ ...LBL, fontSize: compact ? 7 : 8, minWidth: compact ? 46 : 56 }}>Bar Ø</span>
                  <span style={{ ...VAL, fontSize: compact ? 8 : 9 }}>{h.barDia}</span>
                </div>
              )}
              <div style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}>
                <span style={{ ...LBL, fontSize: compact ? 7 : 8, minWidth: compact ? 46 : 56 }}>Spacing</span>
                <span style={{ ...VAL, fontSize: compact ? 8 : 9 }}>{h.spacing}</span>
              </div>
              {h.note && (
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: compact ? 7 : 8, color: 'rgba(255,255,255,0.25)', lineHeight: 1.5, marginTop: 2 }}>
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
  const angleDeg = Math.min(70, parseInt(lighting.angle.match(/(\d+)/)?.[1] ?? '35'));
  const angleRad = angleDeg * Math.PI / 180;
  const svgW  = compact ? 100 : 120;
  const svgH  = compact ? 90 : 110;
  const cx    = svgW / 2;
  const coneY = 18;
  const coneH = svgH - coneY - 10;
  const spreadX = Math.min(cx - 4, Math.tan(angleRad / 2) * coneH);

  const cctNum  = parseInt(lighting.cct.match(/(\d{4})/)?.[1] ?? '3500');
  const warmth  = Math.max(0, Math.min(1, (cctNum - 2700) / (6500 - 2700)));
  const coneR   = Math.round(255 - warmth * 60);
  const coneG   = Math.round(220 - warmth * 30);
  const coneB   = Math.round(100 + warmth * 155);

  return (
    <div style={{
      background: 'linear-gradient(135deg, #09111f 0%, #060c18 100%)',
      border: '1px solid rgba(255,255,255,0.07)',
      padding: compact ? '14px' : '18px',
      display: 'flex',
      gap: compact ? 14 : 22,
      alignItems: 'flex-start',
    }}>
      {/* Diagram */}
      <div style={{ flexShrink: 0 }}>
        <svg width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`}>
          <defs>
            <radialGradient id="coneGrad" cx="50%" cy="0%" r="100%">
              <stop offset="0%" stopColor={`rgb(${coneR},${coneG},${coneB})`} stopOpacity="0.35" />
              <stop offset="70%" stopColor={`rgb(${coneR},${coneG},${coneB})`} stopOpacity="0.12" />
              <stop offset="100%" stopColor={`rgb(${coneR},${coneG},${coneB})`} stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ceiling track */}
          <rect x="0" y="0" width={svgW} height="6" rx="1" fill="rgba(255,255,255,0.06)" />
          <rect x="0" y="6" width={svgW} height="1" fill="rgba(255,255,255,0.1)" />

          {/* Track fixture */}
          <rect x={cx - 10} y="5" width="20" height="9" rx="2" fill="rgba(255,220,140,0.2)" stroke="rgba(255,220,140,0.3)" strokeWidth="0.6" />
          {/* Lens */}
          <ellipse cx={cx} cy="14" rx="5.5" ry="2.5" fill="rgba(255,235,180,0.7)" />
          <ellipse cx={cx} cy="14" rx="3" ry="1.5" fill="rgba(255,248,220,0.9)" />

          {/* Light cone with gradient fill */}
          <polygon
            points={`${cx},${coneY} ${cx - spreadX},${svgH - 10} ${cx + spreadX},${svgH - 10}`}
            fill="url(#coneGrad)"
          />

          {/* Beam edge lines */}
          <line x1={cx} y1={coneY} x2={cx - spreadX} y2={svgH - 10}
            stroke={`rgba(${coneR},${coneG},${coneB},0.2)`} strokeWidth="0.8" strokeDasharray="3,3" />
          <line x1={cx} y1={coneY} x2={cx + spreadX} y2={svgH - 10}
            stroke={`rgba(${coneR},${coneG},${coneB},0.2)`} strokeWidth="0.8" strokeDasharray="3,3" />

          {/* Angle arc */}
          <path
            d={`M ${cx - 16 * Math.sin(angleRad / 2)},${coneY + 16 * Math.cos(angleRad / 2)}
                A 16 16 0 0 1 ${cx + 16 * Math.sin(angleRad / 2)},${coneY + 16 * Math.cos(angleRad / 2)}`}
            fill="none"
            stroke="rgba(201,169,110,0.5)"
            strokeWidth="0.9"
            strokeDasharray="2,2"
          />
          <text
            x={cx + 18 * Math.sin(angleRad / 2) + 2}
            y={coneY + 18 * Math.cos(angleRad / 2) + 3}
            fill="rgba(201,169,110,0.8)"
            fontSize={compact ? 7 : 8}
            fontFamily="Poppins"
          >{angleDeg}°</text>

          {/* Lux centre label */}
          <text x={cx - 8} y={coneY + coneH * 0.45}
            fill={`rgba(${coneR},${coneG},${coneB},0.6)`}
            fontSize={compact ? 7 : 8.5}
            fontFamily="Poppins"
            fontWeight="600"
          >{lighting.lux.split(/[–-]/)[0].trim()}</text>
          <text x={cx - 4} y={coneY + coneH * 0.45 + 9}
            fill={`rgba(${coneR},${coneG},${coneB},0.35)`}
            fontSize={compact ? 6 : 7}
            fontFamily="Poppins"
          >lux</text>

          {/* Floor */}
          <rect x="0" y={svgH - 10} width={svgW} height="3" rx="0.5" fill="rgba(255,255,255,0.07)" />
          <rect x="0" y={svgH - 7}  width={svgW} height="1" fill="rgba(255,255,255,0.04)" />
        </svg>

        {/* CCT bar */}
        <div style={{ marginTop: 8 }}>
          <div style={{ height: 5, borderRadius: 3, background: 'linear-gradient(to right, #ff8c00, #ffc84a, #fff4d6, #e8f0ff, #aac0ff)', position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: -4,
              left: `${warmth * 100}%`,
              transform: 'translateX(-50%)',
              width: 2.5,
              height: 13,
              background: '#c9a96e',
              borderRadius: 1.5,
            }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 6, color: 'rgba(255,150,50,0.5)' }}>2700K warm</span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 6, color: 'rgba(170,200,255,0.5)' }}>6500K cool</span>
          </div>
        </div>
      </div>

      {/* Spec rows */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: compact ? 8 : 10 }}>
        {([
          ['Beam angle', lighting.angle],
          ['Illuminance', lighting.lux],
          ['Colour temp', lighting.cct],
          ...(lighting.fixture ? [['Fixture', lighting.fixture]] : []),
        ] as [string, string][]).map(([k, v]) => (
          <div key={k}>
            <p style={{ ...LBL, fontSize: compact ? 7 : 8, marginBottom: 3 }}>{k}</p>
            <p style={{ ...VAL, fontSize: compact ? 8.5 : 9.5 }}>{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Display Dimensions ───────────────────────────────────────────────────────

export function DimensionViz({ dimensions, compact = false }: { dimensions: NonNullable<RetailInfo['dimensions']>; compact?: boolean }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: compact ? 4 : 6 }}>
      {dimensions.map((d, i) => {
        const p = PALETTE[i % PALETTE.length];
        return (
          <div key={d.label} style={{
            background: p.bg,
            border: `1px solid ${p.border}`,
            borderTop: `3px solid ${p.accent}`,
            padding: compact ? '10px 12px' : '13px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
          }}>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: compact ? 14 : 18,
              fontWeight: 600,
              color: p.accent,
              letterSpacing: '0.04em',
              lineHeight: 1,
            }}>{d.value}</p>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: compact ? 7 : 8,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              lineHeight: 1.4,
            }}>{d.label}</p>
          </div>
        );
      })}
    </div>
  );
}

// ─── Washing Table ────────────────────────────────────────────────────────────

function WashingTable({ washing, compact }: { washing: NonNullable<StorageInfo['washing']>; compact: boolean }) {
  const rows: [string, string][] = [
    ['Temperature', washing.temp],
    ['Cycle',       washing.cycle],
    ['Drying',      washing.dry],
    ['Ironing',     washing.iron],
    ...(washing.special ? [['Special Care', washing.special] as [string, string]] : []),
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 8 : 10 }}>
      {rows.map(([k, v]) => (
        <div key={k} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', paddingBottom: compact ? 8 : 10, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
          <span style={{ ...LBL, fontSize: compact ? 7.5 : 9, minWidth: compact ? 64 : 80, paddingTop: 1, flexShrink: 0 }}>{k}</span>
          <span style={{ ...VAL, fontSize: compact ? 8.5 : 10 }}>{v}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Full Storage Panel ───────────────────────────────────────────────────────

export function StoragePanel({ storage, compact = false }: { storage: StorageInfo; compact?: boolean }) {
  return (
    <div style={{ padding: compact ? '0 0 16px' : '4px 32px 32px' }}>
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
          <HangerViz hangers={storage.hangers} compact={compact} />
        </>
      )}

      {storage.blueprint && storage.blueprint.length > 0 && (
        <>
          <Divider compact={compact} />
          <span style={{ ...HD, fontSize: compact ? 7 : 8 }}>Wardrobe Blueprint</span>
          <BlueprintViz blueprint={storage.blueprint} compact={compact} />
        </>
      )}

      {storage.tips.length > 0 && (
        <>
          <Divider compact={compact} />
          <span style={{ ...HD, fontSize: compact ? 7 : 8 }}>Care Tips</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 6 : 8 }}>
            {storage.tips.map(t => (
              <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ color: '#c9a96e', fontSize: compact ? 8 : 10, flexShrink: 0, marginTop: 1 }}>—</span>
                <p style={{ ...VAL, fontSize: compact ? 8.5 : 10 }}>{t}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Full Retail Panel ────────────────────────────────────────────────────────

export function RetailPanel({ retail, compact = false }: { retail: RetailInfo; compact?: boolean }) {
  return (
    <div style={{ padding: compact ? '0 0 16px' : '4px 32px 32px' }}>
      {retail.lighting && (
        <>
          <span style={{ ...HD, fontSize: compact ? 7 : 8 }}>Lighting Specification</span>
          <LightingViz lighting={retail.lighting} compact={compact} />
        </>
      )}

      {retail.dimensions && retail.dimensions.length > 0 && (
        <>
          <Divider compact={compact} />
          <span style={{ ...HD, fontSize: compact ? 7 : 8 }}>Display Dimensions</span>
          <DimensionViz dimensions={retail.dimensions} compact={compact} />
        </>
      )}

      {retail.tips.length > 0 && (
        <>
          <Divider compact={compact} />
          <span style={{ ...HD, fontSize: compact ? 7 : 8 }}>Showcase Guidelines</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 6 : 8 }}>
            {retail.tips.map(t => (
              <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ color: '#c9a96e', fontSize: compact ? 8 : 10, flexShrink: 0, marginTop: 1 }}>—</span>
                <p style={{ ...VAL, fontSize: compact ? 8.5 : 10 }}>{t}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Accordion wrappers (TypePage) ────────────────────────────────────────────

export function StorageAccordion({ storage }: { storage: StorageInfo }) {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ borderTop: '1px solid #1a1a1a' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
          Storage & Care
        </span>
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
        <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
          Retail Display
        </span>
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
