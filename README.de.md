Dreigile-Überwachung

# Überwachung der Dreigile

|       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CI/CD | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml)                                                                                                                                                                                        |
| Paket | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-monitoring.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-monitoring.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)                                                                                                                                                                                                                                                     |
| Meta  | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch)[![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)[![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black)[![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/)[![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

* * *

> Eine Webanwendung zum Erstellen von Dashboards für[Dreigile](https://threagile.io).

-   [Glossar](./GLOSSARY.md)
-   [Referenzen](./REFERENCES.md)
-   [Dokumentation](./DOCUMENTATION.md)
-   [Telemetrie](./TELEMETRY.md)
-   [Werkzeug](./TOOLING.md)

**Zusammenfassung**

Lassen Sie Ihren Code in Ihrem eigenen System ausgeführt.

**Notiz**: Der`pyproject.toml`Die Datei sollte sich im Stamm des Repositorys befinden!

**Notiz**: Stellen Sie sicher, dass Sie die erfüllen[Anforderungen](./200/README.md).

1.  **Installationsprozess:**

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

    **Verpacken Sie Ihre Website mit WebPack:**Sobald Sie eine Website haben, die für Sie gut genug ist, müssen Sie die Anwendung mit WebPack verpacken. Dieser Paketordner ist in aufgeführt`.gitignore`Um zu vermeiden, dass es Git verpflichtet ist.

    Das gesamte Setup sollte inzwischen fertig sein, also alles, was Sie tun müssen:
    1)`(.hatch) $ cd src/threagile_monitoring`2)`(.hatch) $ npm install`3)`(.hatch) $ npm run build`

    Dies erstellt die`vendors.#####.js`Und`main.#####.js`Dateien - die alle Komponenten enthalten - in`/src/threagile_monitoring/static/js/`.

    **Entwicklung mit Webpack:**Wenn Sie noch Ihre Website in a entwickeln**separate Terminalsitzung**Nachdem Sie den oben genannten Installationsprozess befolgt haben, tun Sie dies:
    1)`cd ../`# Gehen Sie zur Wurzel des Repositorys
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ sudo chown -R $USER:$(id -gn $USER) ~/.npm`5)`(.hatch) $ npm install`6)`(.hatch) $ npm run watch`

    Dies gilt - in der separaten Terminalsitzung (d. H.`background`) - Laden Sie die Änderungen, die Sie vornehmen, ständig in die entsprechenden Dateien, während Sie diese Änderungen in der anfänglichen Terminalsitzung fortsetzen können (d. H.`foreground`). Sie müssen also nach jeder Bearbeitung keine Quellen erstellen, sondern wird automatisch gepflegt!

    Um die Änderungen zu sehen, speichern und laden Sie Ihren Navigator einfach (normalerweise mit F5).

    **Verwenden von Onlook für die UI -Entwicklung**

    [Onlook](https://github.com/vanHeemstraSystems/onlook)ist ein leistungsstarkes Tool für die interaktive UI -Entwicklung, das sich in Ihr Projekt integriert.

    1.  **Integrationssetup**:
        -   Stellen Sie sicher, dass Ihr Frontend läuft (`npm run watch`)
        -   Starten Sie Ihren Backend -Server (`python app.py`)
        -   Starten Sie Onlook in einer eigenen Anwendung
        -   Verbinden Sie Onlook mit Ihrem laufenden Frontend

    2.  **Best Practices**:
        -   Nehmen Sie kleine, inkrementelle Änderungen vor
        -   Teständerungen sofort im Browser
        -   Überprüfen Sie den generierten Code, bevor Sie sich verpflichten
        -   Bleiben Sie in Synchronisierung und Ihr Frontend
        -   Verwenden Sie die Versionskontrolle für alle von Onlook generierten Änderungen

    3.  **Konfiguration**:
        -   Onlook wird die Struktur Ihres Projekts erkennen
        -   Es werden Änderungen direkt an Ihren Quelldateien vorgenommen
        -   Änderungen werden sofort aufgrund der Webpack -Uhr reflektiert
        -   Ihre Backend -API bleibt während der Entwicklung zugänglich

    **Notiz**: Stellen Sie immer sicher, dass Ihre Frontend vor Beginn der Onlook -Entwicklung läuft. Dies ermöglicht eine Echtzeit-Vorschau Ihrer Änderungen.

    Stellen Sie sicher, dass Sie Ihre Webseite beim Testen mit Backend -Funktionen wie folgt ausführen:
    1)`cd ../../../`# Gehen Sie zur Wurzel des Repositorys
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ python app.py`

    **Prüfen**

    Testen Sie die Anwendung (Frontend) auf diese Weise:
    1)`cd ../`# Gehen Sie zur Wurzel des Repositorys
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ npm install`5)`(.hatch) $ npm test`6)`(.hatch) $ npm test -- --coverage`

    **Laufen:**

    Wenn Sie sich nicht entwickeln, führen Sie die Anwendung auf diese Weise aus (Backend und Frontend gleichzeitig):

        $ hatch run python src/threagile_monitoring/app.py # starts the app 

2.  Softwareabhängigkeiten

3.  Neueste Veröffentlichungen

4.  API -Referenzen

5.  Bauen und testen:

    Verwenden Sie, um Ihren Code zu erstellen:

    ```bash
    $ cd threagile-monitoring
    $ hatch build
    ```

    Um AI für Pull -Anfrage -Bewertungen zu verwenden, verwenden Sie:

    <https://app.coderabbit.ai/dashboard>(Verwendet`phpstan.neon`)

    Verwenden Sie die Anwendung, um die Anwendung auszuführen:

    Linux:

    ```bash
    $ export SECRET_KEY="secret"
    ```

    Fenster:

    ```bash
    $ setx SECRET_KEY secret
    ```

    Dann:

    ```bash
    $ cd threagile-monitoring
    # Without hatch: $ python src/threagile_monitoring/app.py
    $ hatch run python src/threagile_monitoring/app.py
    ```

    Dann navigieren Sie zu`http://127.0.0.1:5000/`in Ihrem Webbrowser.

    Um Tests auszuführen, verwenden Sie:

    ```bash
    $ cd threagile-monitoring
    $ pip install pytest # optional
    $ pytest tests/
    ```

# API -Dokumentation

Navigieren zu`http://127.0.0.1:5000/docs`in Ihrem Webbrowser oder laden Sie den OpenAPI.json von herunter`http://127.0.0.1:5000/openapi.json`.

# Metriken

Lassen Sie ein Werkzeug wie Prometheus kratzen`http://127.0.0.1:9464/metrics`.

**_NEU_**

**Inhaltsverzeichnis**

-   [Installation](#installation)
-   [Versionsquelle](#version-source)
-   [Umgebungen](#environments)
-   [Bauen](#build)
-   [Lizenz](#license)

## Installation

```console
pip install threagile-monitoring
```

## Versionsquelle

-   Der[Hatch-VCS](https://github.com/ofek/hatch-vcs)Versionsquellen -Plugin bestimmt die Projektversion mit Git -Tags

## Umgebungen

-   Ordentlich in einem Standalon definiert[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   Der`test`Matrix verwendet die[Hatch-Container](https://github.com/ofek/hatch-containers)Plugin, um jede Umgebung in Docker -Containern auszuführen; Verwendung ist in der zu sehen[prüfen](.github/workflows/test.yml)Github Workflow

## Bauen

-   Alle Build -Ziele verwenden die[Hatch-VCS](https://github.com/ofek/hatch-vcs)Bauen Sie Hook -Plugin, um a zu versenden`_version.py`Datei so kann die Version zur Laufzeit verwendet werden
-   Räder verwenden die[Hatch-Mypyc](https://github.com/ofek/hatch-mypyc)Bauen Sie das Hook -Plugin auf, um zuerst alle Code mit zu kompilieren[Mypyc](https://github.com/mypyc/mypyc)
-   Der[bauen](.github/workflows/build.yml)Github Workflow zeigt, wie man:
    -   verwenden[Cibuildwheel](https://github.com/pypa/cibuildwheel)Binärräder für jede Plattform verteilen
    -   Verwenden Sie das[App](https://hatch.pypa.io/latest/plugins/builder/app/)Erstellen Sie das Ziel, um eigenständige Verteilungen für jede Plattform zu erstellen

## Lizenz

`threagile-monitoring`ist unter den Bedingungen der[MIT](https://spdx.org/licenses/MIT.html)Lizenz.

## 100 - Einführung

Sehen[README.md](./100/README.md)

## 200 - Anforderungen

Sehen[README.md](./200/README.md)

## 300 - Aufbau unserer Bewerbung

Sehen[README.md](./300/README.md)

## 400 - Schlussfolgerung

Sehen[README.md](./400/README.md)
