/*   Необходимо выполнить в отдельном JS файле, подключенному к отдельной HTML странице
    Переменная lang может принимать 2 значения: 'ru' 'en'.
    Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
        через if, 
        через switch-case 
        через многомерный массив без ифов и switch.
    У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Максим” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
	Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
    Запушить проект в репозиторий для усложненных заданий на GitHub    */

    let lang, flagLang, namePerson, flag = true;
    
    const collectionMap = new Map( [['monday', 'понедельник'], ['tuesday', 'вторник'], ['wednesday', 'среда'], ['thursday', 'четверг'], ['friday', 'пятница'], ['saturday', 'суббота'], ['sunday', 'воскресенье']] );
    
    console.log(collectionMap);
    console.log(Array.from(collectionMap.keys()));
    console.log(Array.from(collectionMap.values()));
    
    function getLang() {
        flagLang = confirm('Вы выбираете русский язык?');
        return flagLang ? 'ru' : 'en';
    }

    while( flag ) {

        lang = getLang();
        
        alert(lang);
        if( lang === 'ru' ) {
            alert( Array.from(collectionMap.values()) );
        } else if( lang ==='en' ) {
            alert( Array.from(collectionMap.keys()) );
        }

        alert('Попробуем те же операции, но через switch case');

        lang = getLang()
        switch( lang ) {
            case 'ru':
                alert(Array.from(collectionMap.values()));
            break;
            case 'en':
                alert(Array.from(collectionMap.keys()));
            break;
            default:
                alert( 'Язык не понял' );
        }

        alert('Попробуем те же операции, но через через многомерный массив без ифов и switch.');
        
        lang = getLang();
        // lang === 'ru' ? alert( multiRowsWeekDais[0] ) : alert( multiRowsWeekDais[1] );
        lang === 'ru' ? alert( Array.from(collectionMap.values()) )   :  alert( Array.from(collectionMap.keys()) );

        tempFlag = true;
        while( tempFlag ) {
            
            namePerson = prompt('Введите одно из имён: Артем, Максим, любое другое имя.');
            namePerson === 'Артем' ? console.log('директор') 
                                    : namePerson === 'Максим' 
                                    ? console.log('преподаватель') 
                                    : console.log('студент');
            tempFlag = confirm('Выбрать другое имя?');
        }

        flag = confirm('Хотите повторить выбор языка?');
        if( ! flag ) {
            alert('Пока.');
        }
    }