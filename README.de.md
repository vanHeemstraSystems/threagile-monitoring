Threagile-Überwachung

# Threagile Überwachung

|       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CI/CD | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml)                                                                                                                                                                                        |
| Paket | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-monitoring.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-monitoring.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)                                                                                                                                                                                                                                                     |
| Meta  | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch)[![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)[![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black)[![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/)[![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

* * *

> Eine Webanwendung zum Erstellen von Dashboards[Threagile](https://threagile.io).

-   [Glossar](./GLOSSARY.md)
-   [Referenzen](./REFERENCES.md)
-   [Dokumentation](./DOCUMENTATION.md)
-   [Telemetrie](./TELEMETRY.md)

**Zusammenfassung**

Bringen Sie Ihren Code auf Ihrem eigenen System zum Laufen.

**Notiz**: Stellen Sie sicher, dass Sie die erfüllen[Anforderungen](./200/README.md).

1.  **Installationsprozess:**

    ```bash
    $ cd threagile-monitoring # start at directory of the repository where the pyproject.toml file is kept.
    $ hatch --version # optional, will print the version of our package to the terminal without modifying the source directory (e.g. `0.0.1`).
    # Without hatch: $ python src/threagile_monitoring/app.py
    $ hatch env create # optional, if the default env already exists you will be told
    $ hatch shell # spawn a shell within an environment
    (threagile-monitoring) $ pip show threagile-monitoring # optional, shows the project details, here 'threagile-monitoring', from `pyproject.toml`
    # Name: threagile-monitoring
    # Version: 0.0.1 # it takes this from src/threagile_monitoring/__about__.py
    # ...
    (threagile-monitoring) $ python -c "import sys;print(sys.executable)" # optional, see where your environment's python is located
    (threagile-monitoring) $ pip install --upgrade pip # optional, the `run` command allows you to execute commands in an environment as if you had already entered it.
    (threagile-monitoring) $ pip install -r requirements.txt # pipx won't do this
    (threagile-monitoring) $ exit # optional, type `exit` to leave the environment
    $ cd .. # go one directory up
    $ git tag -a v0.0.1 -m "Initial release" # optional, if you have no tags yet: $ git tag
    $ python -m setuptools_scm # optional, display the version of our package and perform any side-effects like writing to a file. (here: `_version.py`)
    ```

    **Verpacken Sie Ihre Website mit Webpack:**Sobald Sie eine Website haben, die für Sie gut genug ist, müssen Sie die Anwendung mit Webpack packen. Dieser Paketordner ist in aufgeführt`.gitignore`um zu vermeiden, dass man sich an Git bindet.

    Die gesamte Einrichtung sollte inzwischen fertig sein. Sie müssen also nur noch Folgendes tun:
    1)`$ hatch shell`2)`(threagile-monitoring) $ cd src/threagile_monitoring`3)`(threagile-monitoring) $ npm install`4)`(threagile-monitoring) $ npm run build`

    Dadurch wird das erstellt`app.js`Datei - die alle Komponenten enthält - in`/src/threagile_monitoring/static/js/`.

    **Entwicklung mit Webpack:**Wenn Sie Ihre Website noch entwickeln, in a**separate Terminalsitzung**, nachdem Sie den oben genannten Installationsprozess befolgt haben, gehen Sie wie folgt vor:
    1)`$ hatch shell`2)`(threagile-monitoring) $ cd threagile-monitoring/src/threagile_monitoring`3)`(threagile-monitoring) $ pip install -r ../../requirements.txt`# Wenn Sie eine neue Hatch-Shell starten, nachdem Sie eine vorherige Hatch-Shell beendet haben, handelt es sich um eine neue Umgebung, die erneut die Anforderungen benötigt
    4)`(threagile-monitoring) $ sudo chown -R $USER:$(id -gn $USER) ~/.npm`5)`(threagile-monitoring) $ npm install`6)`(threagile-monitoring) $ npm run watch`

    Dies wird - in der separaten Terminalsitzung (d. h.`background`) – lädt die von Ihnen vorgenommenen Änderungen ständig in die entsprechenden Dateien, während Sie diese Änderungen weiterhin vornehmen können – in der ersten Terminalsitzung (d. h.`foreground`). Sie müssen Ihre Quellen also nicht nach jeder Bearbeitung neu erstellen, dies geschieht automatisch!

    Um die Änderungen zu sehen, speichern Sie einfach Ihren Navigator und laden Sie ihn neu (normalerweise mit F5).

    Stellen Sie sicher, dass Sie Ihre Webseite beim Testen mit Backend-Funktionen wie folgt ausführen:
    1)`(threagile-monitoring) $ cd src/threagile_monitoring`2)`(threagile-monitoring) $ python app.py`

    **Prüfen**

    Testen Sie die Anwendung (Frontend) auf diese Weise:

    1)`$ hatch shell`2)`(threagile-monitoring) $ cd src/threagile_monitoring`3)`(threagile-monitoring) $ npm install`4)`(threagile-monitoring) $ npm test`5)`(threagile-monitoring) $ npm test -- --coverage`

    **Laufen:**

    Wenn Sie nicht entwickeln, führen Sie die Anwendung (Backend und Frontend gleichzeitig) auf diese Weise aus:

        $ hatch run python src/threagile_monitoring/app.py # starts the app 

2.  Softwareabhängigkeiten

3.  Neueste Veröffentlichungen

4.  API-Referenzen

5.  Erstellen und testen:

    Um Ihren Code zu erstellen, verwenden Sie:

    ```bash
    $ cd threagile-monitoring
    $ hatch build
    ```

    Um KI für Pull-Request-Reviews zu verwenden, verwenden Sie:

    <https://app.coderabbit.ai/dashboard>(verwendet`phpstan.neon`)

    Um die Anwendung auszuführen, verwenden Sie:

    Linux:

    ```bash
    $ export SECRET_KEY="secret"
    ```

    Windows:

    ```bash
    $ setx SECRET_KEY secret
    ```

    Dann:

    ```bash
    $ cd threagile-monitoring
    # Without hatch: $ python src/threagile_monitoring/app.py
    $ hatch run python src/threagile_monitoring/app.py
    ```

    Navigieren Sie dann zu`http://127.0.0.1:5000/`in Ihrem Webbrowser.

    Um Tests auszuführen, verwenden Sie:

    ```bash
    $ cd threagile-monitoring
    $ pip install pytest # optional
    $ pytest tests/
    ```

# API-Dokumentation

Navigieren Sie zu`http://127.0.0.1:5000/docs`in Ihrem Webbrowser oder laden Sie openapi.json herunter von`http://127.0.0.1:5000/openapi.json`.

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

-   Der[hatch-vcs](https://github.com/ofek/hatch-vcs)Das Versionsquellen-Plugin bestimmt die Projektversion mithilfe von Git-Tags

## Umgebungen

-   Ordentlich in einem Standalone definiert[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   Der`test`Matrix verwendet die[Lukencontainer](https://github.com/ofek/hatch-containers)Plugin zum Ausführen jeder Umgebung in Docker-Containern; Die Verwendung ist in der zu sehen[prüfen](.github/workflows/test.yml)GitHub-Workflow

## Bauen

-   Alle Build-Ziele verwenden die[hatch-vcs](https://github.com/ofek/hatch-vcs)Erstellen Sie ein Hook-Plugin, um ein zu versenden`_version.py`Datei, damit die Version zur Laufzeit verwendet werden kann
-   Räder verwenden die[hatch-mypyc](https://github.com/ofek/hatch-mypyc)Build-Hook-Plugin, mit dem zunächst der gesamte Code kompiliert werden soll[Mypyc](https://github.com/mypyc/mypyc)
-   Der[bauen](.github/workflows/build.yml)Der GitHub-Workflow zeigt, wie Sie:
    -   verwenden[cibuildwheel](https://github.com/pypa/cibuildwheel)binäre Räder für jede Plattform zu verteilen
    -   Benutze die[App](https://hatch.pypa.io/latest/plugins/builder/app/)build target zum Erstellen eigenständiger Distributionen für jede Plattform

## Lizenz

`threagile-monitoring`wird gemäß den Bedingungen der verteilt[MIT](https://spdx.org/licenses/MIT.html)Lizenz.

## 100 - Einführung

Sehen[README.md](./100/README.md)

## 200 – Anforderungen

Sehen[README.md](./200/README.md)

## 300 – Erstellen unserer Anwendung

Sehen[README.md](./300/README.md)

## 400 – Fazit

Sehen[README.md](./400/README.md)
