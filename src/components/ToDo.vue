<template>
  <h2>Todo:</h2>

  <div v-for="item in todos" :key="item.id">
    <p @click="() => handleCompleteAction(item)">
      {{ item.id }} - {{ item.text }}
      {{ item.status === "incomplete" ? "❌" : "✔" }}
    </p>
  </div>

  <input type="text" v-model="todo" />
  <button @click="handleAddTodo">add</button>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch, watchEffect } from "vue";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Todos } from "../types/todos";

export default defineComponent({
  setup() {
    const todosLocalStorageKey = "todos";
    const todos = ref<Todos[]>([]);
    const todo = ref<string>("");
    const { clearLocalStorage } = useLocalStorage(todosLocalStorageKey, todos);

    const handleAddTodo = () => {
      const ids = todos.value.map((todo) => todo.id);
      const sorted = ids.sort((a, b) => a - b);

      const newTodo: Todos = {
        id: sorted.length ? sorted[sorted.length - 1] + 1 : 1,
        text: todo.value,
        status: "incomplete",
      };
      todos.value = [...todos.value, newTodo];
    };

    const handleCompleteAction = (item: Todos): void => {
      const updatedTodos: Todos = {
        ...item,
        status: item.status == "complete" ? "incomplete" : "complete",
      };
      const index = todos.value.findIndex((todos) => todos.id === item.id);

      todos.value = todos.value.slice(0, index);
      todos.value = [...todos.value, updatedTodos];
    };

    return {
      todos,
      todo,
      handleAddTodo,
      handleCompleteAction,
    };
  },
});
</script>


<style scoped>
p {
  cursor: pointer;
  padding: 10px 30px;
  border: 1px solid teal;
  margin-bottom: 5px;
}
</style>