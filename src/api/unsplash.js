import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4cf649829d44ad9eda3f2214d2d331518f732d1247bce5a3c3055fe1f539df47'
    }
});