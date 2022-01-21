/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = `Git is a versioning managment software that manages the additions and changes made to a file durning various itterations.`;

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = `GitHub is a service that allows remote cloud storage of git files.`;

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
let gitInitDefinition = `git init is a git command used in the command line that initializes (or creates) a git repository within the local directory you're currently located within your system.`;

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
let gitCloneDefinition = `git clone makes a copy of a targeted git repository into a targeted directory. The targeted git repository can be local or remote.`;

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE

let gitStatusDEfinition = `git status shows you what changes have been made, which changes have been staged to be pushed, which changes haven't been staged, and what files aren't being tracked by git.`;

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE

let gitAddDefinition = `git add tells git that you want to add the changes you've made to the file(s) since the last commit to the next commit.`;
let gitAddCode = `Use "git add ." if you're in the root where your .git repository is, and use "git add -a" if you just want to add all the changes made in the current directory you're working in.`;

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE

let gitCommitDefinition = `git commit takes a snapshot of the current changes that have been staged/added.`;

let gitCommitCode = `git commit -m "initial commit"`;

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

let gitPushDefinition = `git push is used to upload your local git repository to your remote git repository. This allows you to change your remote repository branch(es) to be in the same state as your local repository branch(es)`;