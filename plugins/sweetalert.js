/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-29 21:28:01
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-29 21:35:11
 */
export default ({ app }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('sweetalert', (msg, dna) => {
        console.log(`Hello ${msg}! ${dna}!`)
    }
    )
}