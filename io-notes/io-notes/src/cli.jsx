

// Note taking for CLI - iO academy module 03.

//Commmand line
// A text based way of interacting with your computer.

// Why software devs use command line on a daily basis?
// Speed & Efficiency - Once you know how to use it...
// Extra control - You aren't limited by buttons in GUI.
// Automation - You can write scripts to automate tasks.
// There are tools that devs use that only exit in the command line.

// Warnings
// It's not very intuitive - text based output makes it harder to understand what happened or whether it worked
// Mistakes can have undesireable effects on system


// nano ./zshrc - opens oh my zsh config file
// set zsh_theme to af-magic
// export EDITOR = "nano" - sets nano as default editor
// source ~/.zshrc - reloads zsh config file


// Useful Commands
// pwd - print working directory - shows you where you are in the file system
// ~ - home directory - this symbol represents your home directory
// ls - list - shows you what files and folders are in the current directory
// cd - change directory - moves you to a different directory
// cd .. - moves you up one directory
// tab - auto complete - press tab to auto complete file names / correct capitalisation / multiple folders with same name
// shift tab - reverse auto complete - press shift tab to reverse auto complete
// Clear - clears the terminal
// mkdir - make directory - creates a new directory - can make multiple folders at once
// touch - creates a new file
// rm - remove - deletes a file
// rm - rf - removes a directory - -rf is an option that means recursive(folder and everything in it) and force(delete without asking)
// mv - move - moves a file or folder to a new location - can also rename files
// cp - copy - copies file or folder - -r is an option that means recursive(folder and everything in it)
// man - manual - shows you the manual for a command


// General Advice
// if youre not sure, ask for help
// Don't be scared of the cli
// use ls to visualise what the terminal is foing
// take it slow and practice


import './cli.css';


function CLI_Notes() {
    return (
        <>
            <div className="container">

                <div className = "cli_note_title">
                    <h4>Command Line Interface</h4>
                    <p>Command line is a text based way of interacting with your computer.</p>
                </div>

                <hr className = "section_break" />
                
                <div className = "cli_note_list">
                    <p>Why software devs use command line on a daily basis?</p>
                    <h5>Positives</h5>
                    <ul>
                        <li>Speed & Efficiency - Once you know how to use it...</li>
                        <li>Extra control - You aren't limited by buttons in GUI.</li>
                        <li>Automation - You can write scripts to automate tasks.</li>
                        <li>There are tools that devs use that only exit in the command line.</li>
                    </ul>
                    <h5>Warnings!</h5>
                    <ul>
                        <li>It's not very intuitive - text based output makes it harder to understand what happened or whether it worked</li>
                        <li>Mistakes can have undesireable effects on system</li>
                    </ul>
                </div>

                <hr className = "section_break" />

                <div className = "cli-zsh-config">
                    <h4 className = "cli_section_title silkscreen_title">OhMyZSH Configuration</h4>
                    <p>Configure settings in OhMyZSH</p>
                    <pre>
                        <code className="cli_zsh_theme_code">
                            nano ./zshrc - opens oh my zsh config file<br />
                            set zsh_theme to "af-magic"<br />
                            export EDITOR = "nano" - sets nano as default editor <br />
                            source ~/.zshrc - reloads zsh config file
                        </code>
                    </pre>
                </div>

                <hr className = "section_break" />

                <div className="cli_commands_grid">
                <h4 className = "cli_section_title silkscreen_title">Useful Commands</h4>
                
                    <div className="cli_command">
                        <h5>pwd</h5>
                        <p>print working directory - shows you where you are in the file system</p>
                    </div>
                    <div className="cli_command">
                        <h5>~</h5>
                        <p>home directory - this symbol represents your home directory</p>
                    </div>
                    <div className="cli_command">
                        <h5>ls</h5>
                        <p>list - shows you what files and folders are in the current directory</p>
                    </div>
                    <div className="cli_command">
                        <h5>cd</h5>
                        <p>change directory - moves you to a different directory</p>
                    </div>
                    <div className="cli_command">
                        <h5>cd ..</h5>
                        <p>moves you up one directory</p>
                    </div>
                    <div className="cli_command">
                        <h5>cd ~</h5>
                        <p>moves you to the home directory no matter where you are</p>
                    </div>
                    <div className="cli_command">
                        <h5>cd /</h5>
                        <p>moves you to the root directory</p>
                    </div>
                    <div className="cli_command">
                        <h5>cd -</h5>
                        <p>moves you to the previous directory you were in last</p>
                    </div>
                    <div className="cli_command">
                        <h5>tab</h5>
                        <p>auto complete - press tab to auto complete file names / correct capitalisation / multiple folders with same name</p>
                    </div>
                    <div className="cli_command">
                        <h5>shift tab</h5>
                        <p>reverse auto complete - press shift tab to reverse auto complete</p>
                    </div>
                    <div className="cli_command">
                        <h5>clear</h5>
                        <p>clears the terminal</p>
                    </div>
                    <div className="cli_command">
                        <h5>mkdir</h5>
                        <p>make directory - creates a new directory - can make multiple folders at once</p>
                    </div>
                    <div className="cli_command">
                        <h5>touch</h5>
                        <p>creates a new file</p>
                    </div>
                    <div className="cli_command">
                        <h5>rm</h5>
                        <p>remove - deletes a file</p>
                    </div>
                    <div className="cli_command">
                        <h5>rm - rf</h5>
                        <p>removes a directory - -rf is an option that means recursive(folder and everything in it) and force(delete without asking)</p>
                    </div>
                    <div className="cli_command">
                        <h5>mv</h5>
                        <p>moves a file or folder to a new location - can also rename files</p>
                    </div>
                    <div className="cli_command">
                        <h5>cp</h5>
                        <p>copies file or folder - -r is an option that means recursive(folder and everything in it)</p>
                    </div>
                    <div className="cli_command">
                        <h5>man</h5>
                        <p>shows you the manual for a command</p>
                    </div>
                </div>

            </div> 

        </>
    )
}

export default CLI_Notes;