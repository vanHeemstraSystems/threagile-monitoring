Threagile-Monitoring

# Threagile -monitoring

|        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CI/CD  | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml)                                                                                                                                                                                        |
| Pakket | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-monitoring.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-monitoring.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)                                                                                                                                                                                                                                                     |
| Meta   | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch)[![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)[![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black)[![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/)[![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

* * *

> Een webtoepassing om dashboards te maken[Threagile](https://threagile.io).

-   [Glossarium](./GLOSSARY.md)
-   [Referenties](./REFERENCES.md)
-   [Documentatie](./DOCUMENTATION.md)
-   [Telemetrie](./TELEMETRY.md)
-   [Gereedschap](./TOOLING.md)

**Uitvoerende samenvatting**

Uw code op uw eigen systeem laten werken.

**Opmerking**: De`pyproject.toml`Bestand moet in de root van de repository staan!

**Opmerking**: Zorg ervoor dat je de[vereisten](./200/README.md).

1.  **Installatieproces:**

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

    **Pak uw site in met webpack:**Zodra u een website hebt die goed genoeg is om te gebruiken, moet u de applicatie met webpack verpakken. Deze pakketmap wordt vermeld`.gitignore`om te voorkomen dat het zich inzet voor git.

    Alle setup zou nu klaar moeten zijn, dus alles wat je hoeft te doen:
    1)`(.hatch) $ cd src/threagile_monitoring`2)`(.hatch) $ npm install`3)`(.hatch) $ npm run build`

    Dit zal de`vendors.#####.js`En`main.#####.js`Bestanden - die alle componenten bevatten - in`/src/threagile_monitoring/static/js/`.

    **Ontwikkeling met webpack:**Als u uw website nog steeds ontwikkelt, in een**Afzonderlijke eindsessie**, Doe dit na het bovenstaande installatieproces te hebben gevolgd:
    1)`cd ../`# Ga naar de wortel van de repository
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ sudo chown -R $USER:$(id -gn $USER) ~/.npm`5)`(.hatch) $ npm install`6)`(.hatch) $ npm run watch`

    Dit zal - in de afzonderlijke eindsessie (d.w.z.`background`) - Laad constant de wijzigingen die u aanbrengt in de juiste bestanden, terwijl u kunt doorgaan met het aanbrengen van die wijzigingen - in de initiële eindsessie (d.w.z.`foreground`). Dus u hoeft uw bronnen niet na elke bewerking te bouwen, deze wordt automatisch verzorgd!

    Om de wijzigingen te zien opslaan en uw navigator opnieuw laden (meestal met F5).

    **Gebruik van ONLOOK voor UI -ontwikkeling**

    [Aan het kijken](https://github.com/vanHeemstraSystems/onlook)is een krachtig hulpmiddel voor interactieve UI -ontwikkeling die integreert met uw project.

    1.  **Integratie -instelling**:
        -   Zorg ervoor dat uw frontend loopt (`npm run watch`)
        -   Start je backend -server (`python app.py`)
        -   Lanceer ONLOOK in zijn eigen applicatie
        -   Verbind ONLOOK met uw rennende frontend

    2.  **Best practices**:
        -   Breng kleine, incrementele veranderingen aan
        -   Test wijzigingen onmiddellijk in de browser
        -   Bekijk de gegenereerde code voordat u zich inzet
        -   Houd ONLOOK en uw frontend in synchronisatie
        -   Gebruik versiebeheer voor alle onlook gegenereerde wijzigingen

    3.  **Configuratie**:
        -   Onlook zal de structuur van uw project detecteren
        -   Het zal rechtstreeks wijzigingen aanbrengen in uw bronbestanden
        -   Wijzigingen worden onmiddellijk weerspiegeld vanwege Webpack Watch
        -   Uw backend -API blijft toegankelijk tijdens de ontwikkeling

    **Opmerking**: Zorg er altijd voor dat uw frontend actief is voordat u begint met de ontwikkeling van OneLook. Dit maakt realtime preview van uw wijzigingen mogelijk.

    Zorg ervoor dat u uw webpagina uitvoert bij het testen met backend -functies, als volgt:
    1)`cd ../../../`# Ga naar de wortel van de repository
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ python app.py`

    **Test**

    Test de toepassing (frontend) op deze manier:
    1)`cd ../`# Ga naar de wortel van de repository
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ npm install`5)`(.hatch) $ npm test`6)`(.hatch) $ npm test -- --coverage`

    **Loop:**

    Als u zich niet ontwikkelt, voert u de applicatie (backend en frontend tegelijkertijd) uit op deze manier:

        $ hatch run python src/threagile_monitoring/app.py # starts the app 

2.  Software -afhankelijkheden

3.  Laatste releases

4.  API -referenties

5.  Bouwen en testen:

    Gebruik: om uw code te bouwen:

    ```bash
    $ cd threagile-monitoring
    $ hatch build
    ```

    Gebruik: om AI te gebruiken voor pull -aanvraagrecensies:

    <https://app.coderabbit.ai/dashboard>(Gebruik`phpstan.neon`)

    Gebruik: om de applicatie uit te voeren:

    Linux:

    ```bash
    $ export SECRET_KEY="secret"
    ```

    Windows:

    ```bash
    $ setx SECRET_KEY secret
    ```

    Dan:

    ```bash
    $ cd threagile-monitoring
    # Without hatch: $ python src/threagile_monitoring/app.py
    $ hatch run python src/threagile_monitoring/app.py
    ```

    Navigeer dan naar`http://127.0.0.1:5000/`in uw webbrowser.

    Gebruik om tests uit te voeren:

    ```bash
    $ cd threagile-monitoring
    $ pip install pytest # optional
    $ pytest tests/
    ```

# API -documentatie

Navigeren naar`http://127.0.0.1:5000/docs`in uw webbrowser, of download de openapi.json van`http://127.0.0.1:5000/openapi.json`.

# Statistieken

Laat een tool als Prometheus schrapen`http://127.0.0.1:9464/metrics`.

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

-   De[luik-VC's](https://github.com/ofek/hatch-vcs)Versiebronplug -in bepaalt de projectversie met behulp van GIT -tags

## Omgevingen

-   Netjes gedefinieerd in een op zichzelf staande[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   De`test`Matrix gebruikt de[luikcontainers](https://github.com/ofek/hatch-containers)plug -in om elke omgeving in Docker -containers te laten werken; gebruik is te zien in de[test](.github/workflows/test.yml)GitHub -workflow

## Bouwen

-   Alle build -doelen gebruiken de[luik-VC's](https://github.com/ofek/hatch-vcs)Bouw haakplug -in om een`_version.py`Bestand zodat de versie tijdens runtime kan worden gebruikt
-   Wielen gebruiken de[hatch-mypyc](https://github.com/ofek/hatch-mypyc)Build Hook -plug -in om eerst alle code samen te stellen met[MyPyc](https://github.com/mypyc/mypyc)
-   De[bouwen](.github/workflows/build.yml)GitHub -workflow laat zien hoe:
    -   gebruik[CiBuildwheel](https://github.com/pypa/cibuildwheel)Om binaire wielen te verdelen voor elk platform
    -   Gebruik de[app](https://hatch.pypa.io/latest/plugins/builder/app/)Bouw het doel om zelfstandige distributies voor elk platform te bouwen

## Licentie

`threagile-monitoring`wordt verdeeld onder de voorwaarden van de[MET](https://spdx.org/licenses/MIT.html)licentie.

## 100 - Inleiding

Zien[README.md](./100/README.md)

## 200 - Vereisten

Zien[README.md](./200/README.md)

## 300 - onze applicatie bouwen

Zien[README.md](./300/README.md)

## 400 - Conclusie

Zien[README.md](./400/README.md)
