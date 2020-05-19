import { mount } from "@vue/test-utils";
import Home from '@/views/Home.vue';
import TodosCreator from '@/components/TodosCreator.vue';

describe("TodosCreator", () => {
  let wrapper;

  beforeEach(() => {
     wrapper = mount(Home)
  });
  
  test('add new todo when button child add Todo is clicked', async () => {
    const todoCreatorChild = wrapper.findComponent(TodosCreator)
    todoCreatorChild.vm.$data.nameTodo = 'new Todo'
    await todoCreatorChild.vm.$forceUpdate()
    const button = todoCreatorChild.find('button')
    await button.trigger('click')
    expect(wrapper.vm.$data.listTodos[0].name).toBe('new Todo')
  })

  test('completed todo when button child "completar" is clicked', async () => {
    wrapper.vm.$data.listTodos.push({
      id: 1,
      completed: false,
      name: 'nameTodo'
    })
    await wrapper.vm.$forceUpdate()
    const button = wrapper.find('.list-todos button')
    await button.trigger('click')
    expect(wrapper.vm.$data.listTodos[0].completed).toBe(true)
  })
})