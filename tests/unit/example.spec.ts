import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import ContentAppProduct from '@/components/content/content-app-product.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
});

describe('ContentAppProduct.vue', () => {
  it('renders props.product when passed', () => {
    const product = {name: 'lalal'}
    const wrapper = shallowMount(HelloWorld, {
      props: { product }
    });
    expect(wrapper.text())
  })
});
