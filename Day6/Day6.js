
for(let i = 0; i <= 10; i++){               
    console.log(i)
}


let i = 0
while (i<=10) {
    console.log(i)
    i++
}

let i = 0
do {
    console.log(i)
    i++
} while (i <= 10)*/

for(let i = 10; i >=0; i--){
    console.log(i)
} 


let n = 15;
for (let i = 0; i<=n; i++){
    console.log(i)
} 


for (let i = 1; i <= 7; i++) {
    console.log("#".repeat(i));
}


for (let i=0; i<=10; i++){
    console.log(`${i} * ${i} = ${i*i}`)
}


console.log("i  i^2  i^3");
for (let i=0; i<=10; i++){
    console.log(`${i}   ${i*i}   ${i*i*i}`)
}


for(let i=0; i<=100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


for (let i=0; i<=100; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
} 


const primeNumbers = [2]

for(let i=3; i<=100; i++){
    let isPrime = true
    for(let k =2; k*k<=i; k++){
        if(i%k == 0){
            isPrime = false;
            break
        }
    }
    if(isPrime) primeNumbers.push(i);
}

console.log(primeNumbers)  


let total = 0;

for(let i=0; i<=100; i++){
    total +=i;
}
console.log("The sum of all numbers from 0 to 100 is " + total)



let evenTotal = 0;
let probabilityTotal = 0;
let evenNumbers = [];

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        evenTotal += i;
        evenNumbers.push(i);
        probabilityTotal += 1 / i;
    }
}

console.log("Çift Sayıların Toplamı:", evenTotal);
console.log("Olasılıkların Toplamı:", probabilityTotal);
console.log("Çift Sayılar:", evenNumbers); */
const arrRandom = []

for(let i=0 ; i<5 ; i++){
    let newElement = Math.floor(Math.random() * 100)
    arrRandom.push(newElement)
    }

    console.log('Array of random numbers ' + arrRandom)





const arrRandom = [];

for (let i = 0; i < 5; i++) {
    let newElement;
    do {
        newElement = Math.floor(Math.random() * 10);
    } while (arrRandom.includes(newElement));
    
    arrRandom.push(newElement);
}

console.log('Array of random numbers ' + arrRandom);



const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'

let id = ''
for(let i=0 ; i<6 ; i++){
let randomNum = Math.floor(Math.random() * chars.length)
id += chars[randomNum]
}

console.log(id)
