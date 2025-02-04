monitoreo de la espía

# Monitoreo de la espía

|         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CI/CD   | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml)                                                                                                                                                                                        |
| Paquete | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-monitoring.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-monitoring.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)                                                                                                                                                                                                                                                     |
| Meta    | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch)[![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)[![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black)[![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/)[![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

* * *

> Una aplicación web para crear paneles para[Espeluznante](https://threagile.io).

-   [Glosario](./GLOSSARY.md)
-   [Referencias](./REFERENCES.md)
-   [Documentación](./DOCUMENTATION.md)
-   [Telemetría](./TELEMETRY.md)
-   [Estampación](./TOOLING.md)

**Resumen ejecutivo**

Poner en funcionamiento su código en su propio sistema.

**Nota**: El`pyproject.toml`¡El archivo debe estar en la raíz del repositorio!

**Nota**: Asegúrese de cumplir con el[requisitos](./200/README.md).

1.  **Proceso de instalación:**

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

    **Empaque su sitio con Webpack:**Una vez que tenga un sitio web que sea lo suficientemente bueno para usar, debe empaquetar la aplicación con Webpack. Esta carpeta de paquete se enumera en`.gitignore`para evitar que se comprometa con GIT.

    Toda la configuración debería estar lista para ahora, así que todo lo que tiene que hacer:
    1)`(.hatch) $ cd src/threagile_monitoring`2)`(.hatch) $ npm install`3)`(.hatch) $ npm run build`

    Esto creará el`vendors.#####.js`y`main.#####.js`archivos, que contienen todos los componentes, en`/src/threagile_monitoring/static/js/`.

    **Desarrollo con Webpack:**Si todavía está desarrollando su sitio web, en un**Sesión de terminal separada**, después de haber seguido el proceso de instalación anterior, haga esto:
    1)`cd ../`# ir a la raíz del repositorio
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ sudo chown -R $USER:$(id -gn $USER) ~/.npm`5)`(.hatch) $ npm install`6)`(.hatch) $ npm run watch`

    Esto lo hará: en la sesión terminal separada (es decir,`background`) - Cargue constantemente los cambios que realiza en los archivos apropiados, mientras que puede continuar haciendo esos cambios, en la sesión de terminal inicial (es decir,`foreground`). Por lo tanto, no tiene que construir sus fuentes después de cada edición, ¡se cuida automáticamente!

    Para ver los cambios, simplemente guarde y vuelva a cargar su navegador (generalmente con F5).

    **Uso de torcer para el desarrollo de la interfaz de usuario**

    [Asumir](https://github.com/vanHeemstraSystems/onlook)es una herramienta poderosa para el desarrollo interactivo de la interfaz de usuario que se integra con su proyecto.

    1.  **Configuración de integración**:
        -   Asegúrese de que su interfaz esté funcionando (`npm run watch`)
        -   Inicie su servidor de backend (`python app.py`)
        -   Iniciar a P "en su propia aplicación
        -   Conecte Plook a su frontend en funcionamiento

    2.  **Mejores prácticas**:
        -   Hacer pequeños cambios incrementales
        -   Los cambios de prueba inmediatamente en el navegador
        -   Revisar el código generado antes de comprometerse
        -   Mantenga Plook y su frontend en sincronización
        -   Utilice el control de versiones para todos los cambios generados por P "

    3.  **Configuración**:
        -   Perspect detectará la estructura de su proyecto
        -   Hará cambios directamente en sus archivos de origen
        -   Los cambios se reflejan inmediatamente debido a Webpack Watch
        -   Su API de backend permanece accesible durante el desarrollo

    **Nota**: Siempre asegúrese de que su interfaz se esté ejecutando antes de comenzar el desarrollo de P ". Esto permite una vista previa en tiempo real de sus cambios.

    Asegúrese, para ejecutar su página web al probar con funciones de backend, de la siguiente manera:
    1)`cd ../../../`# ir a la raíz del repositorio
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ python app.py`

    **Test**

    Pruebe la aplicación (frontend) de esta manera:
    1)`cd ../`# ir a la raíz del repositorio
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ npm install`5)`(.hatch) $ npm test`6)`(.hatch) $ npm test -- --coverage`

    **Correr:**

    Si no se desarrolla, ejecute la aplicación (backend y frontend simultáneamente) de esta manera:

        $ hatch run python src/threagile_monitoring/app.py # starts the app 

2.  Dependencias de software

3.  Últimos lanzamientos

4.  Referencias de API

5.  Construir y probar:

    Para construir su código, use:

    ```bash
    $ cd threagile-monitoring
    $ hatch build
    ```

    Para usar AI para revisiones de solicitudes de extracción, use:

    <https://app.coderabbit.ai/dashboard>(usa`phpstan.neon`)

    Para ejecutar la aplicación, use:

    Linux:

    ```bash
    $ export SECRET_KEY="secret"
    ```

    Windows:

    ```bash
    $ setx SECRET_KEY secret
    ```

    Entonces:

    ```bash
    $ cd threagile-monitoring
    # Without hatch: $ python src/threagile_monitoring/app.py
    $ hatch run python src/threagile_monitoring/app.py
    ```

    Entonces, navegue a`http://127.0.0.1:5000/`en su navegador web.

    Para ejecutar pruebas, use:

    ```bash
    $ cd threagile-monitoring
    $ pip install pytest # optional
    $ pytest tests/
    ```

# Documentación de API

Navegar por`http://127.0.0.1:5000/docs`En su navegador web, o descargue el OpenApi.json desde`http://127.0.0.1:5000/openapi.json`.

# Métrica

Deje que una herramienta como Prometheus Scrape`http://127.0.0.1:9464/metrics`.

**_NUEVO_**

**Tabla de contenido**

-   [Instalación](#installation)
-   [Fuente de la versión](#version-source)
-   [Entornos](#environments)
-   [Construir](#build)
-   [Licencia](#license)

## Instalación

```console
pip install threagile-monitoring
```

## Fuente de la versión

-   El[Hatch-VCS](https://github.com/ofek/hatch-vcs)El complemento de la fuente de la versión determina la versión del proyecto utilizando etiquetas git

## Entornos

-   Definido perfectamente en un[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   El`test`matriz usa el[contenedores](https://github.com/ofek/hatch-containers)complemento para ejecutar cada entorno dentro de los contenedores Docker; el uso se puede ver en el[prueba](.github/workflows/test.yml)Flujo de trabajo de Github

## Construir

-   Todos los objetivos de construcción usan el[Hatch-VCS](https://github.com/ofek/hatch-vcs)complemento de gancho de compilación para enviar un`_version.py`archivo para que la versión se pueda usar en tiempo de ejecución
-   Las ruedas usan el[hatch-mypyc](https://github.com/ofek/hatch-mypyc)Build Hook Plugin para compilar primero todo el código con[Mypyc](https://github.com/mypyc/mypyc)
-   El[construir](.github/workflows/build.yml)El flujo de trabajo de GitHub muestra cómo:
    -   usar[cibuildwheel](https://github.com/pypa/cibuildwheel)para distribuir ruedas binarias para cada plataforma
    -   usar el[aplicación](https://hatch.pypa.io/latest/plugins/builder/app/)Construir un objetivo para construir distribuciones independientes para cada plataforma

## Licencia

`threagile-monitoring`se distribuye bajo los términos del[CON](https://spdx.org/licenses/MIT.html)licencia.

## 100 - Introducción

Ver[README.md](./100/README.md)

## 200 - Requisitos

Ver[README.md](./200/README.md)

## 300 - Construyendo nuestra aplicación

Ver[README.md](./300/README.md)

## 400 - Conclusión

Ver[README.md](./400/README.md)
