import { Link, useNavigate } from 'react-router';
import { User, LogOut, Bell } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useWardrobeStore } from '../../store/wardrobeStore';
import { mockNotifications } from '../../data/mockData';

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

export function AppNav({ showGender, onGenderSelect }: AppNavProps) {
  const user = useAuthStore(s => s.user);
  const logout = useAuthStore(s => s.logout);
  const activeProject = useWardrobeStore(s => s.activeProject);
  const navigate = useNavigate();

  const unreadCount = mockNotifications.filter(n => !n.read).length;
  const links = user ? (NAV_LINKS[user.role] ?? []) : [];
  const homeHref = user?.role === 'admin' ? '/admin' : user?.role === 'designer' ? '/designer' : '/client';

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
      style={{ height: 64, background: '#0a0a0a', borderBottom: '1px solid #1a1a1a', padding: '0 48px' }}
    >
      {/* Logo */}
      <Link to={homeHref} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <img src="/logo.png" alt="Studio Materium" style={{ height: 32, width: 'auto', objectFit: 'contain' }} />
      </Link>

      {/* Centre — gender nav (wardrobe builder) or role nav */}
      <div className="flex items-center gap-6">
        {showGender && onGenderSelect ? (
          <>
            {(['men', 'women', 'kids'] as const).map((g, i) => (
              <span key={g} className="flex items-center gap-6">
                <button
                  onClick={() => onGenderSelect(g)}
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 400, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.3s', padding: '2px 0', borderBottom: '1px solid transparent' }}
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
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 400, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = '#c9a96e')}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)')}
            >
              {link.label}
            </Link>
          ))
        )}
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Active project indicator */}
        {activeProject && user?.role === 'designer' && (
          <Link to={`/designer/project/${activeProject.id}`} style={{ textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e', background: 'rgba(201,169,110,0.08)', border: '1px solid rgba(201,169,110,0.2)', padding: '4px 10px' }}>
              {activeProject.name.split('—')[0].trim()}
            </div>
          </Link>
        )}

        {/* Notification bell */}
        {user && (
          <div className="relative" style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.4)' }}>
            <Bell size={16} />
            {unreadCount > 0 && (
              <span style={{ position: 'absolute', top: -4, right: -4, width: 14, height: 14, background: '#c9a96e', borderRadius: '50%', fontSize: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 600 }}>
                {unreadCount}
              </span>
            )}
          </div>
        )}

        {/* User + logout */}
        {user ? (
          <div className="flex items-center gap-3">
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
              {user.name.split(' ')[0]}
            </div>
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
