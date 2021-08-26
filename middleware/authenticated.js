/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-26 18:24:56
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-26 18:24:56
 */
export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.auth.authToken) {
      return redirect('/login')
    }
  }