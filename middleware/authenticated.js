/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-26 18:24:56
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-26 19:02:37
 */
export default function ({ store, redirect }) {
    // If the user is not authenticated
    store.commit("auth/setLocalStorageToken");
    // console.log(localStorage.getItem('authToken'));
    if (!store.state.auth.authToken) {
      return redirect('/login')
    }
  }