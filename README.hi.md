थकाऊ-निगरानी

# खतरनाक निगरानी

|           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| सीआई/सीडी | [![CI - Test](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/test.yml)[![CD - Build](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml/badge.svg)](https://github.com/vanHeemstraSystems/threagile-monitoring/actions/workflows/build.yml)                                                                                                                                                                                        |
| पैकेट     | [![PyPI - Version](https://img.shields.io/pypi/v/threagile-monitoring.svg?logo=pypi&label=PyPI&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/threagile-monitoring.svg?logo=python&label=Python&logoColor=gold)](https://pypi.org/project/threagile-monitoring/)                                                                                                                                                                                                                                                     |
| मेटा      | [![Hatch project](https://img.shields.io/badge/%F0%9F%A5%9A-Hatch-4051b5.svg)](https://github.com/pypa/hatch)[![code style - black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)[![types - Mypy](https://img.shields.io/badge/types-Mypy-blue.svg)](https://github.com/ambv/black)[![License - MIT](https://img.shields.io/badge/license-MIT-9400d3.svg)](https://spdx.org/licenses/)[![GitHub Sponsors](https://img.shields.io/github/sponsors/vanHeemstraSystems?logo=GitHub%20Sponsors&style=social)](https://github.com/sponsors/vanHeemstraSystems) |

* * *

> डैशबोर्ड बनाने हेतु एक वेब एप्लिकेशन[थ्रैगाइल](https://threagile.io).

-   [शब्दकोष](./GLOSSARY.md)
-   [संदर्भ](./REFERENCES.md)
-   [प्रलेखन](./DOCUMENTATION.md)
-   [टेलीमेटरी](./TELEMETRY.md)

**कार्यकारी सारांश**

अपना कोड तैयार करना और अपने सिस्टम पर चलाना।

**टिप्पणी**: सुनिश्चित करें कि आप इसे पूरा करते हैं[आवश्यकताएं](./200/README.md).

1.  **स्थापना प्रक्रिया:**

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

    **अपनी साइट को वेबपैक के साथ पैकेज करें:**एक बार जब आपके पास एक ऐसी वेबसाइट हो जो आपके उपयोग के लिए पर्याप्त हो, तो आपको एप्लिकेशन को वेबपैक के साथ पैकेज करना होगा। यह पैकेज फ़ोल्डर सूचीबद्ध है`.gitignore`इससे बचने के लिए गिट के प्रति प्रतिबद्ध होना होगा।

    अब तक सारा सेटअप तैयार हो जाना चाहिए, इसलिए आपको बस इतना करना है:
    1)`$ hatch shell`2)`(threagile-monitoring) $ cd src/threagile_monitoring`3)`(threagile-monitoring) $ npm install`4)`(threagile-monitoring) $ npm run build`

    यह बनायेगा`app.js`फ़ाइल - जिसमें सभी घटक शामिल हैं - in`/src/threagile_monitoring/static/js/`.

    **वेबपैक के साथ विकास:**यदि आप अभी भी अपनी वेबसाइट विकसित कर रहे हैं, तो a**अलग टर्मिनल सत्र**, उपरोक्त स्थापना प्रक्रिया का पालन करने के बाद, यह करें:
    1)`$ hatch shell`2)`(threagile-monitoring) $ cd threagile-monitoring/src/threagile_monitoring`3)`(threagile-monitoring) $ pip install -r ../../requirements.txt`# जब आप पिछले हैच शेल से बाहर निकलने के बाद एक नया हैच शेल शुरू करते हैं, तो यह एक ताज़ा वातावरण होता है जिसे फिर से आवश्यकताओं की आवश्यकता होती है
    4)`(threagile-monitoring) $ sudo chown -R $USER:$(id -gn $USER) ~/.npm`5)`(threagile-monitoring) $ npm install`6)`(threagile-monitoring) $ npm run watch`

    यह होगा - अलग टर्मिनल सत्र में (अर्थात्)`background`) - आपके द्वारा किए गए परिवर्तनों को उचित फ़ाइलों में लगातार लोड करें, जबकि आप उन परिवर्तनों को जारी रख सकते हैं - प्रारंभिक टर्मिनल सत्र में (यानी)`foreground`). इसलिए आपको प्रत्येक संपादन के बाद अपने स्रोत बनाने की ज़रूरत नहीं है, इसका स्वचालित रूप से ध्यान रखा जाता है!

    परिवर्तनों को देखने के लिए बस अपने नेविगेटर को सहेजें और पुनः लोड करें (आमतौर पर F5 के साथ)।

    सुनिश्चित करें कि बैकएंड फ़ंक्शंस के साथ परीक्षण करते समय अपना वेबपेज निम्नानुसार चलाएं:
    1)`(threagile-monitoring) $ cd src/threagile_monitoring`2)`(threagile-monitoring) $ python app.py`

    **परीक्षा**

    एप्लिकेशन (फ़्रंटएंड) का इस प्रकार परीक्षण करें:

    1)`$ hatch shell`2)`(threagile-monitoring) $ cd src/threagile_monitoring`3)`(threagile-monitoring) $ npm install`4)`(threagile-monitoring) $ npm test`5)`(threagile-monitoring) $ npm test -- --coverage`

    **दौड़ना:**

    यदि विकास नहीं हो रहा है, तो एप्लिकेशन को इस प्रकार चलाएं (बैकएंड और फ्रंटएंड एक साथ):

        $ hatch run python src/threagile_monitoring/app.py # starts the app 

2.  सॉफ़्टवेयर निर्भरताएँ

3.  नवीनतम रिलीज़

4.  एपीआई संदर्भ

5.  निर्माण और परीक्षण:

    अपना कोड बनाने के लिए, इसका उपयोग करें:

    ```bash
    $ cd threagile-monitoring
    $ hatch build
    ```

    पुल अनुरोध समीक्षा के लिए AI का उपयोग करने के लिए, इसका उपयोग करें:

    <https://app.coderabbit.ai/dashboard>(उपयोग करता है`phpstan.neon`)

    एप्लिकेशन चलाने के लिए, उपयोग करें:

    लिनक्स:

    ```bash
    $ export SECRET_KEY="secret"
    ```

    खिड़कियाँ:

    ```bash
    $ setx SECRET_KEY secret
    ```

    तब:

    ```bash
    $ cd threagile-monitoring
    # Without hatch: $ python src/threagile_monitoring/app.py
    $ hatch run python src/threagile_monitoring/app.py
    ```

    फिर, नेविगेट करें`http://127.0.0.1:5000/`आपके वेब ब्राउज़र में.

    परीक्षण चलाने के लिए, उपयोग करें:

    ```bash
    $ cd threagile-monitoring
    $ pip install pytest # optional
    $ pytest tests/
    ```

# एपीआई दस्तावेज़ीकरण

पर नेविगेट करें`http://127.0.0.1:5000/docs`अपने वेब ब्राउज़र में, या openapi.json डाउनलोड करें`http://127.0.0.1:5000/openapi.json`.

# मेट्रिक्स

प्रोमेथियस जैसे उपकरण को परिमार्जन करने दें`http://127.0.0.1:9464/metrics`.

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

-   [हैच-वीसीएस](https://github.com/ofek/hatch-vcs)संस्करण स्रोत प्लगइन Git टैग का उपयोग करके प्रोजेक्ट संस्करण निर्धारित करता है

## वातावरण

-   एक स्टैंडअलोन में बड़े करीने से परिभाषित किया गया[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   `test`मैट्रिक्स का उपयोग करता है[हैच-कंटेनर](https://github.com/ofek/hatch-containers)डॉकर कंटेनर के अंदर प्रत्येक वातावरण को चलाने के लिए प्लगइन; उपयोग में देखा जा सकता है[परीक्षा](.github/workflows/test.yml)GitHub वर्कफ़्लो

## निर्माण

-   सभी निर्माण लक्ष्य इसका उपयोग करते हैं[हैच-वीसीएस](https://github.com/ofek/hatch-vcs)शिप करने के लिए हुक प्लगइन बनाएं`_version.py`फ़ाइल करें ताकि संस्करण का उपयोग रनटाइम पर किया जा सके
-   पहिये का उपयोग करते हैं[हैच-mypyc](https://github.com/ofek/hatch-mypyc)पहले सभी कोड संकलित करने के लिए हुक प्लगइन बनाएं[Mypyc](https://github.com/mypyc/mypyc)
-   [निर्माण](.github/workflows/build.yml)GitHub वर्कफ़्लो दिखाता है कि कैसे करें:
    -   उपयोग[सिबिल्डव्हील](https://github.com/pypa/cibuildwheel)प्रत्येक प्लेटफ़ॉर्म के लिए बाइनरी व्हील वितरित करना
    -   उपयोग[अनुप्रयोग](https://hatch.pypa.io/latest/plugins/builder/app/)प्रत्येक प्लेटफ़ॉर्म के लिए स्टैंडअलोन वितरण बनाने का लक्ष्य बनाएं

## लाइसेंस

`threagile-monitoring`की शर्तों के तहत वितरित किया जाता है[साथ](https://spdx.org/licenses/MIT.html)लाइसेंस.

## 100 - परिचय

देखना[README.md](./100/README.md)

## 200 - आवश्यकताएँ

देखना[README.md](./200/README.md)

## 300 - हमारे एप्लिकेशन का निर्माण

देखना[README.md](./300/README.md)

## 400 - निष्कर्ष

देखना[README.md](./400/README.md)
