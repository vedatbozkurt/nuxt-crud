<!--
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-24 17:30:36
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-26 18:27:32
-->
<template>
    <div>
        üst: {{ authToken }}
        <nuxt />
        alt
    </div>
</template>

<script>
export default {
    computed: {
    authToken () {
      return this.$store.state.auth.authToken
    }
  }
}
</script>