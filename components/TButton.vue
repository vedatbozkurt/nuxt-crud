<!--
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-30 23:36:36
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-30 23:37:51
-->
<template>
  <button class="btn btn-blue">
    <slot>Button</slot>
  </button>
</template>

<style>
.btn {
  @apply font-bold py-2 px-4 rounded;
  &.btn-blue {
    @apply bg-red-500 text-white;
    &:hover {
      @apply bg-red-700;
    }
  }
}
</style>