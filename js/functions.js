// Проверка длины строки.

const isCheckLength = (strChecked, strLength) => strChecked.length <= strLength;
isCheckLength ('Привет', 10);


// Проверка является ли строка палиндромом.

function getCheckPalindrom(strCheck) {
  strCheck = strCheck.toUpperCase().replaceAll(' ', '');
  const x = strCheck.length - 1;
  for(let i = 0; i < x / 2; i++) {
    const frwCheck = strCheck[i];
    const bkwCheck = strCheck[x - i];
    if(frwCheck !== bkwCheck) {
      return false;
    }
  }
  return true;
}

getCheckPalindrom('Лёша на полке клопа нашёл');

// Функция возвращающая целое положительное число.
const getNumber = (string) => {
  if(typeof string === 'number') {
    return string;
  }
  let result = '';
  for(let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};

getNumber('ECMAScript 2022');

// Функция возвращает значение.

const getValue = (string, minLength, value) => {
  let result = string;
  while (result.length < minLength) {
    const newResultLength = result.length + value.length;
    const actualPad = newResultLength <= minLength ? value : value.slice(0, minLength - newResultLength);
    result = actualPad + result;
  }
  return result;
};

getValue('442', 103, '0331!');
