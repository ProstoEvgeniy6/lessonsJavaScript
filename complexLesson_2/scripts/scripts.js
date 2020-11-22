let num = 266219;

num = num.toString().split('').reduce((ac, el) => {
    return ac * el
}, 1 );

console.log( num );

num = num ** 3;
console.log(num);

num = Number( num.toString().slice( 0, 2 ) );

alert( num );