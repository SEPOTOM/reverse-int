module.exports = function reverse (n) {
    return Number(n.toString().split('').reverse().map((num) => { if(!isNaN(num)) return num; }).join(''));
}

//input: число
//output: исходное число, развернутое в обратном порядке

//*first-way
//1.Разбивать исходное число на массив, предварительно перевев его в строку, разделитель - пустая строка
//2.Разворачивать массив (п.1)
//3.На основе полученного массива (п.2) создать новый, в который будут входить только числа
//4.Преобразовывать массив (п.3) в строку, соеденитель - пустая строка
//5.Переводить строку (п.4) в число и возвращать его
