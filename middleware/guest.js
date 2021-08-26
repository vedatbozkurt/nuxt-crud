/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-26 18:24:23
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-27 00:37:52
 */
export default function ({ store, redirect }) {
    // If the user is not authenticated
    store.commit("auth/checkToken");
    if (store.state.auth.authToken) {
      return redirect('/ibans')
    }
  }