//OPERATORS
// Değişken bildiri,değer atamazsak "UNDEFİNED" 
// == Karşılaştırma
// += Arttırma
// -= Azaltma
// *= Çarpma
// /= Bölüm
// %= Mod
// **= Üstel 
// === Hem değeri hem data type karşılaştırır
// != Olumsuz
// && ve
// || veya


//Arttırma işlemi
let count = 0
console.log(++count)

//Azaltma işlemi
let countt = 0
console.log(--countt)

//Mesaj Kutucuğu
alert('Welcome 30DaysOfJS')

//Giriş değerlerini almak için istem kutusu gönderir
let number = prompt('Enter number', 'number goes here')
console.log(number)

//Onay kutucuğu gönderir
const agree = confirm('Are you sure like to delete')
console.log(agree)

//Exercises
let firstName = 'Eda'
let lastName  = 'Nair'
let country   = 'Turkey'
let city      = 'Ankara'
let age       = 22
let isMarried = false

console.log(typeof firstName, 
            typeof lastName, 
            typeof country,
            typeof age,
            typeof isMarried
            )


console.log(typeof '10'==10)   
console.log(parseInt('9.8') == 10)

let oneG = 'script'
let twoG = 15
let threeG = true

let oneS = undefined
let twoS = ''
let threeS = null 

console.log( 4>3 )
console.log( 4>=3 )
console.log( 4<3 )
console.log( 4<=3 )
console.log( 4==4 )
console.log( 4===4 )
console.log( 4!=4 )
console.log( 4!==4 )
console.log( 4!='4' )
console.log( 4=='4' )  
console.log( 4==='4' )

let st1 = 'python'
let st2 = 'jargon'
console.log(st1.length !== st2.length)

console.log(4>3 && 10<12)
console.log(4>3 && 10>12)
console.log(4>3 || 10<12)
console.log(4>3 || 10>12)
console.log(!(4>3))
console.log(!(4<3))
console.log(!(4==='4'))
