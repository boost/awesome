# What are the tools?

Within the Rails application, you'll have your typical testing tools available to you, RSpec, RSpec Rails, Capybara and optionally Site Prism.

## The Standard Rails Testing Stack

### RSpec

RSpec is our Ruby BDD style testing framework that we write all out normal application tests within.

### RSpec Rails

RSpec is a Ruby testing framework, and is agnostic of Rails - to make testing within Rails easier there is the RSpec Rails gem to provide Rails integrations with RSpec.

### Capybara

Capybara is a web acceptance testing framework that gives us the tools to test our application as a user does - using interactions through a browser.

### Site Prism (optional)

SitePrism is a page-object library, for interfacing with the application as a series of describable page-objects instead of interacting directly through the DOM.

## Your new Javascript testing tools

### Jest

Jest is a BDD style testing framework for Javascript. Written by Facebook and used by Facebook, Twitter, Instagram, NYTimes, Spotify, Air BnB etc.

e.g.
```js
describe('The + operator', () => {
  it('adds two numbers together', () => {
    expect(1 + 1).toEqual(2)
  })
})
```

### Vue Test Utils

Vue Test Utils is the testing integration helpers for testing Vue components written by the makers of Vue. It allows you to mount Vue components on a virtual DOM that you can run tests against extremely quickly.

e.g.

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
})
```

## Resources

I strongly recommend referring to the Jest & Vue Test Utils docs frequently. They are extremely well organised and have great searches.

To get started with writting jest tests start here [Jest Docs - Getting Started](https://jestjs.io/docs/en/getting-started)

For information about expectations and matching see [Jest Docs - Using Matchers](https://jestjs.io/docs/en/using-matchers)

For information on how to setup tests usings `before`s, `let` etc, see [Jest Docs - Setup & Teardown](https://jestjs.io/docs/en/setup-teardown)

For information about mocking functions (`Jest.fn()`), see [Jest Docs - Mock Functions](https://jestjs.io/docs/en/mock-functions).

To get started with writting Vue component tests start here [Vue Test Utils Docs](https://vue-test-utils.vuejs.org/)

For information about the entry methods to Vue Test Utils, the ones for mounting components etc (`mount` & `shallowMount`) see [Vue Test Utils - API](https://vue-test-utils.vuejs.org/api/).

For information about the wrappers, the things that wrap the virtual DOM elements and the mounted component, see [Vue Test Utils - Wrapper](https://vue-test-utils.vuejs.org/api/wrapper/) and [Vue Test Utils - WrapperArray](https://vue-test-utils.vuejs.org/api/wrapper-array/).
