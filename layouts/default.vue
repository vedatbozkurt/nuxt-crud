<!--
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-24 17:30:36
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-27 00:45:02
-->
<template>
    <div>
        <Menu />
        <!-- {{ authToken }} -->
        <nuxt />
    </div>
</template>

<script>
export default {
    computed: {
    // authToken () {
    //   return this.$store.state.auth.authToken
    // }
  },
  mounted() {
    console.log('calistim')
    // this.$store.commit("auth/setLocalStorageToken");
  },
}
</script>