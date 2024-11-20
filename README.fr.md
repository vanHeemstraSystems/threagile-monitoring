surveillance des risques

# Surveillance menaçante

|          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CI/CD    | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml)                                                                                                                                                                                        |
| Emballer | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-monitoring.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-monitoring.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)                                                                                                                                                                                                                                                     |
| Méta     | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch)[![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)[![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black)[![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/)[![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

* * *

> Une application Web pour créer un tableau de bord pour[Menaçant](https://threagile.io).

-   [Glossaire](./GLOSSARY.md)
-   [Références](./REFERENCES.md)
-   [Documentation](./DOCUMENTATION.md)

**Résumé exécutif**

Faire en sorte que votre code soit opérationnel sur votre propre système.

**Note**: Assurez-vous de remplir les[exigences](./200/README.md).

1.  **Processus d'installation :**

    ````bash
    $ cd threagile-monitoring
    $ hatch version # optional, will print the version of our package to the terminal without modifying the source directory (e.g. `0.0.1`).
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
    $ hatch run python -m setuptools_scm # optional, display the version of our package and perform any side-effects like writing to a file. (here: `_version.py`)

    **Package your site with webpack:**
    Once you have a website that is good enough for you to use, you have to package the application with webpack. This is in ```.gitignore``` to avoid a bloated git commit history.

    All of the setup should be ready by now so all you have to do is run `npm run build` in the `./templates/static` folder.

    This will create the bundle.js and index.html files here in `./templates/public`.

    **Development with webpack:**
    If you are still developing your website, it is as easy as `npm run watch` which will constantly load the changes you make into the appropriate files.

    To see the changes just save and reload your navigator (usually with F5). Make sure you are using the `python run.py` to run your webpage when testing with backend functions.

    **Run:**
    $ hatch run python src/threagile_monitoring/app.py # starts the app 
    ````
2.  Dépendances logicielles
3.  Dernières versions
4.  Références API
5.  Construire et tester :

    Pour construire votre code, utilisez :

    ```bash
    $ cd threagile-monitoring
    $ hatch build
    ```

    Pour utiliser l'IA pour les révisions de demandes d'extraction, utilisez :

    <https://app.coderabbit.ai/dashboard>(utilise`phpstan.neon`)

    Pour exécuter l'application, utilisez :

    Linux :

    ```bash
    $ export SECRET_KEY="secret"
    ```

    Fenêtres :

    ```bash
    $ setx SECRET_KEY secret
    ```

    Alors:

    ```bash
    $ cd threagile-monitoring
    # Without hatch: $ python src/threagile_monitoring/app.py
    $ hatch run python src/threagile_monitoring/app.py
    ```

    Ensuite, accédez à`http://127.0.0.1:5000/`dans votre navigateur Internet.

    Pour exécuter des tests, utilisez :

    ```bash
    $ cd threagile-monitoring
    $ pip install pytest # optional
    $ pytest tests/
    ```

# Documentation API

Accédez à`http://127.0.0.1:5000/docs`dans votre navigateur Web, ou téléchargez le fichier openapi.json depuis`http://127.0.0.1:5000/openapi.json`.

# Métrique

Laissez un outil comme Prometheus gratter`http://127.0.0.1:9464/metrics`.

**_NOUVEAU_**

**Table des matières**

-   [Installation](#installation)
-   [Source de la version](#version-source)
-   [Environnements](#environments)
-   [Construire](#build)
-   [Licence](#license)

## Installation

```console
pip install threagile-monitoring
```

## Source de la version

-   Le[trappe-vcs](https://github.com/ofek/hatch-vcs)Le plugin source de version détermine la version du projet à l'aide des balises Git

## Environnements

-   Bien défini dans un environnement autonome[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   Le`test`la matrice utilise le[conteneurs-écoutilles](https://github.com/ofek/hatch-containers)plugin pour exécuter chaque environnement dans les conteneurs Docker ; l'utilisation peut être vue dans le[test](.github/workflows/test.yml)Flux de travail GitHub

## Construire

-   Toutes les cibles de build utilisent le[trappe-vcs](https://github.com/ofek/hatch-vcs)construire un plugin hook pour expédier un`_version.py`fichier afin que la version puisse être utilisée au moment de l'exécution
-   Les roues utilisent le[trappe-mypyc](https://github.com/ofek/hatch-mypyc)construire un plugin hook pour compiler d'abord tout le code avec[Monpyc](https://github.com/mypyc/mypyc)
-   Le[construire](.github/workflows/build.yml)Le workflow GitHub montre comment :
    -   utiliser[roue cibuild](https://github.com/pypa/cibuildwheel)distribuer des roues binaires pour chaque plateforme
    -   utiliser le[application](https://hatch.pypa.io/latest/plugins/builder/app/)construire une cible pour créer des distributions autonomes pour chaque plate-forme

## Licence

`threagile-monitoring`est distribué selon les termes du[AVEC](https://spdx.org/licenses/MIT.html)licence.

## 100 - Introduction

Voir[README.md](./100/README.md)

## 200 - Exigences

Voir[README.md](./200/README.md)

## 300 - Créer notre application

Voir[README.md](./300/README.md)

## 400 - Conclusion

Voir[README.md](./400/README.md)
