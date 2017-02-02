# Cron

As a Rails devs we prefer to use `whenever` gem for setting up cron for projects.

## Creating Cron Expression

Not all of us remember Cron syntax. You can generate your cron syntax from [crontab guru](https://crontab.guru). 

## Human readable
Cron expressions are not human super readable. So make sure that each cron config is commented in your schedule.rb file.

Example:

```ruby
 # At 11:57 pm everyday
  every '57 23 * * *' do
    runner 'ExampleWorker.perform_async'
  end

  # At 20:30 on Tuesday
  every '30 20 * * 2' do
    runner 'AnotherExampleWorker.perform_async'
  end
```
