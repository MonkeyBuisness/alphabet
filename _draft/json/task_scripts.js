/*
    TASK 1 script meta
*/

/*
const tests = [
    {
        name: 'Название картины',
        exec(act, exp) {
            if (!act.name) {
                return {
                    success: false,
                    msg: 'Свойство name не указано'
                };
            }

            const success = act.name.trim().toLowerCase() === exp.name.toLowerCase();
            return {
                success: success,
                msg:     success ? undefined : 'Название указано неверно'
            };
        },
    },
    {
        name: 'Информация о художнике',
        exec(act, exp) {
            if (!act.artist) {
                return {
                    success: false,
                    msg: 'Свойство artist не указано'
                };
            }

            const children = [];
            // check name.
            const nameTest = {
                name: 'Имя художника'
            };
            if (!act.artist.name) {
                nameTest.status = 'FAIL';
                nameTest.msg = 'Имя художника не указано';
            } else {
                const success = act.artist.name.trim().toLowerCase() === exp.artist.name.toLowerCase();
                nameTest.status = success ? 'PASS' : 'FAIL';
                nameTest.msg = success ? undefined : 'Имя художника указано неверно';
            }
            children.push(nameTest);

            // check yearOfBirth.
            const yearOfBirthTest = {
                name: 'Год рождения художника'
            };
            if (act.artist.yearOfBirth === undefined || act.artist.yearOfBirth === null) {
                yearOfBirthTest.status = 'FAIL';
                yearOfBirthTest.msg = 'Год рождения художника не указан';
            } else {
                const success = act.artist.yearOfBirth === exp.artist.yearOfBirth;
                yearOfBirthTest.status = success ? 'PASS' : 'FAIL';
                yearOfBirthTest.msg = success ? undefined : 'Год рождения художника указан неверно';
            }
            children.push(yearOfBirthTest);
            
            // check yearOfBirth.
            const yearOfDeathTest = {
                name: 'Год смерти художника'
            };
            if (act.artist.yearOfDeath === undefined || act.artist.yearOfDeath === null) {
                yearOfDeathTest.status = 'FAIL';
                yearOfDeathTest.msg = 'Год смерти художника не указан';
            } else {
                const success = act.artist.yearOfDeath === exp.artist.yearOfDeath;
                yearOfDeathTest.status = success ? 'PASS' : 'FAIL';
                yearOfDeathTest.msg = success ? undefined : 'Год смерти художника указан неверно';
            }
            children.push(yearOfDeathTest);

            return {
                success:  children.filter(c => c.status === 'FAIL').length === 0,
                children: children,
            };
        },
    },
    {
        name: 'Год создания картины',
        exec(act, exp) {
            if (act.year === undefined || act.year === null) {
                return {
                    success: false,
                    msg: 'Свойство year не указано'
                };
            }

            const success = act.year === exp.year;
            return {
                success: success,
                msg:     success ? undefined : 'Год создания указан неверно'
            };
        },
    },
    {
        name: 'Размеры картины',
        exec(act, exp) {
            if (!Array.isArray(act.dimensions)) {
                return {
                    success: false,
                    msg: 'Свойство dimensions не указано'
                };
            }

            const success = act.dimensions.length === exp.dimensions.length
                && act.dimensions[0] === exp.dimensions[0] && act.dimensions[1] === exp.dimensions[1];
            return {
                success: success,
                msg:     success ? undefined : 'Размеры картины указаны неверно'
            };
        },
    },
    {
        name: 'Музейный экспонат',
        exec(act, exp) {
            if (act.inMuseum === undefined || act.inMuseum === null) {
                return {
                    success: false,
                    msg: 'Свойство inMuseum не указано'
                };
            }

            const success = act.inMuseum === exp.inMuseum;
            return {
                success: success,
                msg:     success ? undefined : 'Значение inMuseum указано неверно'
            };
        },
    },
    {
        name: 'Соавтор',
        exec(act, exp) {
            if (act.coAuthor === undefined) {
                return {
                    success: false,
                    msg: 'Свойство coAuthor не указано'
                };
            }

            const success = act.coAuthor === exp.coAuthor;
            return {
                success: success,
                msg:     success ? undefined : 'Значение coAuthor указано неверно'
            };
        },
    }
];

after = (cell, out, success) => {
    if (!success) {
        return;
    }

    out.clear();

    const res = JSON.parse(cell.content);
    const expRes = {
        name: 'The Starry Night',
        artist: {
            name:        'Vincent van Gogh',
            yearOfBirth: 1853,
            yearOfDeath: 1890
        },
        year:       1889,
        dimensions: [73.7, 92.1],
        inMuseum:   true,
        coAuthor:   null
    };

    const results = tests.map(t => {
        const dt = Date.now();
        const testRes = t.exec(res, expRes);
        return {
            name:     t.name,
            status:   testRes.success ? 'PASS' : 'FAIL',
            msg:      testRes.msg,
            time:     Date.now() - dt,
            children: testRes.children
        };
    });

    const testsFailed = results.filter(r => r.status === 'FAIL').length;
    const testResult = {
        testsFailed:  testsFailed,
        resultStatus: testsFailed ? 'FAIL' : 'PASS',
        tests:        results
    };

    out.json([testResult], mimes().stdTest);
};
*/

/*
    TASK 2 script meta
*/

/*

after = async (cell, out, success) => {
    if (!success) {
        return;
    }
    
    out.clear();

    const res = JSON.parse(cell.content);
    const testResults = checkTestResult(res);
    const failedCount = testResults.filter(r => r.status === 'FAIL').length;
    out.json([{
        testsFailed:  failedCount,
        resultStatus: failedCount ? 'FAIL' : 'PASS',
        tests:        testResults
    }], mimes().stdTest);
};

function checkTestResult(res) {
    if (!Array.isArray(res)) {
        return [{
            name:   'Массив',
            status: 'FAIL',
            msg:    'JSON должен содержать массив чисел'
        }];
    }

    const expArr = [12, 48, 16, 32, 64, 12, 82, 56, 10, 24, 20, 48, 40, 96];
    if (expArr.length !== res.length) {
        return [{
            name:   'Массив',
            status: 'FAIL',
            msg:    `Массив должен содержать ${expArr.length} чисел`
        }];
    }

    const tests = [];
    const fCheck = expArr[7] === res[7];
    tests.push({
        name:   'Первая замена',
        status: fCheck ? 'PASS' : 'FAIL',
        msg:    fCheck ? 'Верно!' : 'Хорошая попытка, но нет :('
    });
    const sCheck = expArr[13] === res[13];
    tests.push({
        name:   'Вторая замена',
        status: sCheck ? 'PASS' : 'FAIL',
        msg:    sCheck ? 'Верно!' : 'Хорошая попытка, но нет :('
    });

    return tests;
}

*/
