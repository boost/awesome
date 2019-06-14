# Component Specs

## What are they?

With component specs we are essentially just testing the public interface of our components. In Vue the components public interface is the following:

- Initial props & watched props changes
- User interaction within it
- Handled events emitted by child components
- Any custom emitted events.

If you test all of this, then you should have reasonable confidence that your component behaves.

## What are our tools?

### [Jest](https://jestjs.io/docs/en/getting-started)

Component tests are a form of javascript tests, so the rely on Jest. Think of Jest as Rspec for Javascript.

```js
describe('addition', () => {
  it('adds two numbers together', () => {
    expect(1 + 1).toEqual(2)
  })
})
```

### [Vue Test Utils](https://vue-test-utils.vuejs.org/)

Components however, aren't just Javascript, they have a `<template>` section as well. So we also have another tool created by the makers of Vue called Vue Test Utils. It allows you to mount components of a fake DOM (jsdom) to run tests against.

```js
// import the mount method from vue-test-utils and our component
import { mount } from 'vue-test-utils'
import HelloWorldComponent from 'components/HelloWorldComponent.vue'

describe('HelloWorldComponent', () => {
  let wrapper

  // mount our component before each test
  beforeEach(() => {
    wrapper = mount(HelloWorldComponent)
  })

  // test our component
  it('renders Hello World!', () => {
    expect(wrapper.text()).toMatch('Hello World!')
  })

  ...
})
```

## Testing props

When we mount components we can give them props

```js
import { mount } from 'vue-test-utils'
import Income from 'components/Income.vue'

describe('Income', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Income, {
      propsData: { amount: 1000 }
    })
  })

  ...
```

If the prop is rendered, we can test that it appears in the template

```js
it('renders the amount', () => {
  expect(wrapper.text()).toMatch('$1000.00')
})
```

We can test the prop is rendered and passed into a child component, by importing and finding the component within our mounted component. Then we can access the special `vm` attribute - which is a way of accessing `this` of the child component.

```js
import CurrencyInput from 'components/CurrencyInput.vue'

...

it('renders the incomes amount using a CurrencyInput', () => {
  const amount = wrapper.find('.income__amount)
  expect(amount.visible()).toBe(true)
  expect(amount).toBe(CurrencyInput)
  expect(input.vm.value).toEqual(1000)
})
```

## Testing user interaction

We can trigger user events using Vue Test Utils `trigger` and `set` methods on wrappers

```js
it('emits save when the save button is clicked', () => {
  wrapper.find('.income__save-button').trigger('click')
  expect(wrapper.text()).toMatch('saving...')
})
```

## Testing interactions with children

We should also test the affects of listened child events on the parent
e.g. A simple CounterComponent that renders a number of times a child components button was clicked.

```js
beforeEach(() => {
  wrapper = mount(CounterComponent, {
    propsData: { value: 21 }
  })
})

it('renders the counter', () => {
  const counterText = wrapper.find('.counter__count').text()
  expect(counterText).toEqual('Button clicked 21 times!')
})

it('updates the counter when the increment component emits increment', () => {
  const incrementButton = wrapper.find(IncrementButton)

  incrementButton.vm.$emit('increment', 1)

  const counterText = wrapper.find('.counter__count').text()
  expect(counterText).toMatch('Button clicked 22 times!')
})
```

## Testing events emitted

```js
it('emits the change event with the updated text when the button is clicked', () => {
  wrapper.find('textarea').set('New text')
  wrapper.find('button').trigger('click')

  expect(wrapper.emitted().change).toBeTruthy()
  expect(wrapper.emitted().change[0]).toEqual(['New text'])
})
```

## Resources:

Matt O'Connell, Vue NYC - https://www.youtube.com/watch?v=OIpfWTThrK8

Vue Test Utils, Common Tips / Knowing what to test - https://vue-test-utils.vuejs.org/guides/common-tips.html