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
      className="editorial-panel"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: 56,
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid #D9DFDA',
        borderRadius: 0,
        display: 'flex',
        alignItems: 'center',
        padding: navPadding,
        gap: isMobile ? 12 : 24,
        boxShadow: '0 1px 0 rgba(27,27,27,0.03)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 20, flexShrink: 0 }}>
        <button
          onClick={() => navigate(backHref)}
          style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', color: '#70767A', transition: 'color 0.2s', padding: 0, borderRadius: 0 }}
          onMouseEnter={e => (e.currentTarget.style.color = '#21493F')}
          onMouseLeave={e => (e.currentTarget.style.color = '#70767A')}
        >
          <ArrowLeft size={13} />
        </button>

        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="/logo.svg" alt="Studio Materium" style={{ height: 26, width: 'auto', objectFit: 'contain' }} />
        </Link>
      </div>

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
                    color: active ? '#21493F' : '#70767A',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px 0',
                    borderBottom: active ? '1px solid #21493F' : '1px solid transparent',
                    transition: 'color 0.25s, border-color 0.25s',
                    borderRadius: 0,
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#21493F'; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = '#70767A'; }}
                >
                  {g.charAt(0).toUpperCase() + g.slice(1)}
                </button>
                {i < 2 && (
                  <span style={{ color: '#D9DFDA', fontSize: 10, margin: '0 18px', userSelect: 'none' }}>|</span>
                )}
              </span>
            );
          })}

          {categoryName && (
            <>
              {showGenderTabs && !isMobile && <span style={{ color: '#D9DFDA', fontSize: 10, margin: '0 16px', userSelect: 'none' }}>›</span>}
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 9,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#21493F',
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

      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
        {activeProject && user?.role === 'designer' && !isMobile && (
          <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#21493F', background: 'rgba(255,255,255,0.72)', border: '1px solid rgba(33,73,63,0.18)', padding: '3px 9px', whiteSpace: 'nowrap', maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis', borderRadius: 999 }}>
            {activeProject.name.split('—')[0].trim()}
          </div>
        )}

        {user?.role === 'designer' && activeProject && (
          <button
            onClick={onOpenTray}
            className="editorial-action-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.78)', border: '1px solid #D9DFDA', color: '#70767A', cursor: 'pointer', padding: isMobile ? '6px 10px' : '6px 14px', fontFamily: "'Poppins', sans-serif", fontSize: 8, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#21493F'; e.currentTarget.style.color = '#21493F'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#D9DFDA'; e.currentTarget.style.color = '#70767A'; }}
          >
            <ShoppingBag size={11} />
            {projectItems.length > 0 && (
              <span style={{ minWidth: 16, height: 16, background: '#21493F', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: '#FFFFFF', fontWeight: 700 }}>
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
