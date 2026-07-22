import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { useAuthStore } from '../../../store/authStore';
import { mockUsers } from '../../../data/mockData';
import type { UserRole } from '../../../types';

const roles: { id: UserRole; label: string; desc: string }[] = [
  { id: 'designer', label: 'Designer', desc: 'Configure wardrobes for assigned client projects' },
  { id: 'client', label: 'Client', desc: 'Review and approve your wardrobe configuration' },
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
    <div className="editorial-page min-h-screen flex flex-col items-center justify-center" style={{ padding: '32px 0' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-xl"
        style={{ padding: '0 clamp(16px, 5vw, 32px)' }}
      >
        <div className="editorial-panel" style={{ padding: 'clamp(24px, 4vw, 40px)' }}>
          <div className="text-center" style={{ marginBottom: 40 }}>
            <img src="/logo.svg" alt="Studio Materium" style={{ height: 40, width: 'auto', objectFit: 'contain', margin: '0 auto', display: 'block' }} />
            <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, rgba(33,73,63,0.5))', margin: '20px auto 0' }} />
          </div>

          <AnimatePresence mode="wait">
            {!selectedRole ? (
              <motion.div key="roles" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#70767A', textAlign: 'center', marginBottom: 28 }}>
                  Select your role to continue
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {roles.map(role => (
                    <motion.button
                      key={role.id}
                      onClick={() => setSelectedRole(role.id)}
                      whileHover={{ x: 4 }}
                      className="editorial-card text-left transition-colors"
                      style={{ background: '#FFFFFF', padding: 24 }}
                      onMouseEnter={e => (e.currentTarget.style.background = '#F8F7F4')}
                      onMouseLeave={e => (e.currentTarget.style.background = '#FFFFFF')}
                    >
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 24, fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1B1B1B', marginBottom: 6 }}>
                        {role.label}
                      </div>
                      <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.08em', color: '#70767A', lineHeight: 1.6 }}>
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
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#70767A', background: 'none', border: 'none', cursor: 'pointer', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8, borderRadius: 0 }}
                >
                  ← Back
                </button>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#70767A', marginBottom: 24 }}>
                  Select account
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {usersForRole.map(user => (
                    <motion.button
                      key={user.id}
                      onClick={() => handleUserSelect(user.id)}
                      whileHover={{ x: 4 }}
                      className="editorial-card text-left transition-colors"
                      style={{ background: '#FFFFFF', padding: 20 }}
                      onMouseEnter={e => (e.currentTarget.style.background = '#F8F7F4')}
                      onMouseLeave={e => (e.currentTarget.style.background = '#FFFFFF')}
                    >
                      <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#1B1B1B', marginBottom: 3 }}>
                        {user.name}
                      </div>
                      <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.05em', color: '#70767A' }}>
                        {user.email}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p style={{ fontFamily: "'Inter', sans-serif", fontStyle: 'italic', fontSize: 12, color: '#A7B9AE', textAlign: 'center', marginTop: 32, letterSpacing: '0.1em' }}>
          Crafted with precision. Worn with intention.
        </p>
      </motion.div>
    </div>
  );
}
