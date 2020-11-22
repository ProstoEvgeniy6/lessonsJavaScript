let num = 266219;
let result = '';

while ( num % 10 > 0.1 ) {
    result += num % 10;
    num = Number.parseInt( num / 10 );
}

num = 1;

for ( let i = 0; i < result.length; i++ ) {
    num *= +result[i];
}

console.log( num );

num = num ** 3;
console.log(num);

num = Number( num.toString().slice( 0, 2 ) );

alert( num );