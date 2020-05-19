<template>
  <div class="list-todos">
    <ul>
      <li
        v-for="todo in listTodos"
        :key="todo.id">
        <span :class="{'completed-todo' : todo.completed }"> {{ todo.name }} </span>
        <button @click="completedTodo(todo.id)"> 
          {{ todo.completed ? 'Completada' : 'Completar' }}
        </button>
      </li> 
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ListTodos',
  props: {
    listTodos: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    completedTodo(idTodo) {
      this.$emit('completed-todo', idTodo)
    }
  }
}
</script>
<style scoped>
  .completed-todo {
    text-decoration: line-through
  }
</style>