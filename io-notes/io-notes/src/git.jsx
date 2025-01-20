


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

                <hr className = "section_break"/>

                <div className="git_repo_section">
                    <h5 className="git_section_title silkscreen_title">What is a repository?</h5>
                    <ul>
                        <li>A repository is a folder/project that is being tracked by git</li>
                        <li>A repo is a timline of commits - each commit being work saved into the repo</li>
                        <li>A repo is a history of changes to the codebase</li>
                    </ul>
                </div>
            </div>


        </>
    )
}

export default Git