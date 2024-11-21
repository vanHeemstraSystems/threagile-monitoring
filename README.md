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

**Executive Summary**

Getting your code up and running on your own system.

**Note**: Make sure you fulfill the [requirements](./200/README.md).
1.	**Installation process:** 
    ```bash 
    $ cd threagile-monitoring
    $ hatch --version # optional, will print the version of our package to the terminal without modifying the source directory (e.g. `0.0.1`).
    # Without hatch: $ python src/threagile_monitoring/app.py
    $ hatch env create # optional, if the default env already exists you will be told
    $ hatch shell # spawn a shell within an environment
    (threagile-monitoring) $ pip show threagile-monitoring # optional, shows the project details, here 'threagile-monitoring', from `pyproject.toml`
    # Name: threagile-monitoring
    # Version: 0.0.1 # it takes this from src/threagile_monitoring/__about__.py
    # ...
    (threagile-monitoring) $ python -c "import sys;print(sys.executable)" # optional, see where your environment's python is located
    (threagile-monitoring) $ exit # type `exit` to leave the environment
    $ hatch run pip install --upgrade pip # optional, the `run` command allows you to execute commands in an environment as if you had already entered it.
    $ hatch run pip install -r requirements.txt # pipx won't do this
    ~$ hatch run python -m setuptools_scm~ # optional, display the version of our package and perform any side-effects like writing to a file. (here: `_version.py`)
    ```

    **Package your site with webpack:**
    Once you have a website that is good enough for you to use, you have to package the application with webpack. This package folder is listed in ```.gitignore``` to avoid it to be committed to git.

    All of the setup should be ready by now so all you have to do:
    1) ```$ hatch shell```
    2) ```(threagile-monitoring) $ cd templates/static```
    3) ```(threagile-monitoring) $ npm install```
    4) ```(threagile-monitoring) $ npm run build```

    This will create the ```bundle.js``` and ```index.html``` files in ```/src/threagile_monitoring/templates/public```.

    **Development with webpack:**
    If you are still developing your website, it is as easy as:
    1) ```$ hatch shell```
    2) ```(threagile-monitoring) $ cd templates/static```
    3) ```(threagile-monitoring) $ npm install```
    4) ```(threagile-monitoring) $ npm run watch```

    This will constantly load the changes you make into the appropriate files.

    To see the changes just save and reload your navigator (usually with F5). 
    
    Make sure, to run your webpage when testing with backend functions, you are using:
    1) ```(threagile-monitoring) $ cd ../../``` # to go out of templates/static
    2) ```(threagile-monitoring) $ python run.py```
    
    **TO DO**: Change from ```run.py``` to using ```app.py```.

    **Run:**
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
