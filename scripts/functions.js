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