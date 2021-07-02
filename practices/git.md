# Git

Master branch is always marked as a protected branch, with the Travis and Reviewable status checks enforced for PRs

## Branching

When a new story is started a branch is created in the following format: `initials/story-name`

    $ git checkout -b ba/homepage-redesign

This is required for _ALL_ stories, no matter how small because `master` is always a protected branch

## Merging into master branch

To get changes into master they must go through a Pull Request, this is an enforced part of the workflow with the Github Protected Branches & Status Checks.

1. Rebase your changes to clean up the Git history. This is only needed if you have commits like "hopfully fixes x, hopefully fixes x more" etc, commits like these should be squashed into a singular commit.
2. Push your changes to Github
3. Open a Pull Request against master
4. If you're just putting it up for review and it isn't ready to me merged yet specify this in the PR description
5. Assign the PR to the person you wish to review it
6. Once the person you have assigned to review it has completed the review and all the changes they have requested have been made they will merge the branch into master

## .gitignore

Depending on your project, you can use official gitignore [templates](https://github.com/github/gitignore) from GitHub.

## Style guide

- [conventionalcommit.org Stlyeguide](https://www.conventionalcommits.org/en/v1.0.0/)

## Commit messages

#### How to write a commit message
Follow semantic commit guide lines in [conventionalcommits.org](https://www.conventionalcommits.org/en/v1.0.0/) & [karma runner](http://karma-runner.github.io/1.0/dev/git-commit-msg.html).

#### Commit template setup
Use the template below for our commit messages. To create a global template for your machine:

- Create a file called `.gitmessage` under `~/` path.
- Paste the code below and save it

```
type(context): title

description body

references (Optional)

# Allowed <type> values:
# feat     (new feature for the user, not a new feature for build script)
# fix      (bug fix for the user, not a fix to a build script)
# docs     (changes to the documentation)
# style    (formatting, missing semi colons, etc; no production code change)
# refactor (refactoring production code, eg. renaming a variable)
# test     (adding missing tests, refactoring tests; no production code change)
# chore    (updating grunt tasks etc; no production code change)
# conf     (configuration, env changes)
# temp     (Any temporary update that you might revert later)
# upgrade  (upgrading libraries/dependancies)

# Example

# fix(Airbreak failure): Downgrade to airbrake v9

# Airbreak v9 wasnt working well with Rails 3.2 and was throwing errors when trying to report errors :D

# Swifter Bug id #1191
```

- Update your global `~/.gitconfig` file by adding:

```
[commit]
  template = ~/.gitmessage
```

#### To enforce this on your project

Edit `.git/hooks/commit-msg.sample` in the project. Paste the below code in it. And rename it to be just `commit-msg`, ie remove `.sample` from the filename. This will validate validate if the commit has `type(context): title` bit on every commit.


```
#!/bin/bash

MSG_FILE=$1
FILE_CONTENT="$(cat $MSG_FILE)"

export REGEX='^((feat|fix|docs|style|refactor|test|chore|conf|temp|upgrade)(\(.*\)|!)?: .*)|(Merge pull .*)'
export ERROR_MSG="Commit message should follow sematic commit template"

if [[ $FILE_CONTENT =~ $REGEX ]]; then
 echo "Boost awesome commit!"
else
  echo "\"$FILE_CONTENT\" - is a bad commit message. Please follow Boost best practices."
 echo $ERROR_MSG
 exit 1
fi

exit 0
```
