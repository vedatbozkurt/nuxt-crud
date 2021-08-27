<!--
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-26 14:58:41
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-27 15:47:14
-->
<template>
  <div class="w-2/3 mx-auto">
    <div class="bg-white shadow-md rounded my-6">
      <NuxtLink to="/ibans/create"> add iban </NuxtLink>
      <table class="text-left w-full border-collapse">
        <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->
        <thead>
          <tr>
            <th
              class="
                py-4
                px-6
                bg-grey-lightest
                font-bold
                uppercase
                text-sm text-grey-dark
                border-b border-grey-light
              "
            >
              Iban
            </th>
            <th
              class="
                py-4
                px-6
                bg-grey-lightest
                font-bold
                uppercase
                text-sm text-grey-dark
                border-b border-grey-light
              "
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-grey-lighter">
            <td class="py-4 px-6 border-b border-grey-light">New York</td>
            <td class="py-4 px-6 border-b border-grey-light">
              <button
                type="button" 
                class="
                  text-grey-lighter
                  font-bold
                  py-1
                  px-3
                  rounded
                  text-xs
                  bg-green
                  hover:bg-green-dark
                "
                @click.prevent="deletePost(post.id)"
                >Delete</button
              >
              <a
                href="#"
                class="
                  text-grey-lighter
                  font-bold
                  py-1
                  px-3
                  rounded
                  text-xs
                  bg-blue
                  hover:bg-blue-dark
                "
                >Edit</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  middleware: "authenticated",
  data() {
    return {
      ibanList() {
        // return this.$store.getters["iban/allIbans"];
      },
    };
  },
  computed: {
    ...mapGetters("iban", ["allIbans"])
  },
  methods: {    
     ...mapActions("iban", ["deleteIban","fetchIbans"]),
     removeTodo: function() {
      this.deleteIban(this.admin).then(() => {
        // this.myToast('success','Profile has been updated.');
      });
    },
  },
  created() {
    this.fetchIbans();
    // this.$store.dispatch("iban/fetchIbans");
  },
};
</script>