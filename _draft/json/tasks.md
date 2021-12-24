# Практические задачи

В этом разделе представлены задачи, которые вы можете решить для закрепления пройденного материала.

Вам не нужно устанавливать или использовать дополнительные инструменты для их выполнения.

Все что вам необходимо - это написать `JSON` в ячейку после текста задания, и нажать кнопку `Execute Cell`, чтобы проверить правильность решения.

УСПЕХОВ!

<!-- br: -->

## Задание 1

### Звёздная ночь Ван Гога (фото с сайта [wikipedia.org](https://en.wikipedia.org/))

![starry-night](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/300px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg)

Пользуясь материалами [википедии](https://ru.wikipedia.org/wiki/%D0%97%D0%B2%D1%91%D0%B7%D0%B4%D0%BD%D0%B0%D1%8F_%D0%BD%D0%BE%D1%87%D1%8C), либо любого другого источника, опишите картину нидерландского художника-постимпрессиониста [Винсента Ван Гога](https://ru.wikipedia.org/wiki/%D0%92%D0%B0%D0%BD_%D0%93%D0%BE%D0%B3,_%D0%92%D0%B8%D0%BD%D1%81%D0%B5%D0%BD%D1%82) "Звездная ночь".

Для этого, используя следующую структуру,

```json
{
	"name": "...", // <-- официальное название картины на английском языке (строка)

	"artist": { // <-- информация о художнике (объект)
		"name": "...", // <-- имя художника (строка, состоящая из 3-х слов)
		"yearOfBirth": ..., // <-- год рождения художника (целое число)
		"yearOfDeath": ... // <-- год смерти художника (целое число)
	},

	"year": ..., // <-- год создания картины (целое число)
	
	"dimensions": [...], // <-- размер холста подлинника (массив из 2-х вещественных чисел: [высота, ширина] в см)

	"inMuseum": ..., // <-- булево значение. Если картина находится в музее (на момент 2022 года), должно принимать значение true, если в частной коллекции, то false
	
	"coAuthor": ... // <-- имя художника, помогавшего в написании картины (строка). Если такого не было, укажите null 
}
```

заполните недостающие значения в JSON документе:

<!-- code: {
	"lang":    "json",
	"content": "{\n\t\"name\":\n\n\t\"artist\": {\n\t\t\"name\":\n\t\t\"yearOfBirth\":\n\t\t\"yearOfDeath\":\n\t}\n\n\t\"year\":\n\n\t\"dimensions\":\n\n\t\"inMuseum\":\n\n\t\"coAuthor\":\n}",
	"meta": {
		"$script": {
			"kind": "javascript",
			"code": "const tests = [\n    {\n        name: 'Название картины',\n        exec(act, exp) {\n            if (!act.name) {\n                return {\n                    success: false,\n                    msg: 'Свойство name не указано'\n                };\n            }\n\n            const success = act.name.trim().toLowerCase() === exp.name.toLowerCase();\n            return {\n                success: success,\n                msg:     success ? undefined : 'Название указано неверно'\n            };\n        },\n    },\n    {\n        name: 'Информация о художнике',\n        exec(act, exp) {\n            if (!act.artist) {\n                return {\n                    success: false,\n                    msg: 'Свойство artist не указано'\n                };\n            }\n\n            const children = [];\n            // check name.\n            const nameTest = {\n                name: 'Имя художника'\n            };\n            if (!act.artist.name) {\n                nameTest.status = 'FAIL';\n                nameTest.msg = 'Имя художника не указано';\n            } else {\n                const success = act.artist.name.trim().toLowerCase() === exp.artist.name.toLowerCase();\n                nameTest.status = success ? 'PASS' : 'FAIL';\n                nameTest.msg = success ? undefined : 'Имя художника указано неверно';\n            }\n            children.push(nameTest);\n\n            // check yearOfBirth.\n            const yearOfBirthTest = {\n                name: 'Год рождения художника'\n            };\n            if (act.artist.yearOfBirth === undefined || act.artist.yearOfBirth === null) {\n                yearOfBirthTest.status = 'FAIL';\n                yearOfBirthTest.msg = 'Год рождения художника не указан';\n            } else {\n                const success = act.artist.yearOfBirth === exp.artist.yearOfBirth;\n                yearOfBirthTest.status = success ? 'PASS' : 'FAIL';\n                yearOfBirthTest.msg = success ? undefined : 'Год рождения художника указан неверно';\n            }\n            children.push(yearOfBirthTest);\n            \n            // check yearOfBirth.\n            const yearOfDeathTest = {\n                name: 'Год смерти художника'\n            };\n            if (act.artist.yearOfDeath === undefined || act.artist.yearOfDeath === null) {\n                yearOfDeathTest.status = 'FAIL';\n                yearOfDeathTest.msg = 'Год смерти художника не указан';\n            } else {\n                const success = act.artist.yearOfDeath === exp.artist.yearOfDeath;\n                yearOfDeathTest.status = success ? 'PASS' : 'FAIL';\n                yearOfDeathTest.msg = success ? undefined : 'Год смерти художника указан неверно';\n            }\n            children.push(yearOfDeathTest);\n\n            return {\n                success:  children.filter(c => c.status === 'FAIL').length === 0,\n                children: children,\n            };\n        },\n    },\n    {\n        name: 'Год создания картины',\n        exec(act, exp) {\n            if (act.year === undefined || act.year === null) {\n                return {\n                    success: false,\n                    msg: 'Свойство year не указано'\n                };\n            }\n\n            const success = act.year === exp.year;\n            return {\n                success: success,\n                msg:     success ? undefined : 'Год создания указан неверно'\n            };\n        },\n    },\n    {\n        name: 'Размеры картины',\n        exec(act, exp) {\n            if (!Array.isArray(act.dimensions)) {\n                return {\n                    success: false,\n                    msg: 'Свойство dimensions не указано'\n                };\n            }\n\n            const success = act.dimensions.length === exp.dimensions.length\n                && act.dimensions[0] === exp.dimensions[0] && act.dimensions[1] === exp.dimensions[1];\n            return {\n                success: success,\n                msg:     success ? undefined : 'Размеры картины указаны неверно'\n            };\n        },\n    },\n    {\n        name: 'Музейный экспонат',\n        exec(act, exp) {\n            if (act.inMuseum === undefined || act.inMuseum === null) {\n                return {\n                    success: false,\n                    msg: 'Свойство inMuseum не указано'\n                };\n            }\n\n            const success = act.inMuseum === exp.inMuseum;\n            return {\n                success: success,\n                msg:     success ? undefined : 'Значение inMuseum указано неверно'\n            };\n        },\n    },\n    {\n        name: 'Соавтор',\n        exec(act, exp) {\n            if (act.coAuthor === undefined) {\n                return {\n                    success: false,\n                    msg: 'Свойство coAuthor не указано'\n                };\n            }\n\n            const success = act.coAuthor === exp.coAuthor;\n            return {\n                success: success,\n                msg:     success ? undefined : 'Значение coAuthor указано неверно'\n            };\n        },\n    }\n];\n\nafter = (cell, out, success) => {\n    if (!success) {\n        return;\n    }\n\n    out.clear();\n\n    const res = JSON.parse(cell.content);\n    const expRes = {\n        name: 'The Starry Night',\n        artist: {\n            name:        'Vincent van Gogh',\n            yearOfBirth: 1853,\n            yearOfDeath: 1890\n        },\n        year:       1889,\n        dimensions: [73.7, 92.1],\n        inMuseum:   true,\n        coAuthor:   null\n    };\n\n    const results = tests.map(t => {\n        const dt = Date.now();\n        const testRes = t.exec(res, expRes);\n        return {\n            name:     t.name,\n            status:   testRes.success ? 'PASS' : 'FAIL',\n            msg:      testRes.msg,\n            time:     Date.now() - dt,\n            children: testRes.children\n        };\n    });\n\n    const testsFailed = results.filter(r => r.status === 'FAIL').length;\n    const testResult = {\n        testsFailed:  testsFailed,\n        resultStatus: testsFailed ? 'FAIL' : 'PASS',\n        tests:        results\n    };\n\n    out.json([testResult], mimes().stdTest);\n};\n"
		}
	}
} -->

> **ПРИМЕЧАНИЕ:** все значения, которые содержат текст (строки), должны быть описаны на `английском` языке. Порядок следования свойств внутри объекта не имеет значения!

<!-- br: -->

## Задание 2

Задача на внимательность. Когда-то эта задача была очень популярной в круге студентов ВУЗа, в котором я учился.

> Она была взята из числа вопросов при собеседовании в компанию [Google](https://about.google/), которая славится своими нетривиальными задачами при отборе кандидатов. (_К сожалению, у меня нет ссылки на оригинал, поэтому поверьте мне на слово_).

Дан массив целых чисел.

```json
[12, 48, 16, 32, 64, 12, 82, null, 10, 24, 20, 48, 40, null]
```

Вместо значений `null` вставьте подходящие по смыслу значения.

<!-- code:{
	"lang":    "json",
	"content": "[12, 48, 16, 32, 64, 12, 82, null, 10, 24, 20, 48, 40, null]",
	"meta": {
		"$script": {
			"kind": "javascript",
			"code": "after = async (cell, out, success) => {\n    if (!success) {\n        return;\n    }\n    \n    out.clear();\n\n    const res = JSON.parse(cell.content);\n    const testResults = checkTestResult(res);\n    const failedCount = testResults.filter(r => r.status === 'FAIL').length;\n    out.json([{\n        testsFailed:  failedCount,\n        resultStatus: failedCount ? 'FAIL' : 'PASS',\n        tests:        testResults\n    }], mimes().stdTest);\n};\n\nfunction checkTestResult(res) {\n    if (!Array.isArray(res)) {\n        return [{\n            name:   'Массив',\n            status: 'FAIL',\n            msg:    'JSON должен содержать массив чисел'\n        }];\n    }\n\n    const expArr = [12, 48, 16, 32, 64, 12, 82, 56, 10, 24, 20, 48, 40, 96];\n    if (expArr.length !== res.length) {\n        return [{\n            name:   'Массив',\n            status: 'FAIL',\n            msg:    `Массив должен содержать ${expArr.length} чисел`\n        }];\n    }\n\n    const tests = [];\n    const fCheck = expArr[7] === res[7];\n    tests.push({\n        name:   'Первая замена',\n        status: fCheck ? 'PASS' : 'FAIL',\n        msg:    fCheck ? 'Верно!' : 'Хорошая попытка, но нет :('\n    });\n    const sCheck = expArr[13] === res[13];\n    tests.push({\n        name:   'Вторая замена',\n        status: sCheck ? 'PASS' : 'FAIL',\n        msg:    sCheck ? 'Верно!' : 'Хорошая попытка, но нет :('\n    });\n\n    return tests;\n}\n"
		}
	}
} -->

## Лицензия

[MIT](https://github.com/MonkeyBuisness/alphabet/blob/master/LICENSE)

<!-- author:[
    {
	    "name":   "Artsem Hutarau",
	    "link":   "https://github.com/MonkeyBuisness",
	    "avatar": "https://github.com/MonkeyBuisness/alphabet/raw/master/.github/assets/me.jpg",
	    "about":  "Go developer, IT teacher"
    }
] -->
