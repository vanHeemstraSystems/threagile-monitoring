مراقبة ثريجيلي

# مراقبة ثريغيلي

|       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CI/CD | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml)                                                                                                                                                                                        |
| طَرد  | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-monitoring.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-monitoring.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)                                                                                                                                                                                                                                                     |
| ميتا  | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch)[![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)[![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black)[![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/)[![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

* * *

> تطبيق ويب لإنشاء لوحات معلومات[ثريجل](https://threagile.io).

-   [مسرد](./GLOSSARY.md)
-   [مراجع](./REFERENCES.md)
-   [الوثائق](./DOCUMENTATION.md)
-   [القياس عن بعد](./TELEMETRY.md)
-   [Tooling](./TOOLING.md)

**ملخص تنفيذي**

رفع الكود الخاص بك وتشغيله على نظامك الخاص.

**ملحوظة**: ال`pyproject.toml`يجب أن يكون الملف في جذر المستودع!

**ملحوظة**: تأكد من الوفاء بـ[متطلبات](./200/README.md).

1.  **عملية التثبيت:**

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

    **قم بتعبئة موقعك باستخدام WebPack:**بمجرد أن يكون لديك موقع ويب جيد بما يكفي لاستخدامه ، يجب عليك حزم التطبيق باستخدام WebPack. مجلد الحزمة هذا مدرج في`.gitignore`لتجنب أن تلتزم بالجيت.

    يجب أن يكون كل الإعداد جاهزًا الآن ، لذا كل ما عليك فعله:
    1)`(.hatch) $ cd src/threagile_monitoring`2)`(.hatch) $ npm install`3)`(.hatch) $ npm run build`

    هذا سيخلق`vendors.#####.js`و`main.#####.js`الملفات - التي تحتوي على جميع المكونات - في`/src/threagile_monitoring/static/js/`.

    **التطوير مع webpack:**إذا كنت لا تزال تقوم بتطوير موقع الويب الخاص بك ، في أ**separate terminal session**، بعد اتباع عملية التثبيت أعلاه ، قم بذلك:
    1)`cd ../`# انتقل إلى جذر المستودع
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ sudo chown -R $USER:$(id -gn $USER) ~/.npm`5)`(.hatch) $ npm install`6)`(.hatch) $ npm run watch`

    هذا الإرادة - في الجلسة الطرفية المنفصلة (أي`background`) - قم بتحميل التغييرات التي تقوم بها باستمرار في الملفات المناسبة ، في حين يمكنك متابعة إجراء هذه التغييرات - في الجلسة الطرفية الأولية (أي`foreground`). لذلك ليس عليك بناء مصادرك بعد كل تعديل ، يتم الاعتناء بها تلقائيًا!

    لرؤية التغييرات فقط حفظ وإعادة تحميل الملاح الخاص بك (عادة مع F5).

    **باستخدام Onlook لتطوير واجهة المستخدم**

    [onlook](https://github.com/vanHeemstraSystems/onlook)هي أداة قوية لتطوير واجهة المستخدم التفاعلية التي تتكامل مع مشروعك.

    1.  **إعداد التكامل**:
        -   تأكد من تشغيل الواجهة الأمامية (`npm run watch`)
        -   ابدأ خادم الواجهة الخلفية الخاصة بك (`python app.py`)
        -   قم بتشغيل Onlook في تطبيقه الخاص
        -   قم بتوصيل Onlook بالواجهة الأمامية الخاصة بك

    2.  **أفضل الممارسات**:
        -   قم بإجراء تغييرات صغيرة تدريجية
        -   اختبار التغييرات على الفور في المتصفح
        -   مراجعة رمز تم إنشاؤه قبل الالتزام
        -   الحفاظ على الإطلالة والواجهة الأمامية الخاصة بك في المزامنة
        -   استخدم التحكم في الإصدار لجميع التغييرات التي تم إنشاؤها

    3.  **إعدادات**:
        -   سوف تكتشف Onlook هيكل مشروعك
        -   سيجري تغييرات مباشرة على ملفات المصدر الخاصة بك
        -   تنعكس التغييرات على الفور بسبب ساعة WebPack
        -   يبقى واجهة برمجة تطبيقات الواجهة الخلفية متاحة أثناء التطوير

    **ملحوظة**: تأكد دائمًا من تشغيل الواجهة الأمامية قبل بدء تطوير Onlook. هذا يتيح المعاينة في الوقت الفعلي لتغييراتك.

    تأكد من تشغيل صفحة الويب الخاصة بك عند الاختبار مع وظائف الخلفية ، على النحو التالي:
    1)`cd ../../../`# انتقل إلى جذر المستودع
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ python app.py`

    **امتحان**

    اختبر التطبيق (الواجهة الأمامية) بهذه الطريقة:
    1)`cd ../`# انتقل إلى جذر المستودع
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ npm install`5)`(.hatch) $ npm test`6)`(.hatch) $ npm test -- --coverage`

    **يجري:**

    إذا لم يتم تطويرها ، فتشغيل التطبيق (الواجهة الخلفية والواجهة في وقت واحد) بهذه الطريقة:

        $ hatch run python src/threagile_monitoring/app.py # starts the app 

2.  تبعيات البرمجيات

3.  أحدث الإصدارات

4.  مراجع API

5.  بناء واختبار:

    لبناء الكود الخاص بك ، استخدم:

    ```bash
    $ cd threagile-monitoring
    $ hatch build
    ```

    لاستخدام الذكاء الاصطناعي لمراجعات طلب السحب ، استخدم:

    <https://app.coderabbit.ai/dashboard>(يستخدم`phpstan.neon`)

    لتشغيل التطبيق ، استخدم:

    لينكس:

    ```bash
    $ export SECRET_KEY="secret"
    ```

    Windows:

    ```bash
    $ setx SECRET_KEY secret
    ```

    ثم:

    ```bash
    $ cd threagile-monitoring
    # Without hatch: $ python src/threagile_monitoring/app.py
    $ hatch run python src/threagile_monitoring/app.py
    ```

    ثم ، انتقل إلى`http://127.0.0.1:5000/`في متصفح الويب الخاص بك.

    لتشغيل الاختبارات ، استخدم:

    ```bash
    $ cd threagile-monitoring
    $ pip install pytest # optional
    $ pytest tests/
    ```

# وثائق API

انتقل إلى`http://127.0.0.1:5000/docs`في متصفح الويب الخاص بك ، أو قم بتنزيل Openapi.json من`http://127.0.0.1:5000/openapi.json`.

# المقاييس

دع أداة مثل بروميثيوس كشط`http://127.0.0.1:9464/metrics`.

**_جديد_**

**جدول المحتويات**

-   [تثبيت](#installation)
-   [مصدر الإصدار](#version-source)
-   [البيئات](#environments)
-   [يبني](#build)
-   [رخصة](#license)

## تثبيت

```console
pip install threagile-monitoring
```

## مصدر الإصدار

-   ال[Hatch-VCs](https://github.com/ofek/hatch-vcs)يحدد المكون الإضافي لمصدر الإصدار إصدار المشروع باستخدام علامات GIT

## البيئات

-   تم تعريفه بدقة في مستقل[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   ال`test`مصفوفة تستخدم[تلاشي المونتي](https://github.com/ofek/hatch-containers)البرنامج المساعد لتشغيل كل بيئة داخل حاويات Docker ؛ يمكن رؤية الاستخدام في[امتحان](.github/workflows/test.yml)جيثب سير العمل

## يبني

-   جميع أهداف البناء تستخدم[Hatch-VCs](https://github.com/ofek/hatch-vcs)قم ببناء المكون الإضافي للخطاف لشحن أ`_version.py`ملف بحيث يمكن استخدام الإصدار في وقت التشغيل
-   عجلات استخدام[Hatch-Mypyc](https://github.com/ofek/hatch-mypyc)قم ببناء المكون الإضافي الخطاف لتجميع كل الرمز أولاً[mypyc](https://github.com/mypyc/mypyc)
-   ال[يبني](.github/workflows/build.yml)يوضح GitHub Workflow كيفية:
    -   يستخدم[cibuildwheel](https://github.com/pypa/cibuildwheel)لتوزيع العجلات الثنائية لكل منصة
    -   استخدم[برنامج](https://hatch.pypa.io/latest/plugins/builder/app/) build target to build standalone distributions for every platform

## رخصة

`threagile-monitoring`يتم توزيعه بموجب شروط[مع](https://spdx.org/licenses/MIT.html)رخصة.

## 100 - مقدمة

يرى[README.md](./100/README.md)

## 200 - المتطلبات

يرى[README.md](./200/README.md)

## 300 - بناء تطبيقنا

يرى[README.md](./300/README.md)

## 400 - الخلاصة

يرى[README.md](./400/README.md)
