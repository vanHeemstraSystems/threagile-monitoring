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

**Samenvatting**

Uw code op uw eigen systeem operationeel krijgen.

**Opmerking**: Zorg ervoor dat u voldoet aan de[vereisten](./200/README.md).

1.  **Installatieproces:**

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
    (threagile-monitoring) $ pip install --upgrade pip # optional, the `run` command allows you to execute commands in an environment as if you had already entered it.
    (threagile-monitoring) $ pip install -r requirements.txt # pipx won't do this
    (threagile-monitoring) $ python -m setuptools_scm # optional, display the version of our package and perform any side-effects like writing to a file. (here: `_version.py`)
    (threagile-monitoring) $ exit # optional, type `exit` to leave the environment
    ```

    **Verpak uw site met webpack:**Zodra u een website heeft die goed genoeg is om te gebruiken, moet u de applicatie verpakken met webpack. Deze pakketmap wordt vermeld in`.gitignore`om te voorkomen dat het aan git wordt vastgelegd.

    Alle instellingen zouden nu klaar moeten zijn, dus alles wat je hoeft te doen:
    1)`$ hatch shell`2)`(threagile-monitoring) $ cd src/threagile_monitoring`3)`(threagile-monitoring) $ npm install`4)`(threagile-monitoring) $ npm run build`

    Hierdoor ontstaat de`app.js`bestand - dat alle componenten bevat - in`/src/threagile_monitoring/static/js/`.

    **Ontwikkeling met webpack:**Als u uw website nog aan het ontwikkelen bent, in a**afzonderlijke terminalsessie**, nadat u het bovenstaande installatieproces heeft gevolgd, doet u het volgende:
    1)`$ hatch shell`2)`(threagile-monitoring) $ cd src/threagile_monitoring`3)`(threagile-monitoring) $ npm install`4)`(threagile-monitoring) $ npm run watch`

    Dit zal - in de afzonderlijke terminalsessie (d.w.z.`background`) - laad voortdurend de wijzigingen die u aanbrengt in de juiste bestanden, terwijl u door kunt gaan met het aanbrengen van die wijzigingen - in de initiële terminalsessie (d.w.z.`foreground`). Je hoeft dus niet na elke bewerking je bronnen opnieuw op te bouwen, dit gebeurt automatisch!

    To see the changes just save and reload your navigator (usually with F5). 

    Zorg ervoor dat u uw webpagina als volgt uitvoert tijdens het testen met backend-functies:
    1)`(threagile-monitoring) $ cd src/threagile_monitoring`2)`(threagile-monitoring) $ python app.py`

    **Test**

    Test de applicatie (frontend) op deze manier:

    1)`$ hatch shell`2)`(threagile-monitoring) $ cd src/threagile_monitoring`3)`(threagile-monitoring) $ npm install`4)`(threagile-monitoring) $ npm test`5)`(threagile-monitoring) $ npm test -- --coverage`

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

-   De[hatch-vcs](https://github.com/ofek/hatch-vcs)versie bronplug-in bepaalt de projectversie met behulp van Git-tags

## Omgevingen

-   Netjes gedefinieerd in een standalone[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   De`test`matrix maakt gebruik van de[luikcontainers](https://github.com/ofek/hatch-containers)plug-in om elke omgeving binnen Docker-containers uit te voeren; gebruik is te zien in de[test](.github/workflows/test.yml)GitHub-workflow

## Bouwen

-   Alle bouwdoelen gebruiken de[hatch-vcs](https://github.com/ofek/hatch-vcs)bouw een hook-plug-in om een`_version.py`bestand zodat de versie tijdens runtime kan worden gebruikt
-   Wielen gebruiken de[hatch-mypyc](https://github.com/ofek/hatch-mypyc)bouw hook-plug-in om eerst alle code mee te compileren[Mijnpyc](https://github.com/mypyc/mypyc)
-   De[bouwen](.github/workflows/build.yml)De GitHub-workflow laat zien hoe u:
    -   gebruik[cibuildwiel](https://github.com/pypa/cibuildwheel)om binaire wielen voor elk platform te distribueren
    -   gebruik de[app](https://hatch.pypa.io/latest/plugins/builder/app/)build target om zelfstandige distributies voor elk platform te bouwen

## Licentie

`threagile-monitoring`wordt verspreid onder de voorwaarden van de[MET](https://spdx.org/licenses/MIT.html)licentie.

## 100 - Inleiding

Zien[README.md](./100/README.md)

## 200 - Requirements

Zien[README.md](./200/README.md)

## 300 - Onze applicatie bouwen

Zien[README.md](./300/README.md)

## 400 - Conclusie

Zien[README.md](./400/README.md)
