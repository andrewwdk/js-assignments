'use strict';

/*********************************************************************************************
 *                                                                                           *
 * Пожалуйста, прочтите информацию по ссылке перед выполнением заданий:                      *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array    *
 *                                                                                           *
 * NOTE : ПОЖАЛУЙСТА, НЕ ИПОЛЬЗУЙТЕ ЦИКЛЫ!                                                   *
 * Во всех задачах данного раздела должны быть использованы встроенные в объект Array методы *
 *********************************************************************************************/


/**
 * Возвращает индекс переданного элемента в массиве, а если он остутствует то возвращает -1
 *
 * @param {array} arr
 * @param {any} value
 * @return {number}
 *
 * @example
 *    ['Ace', 10, true], 10    => 1
 *    ['Array', 'Number', 'string'], 'Date'    => -1
 *    [0, 1, 2, 3, 4, 5], 5    => 5
 */
function findElement(arr, value) {
   return arr.indexOf(value);
}

/**
 * Возвращает массив, состоящий из нечетных чисел, заданной длины
 *
 * @param {number} len
 * @return {array}
 *
 * @example
 *    1 => [ 1 ]
 *    2 => [ 1, 3 ]
 *    5 => [ 1, 3, 5, 7, 9 ]
 */
function generateOdds(len) {
   var arr = new Array(len).fill(0);
   var new_arr = arr.map(function ( value, index){
	return index*2 + 1;
});
	return new_arr;
}

/**
 * Возвращает массив состоящий из двух копий переданного массива
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    ['Ace', 10, true]  => ['Ace', 10, true,   'Ace', 10, true]
 *    [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5]
 *    [] => []
 */
function doubleArray(arr) {
   return arr.concat(arr);
}


/**
 * Возвращает массив, состоящий только из положительных чисел вводного массива, сохраняя порядок элементов
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 2, -3, 4, 5 ] => [1, 2, 4, 5 ]
 *    [-1, 2, -5, -4, 0, 19] => [ 2, 19 ]
 *    [] => []
 */
function getArrayOfPositives(arr) {
   return arr.filter(value => value > 0);
}

/**
 *  Возвращает массив, состоящий только из элементов - строк вводного массива (сохранять порядок элементов)
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 'cat', 3, true, 'dog' ] => [ 'cat', 'dog' ]
 *    [ 1, 2, 3, 4, 5 ] => []
 *    [ 'cat, 'dog', 'raccon' ] => [ 'cat', 'dog', 'racoon' ]
 */
function getArrayOfStrings(arr) {
   return arr.filter(value => typeof(value) == 'string');
}

/**
 * Удаляет ложные значения (== false) элементов массива из переданного массива
 * Ложные значения: false, null, 0, "", undefined, and NaN.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description)
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, false, 'cat', NaN, true, '' ] => [ 'cat', true ]
 *    [ 1, 2, 3, 4, 5, 'false' ]         => [ 1, 2, 3, 4, 5, 'false' ]
 *    [ false, 0, NaN, '', undefined ]   => [ ]
 */
function removeFalsyValues(arr) {
  return arr.filter( value => value);
}

/**
 * Возвращает массив, который состоит из элементов вводного массива в верхнем регистре
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ] => [ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ]
 *    [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]  => [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
 */
function getUpperCaseStrings(arr) {
   return arr.map(function(value){ return value.toUpperCase()});
}


/**
 * Возвращает массив с длинами строк элементов входного массива
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ]
 *    [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
 */
function getStringsLength(arr) {
   return arr.map(function(value){ return value.length});
}

/**
 * Вставляет в переданный массив переданный элемент по заданному индексу
 *
 * @param {array} arr
 * @param {any} item
 * @param {number} index
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2, 1  => [ 1, 2, 3, 4, 5 ]
 *    [ 1, 'b', 'c'], 0, 'x'  => [ 'x', 1, 'b', 'c' ]
 */
function insertItem(arr, item, index) {
   return arr.splice(index, 0, item);
}

/**
 * Возвращает первые n элементов переданного массива
 *
 * @param {array} arr
 * @param {number} n
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 1, 2 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'a', 'b', 'c' ]
 */
function getHead(arr, n) {
   return arr.slice(0, n);
}


/**
 * Возвращает последние n элементов переданного массива
 *
 * @param {array} arr
 * @param {number} n
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 4, 5 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'b', 'c', 'd' ]
 */
function getTail(arr, n) {
   return arr.slice(arr.length -n, arr.length);
}


/**
 * Вернуть CSV представление of two-dimentional numeric array.
 * https://ru.wikipedia.org/wiki/CSV
 *
 * @param {array} arr
 * @return {string}
 *
 * @example
 *    [
 *       [  0, 1, 2, 3, 4 ],
 *       [ 10,11,12,13,14 ],
 *       [ 20,21,22,23,24 ],
 *       [ 30,31,32,33,34 ]
 *    ]
 *           =>
 *     '0,1,2,3,4\n'
 *    +'10,11,12,13,14\n'
 *    +'20,21,22,23,24\n'
 *    +'30,31,32,33,34'
 */
function toCsvText(arr) {
   return arr.map(function(value){ return value.join()}).join('\n');
}

/**
 * Транформировать входной массив так, чтобы каждое его исходное значение было возведено в квадрат:
 *   f(x) = x * x
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 0, 1, 2, 3, 4, 5 ] => [ 0, 1, 4, 9, 16, 25 ]
 *   [ 10, 100, -1 ]      => [ 100, 10000, 1 ]
 */
function toArrayOfSquares(arr) {
   return arr.map(value => value*value);
}


/**
 * Транформировать входной массив так, чтобы каждое новое n-ое значение его было равно:
 *       f[n] = x[0] + x[1] + x[2] +...+ x[n]
 *  или  f[n] = f[n-1] + x[n]
 *
 * @param {array} arr
 * @return {array}
 *
 * Пример :
 *   [ 1, 1, 1, 1, 1 ]        => [ 1, 2, 3, 4, 5 ]
 *   [ 10, -10, 10, -10, 10 ] => [ 10, 0, 10, 0, 10 ]
 *   [ 0, 0, 0, 0, 0]         => [ 0, 0, 0, 0, 0]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
 */
function getMovingSum(arr) {
   var temp_arr;
   return arr.map(function(value, index, array){
	temp_arr = array.slice(0, index+1);
	return temp_arr.reduce((accumulator, cur_val) => accumulator + cur_val);
});
}

/**
 * Возвращает массив, состоящий из каждого второго элемента переданного массива:
 *
 * @param {array} arr
 * @return {array}
 *
 * Пример :
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
 * [ 'a', 'b', 'c' , null ]  => [ "b", null ]
 * [ "a" ] => []
 */
function getSecondItems(arr) {
    return arr.filter(function(value, index){
	if(index % 2 == 1)
		if (value === null){
			return 'null';
		} else return value;
});
}


/**
 * Возвращает новый массив, в котором каждый качальный элемент исходного массива будет
 * повторен в конечном массиве n-ое количество раз
 * N - [1...a.length] - номер места по порядку на котором располагается соответствующий элемент в начальном массиве
 *
 * @param {array} arr
 * @return {array}
 *
 * @example :
 *  [] => []
 *  [ 1 ] => [ 1 ]
 *  [ 'a', 'b' ] => [ 'a', 'b','b' ]
 *  [ 'a', 'b', 'c', null ] => [ 'a', 'b','b', 'c','c','c',  null,null,null,null ]
 *  [ 1,2,3,4,5 ] => [ 1, 2,2, 3,3,3, 4,4,4,4, 5,5,5,5,5 ]
 */
function propagateItemsByPositionIndex(arr) {
  return arr.reduce((answer, elem ,i ) => answer.concat(Array.from({length: i+1}, ()=>elem)),[]);
}


/**
 * Возвращает массив состоящий из трех масимальных элементов исходного массива
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 1, 2 ] => [ 2, 1 ]
 *   [ 1, 2, 3 ] => [ 3, 2, 1 ]
 *   [ 1,2,3,4,5,6,7,8,9,10 ] => [ 10, 9, 8 ]
 *   [ 10, 10, 10, 10 ] => [ 10, 10, 10 ]
 */
function get3TopItems(arr) {
   arr.sort(function(a, b){
	return b - a;
});
   return arr.slice(0, 3);
}


/**
 * Возвращает количество положительных элементов переданного массива
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *   [ ]          => 0
 *   [ -1, 0, 1 ] => 1
 *   [ 1, 2, 3]   => 3
 *   [ null, 1, 'elephant' ] => 1
 *   [ 1, '2' ] => 1
 */
function getPositivesCount(arr) {
   var new_arr = arr.filter(value => (value > 0) && Number.isInteger(value));
   return new_arr.length;
}

/**
 * Отсортировывает массив строковых представлений цифр
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 'nine','one' ]                 => [ 'one', 'nine' ]
 *   [ 'one','two','three' ]          => [ 'one','two', 'three' ]
 *   [ 'nine','eight','nine','eight'] => [ 'eight','eight','nine','nine']
 *   [ 'one','one','one','zero' ]     => [ 'zero','one','one','one' ]
 */
function sortDigitNamesByNumericOrder(arr) {
   var check = ['zero', 'one','two','three','four','five','six','seven','eight','nine'];
   return arr.sort(function(a,b){
	if (check.indexOf(a) < check.indexOf(b)){
			return -1;
	} else return 1;
});
}

/**
 * Возвращает сумму всех элементов входного массива
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *   [] => 0
 *   [ 1, 2, 3 ]           => 6
 *   [ -1, 1, -1, 1 ]      => 0
 *   [ 1, 10, 100, 1000 ]  => 1111
 */
function getItemsSum(arr) {
if (arr.length > 0){
   return arr.reduce((accumulator, cur_val) => accumulator + cur_val);
} else return 0;
}

/**
 * Возвращает количество всех элементов массива равных false (== false)
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *  [] => 0
 *  [ 1, '', 3 ] => 1
 *  [ -1, 'false', null, 0 ] => 2
 *  [ null, undefined, NaN, false, 0, '' ]  => 6
 */
function getFalsyValuesCount(arr) {
   var new_arr = arr.filter(value => !value);
	return new_arr.length;
}

/**
 * Возвращает количество вхождений переданного числа в переданный массив
 *
 * @param {array} arr
 * @param {any} item
 * @return {number}
 *
 * @example
 *    [ 0, 0, 1, 1, 1, 2 ], 1 => 3
 *    [ 1, 2, 3, 4, 5 ], 0 => 0
 *    [ 'a','b','c','c' ], 'c'=> 2
 *    [ null, undefined, null ], null => 2
 *    [ true, 0, 1, 'true' ], true => 1
 */
function findAllOccurences(arr, item) {
   var new_arr = arr.filter( value => value === item);
	return new_arr.length;
}

/**
 * Сливает все элементы массива в одну строку с разделителем ','
 *
 * @param {array} arr
 * @return {string}
 *
 * @example
 *    [0, false, 'cat', NaN, true, '']  => '0,false,cat,NaN,true,'
 *    [1, 2, 3, 4, 5]                   => '1,2,3,4,5'
 *    ['rock', 'paper', 'scissors']     => 'rock,paper,scissors'
 */
function toStringList(arr) {
   return arr.join();
}


/**
 * Сортирует по возрастанию переданный массив по имени страны, а при равенстве страны сравнивает по имени города
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 */
function sortCitiesArray(arr) {
   return arr.sort(function(a,b){
	 if (a.country < b.country)
		return -1;
	 if (a.country > b.country) 
		return 1;
	 if (a.country = b.country){
			if (a.city < b.city)
				return -1;
			if (a.city > b.city)
				return 1;
	}	
});
}

/**
 * Возвращает единичную матрицу заданного порядка
 *
 * @param {number} n
 * @return {array}
 *
 * @example
 *     1  => [[1]]
 *
 *     2 => [[1,0],
 *           [0,1]]
 *
 *          [[1,0,0,0,0],
 *           [0,1,0,0,0],
 *     5 =>  [0,0,1,0,0],
 *           [0,0,0,1,0],
 *           [0,0,0,0,1]]
 */
function getIdentityMatrix(n) {
   var arr = new Array(n).fill(Array(n).fill(0));
   return arr.map(function(value1, i){
	return value1.map(function(value2, j){
		if ( i == j) return value2 + 1;
		return value2;
	});
});
}

/**
 * Возвращает массив, состоящий из элементов от стартового до конечного аргументов включая
 *
 * @param {number} start
 * @param {number} end
 * @return {array}
 *
 * @example
 *     1, 5  => [ 1, 2, 3, 4, 5 ]
 *    -2, 2  => [ -2, -1, 0, 1, 2 ]
 *     0, 100 => [ 0, 1, 2, ..., 100 ]
 *     3, 3   => [ 3 ]
 */
function getIntervalArray(start, end) {
   var arr = new Array(end - start + 1).fill(start);
   return arr.map(function(value, index){
	return value + index;
});
}

/**
 * Возвращаемый массив содержит только уникальные значения переданного массива.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 3, 2, 1 ] => [ 1, 2, 3 ]
 *   [ 'a', 'a', 'a', 'a' ]  => [ 'a' ]
 *   [ 1, 1, 2, 2, 3, 3, 4, 4] => [ 1, 2, 3, 4]
 */
function distinct(arr) {
   return arr.filter(function(value, index, array){
	if (array.indexOf(value) == index)
		return value;
});
}

/**
 * Группирует элементы переданного массива по переанной keySelector функции
 * и по в массивы по выбранным сгруппированным key добавляет соответствующие
 * value исходя из переданной функции valueSelector
 * Описание данной структуры: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ],
 *     item => item.country,
 *     item => item.city
 *   )
 *            =>
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"],
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(array, keySelector, valueSelector) { 
	var map = new Map(); 
	array.map( key => { 
	map.set(keySelector(key), (map.get(keySelector(key)) === undefined ? [] : map.get(keySelector(key))).concat([valueSelector(key)])); 
	}); 
	return map; 
}

/**
 * Функция должна переводить каждый элемент переданного массива arr в последовательность элементов согласно childrenSelector
 * Также данная структура должна стать плоской: [[a],[b],[c],[d,e]] => [a,b,c,d,e]
 *
 * @param {array} arr
 * @param {Function} childrenSelector, функция которая будет применена для каждого элемента начального массива
 * @return {array}
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], (x) => x     =>   [ 1, 2, 3, 4, 5, 6 ]
 *   ['one','two','three'], x=>x.split('')  =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(arr, childrenSelector) {
    var final_arr = [];
    arr.map(function(value){
	var temp = [];
	temp.push(childrenSelector(value));
	temp[0].map(function(value2){ final_arr.push(value2)});
});
	return final_arr;
}

/**
 * Возврщает значение элемента матрицы по переданных индексам.
 * Матрица в данном случае представлена массивом с любой вложенностью
 *
 * @param {array} arr
 * @param {array} indexes
 * @return {any} element from array
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], [0,0]  => 1        (arr[0][0])
 *   ['one','two','three'], [2]       => 'three'  (arr[2])
 *   [[[ 1, 2, 3]]], [ 0, 0, 1 ]      => 2        (arr[0][0][1])
 */
function getElementByIndexes(arr, indexes) {
	return indexes.reduce((accumulator, cur_val) => accumulator=accumulator[cur_val], arr);
}




/**
 * Возвращает массив с измененным порядком элементов исходного массива:
 * Меняет местами элементы до среднего элемента и элементы после
 * Первая половина (head) массива становися в конец, а вторая (tail) в начало.
 * Средний элемент не меняет свою позицию.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   [ 1, 2 ]  => [ 2, 1 ]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8 ]   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *
 */
function swapHeadAndTail(arr) {
    var head;
    var tail;
    var middle;
	if ( arr.length % 2 == 0){
		head = arr.slice(0, Math.round(arr.length/2));
		tail = arr.slice(Math.round(arr.length/2), arr.length);
		return tail.concat(head);
	} else {
		 head = arr.slice(0, Math.round(arr.length/2) - 1); 
		 middle = arr.slice(Math.round(arr.length/2) - 1, Math.round(arr.length/2));
		 tail = arr.slice(Math.round(arr.length/2), arr.length);
		 return tail.concat(middle, head);
	  }
	
}


module.exports = {
    findElement: findElement,
    generateOdds: generateOdds,
    doubleArray: doubleArray,
    getArrayOfPositives: getArrayOfPositives,
    getArrayOfStrings: getArrayOfStrings,
    removeFalsyValues: removeFalsyValues,
    getUpperCaseStrings: getUpperCaseStrings,
    getStringsLength: getStringsLength,
    insertItem: insertItem,
    getHead: getHead,
    getTail: getTail,
    toCsvText: toCsvText,
    toStringList: toStringList,
    toArrayOfSquares: toArrayOfSquares,
    getMovingSum: getMovingSum,
    getSecondItems: getSecondItems,
    propagateItemsByPositionIndex: propagateItemsByPositionIndex,
    get3TopItems: get3TopItems,
    getPositivesCount: getPositivesCount,
    sortDigitNamesByNumericOrder: sortDigitNamesByNumericOrder,
    getItemsSum: getItemsSum,
    getFalsyValuesCount: getFalsyValuesCount,
    findAllOccurences: findAllOccurences,
    sortCitiesArray: sortCitiesArray,
    getIdentityMatrix: getIdentityMatrix,
    getIntervalArray: getIntervalArray,
    distinct: distinct,
    group: group,
    selectMany: selectMany,
    getElementByIndexes: getElementByIndexes,
    swapHeadAndTail: swapHeadAndTail
};
