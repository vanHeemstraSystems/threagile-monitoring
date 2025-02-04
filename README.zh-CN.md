throweagile监控

# 弯曲监测

|       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CI/CD | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml)                                                                                                                                                                                        |
| 包裹    | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-monitoring.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-monitoring.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)                                                                                                                                                                                                                                                     |
| Meta  | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch)[![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)[![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black)[![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/)[![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

* * *

> 一个为创建仪表板的Web应用程序[tre缩](https://threagile.io).

-   [词汇表](./GLOSSARY.md)
-   [参考](./REFERENCES.md)
-   [文档](./DOCUMENTATION.md)
-   [遥测](./TELEMETRY.md)
-   [工具](./TOOLING.md)

**执行摘要**

将代码启动并在您自己的系统上运行。

**笔记**： 这`pyproject.toml`文件应该在存储库的根部！

**笔记**：确保您满足[要求](./200/README.md).

1.  **安装过程：**

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

    **将您的网站与WebPack打包：**一旦拥有足够好的网站，您就必须将应用程序与WebPack打包。此包装文件夹在`.gitignore`为了避免致力于git。

    现在所有设置都应该准备就绪，因此您必须要做的所有设置：
    1）`(.hatch) $ cd src/threagile_monitoring`2)`(.hatch) $ npm install`3)`(.hatch) $ npm run build`

    这将创建`vendors.#####.js`和`main.#####.js`文件 - 包含所有组件 - 在`/src/threagile_monitoring/static/js/`.

    **使用WebPack开发：**如果您仍在开发网站，则**单独的终端会话**，遵循上述安装过程后，执行此操作：
    1）`cd ../`＃转到存储库的根
    2）`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ sudo chown -R $USER:$(id -gn $USER) ~/.npm`5)`(.hatch) $ npm install`6)`(.hatch) $ npm run watch`

    这将 - 在单独的终端会话中（即`background`） - 不断将更改加载到适当的文件中，而您可以继续进行这些更改 - 在初始终端会话中（即`foreground`）。因此，您不必在每次编辑后都必须构建来源，它会自动照顾！

    要查看更改，只需保存并重新加载导航器（通常使用F5）。

    **使用Onlook进行UI开发**

    [Onlook](https://github.com/vanHeemstraSystems/onlook)是与您的项目集成的交互式UI开发的强大工具。

    1.  **集成设置**:
        -   确保您的前端运行（`npm run watch`)
        -   启动您的后端服务器（`python app.py`)
        -   在自己的应用程序中启动Onlook
        -   将Onlook连接到您的跑步前端

    2.  **最佳实践**:
        -   进行小小的增量改变
        -   立即在浏览器中进行测试更改
        -   提交之前审查生成的代码
        -   保持Onlook和您的前端同步
        -   使用版本控制进行所有Onlook生成的更改

    3.  **配置**:
        -   Onlook将检测您的项目的结构
        -   它将直接更改您的源文件
        -   由于WebPack手表而立即反映更改
        -   您的后端API在开发过程中仍然可以访问

    **笔记**：始终在开始Onlook开发之前确保您的前端运行。这可以实时预览您的更改。

    确保在使用后端函数测试时运行网页，如下：
    1）`cd ../../../`＃转到存储库的根
    2）`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ python app.py`

    **测试**

    以这种方式测试应用程序（前端）：
    1）`cd ../`＃转到存储库的根
    2）`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ npm install`5)`(.hatch) $ npm test`6)`(.hatch) $ npm test -- --coverage`

    **跑步：**

    如果不开发，请以这种方式运行应用程序（同时和前端）：

        $ hatch run python src/threagile_monitoring/app.py # starts the app 

2.  软件依赖性

3.  最新版本

4.  API参考

5.  构建和测试：

    要构建您的代码，请使用：

    ```bash
    $ cd threagile-monitoring
    $ hatch build
    ```

    要使用AI进行拉动请求评论，请使用：

    <https://app.coderabbit.ai/dashboard>（用途`phpstan.neon`)

    要运行该应用程序，请使用：

    Linux：

    ```bash
    $ export SECRET_KEY="secret"
    ```

    视窗：

    ```bash
    $ setx SECRET_KEY secret
    ```

    然后：

    ```bash
    $ cd threagile-monitoring
    # Without hatch: $ python src/threagile_monitoring/app.py
    $ hatch run python src/threagile_monitoring/app.py
    ```

    然后，导航到`http://127.0.0.1:5000/`在您的网络浏览器中。

    要运行测试，请使用：

    ```bash
    $ cd threagile-monitoring
    $ pip install pytest # optional
    $ pytest tests/
    ```

# API文档

导航到`http://127.0.0.1:5000/docs`在您的网络浏览器中，或从中下载OpenApi.json`http://127.0.0.1:5000/openapi.json`.

# 指标

让像Prometheus Scrape这样的工具`http://127.0.0.1:9464/metrics`.

**_新的_**

**目录**

-   [安装](#installation)
-   [版本来源](#version-source)
-   [环境](#environments)
-   [建造](#build)
-   [执照](#license)

## 安装

```console
pip install threagile-monitoring
```

## 版本来源

-   这[孵化-VC](https://github.com/ofek/hatch-vcs)版本源插件使用git标签确定项目版本

## 环境

-   在独立中整齐地定义[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   这`test`矩阵使用[孵化器](https://github.com/ofek/hatch-containers)插件以在Docker容器中运行每个环境；可以在[测试](.github/workflows/test.yml)GitHub工作流程

## 建造

-   所有构建目标都使用[孵化-VC](https://github.com/ofek/hatch-vcs)构建挂钩插件来运送`_version.py`文件，因此可以在运行时使用该版本
-   车轮使用[孵化 - 摩林](https://github.com/ofek/hatch-mypyc)构建挂钩插件以首先使用[mypyc](https://github.com/mypyc/mypyc)
-   这[建造](.github/workflows/build.yml)github工作流程显示了如何：
    -   使用[cibuild轮](https://github.com/pypa/cibuildwheel)为每个平台分发二元车轮
    -   使用[应用程序](https://hatch.pypa.io/latest/plugins/builder/app/)建立目标以建立每个平台的独立分布

## 执照

`threagile-monitoring`根据[和](https://spdx.org/licenses/MIT.html)执照。

## 100-简介

看[README.md](./100/README.md)

## 200-要求

看[README.md](./200/README.md)

## 300-构建我们的应用程序

看[README.md](./300/README.md)

## 400-结论

看[README.md](./400/README.md)
