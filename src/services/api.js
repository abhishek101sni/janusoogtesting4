import axios from 'axios';

export async function getAuthorizationHeader() {
    const token = 'abc';
    console.log('TOKEN', token);
    if (token) {
        return {
            Authorization: `Bearer ${token}`,
        };
    }
    return null;
}

export async function request(url, method, data, headers) {
    const bearer = await getAuthorizationHeader();

    console.log('AUTHORIZATION TOKEN', bearer);
    var h = { 'Content-Type': 'application/json', ...headers };

    return new Promise((resolve, reject) => {
        const config = {
            url: url,
            method: method,
            data: data,
            // headers: h,
        };
        axios(config)
            .then(response => {
                resolve(response?.data);
            })
            .catch(err => {
                console.log('ERROR RESPONSE', err);
                reject(err?.response?.data);
            });
    });
}

export function apiGet(url, data = {}, headers = {}) {
    return request(url, 'get', data, headers);
}

export function apiPost(url, data = {}, headers = {}) {
    console.log(data);
    return request(url, 'post', data, headers);
}