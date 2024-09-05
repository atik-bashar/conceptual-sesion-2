// console.log('atik')
// console.log('atik')
// console.log('atik')
// console.log('atik')

// ekoi kotha bah jinis bar bar repid korar khetre loop use kora hoi 

/**
 * for(initialize,end condition, increment/decrement){
body  }
 */

// for(let i = 1; i<=50; i++){
//     console.log('atik',i);
// }


// const flowers = ['golap', 'sapla', 'joba', 'beli'];

// console.log(flowers[0]);
// console.log(flowers[1]);
// console.log(flowers[2]);
// console.log(flowers[3]);

// for(let i = 0; i < flowers.length; i++){
//     console.log(flowers[i]);
// }

// for(let i = flowers.length - 1; i>= 0; i--){
//     console.log(flowers[i]);
// }


/**
 * while lop 
 * 
 * initialization
 * while(condition){
 * task
 * looping increment or decrement
 * }
 */

// const flowers = ['golap', 'sapla', 'joba', 'beli'];

// let i = 0 ;
// while(i < flowers.length){
//     console.log(flowers[i]);
//     i++;
// }

// let i = flowers.length - 1;
// while(i>=0){
//     console.log(flowers[i]);
//     i--;
// }

// const flowers = ['golap', 'sapla', 'joba', 'beli'];

// for(let item of flowers){
//     console.log(item);
// }

// reverse jodi korte cai

// for(let item of flowers.reverse()){
//     console.log(item);
// }


// nested loop 

// for(let i = 1; i<=5; i++){
//     console.log('hello from I',i)
//     for(let j = 1; j<=5; j++){
//          console.log('hello from J', j)
//     }
// }


// const x = [1,2,3,4,5,6,7,8];

// for(let i = 0; i < x.length; i++){
//     console.log(x[i]);
// }


// loop vanga te break value use hoi 


// const x = [1,2,3,4,5,6,7,8];

// for(let i = 0; i < x.length; i++){
//     if(x[i] === 5){
//         break;
//     }
//     console.log(x[i]);
// }


// continue hocche ignore kora 


const x = [1,2,3,4,5,6,7,8];

for(let i = 0; i < x.length; i++){
    if(x[i] === 5){
        continue;
    }
    console.log(x[i]);
}
