<!--
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-24 14:26:45
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-30 23:38:27
-->
<template>
  <div class="container">

    <p>Menuden işlem yapabilirsiniz.</p>
    <p>{{ $t('welcome') }}</p>
   
    <NuxtLink to="ibans">
      <TButton>Ibans</TButton>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    //
  },
  methods: {
  },
  created() {
    
  }
};
</script>
