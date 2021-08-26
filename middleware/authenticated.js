/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-26 18:24:56
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-27 00:37:50
 */
export default function ({ store, redirect }) {
    // If the user is not authenticated
    store.commit("auth/checkToken");
    // console.log(localStorage.getItem('authToken'));
    if (!store.state.auth.authToken) {
      return redirect('/login')
    }

  }