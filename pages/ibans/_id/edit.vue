<!--
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-26 20:41:06
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-27 16:24:51
-->
<template>
  <div class="container">
    <div class="w-screen h-screen flex justify-center items-center bg-gray-100">
      <form
        class="
          p-10
          bg-white
          rounded
          flex
          justify-center
          items-center
          flex-col
          shadow-md
        "
      >
        <p class="mb-5 text-3xl uppercase text-gray-600">Edit İban</p>
        <input
          type="text"
          v-model="singleIban.iban_no"
          class="
            mb-5
            p-3
            w-80
            focus:border-purple-700
            rounded
            border-2
            outline-none
          "
          autocomplete="off"
          placeholder="iban"
          required
        />

        <select
          class="
            mb-5
            p-3
            w-80
            focus:border-purple-700
            rounded
            border-2
            outline-none
          "
          v-model="singleIban.status_id"
        >
          <option disabled>Status</option>
          <option value="10">Aktif</option>
          <option value="11">Aktif Değil</option>
        </select>

        <label class="flex items-center dark:text-gray-400">
          <input
            v-model="singleIban.default"
            type="checkbox"
            class="
              text-green-600
              form-checkbox
              focus:border-green-400
              focus:outline-none
              focus:shadow-outline-green
              dark:focus:shadow-outline-gray
            "
          />
          <span class="ml-2"> Varsayılan </span>
        </label>

        <button
          class="
            bg-purple-600
            hover:bg-purple-900
            text-white
            font-bold
            p-2
            rounded
            w-80
          "
          type="button"
          @click="ibanUpdate"
        >
          <span>Update Iban</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  middleware: "authenticated",
  // middleware: 'guest',
  data() {
    return {
      form: {
        iban_no: "",
        status: 0,
        default: false,
      },
    };
  },
  computed: {
    ...mapGetters("iban", ["singleIban"])
  },
  created() {
      this.fetchIban(this.$route.params.id);
  },
  methods: {
    ...mapActions("iban", ["fetchIban", "updateIban"]),
    ibanUpdate: function () {
      this.updateIban(this.form).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>