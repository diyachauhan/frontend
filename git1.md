clone - cloning a repository into our local machine
git clone <link>

status - Display the status of the code
git status

//cd means change directory 
//ls means list files , which will show all the files in it

to access hidden file :
ls -a

add - add new or changed files in your working directory to the git staging area
git add <file name>

commit - it is the record of the change
git commit -m "some message"

push command :
push - upload local repo content to remote repo
git push origin main

Init command
init- used to create a new git repo

git init
git remote add origin <path link>
git remote -v (to verify remote)
git branch (to check branch)
git branch -M main (to rename branch)
git push origin main
git push -u origin main (upstream to push into remote repo)

//branch commands
git branch -M main (to rename branch)
git checkout -b <-new branch name> (to create new branch)
git branch -d <-branch name> (to delete branch)
git checkout main (to shift from one branch to another)
git branch -d <branch name>

//merging code
git diff <branch name> (to compare commits , branches , files & more)

git merge <branch name> (to merge 2 branches)

way 2// create a PR

//pull command
git pull origin main
used to fetch and download content from a remote repo and immediately update the local repo to match that content

//packages i downloaded 
minify
password

script code:
"echo \"Error: no test specified\" && exit 1" 
