<!--
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-24 14:26:45
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-26 17:38:52
-->
<template>
  <div class="container">
    <NuxtLink to="/login">
      login
    </NuxtLink>
     <NuxtLink to="/ibans">
      ibans
    </NuxtLink>
    <!-- component -->
    <div
      class="
        h-100
        w-full
        flex
        items-center
        justify-center
        bg-teal-lightest
        font-sans
      "
    >
      <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div class="mb-4">
          <h1 class="text-grey-darkest">Todo List</h1>
          <div class="flex mt-4">
            <input
              v-model="new_todo"
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                mr-4
                text-grey-darker
              "
              placeholder="Add Todo"
            />
            <button
              @click="addTodo()"
              class="
                flex-no-shrink
                p-2
                border-2
                rounded
                text-teal
                border-teal
                hover:text-white
                hover:bg-teal
              "
            >
              Add
            </button>
          </div>
        </div>
        <div>
          <div
            class="flex mb-4 items-center"
            v-for="todo in todoList"
            :key="todo.id"
          >
            <p class="w-full text-grey-darkest">
              {{ todo.title }}
            </p>
            <button
              class="
                flex-no-shrink
                p-2
                ml-4
                mr-2
                border-2
                rounded
                hover:text-white
                text-green
                border-green
                hover:bg-green
              "
            >
              Done
            </button>
            <button
            @click="removeTodo(todo.id)"
              class="
                flex-no-shrink
                bg-indigo-500
                p-2
                ml-2
                border-2
                rounded
                text-red
                border-red
                hover:text-white
                hover:bg-red
              "
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      new_todo: "yeni not",
    };
  },
  computed: {
    todoList() {
      return this.$store.getters["todo/todoList"];
      // return this.$store.state.todo.todoList;
    },
  },
  methods: {
    addTodo() {
      let tempData = {
        id: this.todoList.length + 1,
        title: this.new_todo,
      };
      return this.$store.dispatch("todo/addTodo", tempData);
    },
    removeTodo(id) {
      return this.$store.dispatch("todo/removeTodo", id);
    },
  },
  created() {
    this.$store.dispatch("todo/getTodoList");
  }
};
</script>
