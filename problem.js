//  sum of array number

const numbers = [1,2,3,4,5,6,7];

// let sum = 0;
// for(let item of numbers){
//     sum = sum + item;
// }
// console.log('Sum is:',sum);

// even number sum

let evens = [];
for(let item of numbers){
    if(item % 2 === 0){
        evens.push(item);
    }
}

console.log(evens);