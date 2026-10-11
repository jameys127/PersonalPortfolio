// Server-side fetches for the public pages. Results are cached for 60 seconds,
// so new or edited projects show up on the public site within a minute.
// If the API can't be reached these return undefined, and the page falls back
// to fetching in the browser like the old CRA app did.
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.jeremiahsheehy.dev';

const fetchJson = async (path) => {
    try{
        const res = await fetch(`${API_URL}${path}`, {next: {revalidate: 60}});
        // The API answers 400/404 when there is nothing to return
        if(res.status === 400 || res.status === 404) return [];
        if(!res.ok) return undefined;
        return await res.json();
    }catch (err){
        console.error(`Failed to fetch ${path}:`, err.message);
        return undefined;
    }
}

export const getProjects = () => fetchJson('/projects');

export const getProject = (slug) => fetchJson(`/projects/${encodeURIComponent(slug)}`);
