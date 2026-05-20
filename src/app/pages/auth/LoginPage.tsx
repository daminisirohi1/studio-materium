import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { useAuthStore } from '../../../store/authStore';
import { mockUsers } from '../../../data/mockData';
import type { UserRole } from '../../../types';

const roles: { id: UserRole; label: string; desc: string }[] = [
  { id: 'designer', label: 'Designer', desc: 'Configure wardrobes for assigned client projects' },
  { id: 'client',   label: 'Client',   desc: 'Review and approve your wardrobe configuration' },
];

export function LoginPage() {
  const navigate = useNavigate();
  const login = useAuthStore(s => s.login);
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

  const usersForRole = mockUsers.filter(u => u.role === selectedRole);

  const handleUserSelect = (userId: string) => {
    login(userId);
    const user = mockUsers.find(u => u.id === userId);
    if (!user) return;
    if (user.role === 'admin') navigate('/admin');
    else if (user.role === 'designer') navigate('/designer');
    else navigate('/client');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: '#0a0a0a' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-xl"
        style={{ padding: '0 clamp(16px, 5vw, 32px)' }}
      >
        {/* Logo */}
        <div className="text-center mb-16">
          <img src="/logo.png" alt="Studio Materium" style={{ height: 40, width: 'auto', objectFit: 'contain', margin: '0 auto', display: 'block' }} />
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, rgba(201,169,110,0.5))', margin: '20px auto 0' }} />
        </div>

        {/* Role selector */}
        <AnimatePresence mode="wait">
          {!selectedRole ? (
            <motion.div key="roles" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginBottom: 28 }}>
                Select your role to continue
              </p>
              <div className="flex flex-col gap-px" style={{ background: '#1e1e1e' }}>
                {roles.map(role => (
                  <motion.button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    whileHover={{ x: 4 }}
                    className="text-left p-6 transition-colors"
                    style={{ background: '#0a0a0a' }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#111')}
                    onMouseLeave={e => (e.currentTarget.style.background = '#0a0a0a')}
                  >
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', marginBottom: 6 }}>
                      {role.label}
                    </div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>
                      {role.desc}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="users" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <button
                onClick={() => setSelectedRole(null)}
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', background: 'none', border: 'none', cursor: 'pointer', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}
              >
                ← Back
              </button>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 24 }}>
                Select account
              </p>
              <div className="flex flex-col gap-px" style={{ background: '#1e1e1e' }}>
                {usersForRole.map(user => (
                  <motion.button
                    key={user.id}
                    onClick={() => handleUserSelect(user.id)}
                    whileHover={{ x: 4 }}
                    className="text-left p-5 transition-colors"
                    style={{ background: '#0a0a0a' }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#111')}
                    onMouseLeave={e => (e.currentTarget.style.background = '#0a0a0a')}
                  >
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', marginBottom: 3 }}>
                      {user.name}
                    </div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.3)' }}>
                      {user.email}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 12, color: 'rgba(255,255,255,0.15)', textAlign: 'center', marginTop: 48, letterSpacing: '0.1em' }}>
          Crafted with precision. Worn with intention.
        </p>
      </motion.div>
    </div>
  );
}
