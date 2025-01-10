threagile-monitoring

# Threagile-monitoring

|        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CI/CD  | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml)                                                                                                                                                                                        |
| Pakket | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-monitoring.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-monitoring.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)                                                                                                                                                                                                                                                     |
| Meta   | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch)[![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)[![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black)[![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/)[![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

* * *

> Een webapplicatie om dashboards voor te maken[Threagil](https://threagile.io).

-   [Glossarium](./GLOSSARY.md)
-   [Referenties](./REFERENCES.md)
-   [Documentatie](./DOCUMENTATION.md)
-   [Telemetrie](./TELEMETRY.md)
-   [Gereedschap](./TOOLING.md)

**Samenvatting**

Uw code op uw eigen systeem operationeel krijgen.

**Opmerking**: De`pyproject.toml`bestand moet in de root van de repository staan!

**Opmerking**: Zorg ervoor dat u voldoet aan de[vereisten](./200/README.md).

1.  **Installatieproces:**

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

    **Verpak uw site met webpack:**Zodra u een website heeft die goed genoeg is om te gebruiken, moet u de applicatie verpakken met webpack. Deze pakketmap wordt vermeld in`.gitignore`om te voorkomen dat het aan git wordt vastgelegd.

    Alle instellingen zouden nu klaar moeten zijn, dus alles wat je hoeft te doen:
    1)`(.hatch) $ cd src/threagile_monitoring`2)`(.hatch) $ npm install`3)`(.hatch) $ npm run build`

    Hierdoor ontstaat de`app.js` file - which contains all components - in `/src/threagile_monitoring/static/js/`.

    **Ontwikkeling met webpack:**Als u uw website nog aan het ontwikkelen bent, in a**afzonderlijke terminalsessie**, nadat u het bovenstaande installatieproces heeft gevolgd, doet u het volgende:
    1)`cd ../`# ga naar de hoofdmap van de repository
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ sudo chown -R $USER:$(id -gn $USER) ~/.npm`5)`(.hatch) $ npm install`6)`(.hatch) $ npm run watch`

    Dit zal - in de afzonderlijke terminalsessie (d.w.z.`background`) - laad voortdurend de wijzigingen die u aanbrengt in de juiste bestanden, terwijl u door kunt gaan met het aanbrengen van die wijzigingen - in de initiële terminalsessie (d.w.z.`foreground`). Je hoeft dus niet na elke bewerking je bronnen opnieuw op te bouwen, dit gebeurt automatisch!

    Om de wijzigingen te zien, hoeft u alleen maar uw navigator op te slaan en opnieuw te laden (meestal met F5).

    Zorg ervoor dat u uw webpagina als volgt uitvoert tijdens het testen met backend-functies:
    1)`cd ../`# ga naar de hoofdmap van de repository
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ python app.py`

    **Test**

    Test de applicatie (frontend) op deze manier:
    1)`cd ../`# ga naar de hoofdmap van de repository
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ npm install`5)`(.hatch) $ npm test`6)`(.hatch) $ npm test -- --coverage`

    **Loop:**

    Als u niet aan het ontwikkelen bent, voert u de applicatie (backend en frontend tegelijkertijd) op deze manier uit:

        $ hatch run python src/threagile_monitoring/app.py # starts the app 

2.  Software-afhankelijkheden

3.  Nieuwste releases

4.  API-referenties

5.  Bouwen en testen:

    Om uw code samen te stellen, gebruikt u:

    ```bash
    $ cd threagile-monitoring
    $ hatch build
    ```

    Om AI te gebruiken voor beoordelingen van pull-aanvragen, gebruikt u:

    <https://app.coderabbit.ai/dashboard>(gebruikt`phpstan.neon`)

    Om de applicatie uit te voeren, gebruikt u:

    Linux:

    ```bash
    $ export SECRET_KEY="secret"
    ```

    Ramen:

    ```bash
    $ setx SECRET_KEY secret
    ```

    Dan:

    ```bash
    $ cd threagile-monitoring
    # Without hatch: $ python src/threagile_monitoring/app.py
    $ hatch run python src/threagile_monitoring/app.py
    ```

    Navigeer vervolgens naar`http://127.0.0.1:5000/`in uw webbrowser.

    Om tests uit te voeren, gebruikt u:

    ```bash
    $ cd threagile-monitoring
    $ pip install pytest # optional
    $ pytest tests/
    ```

# API-documentatie

Navigeer naar`http://127.0.0.1:5000/docs`in uw webbrowser, of download de openapi.json van`http://127.0.0.1:5000/openapi.json`.

# Statistieken

Laat een stuk gereedschap als Prometheus schrapen`http://127.0.0.1:9464/metrics`.

**_NIEUW_**

**Inhoudsopgave**

-   [Installatie](#installation)
-   [Versiebron](#version-source)
-   [Omgevingen](#environments)
-   [Bouwen](#build)
-   [Licentie](#license)

## Installatie

```console
pip install threagile-monitoring
```

## Versiebron

-   De[hatch-vcs](https://github.com/ofek/hatch-vcs)versiebronplug-in bepaalt de projectversie met behulp van Git-tags

## Omgevingen

-   Netjes gedefinieerd in een standalone[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   De`test`matrix maakt gebruik van de[luikcontainers](https://github.com/ofek/hatch-containers)plug-in om elke omgeving binnen Docker-containers uit te voeren; gebruik is te zien in de[test](.github/workflows/test.yml)GitHub-workflow

## Bouwen

-   Alle bouwdoelen gebruiken de[hatch-vcs](https://github.com/ofek/hatch-vcs)bouw een hook-plug-in om een`_version.py`bestand zodat de versie tijdens runtime kan worden gebruikt
-   Wielen gebruiken de[hatch-mypyc](https://github.com/ofek/hatch-mypyc)bouw hook-plug-in om eerst alle code mee te compileren[Mijnpyc](https://github.com/mypyc/mypyc)
-   De[bouwen](.github/workflows/build.yml)GitHub-workflow laat zien hoe u:
    -   gebruik[cibuildwiel](https://github.com/pypa/cibuildwheel)om binaire wielen voor elk platform te distribueren
    -   gebruik de[app](https://hatch.pypa.io/latest/plugins/builder/app/)build target om zelfstandige distributies voor elk platform te bouwen

## Licentie

`threagile-monitoring`wordt verspreid onder de voorwaarden van de[MET](https://spdx.org/licenses/MIT.html)licentie.

## 100 - Inleiding

Zien[README.md](./100/README.md)

## 200 - Vereisten

Zien[README.md](./200/README.md)

## 300 - Onze applicatie bouwen

Zien[README.md](./300/README.md)

## 400 - Conclusie

Zien[README.md](./400/README.md)
