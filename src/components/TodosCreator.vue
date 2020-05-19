<template>
  <div class="todos-creator">
    <input 
       v-model="nameTodo"
       type="text"/>
     <button 
       @click="createTodo"
       :disabled="isButtonDisabled">
          Add todo
     </button>
  </div>
</template>
<script>
export default {
  name: 'TodosCreator',
  data () {
    return {
      nameTodo: ''
    }
  },
  computed: {
    isButtonDisabled () {
      return this.nameTodo === ''
    }
  },
  methods: {
    createTodo () {
      this.$emit('create-todo', this.nameTodo)
      this.nameTodo = ''
    }
  }

}
</script>