let money = 28000;
let income = '30000 фриланс';
let addExpenses = 'Рыбалка, Охота, Учёба';
let deposit = false;
let mission = 150000;
let period = 12;
let  budgetDay = money / 30;

console.table([
    {variableName: 'money', type: typeof(money)},
    {variableName: 'income', type: typeof(income)},
    {variableName: 'deposit', type: typeof(deposit)}
]);

console.log( 'length of variable addExpenses = ', addExpenses.length );

console.log( `"Период равен (${period}) месяцев" и "Цель заработать(${mission}) рублей/долларов/гривен/юани"` );

console.log( addExpenses.toLowerCase().split(',') );

console.log( budgetDay.toFixed(2) );