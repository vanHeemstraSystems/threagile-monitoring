throweagile監控

# 彎曲監測

|       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CI/CD | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml)                                                                                                                                                                                        |
| 包裹    | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-monitoring.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-monitoring.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)                                                                                                                                                                                                                                                     |
| 元     | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch)[![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)[![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black)[![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/)[![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

* * *

> A web application to create dashboards for [tre縮](https://threagile.io).

-   [詞彙表](./GLOSSARY.md)
-   [參考](./REFERENCES.md)
-   [文件](./DOCUMENTATION.md)
-   [遙測](./TELEMETRY.md)
-   [Tooling](./TOOLING.md)

**執行摘要**

將代碼啟動並在您自己的系統上運行。

**筆記**： 這`pyproject.toml`文件應該在存儲庫的根部！

**筆記**：確保您滿足[要求](./200/README.md).

1.  **安裝過程：**

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

    **將您的網站與WebPack打包：**一旦擁有足夠好的網站，您就必須將應用程序與WebPack打包。此包裝文件夾在`.gitignore`為了避免致力於git。

    現在所有設置都應該準備就緒，因此您必須要做的所有設置：
    1）`(.hatch) $ cd src/threagile_monitoring`2)`(.hatch) $ npm install`3)`(.hatch) $ npm run build`

    這將創建`vendors.#####.js`和`main.#####.js`文件 - 包含所有組件 - 在`/src/threagile_monitoring/static/js/`.

    **使用WebPack開發：**如果您仍在開發網站，則**單獨的終端會話**，遵循上述安裝過程後，執行此操作：
    1）`cd ../`＃轉到存儲庫的根
    2）`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ sudo chown -R $USER:$(id -gn $USER) ~/.npm`5)`(.hatch) $ npm install`6)`(.hatch) $ npm run watch`

    這將 - 在單獨的終端會話中（即`background`） - 不斷將更改加載到適當的文件中，而您可以繼續進行這些更改 - 在初始終端會話中（即`foreground`）。因此，您不必在每次編輯後都必須構建來源，它會自動照顧！

    要查看更改，只需保存並重新加載導航器（通常使用F5）。

    **使用Onlook進行UI開發**

    [Onlook](https://github.com/vanHeemstraSystems/onlook)是與您的項目集成的交互式UI開發的強大工具。

    1.  **集成設置**:
        -   確保您的前端運行（`npm run watch`)
        -   啟動您的後端服務器（`python app.py`)
        -   在自己的應用程序中啟動Onlook
        -   將Onlook連接到您的跑步前端

    2.  **最佳實踐**:
        -   進行小小的增量改變
        -   立即在瀏覽器中進行測試更改
        -   提交之前審查生成的代碼
        -   保持Onlook和您的前端同步
        -   使用版本控制進行所有Onlook生成的更改

    3.  **配置**:
        -   Onlook將檢測您的項目的結構
        -   它將直接更改您的源文件
        -   由於WebPack手錶而立即反映更改
        -   您的後端API在開發過程中仍然可以訪問

    **筆記**：始終在開始Onlook開發之前確保您的前端運行。這可以實時預覽您的更改。

    確保在使用後端函數測試時運行網頁，如下：
    1）`cd ../../../`＃轉到存儲庫的根
    2）`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ python app.py`

    **測試**

    以這種方式測試應用程序（前端）：
    1）`cd ../`＃轉到存儲庫的根
    2）`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ npm install`5)`(.hatch) $ npm test`6)`(.hatch) $ npm test -- --coverage`

    **跑步：**

    如果不開發，請以這種方式運行應用程序（同時和前端）：

        $ hatch run python src/threagile_monitoring/app.py # starts the app 

2.  軟件依賴性

3.  最新版本

4.  API參考

5.  構建和測試：

    要構建您的代碼，請使用：

    ```bash
    $ cd threagile-monitoring
    $ hatch build
    ```

    要使用AI進行拉動請求評論，請使用：

    <https://app.coderabbit.ai/dashboard>（用途`phpstan.neon`)

    要運行該應用程序，請使用：

    Linux：

    ```bash
    $ export SECRET_KEY="secret"
    ```

    視窗：

    ```bash
    $ setx SECRET_KEY secret
    ```

    然後：

    ```bash
    $ cd threagile-monitoring
    # Without hatch: $ python src/threagile_monitoring/app.py
    $ hatch run python src/threagile_monitoring/app.py
    ```

    然後，導航到`http://127.0.0.1:5000/`在您的網絡瀏覽器中。

    要運行測試，請使用：

    ```bash
    $ cd threagile-monitoring
    $ pip install pytest # optional
    $ pytest tests/
    ```

# API文檔

導航到`http://127.0.0.1:5000/docs`在您的網絡瀏覽器中，或從中下載OpenApi.json`http://127.0.0.1:5000/openapi.json`.

# 指標

讓像Prometheus Scrape這樣的工具`http://127.0.0.1:9464/metrics`.

**_新的_**

**目錄**

-   [安裝](#installation)
-   [版本來源](#version-source)
-   [環境](#environments)
-   [建造](#build)
-   [執照](#license)

## 安裝

```console
pip install threagile-monitoring
```

## 版本來源

-   這[孵化-VC](https://github.com/ofek/hatch-vcs)版本源插件使用git標籤確定項目版本

## 環境

-   在獨立中整齊地定義[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   這`test`矩陣使用[孵化器](https://github.com/ofek/hatch-containers)插件以在Docker容器中運行每個環境；可以在[測試](.github/workflows/test.yml)GitHub工作流程

## 建造

-   所有構建目標都使用[孵化-VC](https://github.com/ofek/hatch-vcs)構建掛鉤插件來運送`_version.py`文件，因此可以在運行時使用該版本
-   車輪使用[孵化 - 摩林](https://github.com/ofek/hatch-mypyc)構建掛鉤插件以首先使用[mypyc](https://github.com/mypyc/mypyc)
-   這[建造](.github/workflows/build.yml)github工作流程顯示瞭如何：
    -   使用[cibuild輪](https://github.com/pypa/cibuildwheel)為每個平台分發二元車輪
    -   使用[應用程式](https://hatch.pypa.io/latest/plugins/builder/app/)建立目標以建立每個平台的獨立分佈

## 執照

`threagile-monitoring`根據[和](https://spdx.org/licenses/MIT.html)執照。

## 100-簡介

看[README.md](./100/README.md)

## 200-要求

看[README.md](./200/README.md)

## 300-構建我們的應用程序

看[README.md](./300/README.md)

## 400-結論

看[README.md](./400/README.md)
