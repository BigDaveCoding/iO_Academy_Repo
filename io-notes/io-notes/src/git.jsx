


// Git

// Version control software (vcs) - Software that allows you to save versions of your work.
// Allows us to track the history of changes made on a project

// See history
// undo mistakes
// provides us with a set of tools that allows us to collaborate with others
// backup your work

// Git is software you install on your machine and use in the terminal
// There are GUIs for using git, but it is best to learn the terminal commands first

// GitHub is a website that hosts git repositories
// GitHub is Git in the cloud
// It is a place to store your code and collaborate with others

// Terminology
// repository (repo) - a folder that is being tracked by git / another word for a project
// commit - When we save work to a repo, we commit it to the timeline
// each commit contains some changes to the code, a message explaining, and a author
// remote - a repository that is not on your machine (cloud)


// What is a repository?
// A repository is a folder/project that is being tracked by git
// A repo is a timline of commits - each commit being work saved into the repo
// A repo is a history of changes to the codebase

// git config user.name "your name" - set your name
// git config user.email "your email" - set your email

// creating a new repo
// 1. Click the plus button on GitHub (top right)
// 2. Select yourself as the owner and enter a repo name
// 3. Choose public or private
// 4. Click add Readme file
// 5. Click create repository


// cloning a repo
// Act of downloading a local copy of the repon so ytou can work on iy
// local: on your computer
// 1. Click the green code button on the repo
// 2. Make sure the SSH us selected from options
// 3. Copy the clone link from the tect box
// 4. open a terminal and navigate to somehwere sensible
// 5. run git clone paste-url-here
// 6. cd into the new repo


// Using Git to save work
// There are 4 commands we need to know to start using git
// They are used in a particular order.
// working directory - your code in vs code, editing files like normal
// staging area - files that are ready to be saved
// local repo - your repos timeline of change, on your mac
// remote - repos timline of changes uploaded to github


// The Process
// 1. git add . - move all changes from the working directory to the staging area
// 2. git commit -m "message" - save the changes in the staging area to the local repo
// 3. git push - send the changes from the local repo to the remote repo
// 4. git status - check the status of the repo

import './git.css'

function Git() {

    const git_desc = "Git is a version control software that allows you to save versions of your work. It allows you to track the history of changes made on a project. Git provides a set of tools that allows you to collaborate with others, see history, undo mistakes, and backup your work.";

    const gitHub_desc = "GitHub is a website that hosts git repositories. It is a place to store your code and collaborate with others. GitHub is Git in the cloud";

    return (
        <>
            <div className="container">
                <h2 className="git_page_title silkscreen_title">Git // Github</h2>
                <div className="git_intro_grid">
                    <h5 className="git_section_title silkscreen_title">Git</h5>
                    <h5 className="git_section_title silkscreen_title">GitHub</h5>
                    <p>{git_desc}</p>
                    <p>{gitHub_desc}</p>
                </div>
                
                <hr className = "section_break"/>

                <div className="git_terminology_grid">
                    <h5 className="git_section_title silkscreen_title">Terminology</h5>
                    <div className="git_term_item">
                        <span className="git_term">Repository</span>
                        <span className="git_term_desc">A folder that is being tracked by git / another word for a project</span>
                    </div>
                    <div className="git_term_item">
                        <span className="git_term">commit</span>
                        <span className="git_term_desc"> When we save work to a repo, we commit it to the timeline.
                        Each commit contains some changes to the code, a message explaining, and a author</span>
                    </div>
                    <div className="git_term_item">
                        <span className="git_term">remote</span>
                        <span className="git_term_desc">a repository that is not on your machine (cloud)</span>
                    </div>
                </div>

                < hr className = "section_break" />

                <div className="git_repo_section">
                    <h5 className="git_section_title silkscreen_title">What is a repository?</h5>
                    <ul>
                        <li>A repository is a folder/project that is being tracked by git</li>
                        <li>A repo is a timline of commits - each commit being work saved into the repo</li>
                        <li>A repo is a history of changes to the codebase</li>
                    </ul>
                </div>

                <hr className = "section_break"/>

                <div className="repo_process">
                    <h5 className="git_section_title silkscreen_title">The Repo Process</h5>

                    <div className = "repo_grid">
                        <div className='creating_repo'>
                            <h5 className="repo_grid_title">Creating a new repo</h5>
                            <ul className="repo_grid_list">
                                <li>Click the plus button on GitHub (top right)</li>
                                <li>Select yourself as the owner and enter a repo name</li>
                                <li>Choose public or private</li>
                                <li>Click add Readme file</li>
                                <li>Click create repository</li>
                            </ul>

                        </div>
                        <div className='cloning_repo'>
                            <h5 className="repo_grid_title">Cloning a repo</h5>
                            <ul className="repo_grid_list">
                                <li>Click the green code button on the repo</li>
                                <li>Make sure the SSH us selected from options</li>
                                <li>Copy the clone link from the tect box</li>
                                <li>open a terminal and navigate to somehwere sensible</li>
                                <li>run git clone paste-url-here</li>
                                <li>cd into the new repo</li>
                            </ul>

                        </div>
                        <div className='saving_work'>
                            <h5 className="repo_grid_title">Using Git to save work</h5>
                            <ul className="repo_grid_list">
                                <li>git add . - move all changes from the working directory to the staging area</li>
                                <li>git commit -m "message" - save the changes in the staging area to the local repo</li>
                                <li>git push - send the changes from the local repo to the remote repo</li>
                                <li>git status - check the status of the repo</li>
                            </ul>

                        </div>
                    </div>

                </div>



            </div>


        </>
    )
}

export default Git