const test = require('./cyrillify.js');

console.log('Starting character concealing tests');

const testA = test('A');
if (testA !== 'А') { //'А' is actually ASCII xn--80a
    throw new Error(`Test not concealing "A" behind ASCII xn--80a.`);
}

const testB = test('B');
if (testB !== 'В') { //'В' is actually ASCII xn--b1a
    throw new Error(`Test not concealing "B" behind ASCII xn--b1a.`);
}

const testC = test('C');
if (testC !== 'С') { //'С' is actually ASCII xn--q1a
    throw new Error(`Test not concealing "C" behind ASCII xn--q1a.`);
}

const testE = test('E');
if (testE !== 'Е') { //'Е' is actually ASCII xn--e1a
    throw new Error(`Test not concealing "E" behind ASCII xn--e1a.`);
}

const testH = test('H');
if (testH !== 'Н') { //'Н' is actually ASCII xn--m1a
    throw new Error(`Test not concealing "H" behind ASCII xn--m1a.`);
}

const testI = test('I');
if (testI !== 'І') { //'І' is actually ASCII xn--c2a
    throw new Error(`Test not concealing "I" behind ASCII xn--c2a.`);
}

const testJ = test('J');
if (testJ !== 'Ј') { //'Ј' is actually ASCII xn--e2a
    throw new Error(`Test not concealing "J" behind ASCII xn--e2a.`);
}

const testK = test('K');
if (testK !== 'К') { //'К' is actually ASCII xn--j1a
    throw new Error(`Test not concealing "K" behind ASCII xn--j1a.`);
}

const testM = test('M');
if (testM !== 'М') { //'М' is actually ASCII xn--l1a
    throw new Error(`Test not concealing "M" behind ASCII xn--l1a.`);
}

const testO = test('O');
if (testO !== 'О') { //'О' is actually ASCII xn--n1a
    throw new Error(`Test not concealing "O" behind ASCII xn--n1a.`);
}

const testP = test('P');
if (testP !== 'Р') { //'Р' is actually ASCII xn--p1a
    throw new Error(`Test not concealing "P" behind ASCII xn--p1a.`);
}

const testS = test('S');
if (testS !== 'Ѕ') { //'Ѕ' is actually ASCII xn--b2a
    throw new Error(`Test not concealing "S" behind ASCII xn--b2a.`);
}

const testT = test('T');
if (testT !== 'Т') { //'Т' is actually ASCII xn--r1a
    throw new Error(`Test not concealing "T" behind ASCII xn--r1a.`);
}

const testX = test('X');
if (testX !== 'Х') { //'Х' is actually ASCII xn--u1a
    throw new Error(`Test not concealing "X" behind ASCII xn--u1a.`);
}

const testY = test('Y');
if (testY !== 'Ү') { //'Ү' is actually ASCII xn--v4a
    throw new Error(`Test not concealing "Y" behind ASCII xn--v4a.`);
}

const testa = test('a');
if (testa !== 'а') { //'а' is actually ASCII xn--80a
    throw new Error(`Test not concealing "a" behind ASCII xn--80a.`);
}

const testc = test('c');
if (testc !== 'с') { //'с' is actually ASCII xn--q1a
    throw new Error(`Test not concealing "c" behind ASCII xn--q1a.`);
}

const teste = test('e');
if (teste !== 'е') { //'е' is actually ASCII xn--e1a
    throw new Error(`Test not concealing "e" behind ASCII xn--e1a.`);
}

const testo = test('o');
if (testo !== 'о') { //'о' is actually ASCII xn--n1a
    throw new Error(`Test not concealing "o" behind ASCII xn--n1a.`);
}

const testp = test('p');
if (testp !== 'р') { //'р' is actually ASCII xn--p1a
    throw new Error(`Test not concealing "p" behind ASCII xn--p1a.`);
}

const testx = test('x');
if (testx !== 'х') { //'х' is actually ASCII xn--u1a
    throw new Error(`Test not concealing "x" behind ASCII xn--u1a.`);
}

const testy = test('y');
if (testy !== 'у') { //'у' is actually ASCII xn--s1a
    throw new Error(`Test not concealing "y" behind ASCII xn--s1a.`);
}
