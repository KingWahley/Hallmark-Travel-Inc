import { supabase } from './supabaseClient';

// ----------------------------------------------------
// DATABASE API INTERFACE (SUPABASE ONLY)
// ----------------------------------------------------

export async function getBlogPosts(includeDrafts = false) {
  try {
    let query = supabase.from('blog_posts').select('*').order('published_at', { ascending: false });
    
    if (!includeDrafts) {
      // Return all posts that are not drafts (published_at is not null)
      query = query.not('published_at', 'is', null);
    }
    
    const { data, error } = await query;
    if (error) throw error;
    
    return data || [];
  } catch (err) {
    console.error("getBlogPosts: Supabase connection failed:", err);
    throw new Error(`Supabase Database Query Failed: ${err.message || err}`);
  }
}

export async function getBlogPostBySlug(slug) {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .maybeSingle();
    
    if (error) throw error;
    return data || null;
  } catch (err) {
    console.error(`getBlogPostBySlug: Supabase fetch failed for slug "${slug}":`, err);
    throw new Error(`Supabase Fetch Failed: ${err.message || err}`);
  }
}

export async function getBlogPostById(id) {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .maybeSingle();
    
    if (error) throw error;
    return data || null;
  } catch (err) {
    console.error(`getBlogPostById: Supabase fetch failed for ID "${id}":`, err);
    throw new Error(`Supabase Fetch Failed: ${err.message || err}`);
  }
}

export async function saveBlogPost(postData) {
  const isEditing = !!postData.id;
  const postToSave = {
    ...postData,
    updated_at: new Date().toISOString()
  };

  try {
    if (isEditing) {
      const { data, error } = await supabase
        .from('blog_posts')
        .update(postToSave)
        .eq('id', postData.id)
        .select()
        .single();
      if (error) throw error;
      return data;
    } else {
      const { id, ...postToInsert } = postToSave; // let Supabase auto-gen uuid
      const { data, error } = await supabase
        .from('blog_posts')
        .insert(postToInsert)
        .select()
        .single();
      if (error) throw error;
      return data;
    }
  } catch (err) {
    console.error("saveBlogPost: Supabase insert/update failed:", err);
    throw new Error(`Supabase Save Failed: ${err.message || err}`);
  }
}

export async function deleteBlogPost(id) {
  try {
    const { error } = await supabase.from('blog_posts').delete().eq('id', id);
    if (error) throw error;
    return true;
  } catch (err) {
    console.error(`deleteBlogPost: Supabase delete failed for ID "${id}":`, err);
    throw new Error(`Supabase Delete Failed: ${err.message || err}`);
  }
}

export async function submitInquiry(inquiryData) {
  const newInquiry = {
    ...inquiryData,
    status: 'new',
    created_at: new Date().toISOString()
  };

  // Submit to Web3Forms (sends copy to hallmarksconsultancy@gmail.com)
  try {
    if (typeof window !== 'undefined') {
      const formData = new FormData();
      formData.append("access_key", "38ba8e07-d0d3-4c6a-9fae-5208b9a791b9");
      formData.append("name", newInquiry.name || "Subscriber");
      formData.append("email", newInquiry.email);
      if (newInquiry.phone) {
        formData.append("phone", newInquiry.phone);
      }
      if (newInquiry.service) {
        formData.append("subject", `New Inquiry: ${newInquiry.service}`);
        formData.append("service", newInquiry.service);
      } else {
        formData.append("subject", "New Inquiry / Subscription");
      }
      formData.append("message", newInquiry.message || "No message details provided.");

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
    }
  } catch (web3Err) {
    console.error("submitInquiry: Web3Forms submission failed:", web3Err);
  }

  // Submit to Supabase (saves copy for the admin dashboard)
  try {
    const { data, error } = await supabase
      .from('inquiries')
      .insert(newInquiry)
      .select()
      .single();
    if (error) throw error;
    return data;
  } catch (err) {
    console.error("submitInquiry: Supabase submission failed:", err);
    throw new Error(`Supabase Inquiry Submission Failed: ${err.message || err}`);
  }
}

export async function getInquiries() {
  try {
    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    
    return data || [];
  } catch (err) {
    console.error("getInquiries: Supabase fetch failed:", err);
    throw new Error(`Supabase Fetch Failed: ${err.message || err}`);
  }
}

export async function updateInquiryStatus(id, status) {
  try {
    const { data, error } = await supabase
      .from('inquiries')
      .update({ status })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  } catch (err) {
    console.error(`updateInquiryStatus: Supabase status update failed for ID "${id}":`, err);
    throw new Error(`Supabase Status Update Failed: ${err.message || err}`);
  }
}

export async function deleteInquiry(id) {
  try {
    const { error } = await supabase.from('inquiries').delete().eq('id', id);
    if (error) throw error;
    return true;
  } catch (err) {
    console.error(`deleteInquiry: Supabase delete failed for ID "${id}":`, err);
    throw new Error(`Supabase Delete Failed: ${err.message || err}`);
  }
}
