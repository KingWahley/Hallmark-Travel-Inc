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
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.push('/dashboard');
      }
    };
    checkUser();
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!isSupabaseConfigured) {
      setError('Supabase authentication is not configured. Please define NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your environment configuration.');
      setLoading(false);
      return;
    }

    try {
      const { data, error: authErr } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (authErr) throw authErr;
      
      router.push('/dashboard');
      router.refresh();
    } catch (err) {
      console.error(err);
      setError(err.message || 'Authentication failed. Please verify credentials.');
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 flex items-center justify-center py-16 text-slate-800 font-sans">
      
      {/* Soft elegant background glows */}
      <div className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-[#df6951]/4 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-[#f1a501]/4 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-md w-full px-6 relative z-10">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl text-center">
          
          {/* Logo Header */}
          <div className="flex flex-col items-center gap-2 mb-8">
            <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center border border-slate-100 shadow-sm bg-slate-50">
              <img src="/logo.png" alt="Hallmark Travel Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col mt-2">
              <span className="font-sans font-extrabold text-lg text-slate-800 tracking-tight leading-none">
                Hallmark<span className="text-[#df6951]">.</span>
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold mt-1.5">
                Staff Login Portal
              </span>
            </div>
          </div>

          <h2 className="font-sans font-bold text-lg text-slate-800 mb-2">Sign In to Dashboard</h2>
          <p className="text-xs text-slate-500 font-light mb-6">
            Enter your credentials below to manage customer messages and blog articles.
          </p>

          <form onSubmit={handleLogin} className="flex flex-col gap-5 text-left">
            {error && (
              <div className="p-3.5 bg-red-50 border border-red-200 text-red-655 text-xs rounded-xl flex items-start gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-500" />
                <span>{error}</span>
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[9px] uppercase tracking-wider text-slate-500 font-bold font-mono">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="email" 
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. admin@hallmarktravel.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:border-[#df6951] focus:bg-white focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-[9px] uppercase tracking-wider text-slate-500 font-bold font-mono">Password</label>
              <div className="relative">
                <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="password" 
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:border-[#df6951] focus:bg-white focus:outline-none transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-3 py-3 bg-[#df6951] hover:bg-[#df6951]/95 disabled:bg-[#df6951]/50 disabled:cursor-not-allowed text-white font-semibold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-[#df6951]/10"
            >
              {loading ? (
                <span>Verifying credentials...</span>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Enter Dashboard</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
