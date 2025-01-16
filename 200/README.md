# 200 - Requirements

We use [pipx](https://github.com/pypa/pipx?tab=readme-ov-file#install-pipx) instead of ```pip```, for isolation.

1. Install pipx:
   see https://github.com/pypa/pipx?tab=readme-ov-file#install-pipx for platform (Linux, macOS, Windows) specifics.

   Linux:
   ```bash
   $ python3 -m pip install --user pipx
   $ python3 -m pipx ensurepath
   $ source ~/.bashrc
   $ sudo pipx ensurepath --global # optional to allow pipx actions with --global argument
   ```

   macOS:
   ```bash
   $ brew install pipx
   $ pipx ensurepath
   $ pipx completions # Optional
   $ pipx install argcomplete # Optional
   $ pipx ensurepath # Again
   # Then add these lines to your ~/.zshrc file:
   # # Enable zsh completions
   # autoload -U compinit && compinit
   # # Enable pipx completions
   # eval "$(register-python-argcomplete pipx)"
   $ source ~/.zshrc # Optional
   $ sudo pipx ensurepath --global # optional to allow pipx actions with --global argument
   ```

   Windows:
   ```bash
   $ scoop install pipx
   $ pipx ensurepath
   ```

2. Install python with pipx:
   ```bash
   $ python3 -m pipx install --user pipx
   $ pipx install python # optional
   ```

3. Check by looking at the installed versions:
   ```bash
   $ pip --version
   $ pipx --version
   $ python --version
   ```

**Note**: In VS Code, make sure you have selected the correct Python interpreter that corresponds to the virtual environment where ```flask_sqlalchemy``` is installed:

1. Press ```Ctrl+Shift+P``` (or ```Cmd+Shift+P``` on macOS) to open the Command Palette.

2. Type ```Python: Select Interpreter``` and select it.

3. Choose the interpreter associated with your virtual environment (```venv```).

This ensures that VS Code uses the correct Python environment where your packages, including ```flask_sqlalchemy```, are installed.

We use [hatch](https://hatch.pypa.io/) for project management. 

1. Install hatch:

   Linux:

   ```bash
   # pip install hatch # This method modifies the Python environment in which you choose to install. Consider instead using pipx to avoid dependency conflicts.
   $ pipx install hatch 
   $ hatch --version # verify the version
   ```

   macOS:

   ```bash
   # homebrew install hatch
   $ hatch --version # verify the version
   ```

   Windows:

   ```bash
   # pip install hatch # This method modifies the Python environment in which you choose to install. Consider instead using pipx to avoid dependency conflicts.
   $ pipx install hatch 
   $ hatch --version # verify the version
