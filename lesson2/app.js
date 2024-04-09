// if, else..if, else
// var experience = prompt('Сколько лет у вас опыта? (в годах)')
// var developerLevel
//
// if(experience > 0 && experience <= 2){
//     developerLevel = 'junior'
// }else if(experience >= 3 && experience <= 6){
//     developerLevel = 'middle'
// }else if(experience >= 7 && experience <= 40){
//     developerLevel = 'senior'
// }else{
//     developerLevel = 'unknow'
// }
//
// console.log(`Ваш уровень в программировании ${developerLevel}`)
//
// //switch..case
// var month = 'декабрь'
// switch (month) {
//     case 'декабрь':
//     case 'январь':
//     case "февраль":
//         console.log('Зима')
//         break
//     case 'март':
//     case 'апрель':
//     case "май":
//         console.log('весна')
//         break
//     default:
//         console.log('error')
// }
//
// //NaN - not a number
// var result = 23 / 'text'
// console.log(result)
// console.log(234 / -0)
//
//
// //4) null
// var login = 'adsf'
// var password = 123
// var address = null
//
// //5) undefined
// let surname
// console.log(typeof surname)
//
//
// //6) object
// var courseGeeks = {
//     name: 'Geeks',
//     foundingDate: 2017,
//     address: {
//         street: 'Ibraimova',
//         number: 103,
//         building: null
//     },
//     branches: true,
//     obj: {
//         f: {
//             g: {
//
//             }
//         }
//     }
// }
// console.log(typeof courseGeeks)
//
// //методы объекта
// console.log(courseGeeks.address.number)
// courseGeeks.corse = 'Geeks'
// delete courseGeeks.corse
// courseGeeks['branches'] = false
// console.log(courseGeeks)
// console.log(Object.keys(courseGeeks))
// console.log(Object.values(courseGeeks))
// console.log(Object.entries(courseGeeks))
// console.log(courseGeeks.hasOwnProperty('foundingDate'))
//
// //array
// var array = [1,2,3,4,578,6, 'text', null]
// console.log(typeof array)
// console.log(array.length - 1)
// console.log(array[6][2])
// array[78] = 78
// console.log(array[78])
//
// var matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// console.log(matrix[1][1])

//цикл for
// for(var i = 0; i <= 10; i++){
//     console.log(i)
// }

// переменные короткого обновления
// var i = 0
// i = i + 1
// i += 1
// i++

var numbers = [2,4,5,6,23,45]

for(var i = 0; i < numbers.length; i++){
    numbers[i] = numbers[i] * 2
}
console.log(numbers)

for(var i = 10; i >= 1; i--){
    console.log(i)
}

var names = ['anna', 'john', 'jack', 'olivia', 'aidar']
var blacklist = ['anna', 'jack']
for(var i = 0; i < names.length; i++){
    if(blacklist.includes(names[i])){
        console.warn(`${names[i]} in blacklist`)
        continue
    }
    console.log(`Welcome, dear guest ${names[i]}`)
}


//for..of









