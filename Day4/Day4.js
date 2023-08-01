//Exercise level 1-1

let yas = prompt("Yaşınızı girin: ");

if (yas > 18){
   alert("Araba Kullanacak Yaştasınız!");
} else {
    let gerekliYas = 18 - yas
    alert("Beklemeniz gereken yıl " + gerekliYas );
} 

//Exercise level 1-2 

let xAge = prompt("x kişisi yaş gir:");
let yAge = prompt("y kişisi yaş gir:");
let farkX = xAge - yAge;
if(xAge>yAge) {  
    console.log(`X kişisi Y kişisinden ${farkX} yıl büyüktür`);
} else if (yAge > xAge) {
    console.log(`Y kişisi X kişisinden ${Math.abs(farkX)} yıl büyüktür.`);         // ${Math.abs(farkX)} yaş farkı pozitif olsun diye..
} else { 
    console.log("Yaşları eşittir.");
} 

//Exercise level 1-3

let num = prompt("Sayı girin:");
if(num %2 === 0 ){
  console.log(num + " Sayısı Çift Sayıdır");
}
else {
    console.log(num + " Sayısı Tek Sayıdır");
} 

//Exercise level 2:1-6

let not = prompt("Notunuzu girin:")
if (not >=80 && not <= 100 ){
    console.log("Harf Notunuz: A")
}
else if (not >=70 && not <=89){
    console.log("Harf Notunuz: B")
}
else if(not >=60 && not<=69){
    console.log("Harf Notunuz: C")
}
else if(not >=50 && not <=59){
    console.log("Harf Notunuz: D")
}
else{
    console.log("Kaldınız!!")
} 

//Exercise level 2:6-11

let ay = prompt("Ay Bilgisini Yazın");

if(ay === "Aralık" || ay === "Ocak" || ay === "Şubat"){
    console.log("Mevsimlerden Kış :)")
}
else if(ay === "Mart" || ay === "Nisan" || ay === "Mayıs"){
    console.log("Mevsimlerden İlkBahar :)")
}
else if (ay === "Haziran" || ay === "Temmuz" || ay === "Ağustos"){
    console.log("Mevsimlerden Yaz :)")
}
else
    console.log("Mevsimlerden SonBahar :)") 

// Exercise level 2-12

let gun = prompt("Gün giriniz: ") 
switch(gun){
    case 'Pazartesi':
        console.log('Pazartesi İş Günü')
        break
    case 'Salı':
        console.log('Salı İş Günü')
        break   
    case 'Çarşamba':
        console.log('Çarşamba İş Günü')
        break
    case 'Perşembe':
        console.log('Perşembe İş Günü')
        break
    case 'Cuma':
        console.log('Cuma İş Günü')
        break
    case 'Cumartesi':
        console.log('Cumartesi Haftsonu')
        break
    case 'Pazar':
        console.log('Pazar İş Günü')
        break
    
    } 
