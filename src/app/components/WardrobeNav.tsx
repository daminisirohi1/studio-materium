import { Link, useNavigate } from 'react-router';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useWardrobeStore } from '../../store/wardrobeStore';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import type { Gender } from '../../types';

interface WardrobeNavProps {
  gender: Gender;
  onGenderSelect: (g: Gender) => void;
  categoryName?: string;
  onOpenTray?: () => void;
  showGenderTabs?: boolean;
}

const GENDERS: Gender[] = ['men', 'women', 'kids'];

export function WardrobeNav({ gender, onGenderSelect, categoryName, onOpenTray, showGenderTabs = true }: WardrobeNavProps) {
  const user = useAuthStore(s => s.user);
  const { activeProject, items } = useWardrobeStore();
  const navigate = useNavigate();
  const { isMobile, isTablet } = useBreakpoint();

  const projectItems = activeProject ? items.filter(i => i.projectId === activeProject.id) : [];
  const backHref = user?.role === 'admin' ? '/admin' : user?.role === 'designer' ? '/designer' : '/client';

  const navPadding = isMobile ? '0 16px' : isTablet ? '0 24px' : '0 40px';

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        height: 56,
        background: 'rgba(8,8,8,0.88)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center',
        padding: navPadding,
        gap: isMobile ? 12 : 24,
      }}
    >
      {/* Left — back + logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 20, flexShrink: 0 }}>
        <button
          onClick={() => navigate(backHref)}
          style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.3)', transition: 'color 0.2s', padding: 0 }}
          onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
        >
          <ArrowLeft size={13} />
        </button>

        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Studio Materium" style={{ height: 26, width: 'auto', objectFit: 'contain' }} />
        </Link>
      </div>

      {/* Center — gender tabs + optional breadcrumb */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, overflow: 'hidden' }}>
          {showGenderTabs && !isMobile && GENDERS.map((g, i) => {
            const active = g === gender;
            return (
              <span key={g} style={{ display: 'flex', alignItems: 'center' }}>
                <button
                  onClick={() => onGenderSelect(g)}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 9,
                    fontWeight: active ? 600 : 400,
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: active ? '#fff' : 'rgba(255,255,255,0.28)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px 0',
                    borderBottom: active ? '1px solid rgba(255,255,255,0.5)' : '1px solid transparent',
                    transition: 'color 0.25s, border-color 0.25s',
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'rgba(255,255,255,0.28)'; }}
                >
                  {g.charAt(0).toUpperCase() + g.slice(1)}
                </button>
                {i < 2 && (
                  <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: 10, margin: '0 18px', userSelect: 'none' }}>|</span>
                )}
              </span>
            );
          })}

          {categoryName && (
            <>
              {showGenderTabs && !isMobile && <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: 10, margin: '0 16px', userSelect: 'none' }}>›</span>}
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 9,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#c9a96e',
                fontWeight: 500,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: isMobile ? 140 : 'none',
              }}>
                {categoryName}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Right — wardrobe tray (designer only) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
        {activeProject && user?.role === 'designer' && !isMobile && (
          <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c9a96e', background: 'rgba(201,169,110,0.08)', border: '1px solid rgba(201,169,110,0.18)', padding: '3px 9px', whiteSpace: 'nowrap', maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {activeProject.name.split('—')[0].trim()}
          </div>
        )}

        {user?.role === 'designer' && activeProject && (
          <button
            onClick={onOpenTray}
            style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.55)', cursor: 'pointer', padding: isMobile ? '6px 10px' : '6px 14px', fontFamily: "'Poppins', sans-serif", fontSize: 8, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a96e'; e.currentTarget.style.color = '#c9a96e'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
          >
            <ShoppingBag size={11} />
            {projectItems.length > 0 && (
              <span style={{ minWidth: 16, height: 16, background: '#c9a96e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: '#000', fontWeight: 700 }}>
                {projectItems.length}
              </span>
            )}
            {!isMobile && 'Wardrobe'}
          </button>
        )}
      </div>
    </nav>
  );
}
