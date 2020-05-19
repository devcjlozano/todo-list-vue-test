import { shallowMount } from "@vue/test-utils";
import TodosCreator from '@/components/TodosCreator.vue';

describe("TodosCreator", () => {
  let wrapper;

  beforeEach(() => {
     wrapper = shallowMount(TodosCreator)
  });
  
  test('the add Button exist', async () => {
   expect(wrapper.find("button").text()).toBe('Add todo');
  })

  test('the button should be disabled when text is empty', async () => {
     wrapper.vm.$data.nameTodo = ''
     await wrapper.vm.$forceUpdate()
     expect(wrapper.find('button').attributes('disabled')).toMatch('disabled')
  })

  test('when click addTodo button, the text input should be empty', async () => {
   wrapper.vm.$data.nameTodo = 'New todo'
   await wrapper.vm.$forceUpdate()
   const button = wrapper.find('button')
   await button.trigger('click')
   expect(wrapper.vm.nameTodo).toBe('')
  })

  test('call createTodo when click on addTodo button ', async () => {
   wrapper.vm.$data.nameTodo = 'New todo'
   const button = wrapper.find('button')
   const spyCreateTodo = jest.spyOn(wrapper.vm, 'createTodo');
   await wrapper.vm.$forceUpdate()
   await button.trigger('click')
   expect(spyCreateTodo).toHaveBeenCalled()
  })

  test('event create-todo emmitted when click on addTodo Button', async () => {
   wrapper.vm.$data.nameTodo = 'New todo'
   await wrapper.vm.$forceUpdate()
   const button = wrapper.find('button')
   const stub = jest.fn();
   wrapper.vm.$on('create-todo', stub)
   await button.trigger('click')
   expect(stub).toBeCalledWith('New todo');
  })
})