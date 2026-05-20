import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { User, LogOut, Bell, X } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useWardrobeStore } from '../../store/wardrobeStore';
import { useNotificationStore } from '../../store/notificationStore';
import { useBreakpoint } from '../../hooks/useBreakpoint';

interface AppNavProps {
  showGender?: boolean;
  onGenderSelect?: (g: 'men' | 'women' | 'kids') => void;
}

const NAV_LINKS: Record<string, { label: string; href: string }[]> = {
  admin: [
    { label: 'Projects', href: '/admin' },
    { label: 'Clients',  href: '/admin/clients' },
    { label: 'Designers', href: '/admin/designers' },
    { label: 'Catalogue', href: '/admin/catalogue' },
  ],
  designer: [
    { label: 'My Projects', href: '/designer' },
  ],
  client: [
    { label: 'My Wardrobe', href: '/client' },
  ],
};

const TYPE_COLORS: Record<string, string> = {
  'item-approved': '#2d7a5c',
  'item-flagged': '#c9a96e',
  'review-submitted': '#6ea8c9',
  'project-finalized': '#2d7a5c',
  'item-added': 'rgba(255,255,255,0.4)',
};

export function AppNav({ showGender, onGenderSelect }: AppNavProps) {
  const user = useAuthStore(s => s.user);
  const logout = useAuthStore(s => s.logout);
  const activeProject = useWardrobeStore(s => s.activeProject);
  const navigate = useNavigate();
  const { isMobile, isTablet } = useBreakpoint();

  const { notifications, markRead, markAllRead } = useNotificationStore();
  const unreadCount = notifications.filter(n => !n.read).length;
  const [bellOpen, setBellOpen] = useState(false);
  const bellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bellOpen) return;
    const close = (e: MouseEvent) => {
      if (bellRef.current && !bellRef.current.contains(e.target as Node)) setBellOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [bellOpen]);

  const links = user ? (NAV_LINKS[user.role] ?? []) : [];
  const homeHref = user?.role === 'admin' ? '/admin' : user?.role === 'designer' ? '/designer' : '/client';

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navPadding = isMobile ? '0 16px' : isTablet ? '0 24px' : '0 48px';

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
      style={{ height: 64, background: '#0a0a0a', borderBottom: '1px solid #1a1a1a', padding: navPadding }}
    >
      {/* Logo */}
      <Link to={homeHref} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <img src="/logo.png" alt="Studio Materium" style={{ height: 32, width: 'auto', objectFit: 'contain' }} />
      </Link>

      {/* Centre — gender nav or role nav */}
      {!isMobile && (
        <div className="flex items-center gap-6">
          {showGender && onGenderSelect ? (
            <>
              {(['men', 'women', 'kids'] as const).map((g, i) => (
                <span key={g} className="flex items-center gap-6">
                  <button
                    onClick={() => onGenderSelect(g)}
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 400, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.3s', padding: '2px 0', borderBottom: '1px solid transparent' }}
                    onMouseEnter={e => { (e.currentTarget.style.color = '#c9a96e'); (e.currentTarget.style.borderBottomColor = '#c9a96e'); }}
                    onMouseLeave={e => { (e.currentTarget.style.color = 'rgba(255,255,255,0.6)'); (e.currentTarget.style.borderBottomColor = 'transparent'); }}
                  >
                    {g.charAt(0).toUpperCase() + g.slice(1)}
                  </button>
                  {i < 2 && <span style={{ color: '#2a2a2a', fontSize: 12 }}>|</span>}
                </span>
              ))}
            </>
          ) : (
            links.map(link => (
              <Link
                key={link.href}
                to={link.href}
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 400, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = '#c9a96e')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)')}
              >
                {link.label}
              </Link>
            ))
          )}
        </div>
      )}

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Active project indicator */}
        {activeProject && user?.role === 'designer' && !isMobile && (
          <Link to={`/designer/project/${activeProject.id}`} style={{ textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e', background: 'rgba(201,169,110,0.08)', border: '1px solid rgba(201,169,110,0.2)', padding: '4px 10px' }}>
              {activeProject.name.split('—')[0].trim()}
            </div>
          </Link>
        )}

        {/* Notification bell */}
        {user && (
          <div ref={bellRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setBellOpen(o => !o)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: bellOpen ? '#c9a96e' : 'rgba(255,255,255,0.4)', position: 'relative', padding: 4, transition: 'color 0.2s' }}
            >
              <Bell size={16} />
              {unreadCount > 0 && (
                <span style={{ position: 'absolute', top: 0, right: 0, width: 14, height: 14, background: '#c9a96e', borderRadius: '50%', fontSize: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 600 }}>
                  {unreadCount}
                </span>
              )}
            </button>

            {bellOpen && (
              <div style={{ position: 'absolute', top: 40, right: 0, width: isMobile ? 'calc(100vw - 32px)' : 320, background: '#0f0f0f', border: '1px solid #1e1e1e', zIndex: 999, maxHeight: 420, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', borderBottom: '1px solid #1a1a1a', flexShrink: 0 }}>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
                    Notifications {unreadCount > 0 && `· ${unreadCount} new`}
                  </span>
                  <div className="flex items-center gap-3">
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllRead}
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c9a96e', background: 'none', border: 'none', cursor: 'pointer' }}
                      >
                        Mark all read
                      </button>
                    )}
                    <button onClick={() => setBellOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.3)' }}>
                      <X size={12} />
                    </button>
                  </div>
                </div>
                <div style={{ overflowY: 'auto', flex: 1 }}>
                  {notifications.length === 0 && (
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.2)', padding: '32px 16px', textAlign: 'center', fontStyle: 'italic' }}>No notifications</p>
                  )}
                  {notifications.map(n => (
                    <button
                      key={n.id}
                      onClick={() => markRead(n.id)}
                      style={{ width: '100%', textAlign: 'left', background: n.read ? 'transparent' : 'rgba(201,169,110,0.04)', border: 'none', borderBottom: '1px solid #141414', padding: '14px 16px', cursor: 'pointer', transition: 'background 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
                      onMouseLeave={e => (e.currentTarget.style.background = n.read ? 'transparent' : 'rgba(201,169,110,0.04)')}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: n.read ? '#2a2a2a' : (TYPE_COLORS[n.type] ?? '#c9a96e'), flexShrink: 0, marginTop: 4 }} />
                        <div>
                          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, color: n.read ? 'rgba(255,255,255,0.4)' : '#fff', lineHeight: 1.5, marginBottom: 3 }}>{n.message}</p>
                          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 8, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em' }}>
                            {new Date(n.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* User + logout */}
        {user ? (
          <div className="flex items-center gap-3">
            {!isMobile && (
              <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
                {user.name.split(' ')[0]}
              </div>
            )}
            <button onClick={handleLogout} style={{ color: 'rgba(255,255,255,0.3)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.3s' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#c9a96e')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.3)')}>
              <LogOut size={14} />
            </button>
          </div>
        ) : (
          <Link to="/login"><User size={16} color="rgba(255,255,255,0.4)" /></Link>
        )}
      </div>
    </nav>
  );
}
