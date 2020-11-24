/* 1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
    2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
    3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
    4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат
    5) Удалить из кода переменную budgetMonth
    6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
    7) Почистить консоль логи и добавить недостающие, должны остаться:
     - вызовы функции showTypeOf
     - Расходы за месяц вызов getExpensesMonth
     - Вывод возможных расходов в виде массива (addExpenses)
     - Cрок достижения цели в месяцах (результат вызова функции getTargetMonth) 
     - Бюджет на день (budgetDay)
     - вызов функции getStatusIncome
    8) Проверить, чтобы все работало и не было ошибок в консоли
    9) Добавить папку с четвертым уроком в свой репозиторий на GitHub      */

    let money;
    let income = '30000 фриланс';
    let addExpenses = '';
    let deposit = false;
    let mission = 150000;
    let period = 12;
    let budgetDay;
    let flag = true;
    let expenses1, expenses2, amount1, amount2;
    let accumulatedMonth;
    
    //////////////////////////   Получение данных   ////////////////////////////////////////
    function getUserData( question, dataIsNumber = 2 ) {
        let userData;
    
        switch( dataIsNumber ) {
            case 6:
            case 2:
                while( flag ) {
    
                    userData = prompt( question ).trim();
                    if( ! userData ) {
                        alert('Вы не ввели данные')
                    } else if( Number.isNaN( Number( userData ) ) ) {
                        alert('Вы ввели не числовое значение');
                    } else {
                        flag = false;
                    }
    
                };
    
                flag = true;
            break;
            case 3:
            case 5:
                while( flag ) {
    
                    userData = prompt( question ).trim();
                    if( ! userData ) {
                        alert('Вы не ввели данные')
                    } else if( ! Number.isNaN( Number( userData ) ) ) {
                        alert('Введите не числовое значение');
                    } else {
                        flag = false;
                    }
    
                };
    
                flag = true;
            break;
            case 4:
                userData = confirm(question);
            break;
            default:
                alert('Данные не получены');
            
        }
        
        return userData;
    }
    ///////////////////////////////////////////////////////////////////////
    
    //    Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
function getExpensesMonth( expentionArray, addExpention ) {
    let sum = expentionArray.reduce((ac, el) => {
        return ac + el}, 0);
        console.log('Расходы на месяц : ', sum);
        console.log('Возможные расходы в виде массива ', addExpention);
    return sum;
}
//////////////////////////////////////////////////////////////////////////////////////////
// Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth( expentionValArray, expArray, incomeArray ) {
    let exp = getExpensesMonth( expentionValArray, expArray );
    let income = incomeArray.reduce((ac, el) => {
        return ac + el}, 0);
    return income - exp;
}
//////////////////////////////////////////////////////////////////////////////////////////////
// Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат
function getTargetMonth(accMonth) {
    let interval;
    interval = Math.ceil( mission / accMonth );
    return interval;
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
        /* Написать конструкцию условий (расчеты приведены в рублях)	
        Если budgetDay больше 1200, то “У вас высокий уровень дохода”
        Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”
        Если budgetDay меньше 600 и больше 0 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”
        Если отрицательное значение то вывести “Что то пошло не так”
        Учесть варианты 0, 600 и 1200 (к какому уровню не важно)
    */
    if ( budgetDay > 1200 ) {
        console.log('У вас высокий уровень дохода');
    } else if ( 600 < budgetDay && budgetDay <= 1200  ) {
        console.log('У вас средний уровень дохода');
    } else if ( 0 <= budgetDay && budgetDay <= 600  ) {
        console.log('К сожалению у вас уровень дохода ниже среднего');
    } else if ( budgetDay < 0  ) {
        console.log('Что то пошло не так');
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////
    // Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
    // money = Number( getUserData( 'Ваш месячный доход?', 2 ) );
    
    // Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую” сохранить в переменную addExpenses (пример: "Квартплата, проездной, кредит")
    addExpenses = getUserData( 'Перечислите возможные расходы за рассчитываемый период через запятую', 3 );
    
    // Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булево значение true/false)
    deposit = getUserData('Есть ли у вас депозит в банке?', 4);
    
    /*  Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 
        “Введите обязательную статью расходов?” (например expenses1, expenses2)
        “Во сколько это обойдется?” (например amount1, amount2)
        в итоге 4 вопроса и 4 разные переменных
    */
    
    expenses1 = getUserData('Введите обязательную статью расходов1?' , 5);
    expenses2 = getUserData('Введите обязательную статью расходов2?' , 5);
    amount1 = Number( getUserData('Во сколько это обойдется1?', 6) );
    amount2 = Number( getUserData('Во сколько это обойдется2?', 6) );

// Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
let dataIncome = Number( getUserData( 'Ваш месячный доход?', 2 ) );
accumulatedMonth = getAccumulatedMonth( [amount1, amount2], [expenses1, expenses2], [dataIncome] )
    
    // Вычислить бюджет на месяц, учитывая обязательные расходы, сохранить в новую переменную budgetMonth и вывести результат в консоль
    // budgetMonth = money - ( amount1 + amount2 );
    // console.log('Месячный бюджет ', budgetMonth);
    
    // Зная accumulateMonth budgetMonth, посчитать за сколько месяцев будет достигнута цель mission, вывести в консоль, округляя в большую сторону (методы объекта Math в помощь)
    //period = Math.ceil( mission / accumulatedMonth );
    period = getTargetMonth( accumulatedMonth );
    console.log(`Цель mission будет достигнута через ${period} месяцев`);
    
    // budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
    budgetDay = Math.floor( accumulatedMonth / 30 );
    console.log(budgetDay);
    
    showTypeOf();

    getStatusIncome();
    
    console.log( 'length of variable addExpenses = ', addExpenses.length );
    
    console.log( `Период равен (${period}) месяцев и Цель заработать(${mission}) рублей/долларов/гривен/юани` );
    
    console.log( addExpenses.toLowerCase().split(',') );
    
    console.log( budgetDay.toFixed(2) );
