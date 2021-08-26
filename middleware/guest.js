/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-26 18:24:23
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-26 18:26:49
 */
export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (store.state.auth.authToken) {
      return redirect('/ibans')
    }
  }