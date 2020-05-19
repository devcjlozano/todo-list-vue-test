import { shallowMount} from "@vue/test-utils";
import ListTodos from '@/components/ListTodos.vue';

describe("ListTodos", () => {
  let wrapper;

  beforeEach(() => {
    let listTodos = [
      {
        id: 1,
        name: 'Aprender Vue',
        completed: false
      }
    ]
    wrapper = shallowMount(ListTodos, {
      propsData: {
        listTodos
      }
    })
  })
  
  test('when \'completed is false \' button text should be changed to Completar  ', () => {
     expect(wrapper.find('button').text()).toBe('Completar')
  })

  test('when \'completed is true \' button text should be changed to Completada ', async () => {
    const newListTodos = [{
          id: 2,
          name: 'Estudiar jest',
          completed: true
        }
    ]   
    await wrapper.setProps({listTodos: [...newListTodos]})
    expect(wrapper.find('button').text()).toBe('Completada')
  })

  test('call completedTodo when click completedTodo ', async () => {
    const button = wrapper.find('button')
    const spyCompletedTodo = jest.spyOn(wrapper.vm, 'completedTodo');
    await button.trigger('click')
    expect(spyCompletedTodo).toHaveBeenCalled()
    expect(spyCompletedTodo).toHaveBeenCalledWith(1)
   })
 
  test('event completed todo emmitted when click on completedTodo Button', async () => {
    const button = wrapper.find('button')
    const stub = jest.fn();
    wrapper.vm.$on('completed-todo', stub)
    await button.trigger('click')
    expect(stub).toBeCalledWith(1);
   })
})