import axios from 'axios';

//axios.defaults.baseURL = 'paraseta.vercel.app';

export async function fetchWorkspace() {
    return await axios.get('/api/workspace').then(res => res.data.workspaces);
}
