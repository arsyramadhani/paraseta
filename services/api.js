import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export async function fetchWorkspace() {
    return await axios.get('/api/workspace').then(res => res.data.workspaces);
}
