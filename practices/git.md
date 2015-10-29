# Git

Master branch is always marked as a protected branch, with the Travis and Reviewable status checks enforced for PRs

## Branching Model
When a new story is started a branch is created in the following format: initials/story-name  
This is required for _ALL_ stories, no matter how small because master is always a protected branch

## Merging into master
To get changes into master they must go through a Pull Request, this is an enforced part of the workflow with the Github Protected Branches & Status Checks.

1. Rebase your changes to clean up the Git history. This is only needed if you have commits like "hopfully fixes x, hopefully fixes x more" etc, commits like these should be squashed into a singular commit. 
2. Push your changes to Github
3. Open a Pull Request against master
4. If you're just putting it up for review and it isn't ready to me merged yet specify this in the PR description
5. Assign the PR to the person you wish to review it
6. Once the person you have assigned to review it has completed the review and all the changes they have requested have been made they will merge the branch into master
