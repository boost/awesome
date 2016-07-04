# Rails

## Basic Rails optimization

## 1. Unused routes

Unused raoutes are deadweight for the app. It can be found with [Traceroute](https://github.com/amatsuda/traceroute) and removed.

## 2. Reduce number of queries

[Bullet](https://github.com/flyerhzm/bullet) will help report extra queries the app is making. Thus they can be removed.

## 3. Security Vulnerabilities
 
 [Brakeman](https://github.com/presidentbeef/brakeman) is security analysis tool that will list down security vulnerabilities in the app. Details of brakeman warnings are listed [here](http://brakemanscanner.org/docs/warning_types/)

 ## 4. Rubocop

 [RuboCop](https://github.com/bbatsov/rubocop#cops) is a ruby code analyser that will enforce guideline from [Ruby Style Guide](https://github.com/bbatsov/ruby-style-guide)

 ## 5. Deadweight

 Find and cleanup unused CSS from the project with [Deadweight](https://github.com/aanand/deadweight).