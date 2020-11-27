    let flag = true;
    let money = 42000;

    let isNumber = (arg) => {
        return ! Number.isNaN(Number.parseFloat(arg)) && isFinite(arg)
    }

    let start = () => {
        // money = prompt('Ваш месячный доход.');
        // while ( Numberber.isNaN(money) || money.trim() === '' || money === null )
        // while ( Numberber.isNaN( Number.parseFloat(money) ) {
        do {

            money = Number(prompt('Ваш месячный доход.'));

        } while ( ! isNumber( money ) )
    };

start();
/////////////////////////////////////////////////////////
const appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function() {

        let sum = 0;

        for(let key in appData.expenses) {
            sum += appData.expenses[key];
        }
        
        this.expensesMonth = sum;
        return this.expensesMonth;
    },
    getBudget: function( expentions, incomes ) {
        this.budgetMonth = incomes - expentions;
        this.budgetDay = this.budgetMonth / 30;
        return this.budgetMonth;
    },
    getTargetMonth: function(accMonth) {
        return Math.ceil( appData.mission / accMonth );
    },
    getStatusIncome: function() {
        if ( this.budgetDay > 1200 ) {
            return 'У вас высокий уровень дохода';
        } else if ( 600 < this.budgetDay && this.budgetDay <= 1200  ) {
            return 'У вас средний уровень дохода';
        } else if ( 0 <= this.budgetDay && this.budgetDay <= 600  ) {
            return 'К сожалению у вас уровень дохода ниже среднего';
        } else if ( this.budgetDay < 0  ) {
            return 'Что то пошло не так';
        }
    },

    asking: function() {
        let addExpenses = getUserData( 'Перечислите возможные расходы за рассчитываемый период через запятую', 3 );
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = getUserData('Есть ли у вас депозит в банке?', 4);

        let sum = 0, temp;
        for (let i = 0; i < 2; i++) {
            temp = prompt('Введите обязательную статью расходов', 'Название статьи расхода - ');
            appData.expenses[temp] = null; 
    
            do {
                
                appData.expenses[temp] = +prompt('Во сколько это обой дется');
                isNumber( appData.expenses[temp] ) ? sum += appData.expenses[temp] : appData.expenses[temp] = null;
                
            } while( ! isNumber( appData.expenses[temp] ) );
        }
        return sum;
    }
}
////////////////////////////////////////////////////////////////////////////
appData.asking();

appData.getExpensesMonth();
console.log('Расходы за месяц', appData.expensesMonth);

appData.period = appData.getTargetMonth( appData.getBudget( appData.expensesMonth, appData.budget ) );
let resultPeriod = appData.period > 0 ? `Период достижения цели равен ${appData.period} месяцев. Цель заработать(${appData.mission}) рублей/долларов/гривен/юани` 
                                : `Цель заработать ${appData.mission} рублей/долларов/гривен/юани - не будет достигнута`;

appData.budgetDay = Math.floor( appData.getBudget( appData.expensesMonth, appData.budget ) / 30 );

console.log( appData.getStatusIncome() );
console.log( 'Месячный бюджет ', appData.getBudget( appData.expensesMonth, appData.budget ) );
console.log('Дневной бюджет ', appData.budgetDay.toFixed(2));
console.log( 'Длинна переменной addExpenses = ', appData.addExpenses.length );
console.log( `${resultPeriod}` );
console.log('///////////////////////////////////////////////////////////////////////////');
console.log("Наша программа включает в себя данные: ");
for(let key in appData) {
    console.log(`Ключ - ${key} <<<<>>>> Значение - ${appData[key]}`);
}