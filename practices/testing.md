# Testing

## General Philosophy

- Test the **app**, not the **framework** or **library**.
- **TDD** is not required, tested code is.
- Code coverage doesn't mean anything. You can never know all the edge cases.
- Code should be easy to test. If it's hard to test, change your code.
- Fast tests are happy tests.

# RSpec

-  The `should` syntax is [dead](https://github.com/rspec/rspec-expectations/blob/master/Should.md#why-switch-over-from-should-to-expect). Use the `expect` syntax. This also means no `shoulda`.

  ```ruby
  # ✗ Avoid
  user.name.should eq "Davy Jones"

  # ✓ OK
  expect(user.name).to eq "Davy Jones"
  ```

- You can run specific examples by providing their line number when you run your tests.

  ```
  > rspec spec/models/user_spec.rb:11
  ```

- Prefer to run specs with the `--color` or `-c` and the `--format=doc` or `-f d` options. Or store it in an `.rspec` file.

  ```
  # .rspec
  --color
  --format=doc
  ```

- Running specs with the `--profile` or `-p` option will display the top ten slowest examples. It also accepts a number argument. Run this in your CI, but don't place it in `.rspec`.

  ```
  # Displays the 5 slowest examples
  > rspec spec/models/user_spec.rb -p 5
  ```

- Add `.rspec-local` to your project's `.gitignore` file. This will allow individual developers to customize their own default rspec parameters.

  ```sh
  echo .rspec-local >> .gitignore
  ```

- Use [shared_examples](https://www.relishapp.com/rspec/rspec-core/docs/example-groups/shared-examples) when possible.