/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-24 15:05:28
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-27 01:06:36
 */
export default function ({ store, app: { $axios, localePath }, redirect }) {
    $axios.onRequest(config => {
        config.headers.common['Authorization'] = `Bearer ${store.state.auth.authToken}`;
    });
    // const token = store.state.auth.authToken
    // $axios.setToken(token, 'Bearer')
}