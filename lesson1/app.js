console.log('Hello world')
//vdfvdfvfdvdv
/*
* vfdvd
* fvddf
* fvdvdfv
* */

//Переменные
var helloText = 'Welcome HTML, CSS, JavaScript, React/Redux'
console.log(helloText)
//camelcase
var nameAndSurname = 'fdf'

var name = 'Aidana'
var surname = 'Bekova'
console.log(name + ' ' + surname) //конкатенация

//типы данных
// 1)string - текстовый тип данных
var text = 'fRonTEd'
console.log('тип данных - ' + typeof text)
console.log(text.toUpperCase())
console.log(text.toLowerCase())
console.log(text.length)
// console.log(text.repeat(100))

//2)
// number
var number = 45
console.log(number)
//+, -, /, *, %, **
var number2 = 2
console.log(number % number2)
console.log(number ** 5)
var result = number / number2
console.log(result.toFixed())

var studentsAge = (23 + 16 + 17 + 17 + 16 + 23 + 14 + 12 + 18 + 22 + 14 + 35) / 12
console.log(studentsAge)
// console.log(typeof number2.toString())
// console.log(Number('6'))

//3)boolean - true, false
//>, <, >=, <=, ==, !=, ===, !==
console.log(5 !== '5')

//if, else..if, else - условные конструкции
//&&, || - логические операторы
var login = 'user@gmail.com'
var password = 'user123'

// var userLogin = prompt('Enter login')
// var userPassword = prompt('Enter password')
// if(userLogin === login && userPassword === password){
//     alert('Авторизация прошла успешно!')
// }else{
//     alert('Повторите попытку, введены неправильные данные')
// }

// var num1 = Number(prompt('num1'))
// var num2 = Number(prompt('num2'))
// console.log(num1 + num2)

//
var userINN = 10823456700757
var innString = String(userINN)[0]
// console.log(innString)
if((innString === '0' || innString === '1' || innString === '2') && userINN.toString().length === 14){
    console.log('ИНН найден')
}else{
    console.error('ИНН не найден')
}


















