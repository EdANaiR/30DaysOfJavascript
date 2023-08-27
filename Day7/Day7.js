//1-
function fullName(){
    console.log("EdaNur Nair")
}
fullName()

//2-
function fulName(firstName,lastName){
    console.log(firstName + " " + lastName)
}
fulName("Eda","N.N")

//3-
function addNumbers(num1, num2){
    return num1 + num2
}
let total = addNumbers(5, 8)
console.log(total)

//4-
function areaOfRectangle(length, width){
    const area = length * width
    return area 
}
console.log(areaOfRectangle(8, 9))

//5-
function perimeterOfRectangle(length, width){
    const environment = 2*(length * width)
    return environment
}
console.log(perimeterOfRectangle(3, 5))

//6-
function volumeOfRectPrism(length, width, height){
    const volume = length * width * height
    return volume
}
console.log(volumeOfRectPrism(2, 3, 9))

//7-
function areaOfCricle(r){
    const π = 3.14
    const area =  π * r * r
    return area
}
console.log(areaOfCricle(6))

//8-
function bodyMassİndex(kg, height){
    const bmi = kg / (height * height)
    return bmi
}
const bmiValue = bodyMassİndex(45, 1.58);       //Düşük Kilolu

if(bmiValue < 18.5){
    console.log("Düşük Kilolu")
}
else if(bmiValue >= 18,5 && bmiValue <= 24.9){
    console.log("Normal Ağırlık")
}
else if(bmiValue >= 5 && bmiValue <= 29.9){
    console.log("Fazla Kilolu")
}
else console.log("Obez")

//9-
function checkSeason(month) {
    if (month >= 3 && month <= 5) {
        return "İlkbahar";
    } else if (month >= 6 && month <= 8) {
        return "Yaz";
    } else if (month >= 9 && month <= 11) {
        return "Sonbahar";
    } else {
        return "Kış";
    }
}

const month = 7; 
console.log(checkSeason(month));    //"Yaz"
