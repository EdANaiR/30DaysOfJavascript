//İlkel Veri Türleri Değiştirilemez!
//İlkel Olmayan Veri Türleri Değiştirilebilir!(Objects-Array)
//Dizi Dizini 0'dan başlar.
//parseInt(StringToInt)
//parseFloat(StringToFloat)

//EXERCİSE

let string = '30 Days Of Javascript'
console.log(string)
console.log(string.length)
console.log(string.toUpperCase())                      //büyük harfe
console.log(string.toLowerCase())                      //küçük harfe
console.log(string.substring(3)) 
console.log(string.includes('Script'))                 //sorgu
console.log(string.split())                            //toplu array böler
console.log(string.split(''))                          //harf harf array böler
console.log(string.replace('Javascript','Python'))     //değişim
console.log(string.lastIndexOf())
let aRegEx= /a/g
console.log(string.match(aRegEx))                      //kaç 'a' geçtiği sorgulanır
let randomNum = Math.random()
let randome = randomNum * 100
console.log(randome)                                   //0-100 arası random sayı

