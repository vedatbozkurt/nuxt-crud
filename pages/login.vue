<!--
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-26 15:47:32
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-26 20:07:32
-->
<template lang="html">
  <div class="container">         
    <div class="w-screen h-screen flex justify-center items-center bg-gray-100">
		<form class="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md">
			<svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-gray-600 mb-2" viewbox="0 0 20 20" fill="currentColor">
  			<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
			</svg>
			<p class="mb-5 text-3xl uppercase text-gray-600">Login</p>
			<input type="email" v-model="form.email" class="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none" autocomplete="off" placeholder="Email" required>
			<input type="password" v-model="form.password" class="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none" autocomplete="off" placeholder="Password" required>
			<button class="bg-purple-600 hover:bg-purple-900 text-white font-bold p-2 rounded w-80" type="button" @click="sendLoginRequest"><span>Login</span></button>
		</form>
	</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
middleware: 'guest',
// middleware: 'guest',
  data() {
    return {
      form: {
        email: 'u1@u.com',
        password: 'password',
      },
    }
  },
  created() {
    //   this.sendLoginRequest();
  },
  methods: {
    ...mapActions("auth", ["loginUser"]),
    sendLoginRequest: function() {
      this.loginUser(this.form).then(() => {
        this.$router.push('/')
      });
  }
}
}
</script>