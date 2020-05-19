<template>
  <div class="home">
    <TodosCreator
      @create-todo="createTodo"/>
    <FiltersOptions 
      @change-filter="changeFilter"/>
      <span> Filtro seleccionado: {{ filter }}</span>
    <ListTodos 
      :list-todos="listTodoFilter"
      @completed-todo="completedTodo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TodosCreator from '@/components/TodosCreator.vue'
import FiltersOptions from '@/components/FiltersOptions.vue'
import ListTodos from '@/components/ListTodos.vue'

export default {
  name: 'home',
  components: {
    TodosCreator,
    FiltersOptions,
    ListTodos
  },
  data() {
    return {
      listTodos: [],
      filter: 'all'
    }
  },
  computed: {
     listTodoFilter() {
       if (this.filter === 'actives') {
         return this.listTodos.filter(todo => !todo.completed)
       }
       if (this.filter === 'completed') {
         return this.listTodos.filter(todo => todo.completed)
       }
       return this.listTodos
     }
  },
  methods: {
    createTodo(nameTodo) {
      const newTodo = {
         id: Date.now(),
         name: nameTodo,
         completed: false
      }
      this.listTodos.push(newTodo)
    },
    completedTodo(idTodo) {
      const indexTodo = this.listTodos.findIndex(todo => todo.id === idTodo)
      this.listTodos[indexTodo].completed = !this.listTodos[indexTodo].completed 
    },
    changeFilter(nameFilter) {
      this.filter = nameFilter
    }
  }
}
</script>
