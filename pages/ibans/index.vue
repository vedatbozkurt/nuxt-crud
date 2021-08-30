<!--
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-26 14:58:41
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-30 23:37:32
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
              Status
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
              Default
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
          <tr
            class="hover:bg-grey-lighter"
            v-for="iban in allIbans"
            :key="iban.id"
          >
            <td class="py-4 px-6 border-b border-grey-light">
              {{ iban.iban_no }}
            </td>
            <td class="py-4 px-6 border-b border-grey-light">
              {{ iban.status_id }}
            </td>
            <td class="py-4 px-6 border-b border-grey-light">
              {{ iban.default }}
            </td>
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
                @click.prevent="confirmDelete(iban.id)"
              >
                Delete
              </button>
              <NuxtLink
                :to="'/ibans/' + iban.id + '/edit'"
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
                >Edit</NuxtLink
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
    };
  },
  computed: {
    ...mapGetters("iban", ["allIbans"]),
  },
  methods: {
    ...mapActions("iban", ["deleteIban", "fetchIbans"]),
    confirmDelete(id) {
      // this.$sweetalert(this.deleteIban(id));
      this.$swal({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              this.deleteIban(id);         
              // this.$swal("Deleted!", "Your file has been deleted.", "success");
              this.$toast('success', 'Silme Başarılı');
            }
          });
    },
  },
  mounted() {
    // will console.log 'Hello mounted!'
  },
  created() {
    this.fetchIbans();
    // this.$store.dispatch("iban/fetchIbans");
  },
};
</script>