surveillant

# Surveillance

|          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CI / CD  | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml)                                                                                                                                                                                        |
| Emballer | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-monitoring.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-monitoring.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)                                                                                                                                                                                                                                                     |
| Méta     | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch)[![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)[![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black)[![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/)[![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

* * *

> Une application Web pour créer des tableaux de bord pour[Époustouflant](https://threagile.io).

-   [Glossaire](./GLOSSARY.md)
-   [Références](./REFERENCES.md)
-   [Documentation](./DOCUMENTATION.md)
-   [Télémétrie](./TELEMETRY.md)
-   [Outillage](./TOOLING.md)

**Résumé exécutif**

Mettre votre code en cours d'exécution sur votre propre système.

**Note**: Le`pyproject.toml`Le fichier doit être à la racine du référentiel!

**Note**: Assurez-vous de réaliser le[exigences](./200/README.md).

1.  **Processus d'installation:**

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

    **Package de votre site avec webpack:**Une fois que vous avez un site Web assez bon pour vous, vous devez emballer l'application avec WebPack. Ce dossier de package est répertorié dans`.gitignore`pour éviter qu'il ne soit attaché à Git.

    Toute la configuration doit être prête maintenant, donc tout ce que vous avez à faire:
    1)`(.hatch) $ cd src/threagile_monitoring`2)`(.hatch) $ npm install`3)`(.hatch) $ npm run build`

    Cela créera le`vendors.#####.js`et`main.#####.js`Fichiers - qui contient tous les composants - dans`/src/threagile_monitoring/static/js/`.

    **Développement avec WebPack:**Si vous développez toujours votre site Web, dans un**Session du terminal séparé**, après avoir suivi le processus d'installation ci-dessus, faites-le:
    1)`cd ../`# allez à la racine du référentiel
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ sudo chown -R $USER:$(id -gn $USER) ~/.npm`5)`(.hatch) $ npm install`6)`(.hatch) $ npm run watch`

    Ce sera - dans la session du terminal séparé (c'est-à-dire`background`) - Chargez constamment les modifications que vous apportez dans les fichiers appropriés, tandis que vous pouvez continuer à apporter ces modifications - dans la session du terminal initial (c'est-à-dire.`foreground`). Vous n'avez donc pas à construire vos sources après chaque modification, il est pris en charge automatiquement!

    Pour voir les modifications, enregistrez et rechargez votre navigateur (généralement avec F5).

    **Utilisation de la marche pour le développement de l'interface utilisateur**

    [Embouteillard](https://github.com/vanHeemstraSystems/onlook)est un outil puissant pour le développement d'interface utilisateur interactif qui s'intègre à votre projet.

    1.  **Configuration de l'intégration**:
        -   Assurez-vous que votre frontend est en cours d'exécution (`npm run watch`)
        -   Démarrez votre serveur backend (`python app.py`)
        -   Lancez la marche dans sa propre application
        -   Connectez le plein air à votre frontend en cours d'exécution

    2.  **Meilleures pratiques**:
        -   Apporter de petits changements progressifs
        -   Test des modifications immédiatement dans le navigateur
        -   Examiner le code généré avant de s'engager
        -   Gardez l'observation et votre frontend en synchronisation
        -   Utilisez le contrôle de la version pour toutes les modifications générées par le plein air

    3.  **Configuration**:
        -   L'observation détectera la structure de votre projet
        -   Il apportera des modifications directement dans vos fichiers source
        -   Les modifications sont immédiatement reflétées en raison de la montre WebPack
        -   Votre API backend reste accessible pendant le développement

    **Note**: Assurez-vous toujours que votre frontend est en cours d'exécution avant de commencer le développement de l'application. Cela permet un aperçu en temps réel de vos modifications.

    Make sure, to run your webpage when testing with backend functions, as follows:
    1) `cd ../../../`# allez à la racine du référentiel
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ python app.py`

    **Test**

    Testez l'application (frontend) de cette façon:
    1)`cd ../`# allez à la racine du référentiel
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ npm install`5)`(.hatch) $ npm test`6)`(.hatch) $ npm test -- --coverage`

    **Courir:**

    Si vous ne développez pas, exécutez l'application (backend et frontend simultanément) de cette façon:

        $ hatch run python src/threagile_monitoring/app.py # starts the app 

2.  Dépendances logicielles

3.  Dernières versions

4.  Références API

5.  Construire et tester:

    Pour créer votre code, utilisez:

    ```bash
    $ cd threagile-monitoring
    $ hatch build
    ```

    Pour utiliser l'IA pour les avis de demande de traction, utilisez:

    <https://app.coderabbit.ai/dashboard>(utilise`phpstan.neon`)

    Pour exécuter l'application, utilisez:

    Linux:

    ```bash
    $ export SECRET_KEY="secret"
    ```

    Windows:

    ```bash
    $ setx SECRET_KEY secret
    ```

    Alors:

    ```bash
    $ cd threagile-monitoring
    # Without hatch: $ python src/threagile_monitoring/app.py
    $ hatch run python src/threagile_monitoring/app.py
    ```

    Ensuite, accédez à`http://127.0.0.1:5000/`dans votre navigateur Web.

    Pour exécuter des tests, utilisez:

    ```bash
    $ cd threagile-monitoring
    $ pip install pytest # optional
    $ pytest tests/
    ```

# Documentation API

Se diriger vers`http://127.0.0.1:5000/docs`Dans votre navigateur Web, ou téléchargez l'OpenAPI.json depuis`http://127.0.0.1:5000/openapi.json`.

# Métrique

Laissez un outil comme Prometheus gratter`http://127.0.0.1:9464/metrics`.

**_NOUVEAU_**

**Table des matières**

-   [Installation](#installation)
-   [Source de version](#version-source)
-   [Environnements](#environments)
-   [Construire](#build)
-   [Licence](#license)

## Installation

```console
pip install threagile-monitoring
```

## Source de version

-   Le[trappe](https://github.com/ofek/hatch-vcs)Le plugin de source de version détermine la version du projet à l'aide de balises GIT

## Environnements

-   Défini parfaitement dans une autonome[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   Le`test`La matrice utilise le[colporteur de trappe](https://github.com/ofek/hatch-containers)plugin pour exécuter chaque environnement à l'intérieur des conteneurs Docker; L'utilisation peut être vue dans le[test](.github/workflows/test.yml)Flow de travail GitHub

## Construire

-   Toutes les cibles de construction utilisent le[trappe](https://github.com/ofek/hatch-vcs)Construisez le plugin de crochet pour expédier un`_version.py`Fichier afin que la version puisse être utilisée à l'exécution
-   Les roues utilisent le[trappe-mypyc](https://github.com/ofek/hatch-mypyc)Construisez le plugin Hook pour compiler tout d'abord tout le code avec[Mypyc](https://github.com/mypyc/mypyc)
-   Le[construire](.github/workflows/build.yml)GitHub Workflow montre comment:
    -   utiliser[roue cibuild](https://github.com/pypa/cibuildwheel)pour distribuer des roues binaires pour chaque plate-forme
    -   Utiliser le[appliquer](https://hatch.pypa.io/latest/plugins/builder/app/)Créer une cible pour construire des distributions autonomes pour chaque plate-forme

## Licence

`threagile-monitoring`est distribué sous les termes du[AVEC](https://spdx.org/licenses/MIT.html)licence.

## 100 - Introduction

Voir[README.md](./100/README.md)

## 200 - exigences

Voir[README.md](./200/README.md)

## 300 - Construire notre application

Voir[README.md](./300/README.md)

## 400 - Conclusion

Voir[README.md](./400/README.md)
