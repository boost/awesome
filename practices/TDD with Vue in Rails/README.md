# TDD with Vue in Rails

The purpose of this guide is to give you a potential approach to test driven development with Vue in a typical Rails application.

By the end of it you should have some answers to three main questions
* What are the tools?
* What to test?
* How do I write my tests first?

# What are the tools?

### [Jest](https://jestjs.io/docs/en/getting-started)
*Think RSpec for Javascript*

Jest is a behavioural drived development styled testing framework for Javascript, made by Facebook's opensource program.

### [Vue Test Utils](https://vue-test-utils.vuejs.org/)

# What to test?

## Testing Suite

In our testing suite we will have mostly the normal conventional Rails tests: 
* Feature specs
* Routing specs
* Controller specs (*or request specs if you prefer*)
* Service specs (*or any alternative pattern for business logic*)
* Helper specs
* Model specs

And some new areas of testing
* Vue component tests
* Pure Javascript tests

## What's the same

**Routing specs**, simply checking that urls route to the correct controllers and actions - nothing new here.

**Controller specs**, checking status codes, checking effects.

**Service specs**, checking business logic rules of the service.

**Model specs**, unit testing any model methods and shoulda matchers for validations & associations.

## What's different

**[Javascript tests](./javascript_specs.md)** are a way of unit testing our more complicated javascript behaviour. 

**[Component tests](./component_specs.md)**, these are the recommended conventional way of testing Vue components (see  - *Knowing what to test*).
