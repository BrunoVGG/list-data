import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'
import ListData from '@/components/ListData/';

describe('ListData.vue', () => {
  it('renders data.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(ListData, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)

  })
})

// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

