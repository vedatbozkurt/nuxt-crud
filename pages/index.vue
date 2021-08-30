<!--
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-24 14:26:45
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-30 15:55:21
-->
<template>
  <div class="container">

    <p>Menuden işlem yapabilirsiniz.</p>
    <p>{{ $t('welcome') }}</p>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
  availableLocales () {
    return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
  }
},
  methods: {
  },
  created() {
    
  }
};
</script>
