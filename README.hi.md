थ्रैगाइल-मॉनिटरिंग

# थ्रैगाइल मॉनिटरिंग

|           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| सीआई/सीडी | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml)                                                                                                                                                                                        |
| पैकेट     | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-monitoring.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-monitoring.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)                                                                                                                                                                                                                                                     |
| मेटा      | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch)[![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)[![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black)[![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/)[![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

* * *

> के लिए डैशबोर्ड बनाने के लिए एक वेब एप्लिकेशन[थ्रैगाइल](https://threagile.io).

-   [शब्दकोष](./GLOSSARY.md)
-   [संदर्भ](./REFERENCES.md)
-   [प्रलेखन](./DOCUMENTATION.md)
-   [टेलीमेटरी](./TELEMETRY.md)
-   [टूलिंग](./TOOLING.md)

**कार्यकारी सारांश**

अपने कोड को प्राप्त करना और अपने सिस्टम पर चल रहा है।

**टिप्पणी**:`pyproject.toml`फ़ाइल रिपॉजिटरी की जड़ में होनी चाहिए!

**टिप्पणी**: सुनिश्चित करें कि आप पूरा करते हैं[आवश्यकताएं](./200/README.md).

1.  **स्थापना प्रक्रिया:**

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

    **अपनी साइट को वेबपैक के साथ पैकेज करें:**एक बार जब आपके पास एक वेबसाइट होती है जो आपके लिए उपयोग करने के लिए पर्याप्त है, तो आपको वेबपैक के साथ एप्लिकेशन को पैकेज करना होगा। यह पैकेज फ़ोल्डर सूचीबद्ध है`.gitignore`इससे बचने के लिए git के लिए प्रतिबद्ध होना।

    सेटअप के सभी अब तक तैयार होना चाहिए ताकि आपको बस इतना करना पड़े:
    1)`(.hatch) $ cd src/threagile_monitoring`2)`(.hatch) $ npm install`3)`(.hatch) $ npm run build`

    यह बनाएगा`vendors.#####.js`और`main.#####.js`फ़ाइलें - जिसमें सभी घटक हैं - में`/src/threagile_monitoring/static/js/`.

    **वेबपैक के साथ विकास:**यदि आप अभी भी अपनी वेबसाइट विकसित कर रहे हैं, एक में**अलग टर्मिनल सत्र**, उपरोक्त स्थापना प्रक्रिया का पालन करने के बाद, ऐसा करें:
    1)`cd ../`# रिपॉजिटरी की जड़ पर जाएं
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ sudo chown -R $USER:$(id -gn $USER) ~/.npm`5)`(.hatch) $ npm install`6)`(.hatch) $ npm run watch`

    यह - अलग टर्मिनल सत्र में (यानी`background`) - आपके द्वारा उपयुक्त फ़ाइलों में किए गए परिवर्तनों को लगातार लोड करें, जबकि आप उन परिवर्तनों को जारी रख सकते हैं - प्रारंभिक टर्मिनल सत्र में (अर्थात्।`foreground`)। इसलिए आपको प्रत्येक संपादन के बाद अपने स्रोतों का निर्माण करने की आवश्यकता नहीं है, यह स्वचालित रूप से ध्यान रखा जाता है!

    परिवर्तनों को देखने के लिए बस अपने नेविगेटर को सहेजें और फिर से लोड करें (आमतौर पर F5 के साथ)।

    **UI विकास के लिए onlook का उपयोग करना**

    [घिनौना](https://github.com/vanHeemstraSystems/onlook)इंटरैक्टिव यूआई विकास के लिए एक शक्तिशाली उपकरण है जो आपकी परियोजना के साथ एकीकृत करता है।

    1.  **एकीकरण सेटअप**:
        -   सुनिश्चित करें कि आपका फ्रंटेंड चल रहा है (`npm run watch`)
        -   अपना बैकएंड सर्वर शुरू करें (`python app.py`)
        -   अपने स्वयं के आवेदन में ऑनलुक लॉन्च करें
        -   अपने रनिंग फ्रंटेंड से onlook कनेक्ट करें

    2.  **सर्वोत्तम प्रथाएं**:
        -   छोटे, वृद्धिशील परिवर्तन करें
        -   ब्राउज़र में तुरंत परिवर्तन परिवर्तन
        -   कमिट करने से पहले उत्पन्न कोड की समीक्षा करें
        -   सिंक में ऑनलुक और अपने फ्रंटेंड को रखें
        -   सभी onlook- जनित परिवर्तनों के लिए संस्करण नियंत्रण का उपयोग करें

    3.  **विन्यास**:
        -   Onlook आपकी परियोजना की संरचना का पता लगाएगा
        -   यह सीधे आपके स्रोत फ़ाइलों में परिवर्तन करेगा
        -   वेबपैक वॉच के कारण परिवर्तन तुरंत परिलक्षित होते हैं
        -   आपका बैकएंड एपीआई विकास के दौरान सुलभ रहता है

    **टिप्पणी**: हमेशा यह सुनिश्चित करें कि ओनलुक विकास शुरू करने से पहले आपका फ्रंटेंड चल रहा है। यह आपके परिवर्तनों का वास्तविक समय पूर्वावलोकन सक्षम करता है।

    सुनिश्चित करें, बैकएंड फ़ंक्शंस के साथ परीक्षण करते समय अपने वेबपेज को चलाने के लिए, निम्नानुसार:
    1)`cd ../../../`# रिपॉजिटरी की जड़ पर जाएं
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ python app.py`

    **परीक्षा**

    इस तरह से आवेदन (फ्रंटेंड) का परीक्षण करें:
    1)`cd ../`# रिपॉजिटरी की जड़ पर जाएं
    2)`hatch shell`3)`(.hatch) $ cd threagile-monitoring/src/threagile_monitoring`4)`(.hatch) $ npm install`5)`(.hatch) $ npm test`6)`(.hatch) $ npm test -- --coverage`

    **दौड़ना:**

    यदि विकसित नहीं हो रहा है, तो इस तरह से एप्लिकेशन (बैकएंड और फ्रंटेंड एक साथ) चलाएं:

        $ hatch run python src/threagile_monitoring/app.py # starts the app 

2.  सॉफ्टवेयर निर्भरता

3.  नवीनतम रिलीज़

4.  एपीआई संदर्भ

5.  निर्माण और परीक्षण:

    अपना कोड बनाने के लिए, उपयोग करें:

    ```bash
    $ cd threagile-monitoring
    $ hatch build
    ```

    पुल अनुरोध समीक्षाओं के लिए AI का उपयोग करने के लिए, उपयोग करें:

    <https://app.coderabbit.ai/dashboard>(उपयोग करता है`phpstan.neon`)

    एप्लिकेशन चलाने के लिए, उपयोग करें:

    लिनक्स:

    ```bash
    $ export SECRET_KEY="secret"
    ```

    Windows:

    ```bash
    $ setx SECRET_KEY secret
    ```

    तब:

    ```bash
    $ cd threagile-monitoring
    # Without hatch: $ python src/threagile_monitoring/app.py
    $ hatch run python src/threagile_monitoring/app.py
    ```

    फिर, नेविगेट करें`http://127.0.0.1:5000/`अपने वेब ब्राउज़र में।

    परीक्षण चलाने के लिए, उपयोग करें:

    ```bash
    $ cd threagile-monitoring
    $ pip install pytest # optional
    $ pytest tests/
    ```

# एपीआई प्रलेखन

नेविगेट करना`http://127.0.0.1:5000/docs`अपने वेब ब्राउज़र में, या Openapi.json से डाउनलोड करें`http://127.0.0.1:5000/openapi.json`.

# मेट्रिक्स

प्रोमेथियस स्क्रैप जैसे उपकरण को चलो`http://127.0.0.1:9464/metrics`.

**_नया_**

**विषयसूची**

-   [इंस्टालेशन](#installation)
-   [संस्करण स्रोत](#version-source)
-   [वातावरण](#environments)
-   [निर्माण](#build)
-   [लाइसेंस](#license)

## इंस्टालेशन

```console
pip install threagile-monitoring
```

## संस्करण स्रोत

-   [हैच-वीसीएस](https://github.com/ofek/hatch-vcs)संस्करण स्रोत प्लगइन GIT टैग का उपयोग करके प्रोजेक्ट संस्करण निर्धारित करता है

## वातावरण

-   एक स्टैंडअलोन में बड़े करीने से परिभाषित किया गया[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   `test`मैट्रिक्स का उपयोग करता है[हैच-कंटेनर्स](https://github.com/ofek/hatch-containers)डॉकटर कंटेनरों के अंदर प्रत्येक वातावरण को चलाने के लिए प्लगइन; उपयोग में देखा जा सकता है[परीक्षा](.github/workflows/test.yml)Github वर्कफ़्लो

## निर्माण

-   सभी निर्माण लक्ष्य का उपयोग करते हैं[हैच-वीसीएस](https://github.com/ofek/hatch-vcs)एक जहाज करने के लिए हुक प्लगइन का निर्माण करें`_version.py`फ़ाइल तो संस्करण का उपयोग रनटाइम पर किया जा सकता है
-   पहिए का उपयोग करें[हैच-मिपीक](https://github.com/ofek/hatch-mypyc)पहले सभी कोड को संकलित करने के लिए हुक प्लगइन का निर्माण करें[Mypyc](https://github.com/mypyc/mypyc)
-   [निर्माण](.github/workflows/build.yml)GitHub वर्कफ़्लो दिखाता है कि कैसे:
    -   उपयोग[सभ्य](https://github.com/pypa/cibuildwheel)हर मंच के लिए बाइनरी पहियों को वितरित करने के लिए
    -   उपयोग[अनुप्रयोग](https://hatch.pypa.io/latest/plugins/builder/app/)हर प्लेटफ़ॉर्म के लिए स्टैंडअलोन वितरण का निर्माण करने के लिए लक्ष्य का निर्माण करें

## लाइसेंस

`threagile-monitoring`की शर्तों के तहत वितरित किया जाता है[साथ](https://spdx.org/licenses/MIT.html)लाइसेंस।

## 100 - परिचय

देखना[README.md](./100/README.md)

## 200 - आवश्यकताएँ

देखना[README.md](./200/README.md)

## 300 - हमारे आवेदन का निर्माण

देखना[README.md](./300/README.md)

## 400 - निष्कर्ष

देखना[README.md](./400/README.md)
