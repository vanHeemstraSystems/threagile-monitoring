surveillance des risques

# Surveillance menaçante

|          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CI/CD    | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml)                                                                                                                                                                                        |
| Emballer | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-monitoring.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-monitoring.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)                                                                                                                                                                                                                                                     |
| Méta     | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch)[![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)[![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black)[![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/)[![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

* * *

> Une application web pour créer des tableaux de bord pour[Menaçant](https://threagile.io).

-   [Glossaire](./GLOSSARY.md)
-   [Références](./REFERENCES.md)
-   [Documentation](./DOCUMENTATION.md)
-   [Télémétrie](./TELEMETRY.md)
-   [Outillage](./TOOLING.md)

**Résumé exécutif**

Faire en sorte que votre code soit opérationnel sur votre propre système.

**Note**: Le`pyproject.toml`le fichier doit être à la racine du référentiel !

**Note**: Assurez-vous de remplir les[exigences](./200/README.md).

1.  **Processus d'installation :**

    ```bash
    $ cd threagile-monitoring # start at sub-directory of the repository where the requirements.txt file is kept.
    $ hatch --version # optional, will print the version of our package to the terminal without modifying the source directory (e.g. `0.0.1`).
    # Without hatch: $ python src/threagile_monitoring/app.py
    $ hatch env create # optional, if the default env already exists you will be told
    $ hatch shell # spawn a shell within an environment
    (.hatch) $ cd .. # go one directory up to where pyproject.toml resides
    (.hatch) $ pip install -e . # install the package in editable mode
    (.hatch) $ cd threagile-monitoring # go back to the sub-directory of the repository where the requirements.txt file is kept.
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

    **Packagez votre site avec webpack :**Une fois que vous disposez d’un site Web suffisamment performant pour que vous puissiez l’utiliser, vous devez empaqueter l’application avec webpack. Ce dossier de package est répertorié dans`.gitignore`pour éviter qu'il soit engagé dans git.

    Toute la configuration devrait être prête maintenant, il vous suffit donc de :
    1)`(.hatch) $ cd src/threagile_monitoring`2)`(.hatch) $ npm install`3)`(.hatch) $ npm run build`

    Cela créera le`app.js`fichier - qui contient tous les composants - dans`/src/threagile_monitoring/static/js/`.

    **Développement avec webpack :**Si vous développez encore votre site Web, dans un**session terminale séparée**, après avoir suivi le processus d'installation ci-dessus, faites ceci :
    1)`cd ../`# va à la racine du dépôt
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ sudo chown -R $USER:$(id -gn $USER) ~/.npm`5)`(.hatch) $ npm install`6)`(.hatch) $ npm run watch`

    Cela sera - dans la session de terminal séparée (c'est-à-dire`background`) - chargez constamment les modifications que vous apportez dans les fichiers appropriés, tandis que vous pouvez continuer à apporter ces modifications - lors de la session initiale du terminal (c'est-à-dire`foreground`). Vous n’avez donc pas besoin de construire vos sources après chaque édition, cela est pris en charge automatiquement !

    Pour voir les modifications, enregistrez et rechargez simplement votre navigateur (généralement avec F5).

    Assurez-vous d'exécuter votre page Web lors des tests avec les fonctions backend, comme suit :
    1)`cd ../../../`# va à la racine du dépôt
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ python app.py`

    **Test**

    Testez l'application (frontend) de cette façon :
    1)`cd ../`# va à la racine du dépôt
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ npm install`5)`(.hatch) $ npm test`6)`(.hatch) $ npm test -- --coverage`

    **Courir:**

    Si vous ne développez pas, exécutez l'application (backend et frontend simultanément) de cette façon :

        $ hatch run python src/threagile_monitoring/app.py # starts the app 

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

## 100 - Présentation

Voir[README.md](./100/README.md)

## 200 - Exigences

Voir[README.md](./200/README.md)

## 300 - Construire notre application

Voir[README.md](./300/README.md)

## 400 - Conclusion

Voir[README.md](./400/README.md)
