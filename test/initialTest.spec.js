import { mount } from '@vue/test-utils'
import Main from '../src/components/Main.vue'

describe('Component', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(Main)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})