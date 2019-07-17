# Rails

## Code Climate

### 1. Unused routes

Unused routes add extra fluff to the app. Use the [Traceroute](https://github.com/amatsuda/traceroute) tool to find out unmapped routes and remove them.

### 2. Reduce number of queries

[Bullet](https://github.com/flyerhzm/bullet) reports extra database queries the app is making.

### 3. Security Vulnerabilities
 
[Brakeman](https://github.com/presidentbeef/brakeman) is a security analysis tool that will list down security vulnerabilities in the app. Details of brakeman warnings are listed [here](http://brakemanscanner.org/docs/warning_types/)

### 4. Rubocop

[RuboCop](https://github.com/bbatsov/rubocop#cops) is a ruby code analyser that will enforce guideline from [Ruby Style Guide](https://github.com/bbatsov/ruby-style-guide)

### 5. Deadweight

Find and cleanup unused CSS from the project with [Deadweight](https://github.com/aanand/deadweight).

### 6. ESLint

[ESLint](https://github.com/eslint/eslint) is a javascript code analyser that detects faulty code patterns.
