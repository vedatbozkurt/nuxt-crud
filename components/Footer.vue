<!--
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-30 17:00:59
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-30 17:04:18
-->
<template>
  <footer class="bg-gray-800 pt-10 sm:mt-10 pt-10">
    <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
      <div class="lang-dropdown">
        <select @change="(e) => $i18n.setLocale(e.target.value)">
          <option
            v-for="lang in $i18n.locales"
            :key="lang.code"
            :value="lang.code"
            onchange="changeLocale"
          >
            {{ lang.name }}
          </option>
        </select>
      </div>
    </div>

    <!-- Copyright Bar -->
    <div class="pt-2">
      <div
        class="
          flex
          pb-5
          px-3
          m-auto
          pt-5
          border-t border-gray-500
          text-gray-400 text-sm
          flex-col
          md:flex-row
          max-w-6xl
        "
      >
        <div class="mt-2">© Copyright 1998-year. All Rights Reserved.</div>

        <!-- Required Unicons (if you want) -->
        <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <a href="#" class="w-6 mx-1">
            <i class="uil uil-facebook-f"></i>
          </a>
          <a href="#" class="w-6 mx-1">
            <i class="uil uil-twitter-alt"></i>
          </a>
          <a href="#" class="w-6 mx-1">
            <i class="uil uil-youtube"></i>
          </a>
          <a href="#" class="w-6 mx-1">
            <i class="uil uil-linkedin"></i>
          </a>
          <a href="#" class="w-6 mx-1">
            <i class="uil uil-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>