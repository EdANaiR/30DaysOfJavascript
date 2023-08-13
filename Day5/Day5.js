let arrr = [] 
const arr = [1, 2, 3, 4, 5]

console.log(arr.length)

let firstArr = arr[0]        //dizinin ilk öğesi çağırır
console.log(firstArr)

let secondArr = Math.floor(arr.length / 2)      //orta öğesini çağırır
console.log(secondArr)

let lastArr = arr.length - 1         //son öğesini çağırır
console.log(arr[lastArr])


const mixedDataTypes = ["strawberry",1,2,3,"door","turkcan"]
console.log(mixedDataTypes.length)


const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]


console.log("İt Companies:"+ itCompanies)


console.log(itCompanies.length)


console.log(...itCompanies)


for (var i = 0; i < itCompanies.length; i++) {                   //Şirket adlarını büyük harfle değiştirir ve yazdırır.
    var sirketAdiBuyukHarf = itCompanies[i].toUpperCase();
    console.log(sirketAdiBuyukHarf);
  }


console.log("Print the array like as a sentence:" + itCompanies)

/* 
let itName = prompt("Şirket Adı Girin")                           //Belirli şirketin olup olmadığını sorgular
if (itCompanies.includes(itName)) {
    alert("Şirket Mevcut");
}
else{
    alert("Şirket Bulunamadı");
}
*/

const regex = /.*[oO].*[oO].*/;                                       //içinde 2den fazla "o" olan şirketler

let result = itCompanies.filter(company => regex.test(company));
console.log("İçinde En Az 2 'O' Harfi Bulunan Şirketler "+ result);


console.log(itCompanies.sort());                                      //sort() yöntemiyle sıralama

console.log(itCompanies.reverse());                                   //reverse() yöntemiyle diziyi tersine çevirme

console.log(itCompanies.slice(0,3));                                  //ilk üç şirketi dilimler

console.log(itCompanies.slice(3,6));                                  //son 3 şirketi dilimler

let companyInMiddle = Math.floor(itCompanies.length / 2);             //Ortada ki şirketi ayırır
console.log(itCompanies[companyInMiddle]);


const  newItCompanies = ['Facebook', 'Google' ,'Microsoft' ,'Apple', "IBM","Oracle", "Amazon"]               //baştaki elemanı diziden çıkartır
newItCompanies.shift()
console.log(newItCompanies)



let inMiddle = Math.floor(newItCompanies.length / 2);
console.log(newItCompanies.splice(inMiddle, 1));













