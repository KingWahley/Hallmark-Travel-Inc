import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Perform a lightweight query on a table to simulate activity
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id')
      .limit(1);

    if (error) {
      throw error;
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Supabase is awake!', 
      timestamp: new Date().toISOString() 
    });
  } catch (err) {
    console.error('Keep-alive ping failed:', err);
    return NextResponse.json(
      { success: false, error: err.message || err },
      { status: 500 }
    );
  }
}
