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
const getExpensesMonth = ( expention1, expention2 ) => {
    let sum = expenses1 + expenses2;
        console.log('Расходы на месяц : ', sum);
        console.log('Возможные расходы в виде массива ', );
    return sum;
}
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

    money = Number( getUserData( 'Ваш месячный доход?', 2 ) );

    addExpenses = getUserData( 'Перечислите возможные расходы за рассчитываемый период через запятую', 3 );
    
    deposit = getUserData('Есть ли у вас депозит в банке?', 4);
    
    expenses1 = getUserData('Введите обязательную статью расходов1?' , 5);
    expenses2 = getUserData('Введите обязательную статью расходов2?' , 5);
    amount1 = Number( getUserData('Во сколько это обойдется1?', 6) );
    amount2 = Number( getUserData('Во сколько это обойдется2?', 6) );

    accumulatedMonth = getAccumulatedMonth( amount1 + amount2, money )

    period = getTargetMonth( accumulatedMonth );

    budgetDay = Math.floor( accumulatedMonth / 30 );

    showTypeOf();

    console.log( getStatusIncome() );
    console.log('Дневной бюджет ', budgetDay);
    console.log( 'Длинна переменной addExpenses = ', addExpenses.length );
    console.log( `Период равен (${period}) месяцев и Цель заработать(${mission}) рублей/долларов/гривен/юани` );
    console.log( addExpenses.toLowerCase().split(',') );
    console.log( budgetDay.toFixed(2) );
