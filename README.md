threagile-monitoring
# Threagile Monitoring

| | |
| --- | --- |
| CI/CD | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml) [![CD - Build](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml) |
| Package | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-monitoring.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-monitoring/) [![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-monitoring.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-monitoring/) |
| Meta | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch) [![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black) [![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black) [![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/) [![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

-----

> A web application to create dashboards for [Threagile](https://threagile.io).

- [Glossary](./GLOSSARY.md)
- [References](./REFERENCES.md)
- [Documentation](./DOCUMENTATION.md)
- [Telemetry](./TELEMETRY.md)
- [Tooling](./TOOLING.md)

**Executive Summary**

Getting your code up and running on your own system.

**Note**: The ```pyproject.toml``` file should be in the root of the repository!

**Note**: Make sure you fulfill the [requirements](./200/README.md).
1.	**Installation process:** 
    ```bash 
    $ cd threagile-monitoring # start at sub-directory of the repository where the requirements.txt file is kept.
    $ hatch --version # optional, will print the version of our package to the terminal without modifying the source directory (e.g. `0.0.1`).
    # Without hatch: $ python src/threagile_monitoring/app.py
    $ hatch env create # optional, if the default env already exists you will be told
    $ hatch shell # spawn a shell within an environment
    (.hatch) $ pwd # go to the directory where pyproject.toml resides
    (.hatch) $ pip install -e . # install the package in editable mode
    (.hatch) $ cd threagile-monitoring # go to the sub-directory of the repository where the requirements.txt file is kept.
    (.hatch) $ pip show threagile-monitoring # optional, shows the project details, here 'threagile-monitoring', from `pyproject.toml`
    # Name: threagile-monitoring
    # Version: 0.0.1 # it takes this from src/threagile_monitoring/__about__.py
    # ...
    (.hatch) $ python -c "import sys;print(sys.executable)" # optional, see where your environment's python is located
    (.hatch) $ pip install --upgrade pip # optional, the `run` command allows you to execute commands in an environment as if you had already entered it.
    (.hatch) $ pip install -r requirements.txt # pipx won't do this
    (.hatch) $ git tag # check if you already have a verion tagged
    (.hatch) $ git tag -a v0.0.1 -m "Initial release" # optional, if you have no tags yet
    # setuptools_scm displays the version of our package and perform any side-effects like writing to a file. (here: `__about__.py`)
    ```

    **Package your site with webpack:**
    Once you have a website that is good enough for you to use, you have to package the application with webpack. This package folder is listed in ```.gitignore``` to avoid it to be committed to git.

    All of the setup should be ready by now so all you have to do:
    1) ```(.hatch) $ cd src/threagile_monitoring```
    2) ```(.hatch) $ npm install```
    3) ```(.hatch) $ npm run build```

    This will create the ```vendors.#####.js``` and ```main.#####.js``` files - which contains all components - in ```/src/threagile_monitoring/static/js/```.

    **Development with webpack:**
    If you are still developing your website, in a **separate terminal session**, after having followed the above installation process, do this:
    1) ```cd ../``` # go to the root of the repository
    2) ```hatch shell```
    3) ```(.hatch) $ cd threagile-monitoring/src/threagile_monitoring```
    4) ```(.hatch) $ sudo chown -R $USER:$(id -gn $USER) ~/.npm```
    5) ```(.hatch) $ npm install```
    6) ```(.hatch) $ npm run watch```

    This will - in the separate terminal session (i.e. ```background```) - constantly load the changes you make into the appropriate files, whilst you can can continue make those changes - in the initial terminal session (i.e. ```foreground```). So you do not have to build your sources after each edit, it is taken care of automatically!

    To see the changes just save and reload your navigator (usually with F5). 

    **Using Onlook for UI Development**

    [Onlook](https://github.com/vanHeemstraSystems/onlook) is a powerful tool for interactive UI development that integrates with your project.

    1. **Integration Setup**:
       - Ensure your frontend is running (`npm run watch`)
       - Start your backend server (`python app.py`)
       - Launch Onlook in its own application
       - Connect Onlook to your running frontend

    2. **Best Practices**:
       - Make small, incremental changes
       - Test changes immediately in the browser
       - Review generated code before committing
       - Keep Onlook and your frontend in sync
       - Use version control for all Onlook-generated changes

    3. **Configuration**:
       - Onlook will detect your project's structure
       - It will make changes directly to your source files
       - Changes are immediately reflected due to webpack watch
       - Your backend API remains accessible during development

    **Note**: Always ensure your frontend is running before starting Onlook development. This enables real-time preview of your changes.

    Make sure, to run your webpage when testing with backend functions, as follows:
    1) ```cd ../../../``` # go to the root of the repository
    2) ```hatch shell```
    3) ```(.hatch) $ cd threagile-monitoring/src/threagile_monitoring```
    4) ```(.hatch) $ python app.py```

    **Test**

    Test the application (frontend) this way:
    1) ```cd ../``` # go to the root of the repository
    2) ```hatch shell```
    3) ```(.hatch) $ cd threagile-monitoring/src/threagile_monitoring```
    4) ```(.hatch) $ npm install```
    5) ```(.hatch) $ npm test```
    6) ```(.hatch) $ npm test -- --coverage```

    **Run:**

    If not developing, run the application (backend and frontend simultaneously) this way: 

    ```
    $ hatch run python src/threagile_monitoring/app.py # starts the app 
    ```

2.	Software dependencies
3.	Latest releases
4.	API references
5.  Build and Test:

    To build your code, use:

    ```bash
    $ cd threagile-monitoring
    $ hatch build
    ```

    To use AI for pull request reviews, use:

    https://app.coderabbit.ai/dashboard (uses ```phpstan.neon```)

    To run the application, use:

    Linux:
    ```bash
    $ export SECRET_KEY="secret"
    ```

    Windows:
    ```bash
    $ setx SECRET_KEY secret
    ```

    Then:

    ```bash
    $ cd threagile-monitoring
    # Without hatch: $ python src/threagile_monitoring/app.py
    $ hatch run python src/threagile_monitoring/app.py
    ```

    Then, navigate to `http://127.0.0.1:5000/` in your web browser.

    To run tests, use:

    ```bash
    $ cd threagile-monitoring
    $ pip install pytest # optional
    $ pytest tests/
    ```

# API Documentation

Navigate to `http://127.0.0.1:5000/docs` in your web browser, or download the openapi.json from `http://127.0.0.1:5000/openapi.json`.

# Metrics

Let a tool like Prometheus scrape `http://127.0.0.1:9464/metrics`.

___ NEW ___

**Table of Contents**

- [Installation](#installation)
- [Version source](#version-source)
- [Environments](#environments)
- [Build](#build)
- [License](#license)

## Installation

```console
pip install threagile-monitoring
```

## Version source

- The [hatch-vcs](https://github.com/ofek/hatch-vcs) version source plugin determines the project version using Git tags

## Environments

- Defined neatly in a standalone [`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
- The `test` matrix uses the [hatch-containers](https://github.com/ofek/hatch-containers) plugin to run each environment inside Docker containers; usage can be seen in the [test](.github/workflows/test.yml) GitHub workflow

## Build

- All build targets use the [hatch-vcs](https://github.com/ofek/hatch-vcs) build hook plugin to ship a `_version.py` file so the version can be used at runtime
- Wheels use the [hatch-mypyc](https://github.com/ofek/hatch-mypyc) build hook plugin to first compile all code with [Mypyc](https://github.com/mypyc/mypyc)
- The [build](.github/workflows/build.yml) GitHub workflow shows how to:
  - use [cibuildwheel](https://github.com/pypa/cibuildwheel) to distribute binary wheels for every platform
  - use the [app](https://hatch.pypa.io/latest/plugins/builder/app/) build target to build standalone distributions for every platform

## License

`threagile-monitoring` is distributed under the terms of the [MIT](https://spdx.org/licenses/MIT.html) license.

## 100 - Introduction

See [README.md](./100/README.md)

## 200 - Requirements

See [README.md](./200/README.md)

## 300 - Building Our Application

See [README.md](./300/README.md)

## 400 - Conclusion

See [README.md](./400/README.md)
