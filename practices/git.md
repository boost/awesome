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

- [Agis Git Stlyeguide](https://github.com/agis-/git-style-guide)

## Commit messages

Use the template below for our commit messages. To create a global template for your machine:

- Create a file called `.gitmessage` under `~/` path.
- Paste the code below and save it

```
# 50-character subject line
#
# 72-character wrapped longer description.
#
# Example:
#
# Good - imperative present tense, capitalized, fewer than 50 characters
# Mark huge records as obsolete when clearing hinting faults
#
# Bad
# fixed ActiveModel::Errors deprecation messages failing when AR was used outside of Rails.
```

- Update your global `~/.gitconfig` file by adding:

```
[commit]
  template = ~/.gitmessage
```