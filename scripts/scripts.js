/*      1) Переписать функцию start циклом do while
2) Добавить проверку что введённые данные являются числом, которые мы получаем на вопрос 'Во сколько это обойдется?’ в функции  getExpensesMonth
3) Если getTargetMonth возвращает нам отрицательное значение, то вместо “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”
4) Проверить, чтобы все работало и не было ошибок в консоли
5) Добавить папку с уроком в свой репозиторий на GitHub      */

let isNumber = (arg) => {
    return ! Number.isNaN(Number.parseFloat(arg)) && isFinite(arg)
}

let money = 42000;
let income = '30000 фриланс';
let addExpenses = '';
let deposit = false;
let mission = 150000;
let period = 12;
let budgetDay;
let flag = true;
let expenses1, expenses2, amount1, amount2;
let accumulatedMonth;

let start = () => {
    // money = prompt('Ваш месячный доход.');
    // while ( Numberber.isNaN(money) || money.trim() === '' || money === null )
    // while ( Numberber.isNaN( Number.parseFloat(money) ) {
    do {

        money = Number(prompt('Ваш месячный доход.'));

    } while ( ! isNumber( money ) )
};

start();

let expenses = [];
///////////////////////////////////////////////////////////////////////
const getExpensesMonth = ( expention1, expention2 ) => {

    let sum = 0, temp;
    for (let i = 0; i < 2; i++) {

        expenses[i] = prompt('Введите обязательную статью расходов', 'Название статьи расхода - ');

        do {
            
            temp = +prompt('Во сколько это обой дется');
            isNumber( temp ) ? sum += temp : temp = null;
            
        } while( ! isNumber( temp ) );
    }

    return sum;
};

console.log(expenses);

let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц', expensesAmount);

//////////////////////////////////////////////////////////////////////////////////////////
const getAccumulatedMonth = ( expentions, incomes ) => {
let result = incomes - expentions;
return result;
}
//////////////////////////////////////////////////////////////////////////////////////////////
const getTargetMonth = (accMonth) => {
return Math.ceil( mission / accMonth );
}
///////////////////////////////////////////////////////////////////////////////////////////////
function showTypeOf() {
console.table([
    {variableName: 'money', type: typeof(money)},
    {variableName: 'income', type: typeof(income)},
    {variableName: 'deposit', type: typeof(deposit)}
]);    
}
//////////////////////////////////////////////////////////////////////////////////////
function getStatusIncome() {
if ( budgetDay > 1200 ) {
    return 'У вас высокий уровень дохода';
} else if ( 600 < budgetDay && budgetDay <= 1200  ) {
    return 'У вас средний уровень дохода';
} else if ( 0 <= budgetDay && budgetDay <= 600  ) {
    return 'К сожалению у вас уровень дохода ниже среднего';
} else if ( budgetDay < 0  ) {
    return 'Что то пошло не так';
}
}

addExpenses = getUserData( 'Перечислите возможные расходы за рассчитываемый период через запятую', 3 );

deposit = getUserData('Есть ли у вас депозит в банке?', 4);

accumulatedMonth = getAccumulatedMonth( expensesAmount, money )

period = getTargetMonth( accumulatedMonth );
let resultPeriod = period > 0 ? `Период равен ${period} месяцев и Цель заработать(${mission}) рублей/долларов/гривен/юани` 
                                : `Цель заработать ${mission} рублей/долларов/гривен/юани - не будет достигнута`;

budgetDay = Math.floor( accumulatedMonth / 30 );

showTypeOf();

console.log( getStatusIncome() );
console.log( 'Месячный бюджет ', accumulatedMonth );
console.log('Дневной бюджет ', budgetDay);
console.log( 'Длинна переменной addExpenses = ', addExpenses.length );
console.log( `${resultPeriod}` );
console.log( addExpenses.toLowerCase().split(',') );
console.log( budgetDay.toFixed(2) );
