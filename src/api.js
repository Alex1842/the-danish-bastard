import axios from 'axios';

export async function apiGet({ url, method = 'GET', data = null }) {
    try {
        const response = await axios({ method, url, data });
        return { data: response.data, error: null };
    } catch (error) {
        return { data: null, error: error.message };
    }
}

export async function handleApiCall(commit, mutationSuccess, apiOptions, callback) {
    const { data, error } = await apiGet(apiOptions);
    if (error) {
        commit('setError', error);
    } else {
        commit(mutationSuccess, data);
        if (typeof callback === 'function') {
            callback(data);
        }
    }
}