/* 1) Создайте функцию, которая принимает 1 аргумент (название произвольное)
— Если в качестве аргумента передана не строка - функция оповещает об этом пользователя
— В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
— Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...)
2) Запушить проект в репозиторий для усложненных заданий на GitHub      */

function someFunc( arg ) {

    let tempStr;

    if( typeof( arg ) != 'string' ) {
        return alert('Аргумент функции - не строка.');
    }
    
    tempStr = arg.trim();

    if( tempStr.length > 30 ) {
        return tempStr.slice( 0, 30) + '...';
    } else {
        return tempStr;
    }
}

console.log( someFunc(5) );
console.log( someFunc('У попа была собака, он её любил.') );
console.log( someFunc('У попа была собака.') );