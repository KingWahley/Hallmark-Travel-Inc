'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Compass, KeyRound, Mail, Sparkles, AlertCircle } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if already logged in (via sessionStorage mock or real Supabase)
    const session = sessionStorage.getItem('hallmark_admin_session');
    if (session) {
      router.push('/admin');
    }
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (isSupabaseConfigured) {
      try {
        const { data, error: authErr } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (authErr) throw authErr;
        
        sessionStorage.setItem('hallmark_admin_session', JSON.stringify(data.session));
        router.push('/admin');
        router.refresh();
      } catch (err) {
        console.error(err);
        setError(err.message || 'Authentication failed. Please verify credentials.');
        setLoading(false);
      }
    } else {
      // Mock administrative login check
      setTimeout(() => {
        if (email === 'admin@hallmarktravel.com' && password === 'adminpass') {
          sessionStorage.setItem('hallmark_admin_session', JSON.stringify({
            user: { email: 'admin@hallmarktravel.com', role: 'admin' },
            token: 'mock-session-token'
          }));
          router.push('/admin');
          router.refresh();
        } else {
          setError('Invalid administrative credentials. Use admin@hallmarktravel.com / adminpass for local demo.');
          setLoading(false);
        }
      }, 800);
    }
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center py-16">
      {/* Background glow effects */}
      <div className="absolute top-[20%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[20%] w-[300px] h-[300px] bg-primary-light/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-md w-full px-6 relative z-10">
        <div className="glass p-8 rounded-2xl border border-card-border/80 shadow-2xl shadow-black/20 text-center">
          
          {/* Logo Header */}
          <div className="flex flex-col items-center gap-2 mb-8">
            <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent animate-pulse">
              <Compass className="w-6 h-6" />
            </div>
            <div className="flex flex-col mt-2">
              <span className="font-display font-bold text-lg tracking-[0.25em] text-foreground">
                HALLMARK<span className="text-accent font-normal">ADMIN</span>
              </span>
              <span className="text-[8px] tracking-[0.3em] uppercase text-accent font-light">
                Secure Operations Console
              </span>
            </div>
          </div>

          <h2 className="font-display font-semibold text-lg text-white mb-2">Sign In to Dashboard</h2>
          <p className="text-xs text-foreground/50 font-light mb-6">
            Access travel portfolios, manage inquiry desks, and edit relocation blog assets.
          </p>

          <form onSubmit={handleLogin} className="flex flex-col gap-5 text-left">
            {error && (
              <div className="p-3.5 bg-red-950/45 border border-red-500/20 text-red-400 text-xs rounded-xl flex items-start gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[9px] uppercase tracking-wider text-foreground/60 font-medium">Console Username</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/45" />
                <input 
                  type="email" 
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. admin@hallmarktravel.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-background/85 border border-card-border rounded-xl text-xs text-foreground placeholder-foreground/30 focus:border-accent focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-[9px] uppercase tracking-wider text-foreground/60 font-medium">Console Passkey</label>
              <div className="relative">
                <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/45" />
                <input 
                  type="password" 
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Console password"
                  className="w-full pl-10 pr-4 py-2.5 bg-background/85 border border-card-border rounded-xl text-xs text-foreground placeholder-foreground/30 focus:border-accent focus:outline-none transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-3 py-3.5 bg-accent hover:bg-accent-hover disabled:bg-accent/40 disabled:cursor-not-allowed text-background font-display font-medium text-xs uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-accent/15"
            >
              {loading ? (
                <span>Accessing Cryptographic Vault...</span>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Authenticate Console</span>
                </>
              )}
            </button>
          </form>

          {/* Quick instructions for demo */}
          {!isSupabaseConfigured && (
            <div className="mt-8 p-3 rounded-xl bg-accent/5 border border-accent/15 text-[10px] text-accent/80 font-mono text-center">
              Demo Active: admin@hallmarktravel.com / adminpass
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
