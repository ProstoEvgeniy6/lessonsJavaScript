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
    const weekDaisRu = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'] ;
    const weekDaisEn = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const multiRowsWeekDais = [['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'], 
                            ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']];

    function getLang() {
        flagLang = confirm('Вы выбираете русский язык?');
        return flagLang ? 'ru' : 'en';
    }

    while( flag ) {

        lang = getLang();
        
        alert(lang);
        if( lang === 'ru' ) {
            alert( weekDaisRu );
        } else if( lang ==='en' ) {
            alert( weekDaisEn );
        }

        alert('Попробуем те же операции, но через switch case');

        lang = getLang()
        switch( lang ) {
            case 'ru':
                alert(weekDaisRu);
            break;
            case 'en':
                alert(weekDaisEn);
            break;
            default:
                alert( 'Язык не понял' );
        }

        alert('Попробуем те же операции, но через через многомерный массив без ифов и switch.');
        
        lang = getLang();
        lang === 'ru' ? alert( multiRowsWeekDais[0] ) : alert( multiRowsWeekDais[1] );

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