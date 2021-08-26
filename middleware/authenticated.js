/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-26 16:33:37
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-26 16:36:16
 */
export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (localStorage.getItem('authToken')) {
      return redirect('/login')
    }
  }