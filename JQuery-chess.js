function start() {

    if ($('#check').hasClass('_not-changed')) {

        for (dopClass = 1; dopClass < 65; dopClass++) {

            $('#add').append($('<div class="cell "></div>'));
            $('.cell').attr('id', '#cell');

            $("div").addClass(function (index, currentClass) {
                let addedClass;
                if (currentClass === "cell ") {
                    addedClass = 'cls' + dopClass;
                };
                return addedClass;
            });
        };
        $("#check").removeClass("_not-changed");
        $("#check").removeClass("_inactive");
        $("#exit").toggleClass("hidden");
        $("#exit").toggleClass("exit");
    } else {
        $("#check").toggleClass("_inactive");
        $("#exit").toggleClass("hidden");
        $("#exit").toggleClass("exit");
    };
};

$(document).ready(function main() {
    window.addEventListener("load", function () {
        start();


        // $('#btn-1').click(function clicked() {


        let avl = 1;
        let avl1 = 0;
        let i = 0;
        let delIndex;
        let reload = false;

        let randomNumber;               //рандомное число
        let randomClass;                //рандомное число + класс .cls          
        let arrayNumber;
        let arrayNumberDelete = 0;




        let arrayNumber2;
        let randomNumber2;

        let arrayNumber3;
        let randomNumber3;

        let arrayNumber4;
        let randomNumber4;

        let arrayNumber5;
        let randomNumber5;

        let arrayNumber6;
        let randomNumber6;

        let arrayNumber7;
        let randomNumber7;

        let arrayNumber8;
        let randomNumber8;

        let arrayNumber9;
        let randomNumber9;


        let empty = [];
        let empty2 = [];                                //индексы удаленных элементов в массиве
        let empty3 = [];
        let empty4 = [];
        let empty5 = [];
        let empty6 = [];
        let empty7 = [];
        let empty8 = [];



        let availableCellsArray = [];   //массив с доступными ячейками

        let deletedElemArray = [];
        let deletedElemArray2 = [];
        let deletedElemArray3 = [];
        let deletedElemArray4 = [];
        let deletedElemArray5 = [];
        let deletedElemArray6 = [];
        let deletedElemArray7 = [];
        let deletedElemArray8 = [];
        let deletedElemArray9 = [];

        while (i < 1) {

            i = i += 1;

            randomNumber = Math.ceil(Math.random() * 64);
            randomClass = ".cls" + randomNumber;

            if ($(randomClass).hasClass('_get-image')) {        //вставка ферзя при свободном состоянии ячейки
            } else {
                $(randomClass).append($('<img src="https://raw.githack.com/Maestro455/chess/92be3613a66b5451fb0bdb5c7c3a1a9c09258b0e/img/ferz.png" alt="">'));
                $(randomClass).addClass('_get-image');
            };
            while (avl <= 64) {                                 //заполнение массива для доступных ячеек
                availableCellsArray.push(avl++);
            };
            arrayNumber = randomNumber - 1;                     //arrayNumber - ключ для массива, randomNumber - рандомный номер класса !!!!!!!!!
            delete availableCellsArray[arrayNumber];            //удаление из массива занятой ячейки !!!!!!!!!!

            //-----------------------------------------------------------------------------------------------------------------------------

            function deleteAllCells(arrayNumberCounter = arrayNumber) {
                arrayNumber = arrayNumberCounter;
                if (arrayNumber < 56) {                             //удаление из массива ячеек вниз по вертикали
                    arrayNumberDelete = arrayNumber;
                    while (arrayNumberDelete < 65) {
                        arrayNumberDelete = arrayNumberDelete + 8;
                        delete availableCellsArray[arrayNumberDelete];
                    };
                };

                if (arrayNumber > 6) {                              //удаление из массива ячеек вверх по вертикали
                    arrayNumberDelete = arrayNumber;
                    while (arrayNumberDelete > 7) {
                        arrayNumberDelete = arrayNumberDelete - 8;
                        delete availableCellsArray[arrayNumberDelete];
                    };
                };


                //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                // ПРАВАЯ СТОРОНА !

                if (arrayNumber <= 6 & arrayNumber >= 0) {
                    arrayNumberDelete = arrayNumber;
                    while (arrayNumberDelete < 7) {
                        arrayNumberDelete = arrayNumberDelete + 1;
                        delete availableCellsArray[arrayNumberDelete];
                    };
                };

                if (arrayNumber <= 14 & arrayNumber >= 8) {
                    arrayNumberDelete = arrayNumber;
                    while (arrayNumberDelete < 15) {
                        arrayNumberDelete = arrayNumberDelete + 1;
                        delete availableCellsArray[arrayNumberDelete];
                    };
                };

                if (arrayNumber <= 22 & arrayNumber >= 16) {
                    arrayNumberDelete = arrayNumber;
                    while (arrayNumberDelete < 23) {
                        arrayNumberDelete = arrayNumberDelete + 1;
                        delete availableCellsArray[arrayNumberDelete];
                    };
                };

                if (arrayNumber <= 30 & arrayNumber >= 24) {
                    arrayNumberDelete = arrayNumber;
                    while (arrayNumberDelete < 31) {
                        arrayNumberDelete = arrayNumberDelete + 1;
                        delete availableCellsArray[arrayNumberDelete];
                    };
                };

                if (arrayNumber <= 38 & arrayNumber >= 32) {
                    arrayNumberDelete = arrayNumber;
                    while (arrayNumberDelete < 39) {
                        arrayNumberDelete = arrayNumberDelete + 1;
                        delete availableCellsArray[arrayNumberDelete];
                    };
                };

                if (arrayNumber <= 46 & arrayNumber >= 40) {
                    arrayNumberDelete = arrayNumber;
                    while (arrayNumberDelete < 47) {
                        arrayNumberDelete = arrayNumberDelete + 1;
                        delete availableCellsArray[arrayNumberDelete];
                    };
                };

                if (arrayNumber <= 54 & arrayNumber >= 48) {
                    arrayNumberDelete = arrayNumber;
                    while (arrayNumberDelete < 55) {
                        arrayNumberDelete = arrayNumberDelete + 1;
                        delete availableCellsArray[arrayNumberDelete];
                    };
                };

                if (arrayNumber <= 62 & arrayNumber >= 56) {
                    arrayNumberDelete = arrayNumber;
                    while (arrayNumberDelete < 63) {
                        arrayNumberDelete = arrayNumberDelete + 1;
                        delete availableCellsArray[arrayNumberDelete];
                    };
                };


                // ПРАВАЯ СТОРОНА !
                //--------------------------------------------------------------------------------------------------------------------------------------------
                //ЛЕВАЯ СТОРОНА !!!


                if (arrayNumber >= 1 & arrayNumber <= 7) {
                    arrayNumberDelete = arrayNumber;
                    while (arrayNumberDelete > 0) {
                        arrayNumberDelete = arrayNumberDelete - 1;
                        delete availableCellsArray[arrayNumberDelete];
                    };
                };

                if (arrayNumber >= 9 & arrayNumber <= 15) {
                    arrayNumberDelete = arrayNumber;
                    while (arrayNumberDelete > 8) {
                        arrayNumberDelete = arrayNumberDelete - 1;
                        delete availableCellsArray[arrayNumberDelete];
                    };
                };

                if (arrayNumber >= 17 & arrayNumber <= 23) {
                    arrayNumberDelete = arrayNumber;
                    while (arrayNumberDelete > 16) {
                        arrayNumberDelete = arrayNumberDelete - 1;
                        delete availableCellsArray[arrayNumberDelete];
                    };
                };

                if (arrayNumber >= 25 & arrayNumber <= 31) {
                    arrayNumberDelete = arrayNumber;
                    while (arrayNumberDelete > 24) {
                        arrayNumberDelete = arrayNumberDelete - 1;
                        delete availableCellsArray[arrayNumberDelete];
                    };
                };

                if (arrayNumber >= 33 & arrayNumber <= 39) {
                    arrayNumberDelete = arrayNumber;
                    while (arrayNumberDelete > 32) {
                        arrayNumberDelete = arrayNumberDelete - 1;
                        delete availableCellsArray[arrayNumberDelete];
                    };
                };

                if (arrayNumber >= 41 & arrayNumber <= 47) {
                    arrayNumberDelete = arrayNumber;
                    while (arrayNumberDelete > 40) {
                        arrayNumberDelete = arrayNumberDelete - 1;
                        delete availableCellsArray[arrayNumberDelete];
                    };
                };

                if (arrayNumber >= 49 & arrayNumber <= 55) {
                    arrayNumberDelete = arrayNumber;
                    while (arrayNumberDelete > 48) {
                        arrayNumberDelete = arrayNumberDelete - 1;
                        delete availableCellsArray[arrayNumberDelete];
                    };
                };

                if (arrayNumber >= 57 & arrayNumber <= 63) {
                    arrayNumberDelete = arrayNumber;
                    while (arrayNumberDelete > 56) {
                        arrayNumberDelete = arrayNumberDelete - 1;
                        delete availableCellsArray[arrayNumberDelete];
                    };
                };

                //--------------------------------------------------------------------------------------------------------------

                if (arrayNumber > 8 & arrayNumber <= 63) {      //ЛЕВАЯ-ВЕРХНЯЯ ДИАГОНАЛЬ !!!
                    arrayNumberDelete = arrayNumber;
                    while (arrayNumberDelete > 0 & arrayNumberDelete != 8 & arrayNumberDelete != 16 & arrayNumberDelete != 24 &
                        arrayNumberDelete != 32 & arrayNumberDelete != 40 & arrayNumberDelete != 48 & arrayNumberDelete != 56 & arrayNumberDelete > 0) {
                        arrayNumberDelete = arrayNumberDelete - 9;
                        delete availableCellsArray[arrayNumberDelete];
                    };


                };

                if (arrayNumber >= 0 & arrayNumber <= 55) {     //ЛЕВАЯ-НИЖНЯЯ ДИАГОНАЛЬ !!!
                    arrayNumberDelete = arrayNumber;
                    while (arrayNumberDelete != 7 & arrayNumberDelete != 15 & arrayNumberDelete != 23 &
                        arrayNumberDelete != 31 & arrayNumberDelete != 39 & arrayNumberDelete != 47 & arrayNumberDelete != 55 & arrayNumberDelete < 63) {
                        arrayNumberDelete = arrayNumberDelete + 9;
                        delete availableCellsArray[arrayNumberDelete];
                    };


                };

                if (arrayNumber >= 0 & arrayNumber <= 64) {     //ПРАВАЯ-ВЕРХНЯЯ ДИАГОНАЛЬ !!!
                    arrayNumberDelete = arrayNumber;
                    while (arrayNumberDelete != 7 & arrayNumberDelete != 15 & arrayNumberDelete != 23 &
                        arrayNumberDelete != 31 & arrayNumberDelete != 39 & arrayNumberDelete != 47 & arrayNumberDelete != 55 & arrayNumberDelete != 63 & arrayNumberDelete > 0) {
                        arrayNumberDelete = arrayNumberDelete - 7;
                        delete availableCellsArray[arrayNumberDelete];
                    };

                };

                //===========================================================================================================================================

                if (arrayNumber >= 0 & arrayNumber <= 55) {     //ПРАВАЯ-НИЖНЯЯ ДИАГОНАЛЬ !!!
                    arrayNumberDelete = arrayNumber;
                    while (arrayNumberDelete > 0 & arrayNumberDelete != 8 & arrayNumberDelete != 16 & arrayNumberDelete != 24 &
                        arrayNumberDelete != 32 & arrayNumberDelete != 40 & arrayNumberDelete != 48 & arrayNumberDelete != 56 & arrayNumberDelete < 63) {
                        arrayNumberDelete = arrayNumberDelete + 7;
                        delete availableCellsArray[arrayNumberDelete];
                    };


                };

            };

            deleteAllCells();

            function searchDeleteCells() {
                // тема, которая находит и записывает в empty ключи удаленных объектов в массиве availableCellsArray

                availableCellsArray.forEach((_, i) => deletedElemArray.push(i));
                empty = Array.from({ length: availableCellsArray.length }, (_, i) => i) //здесь КЛЮЧИ, А НЕ НОМЕРА КЛАССОВ
                    .filter(i => !deletedElemArray.includes(i));    // empty == [ 1, 3, 5 ]
            };


            function addKrest(emptyNew = empty) {
                empty = emptyNew;
                for (i = 0; i < empty.length; i += 1) {
                    let delSum = 1 + empty[i];
                    delIndex = '.cls' + delSum;
                    if (delSum != randomNumber && delSum != randomNumber2 & delSum != randomNumber3 & delSum != randomNumber4
                        & delSum != randomNumber5 & delSum != randomNumber6 & delSum != randomNumber7 & delSum != randomNumber8 & delSum != randomNumber9) {
                        $(delIndex).append($('<img src="https://raw.githack.com/Maestro455/chess/92be3613a66b5451fb0bdb5c7c3a1a9c09258b0e/img/krest.png" class="krest" alt="">'));
                        $(delIndex).addClass('_get-image');
                    };
                };
            };


            //--------------------------------ВТОРОЙ-ФЕРЗЬ------------------------------------------------------------------------------------------
            function putAnotherFerz() {
                let available = [];
                while (avl1 < 64) {                                 //заполнение массива для доступных ячеек
                    available.push(avl1++);
                };
                let resultCellsArray = available.filter(e => !~empty.indexOf(e)); //КЛЮЧИ от свободных классов 
                let randomKeyResultArray = Math.floor(Math.random() * resultCellsArray.length); //тут получаем рандомный КЛЮЧ
                if (randomKeyResultArray < resultCellsArray.length) {
                    var randomKeyResultClass = randomKeyResultClass = '.cls' + (resultCellsArray[randomKeyResultArray] + 1); //тут создаем из КЛЮЧА КЛАСС, ТК ПРИБАВИЛИ 1
                } else {
                    randomKeyResultArray = Math.floor(Math.random() * resultCellsArray.length); //тут получаем рандомный КЛЮЧ
                };

                console.log(available);
                console.log(empty);
                console.log(resultCellsArray);
                console.log(randomKeyResultArray);
                console.log(randomKeyResultClass);
                console.log(resultCellsArray[randomKeyResultArray]);
                console.log('сверху второй ферзь');
                //--------------------------------------------------------------------------------------------------------------------------------------------------------
                randomNumber2 = (resultCellsArray[randomKeyResultArray] + 1); //здесь получаем randomNumber, но для след ферзя
                arrayNumber2 = (resultCellsArray[randomKeyResultArray]); //здесь получаем arrayNumber, но для след ферзя
                delete availableCellsArray[arrayNumber2];


                //--------------------------------------------------------------------------------------------------------------------------------------------------------

                if ($(randomKeyResultClass).hasClass('_get-image')) {

                } else {
                    $(randomKeyResultClass).append($('<img src="https://raw.githack.com/Maestro455/chess/92be3613a66b5451fb0bdb5c7c3a1a9c09258b0e/img/ferz.png" alt="">'));
                    $(randomKeyResultClass).addClass('_get-image');
                    $(randomKeyResultClass).addClass('_counter2');
                };

            };


            deleteAllCells(); //параметр - arrayNumber, следующий массив empty2
            searchDeleteCells(); //параметр - следующий массив deletedElemArray2, новый массив empty2
            addKrest(); //параметр - новый массив empty2

            putAnotherFerz();
            // //параметр ^^^^ - новый массив empty2, следующая переменная randomNumber2, следующая переменная arrayNumber2

            deleteAllCells(arrayNumber2);


            function searchDeleteCells2() { //в empty2 КЛЮЧИ занятых классов от 2х ферзей
                availableCellsArray.forEach((_, i) => deletedElemArray2.push(i));
                empty2 = Array.from({ length: availableCellsArray.length }, (_, i) => i)
                    .filter(i => !deletedElemArray2.includes(i));
            };
            searchDeleteCells2();
            function addKrest2() {
                for (i = 0; i < empty2.length; i += 1) {
                    let delSum = 1 + empty2[i];
                    delIndex = '.cls' + delSum;
                    if (delSum != randomNumber && delSum != randomNumber2 & delSum != randomNumber3 & delSum != randomNumber4
                        & delSum != randomNumber5 & delSum != randomNumber6 & delSum != randomNumber7 & delSum != randomNumber8 & delSum != randomNumber9) {
                        if ($(delIndex).hasClass('_get-image')) {

                        } else {
                            $(delIndex).append($('<img src="https://raw.githack.com/Maestro455/chess/92be3613a66b5451fb0bdb5c7c3a1a9c09258b0e/img/krest.png" class="krest" alt="">'));
                            $(delIndex).addClass('_get-image');
                        }


                    };
                };
            };
            addKrest2();

            //--------------------------------ТРЕТИЙ-ФЕРЗЬ------------------------------------------------------------------------------------------

            function putAnotherFerz3() {
                let available = [];
                let m = 0;
                while (m < 64) {                                 //заполнение массива для доступных ячеек
                    available.push(m++);
                };
                let resultCellsArray = available.filter(e => !~empty2.indexOf(e)); //КЛЮЧИ от свободных классов 
                let randomKeyResultArray = Math.floor(Math.random() * resultCellsArray.length); //тут получаем рандомный КЛЮЧ
                if (randomKeyResultArray < resultCellsArray.length) {
                    var randomKeyResultClass = randomKeyResultClass = '.cls' + (resultCellsArray[randomKeyResultArray] + 1); //тут создаем из КЛЮЧА КЛАСС, ТК ПРИБАВИЛИ 1
                } else {
                    randomKeyResultArray = Math.floor(Math.random() * resultCellsArray.length); //тут получаем рандомный КЛЮЧ
                };

                console.log(available);
                console.log(empty2);
                console.log(resultCellsArray);
                console.log(randomKeyResultArray);
                console.log(randomKeyResultClass);
                console.log(resultCellsArray[randomKeyResultArray]);
                console.log('сверху 3 ферзь');
                //--------------------------------------------------------------------------------------------------------------------------------------------------------
                randomNumber3 = (resultCellsArray[randomKeyResultArray] + 1); //здесь получаем randomNumber, но для след ферзя
                arrayNumber3 = (resultCellsArray[randomKeyResultArray]); //здесь получаем arrayNumber, но для след ферзя
                delete availableCellsArray[arrayNumber3];
                //--------------------------------------------------------------------------------------------------------------------------------------------------------

                if ($(randomKeyResultClass).hasClass('_get-image')) {

                } else {
                    $(randomKeyResultClass).append($('<img src="https://raw.githack.com/Maestro455/chess/92be3613a66b5451fb0bdb5c7c3a1a9c09258b0e/img/ferz.png" alt="">'));
                    $(randomKeyResultClass).addClass('_get-image');
                    $(randomKeyResultClass).addClass('_counter3');
                };

            };
            putAnotherFerz3();
            deleteAllCells(arrayNumber3);

            function searchDeleteCells3() { //в empty3 КЛЮЧИ занятых классов от 3х ферзей
                availableCellsArray.forEach((_, i) => deletedElemArray3.push(i));
                empty3 = Array.from({ length: availableCellsArray.length }, (_, i) => i)
                    .filter(i => !deletedElemArray3.includes(i));
            };
            searchDeleteCells3();

            function addKrest3() {
                for (i = 0; i < empty3.length; i += 1) {
                    let delSum = 1 + empty3[i];
                    delIndex = '.cls' + delSum;
                    if (delSum != randomNumber && delSum != randomNumber2 & delSum != randomNumber3 & delSum != randomNumber4
                        & delSum != randomNumber5 & delSum != randomNumber6 & delSum != randomNumber7 & delSum != randomNumber8 & delSum != randomNumber9) {
                        if ($(delIndex).hasClass('_get-image')) {

                        } else {
                            $(delIndex).append($('<img src="https://raw.githack.com/Maestro455/chess/92be3613a66b5451fb0bdb5c7c3a1a9c09258b0e/img/krest.png" class="krest" alt="">'));
                            $(delIndex).addClass('_get-image');
                        }


                    };
                };
            };
            addKrest3();
            //--------------------------------ЧЕТВЕРТЫЙ-ФЕРЗЬ------------------------------------------------------------------------------------------

            function putAnotherFerz4() {
                let available = [];
                let m = 0;
                while (m < 64) {                                 //заполнение массива для доступных ячеек
                    available.push(m++);
                };
                let resultCellsArray = available.filter(e => !~empty3.indexOf(e)); //КЛЮЧИ от свободных классов 
                let randomKeyResultArray = Math.floor(Math.random() * resultCellsArray.length); //тут получаем рандомный КЛЮЧ
                if (randomKeyResultArray < resultCellsArray.length) {
                    var randomKeyResultClass = randomKeyResultClass = '.cls' + (resultCellsArray[randomKeyResultArray] + 1); //тут создаем из КЛЮЧА КЛАСС, ТК ПРИБАВИЛИ 1
                } else {
                    randomKeyResultArray = Math.floor(Math.random() * resultCellsArray.length); //тут получаем рандомный КЛЮЧ
                }

                console.log(available);
                console.log(empty3);
                console.log(resultCellsArray);
                console.log(randomKeyResultArray);
                console.log(randomKeyResultClass);
                console.log(resultCellsArray[randomKeyResultArray]);
                console.log('сверху 4 ферзь');
                //--------------------------------------------------------------------------------------------------------------------------------------------------------
                randomNumber4 = (resultCellsArray[randomKeyResultArray] + 1); //здесь получаем randomNumber, но для след ферзя
                arrayNumber4 = (resultCellsArray[randomKeyResultArray]); //здесь получаем arrayNumber, но для след ферзя
                delete availableCellsArray[arrayNumber4];
                //--------------------------------------------------------------------------------------------------------------------------------------------------------

                if ($(randomKeyResultClass).hasClass('_get-image')) {

                } else {
                    $(randomKeyResultClass).append($('<img src="https://raw.githack.com/Maestro455/chess/92be3613a66b5451fb0bdb5c7c3a1a9c09258b0e/img/ferz.png" alt="">'));
                    $(randomKeyResultClass).addClass('_get-image');
                    $(randomKeyResultClass).addClass('_counter4');
                };

            };
            putAnotherFerz4();
            deleteAllCells(arrayNumber4);

            function searchDeleteCells4() { //в empty3 КЛЮЧИ занятых классов от 3х ферзей
                availableCellsArray.forEach((_, i) => deletedElemArray4.push(i));
                empty4 = Array.from({ length: availableCellsArray.length }, (_, i) => i)
                    .filter(i => !deletedElemArray4.includes(i));
            };
            searchDeleteCells4();

            function addKrest4() {
                for (i = 0; i < empty4.length; i += 1) {
                    let delSum = 1 + empty4[i];
                    delIndex = '.cls' + delSum;
                    if (delSum != randomNumber && delSum != randomNumber2 & delSum != randomNumber3 & delSum != randomNumber4
                        & delSum != randomNumber5 & delSum != randomNumber6 & delSum != randomNumber7 & delSum != randomNumber8 & delSum != randomNumber9) {
                        if ($(delIndex).hasClass('_get-image')) {

                        } else {
                            $(delIndex).append($('<img src="https://raw.githack.com/Maestro455/chess/92be3613a66b5451fb0bdb5c7c3a1a9c09258b0e/img/krest.png" class="krest" alt="">'));
                            $(delIndex).addClass('_get-image');
                        }


                    };
                };
            };
            addKrest4();
            //-------------------------------------------ПЯТЫЙ-ФЕРЗЬ---------------------------------------------------------------------------------

            function putAnotherFerz5() {
                let available = [];
                let m = 0;
                while (m < 64) {                                 //заполнение массива для доступных ячеек
                    available.push(m++);
                };
                let resultCellsArray = available.filter(e => !~empty4.indexOf(e)); //КЛЮЧИ от свободных классов 
                let randomKeyResultArray = Math.floor(Math.random() * resultCellsArray.length); //тут получаем рандомный КЛЮЧ
                if (randomKeyResultArray < resultCellsArray.length) {
                    var randomKeyResultClass = randomKeyResultClass = '.cls' + (resultCellsArray[randomKeyResultArray] + 1); //тут создаем из КЛЮЧА КЛАСС, ТК ПРИБАВИЛИ 1
                } else {
                    randomKeyResultArray = Math.floor(Math.random() * resultCellsArray.length); //тут получаем рандомный КЛЮЧ
                };

                console.log(available);
                console.log(empty);
                console.log(resultCellsArray);
                console.log(randomKeyResultArray);
                console.log(randomKeyResultClass);
                console.log(resultCellsArray[randomKeyResultArray]);
                console.log('сверху 5 ферзь');
                //--------------------------------------------------------------------------------------------------------------------------------------------------------
                randomNumber5 = (resultCellsArray[randomKeyResultArray] + 1); //здесь получаем randomNumber, но для след ферзя
                arrayNumber5 = (resultCellsArray[randomKeyResultArray]); //здесь получаем arrayNumber, но для след ферзя
                delete availableCellsArray[arrayNumber5];
                //--------------------------------------------------------------------------------------------------------------------------------------------------------
                console.log(arrayNumber5);
                if ($(randomKeyResultClass).hasClass('_get-image')) {

                } else {
                    $(randomKeyResultClass).append($('<img src="https://raw.githack.com/Maestro455/chess/92be3613a66b5451fb0bdb5c7c3a1a9c09258b0e/img/ferz.png" alt="">'));
                    $(randomKeyResultClass).addClass('_get-image');
                    $(randomKeyResultClass).addClass('_counter5');
                };
                if (resultCellsArray.length < 3) {
                    location.reload();
                }

            };
            putAnotherFerz5();
            deleteAllCells(arrayNumber5);

            function searchDeleteCells5() { //в empty3 КЛЮЧИ занятых классов от 3х ферзей
                availableCellsArray.forEach((_, i) => deletedElemArray5.push(i));
                empty5 = Array.from({ length: availableCellsArray.length }, (_, i) => i)
                    .filter(i => !deletedElemArray5.includes(i));
            };
            searchDeleteCells5();


            function addKrest5() {
                for (i = 0; i < empty5.length; i += 1) {
                    let delSum = 1 + empty5[i];
                    delIndex = '.cls' + delSum;
                    if (delSum != randomNumber && delSum != randomNumber2 & delSum != randomNumber3 & delSum != randomNumber4
                        & delSum != randomNumber5 & delSum != randomNumber6 & delSum != randomNumber7 & delSum != randomNumber8 & delSum != randomNumber9) {
                        if ($(delIndex).hasClass('_get-image')) {

                        } else {
                            $(delIndex).append($('<img src="https://raw.githack.com/Maestro455/chess/92be3613a66b5451fb0bdb5c7c3a1a9c09258b0e/img/krest.png" class="krest" alt="">'));
                            $(delIndex).addClass('_get-image');
                        }


                    };
                };
            };
            addKrest5();



            //----------------------------------------ШЕСТОЙ-ФЕРЗЬ--------------------------------------------------------------------------------


            function putAnotherFerz6() {
                let available = [];
                let m = 0;
                while (m < 64) {                                 //заполнение массива для доступных ячеек
                    available.push(m++);
                };
                let resultCellsArray = available.filter(e => !~empty5.indexOf(e)); //КЛЮЧИ от свободных классов 
                let randomKeyResultArray = Math.floor(Math.random() * (resultCellsArray.length)); //тут получаем рандомный КЛЮЧ
                if (randomKeyResultArray < resultCellsArray.length) {
                    var randomKeyResultClass = randomKeyResultClass = '.cls' + (resultCellsArray[randomKeyResultArray] + 1); //тут создаем из КЛЮЧА КЛАСС, ТК ПРИБАВИЛИ 1
                } else {
                    randomKeyResultArray = Math.floor(Math.random() * resultCellsArray.length); //тут получаем рандомный КЛЮЧ
                };

                console.log(available);
                console.log(empty5);
                console.log(resultCellsArray);
                console.log(randomKeyResultArray);
                console.log(randomKeyResultClass);
                console.log(resultCellsArray[randomKeyResultArray]);
                console.log('сверху 6 ферзь');
                //--------------------------------------------------------------------------------------------------------------------------------------------------------
                randomNumber6 = (resultCellsArray[randomKeyResultArray] + 1); //здесь получаем randomNumber, но для след ферзя
                arrayNumber6 = (resultCellsArray[randomKeyResultArray]); //здесь получаем arrayNumber, но для след ферзя
                delete availableCellsArray[arrayNumber6];
                //--------------------------------------------------------------------------------------------------------------------------------------------------------
                if ($(randomKeyResultClass).hasClass('_get-image')) {

                } else {
                    $(randomKeyResultClass).append($('<img src="https://raw.githack.com/Maestro455/chess/92be3613a66b5451fb0bdb5c7c3a1a9c09258b0e/img/ferz.png" alt="">'));
                    $(randomKeyResultClass).addClass('_get-image');
                    $(randomKeyResultClass).addClass('_counter6');
                };
                if (resultCellsArray.length < 3) {
                    location.reload();
                }

            };
            putAnotherFerz6();
            deleteAllCells(arrayNumber6);

            function searchDeleteCells6() { //в empty3 КЛЮЧИ занятых классов от 3х ферзей
                availableCellsArray.forEach((_, i) => deletedElemArray6.push(i));
                empty6 = Array.from({ length: availableCellsArray.length }, (_, i) => i)
                    .filter(i => !deletedElemArray6.includes(i));
            };
            searchDeleteCells6();

            function addKrest6() {
                for (i = 0; i < empty6.length; i += 1) {
                    let delSum = 1 + empty6[i];
                    delIndex = '.cls' + delSum;
                    if (delSum != randomNumber && delSum != randomNumber2 & delSum != randomNumber3 & delSum != randomNumber4
                        & delSum != randomNumber5 & delSum != randomNumber6 & delSum != randomNumber7 & delSum != randomNumber8 & delSum != randomNumber9) {
                        if ($(delIndex).hasClass('_get-image')) {

                        } else {
                            $(delIndex).append($('<img src="https://raw.githack.com/Maestro455/chess/92be3613a66b5451fb0bdb5c7c3a1a9c09258b0e/img/krest.png" class="krest" alt="">'));
                            $(delIndex).addClass('_get-image');
                        }


                    };
                };
            };
            addKrest6();
            //-----------------------------------СЕДЬМОЙ-ФЕРЗЬ-----------------------------------------------------------------------------

            function putAnotherFerz7() {
                let available = [];
                let m = 0;
                while (m < 64) {                                 //заполнение массива для доступных ячеек
                    available.push(m++);
                };
                let resultCellsArray = available.filter(e => !~empty6.indexOf(e)); //КЛЮЧИ от свободных классов 
                let randomKeyResultArray = Math.floor(Math.random() * (resultCellsArray.length)); //тут получаем рандомный КЛЮЧ
                if (randomKeyResultArray < resultCellsArray.length) {

                    var randomKeyResultClass = randomKeyResultClass = '.cls' + (resultCellsArray[randomKeyResultArray] + 1); //тут создаем из КЛЮЧА КЛАСС, ТК ПРИБАВИЛИ 1
                    console.log(randomKeyResultClass);
                } else {
                    randomKeyResultArray = Math.floor(Math.random() * resultCellsArray.length); //тут получаем рандомный КЛЮЧ
                };

                console.log(available);
                console.log(empty6);
                console.log(resultCellsArray);
                console.log(randomKeyResultArray);
                console.log(randomKeyResultClass);
                console.log(resultCellsArray[randomKeyResultArray]);
                console.log('сверху 7 ферзь');
                //--------------------------------------------------------------------------------------------------------------------------------------------------------
                randomNumber7 = (resultCellsArray[randomKeyResultArray] + 1); //здесь получаем randomNumber, но для след ферзя
                arrayNumber7 = (resultCellsArray[randomKeyResultArray]); //здесь получаем arrayNumber, но для след ферзя
                delete availableCellsArray[arrayNumber7];
                //--------------------------------------------------------------------------------------------------------------------------------------------------------
                if ($(randomKeyResultClass).hasClass('_get-image')) {

                } else {
                    $(randomKeyResultClass).append($('<img src="https://raw.githack.com/Maestro455/chess/92be3613a66b5451fb0bdb5c7c3a1a9c09258b0e/img/ferz.png" alt="">'));
                    $(randomKeyResultClass).addClass('_get-image');
                    $(randomKeyResultClass).addClass('_counter7');
                };
                if (resultCellsArray.length < 2) {
                    location.reload();
                }

            };
            putAnotherFerz7();
            deleteAllCells(arrayNumber7);

            function searchDeleteCells7() { //в empty3 КЛЮЧИ занятых классов от 3х ферзей
                availableCellsArray.forEach((_, i) => deletedElemArray7.push(i));
                empty7 = Array.from({ length: availableCellsArray.length }, (_, i) => i)
                    .filter(i => !deletedElemArray7.includes(i));
            };
            searchDeleteCells7();


            function addKrest7() {
                for (i = 0; i < empty7.length; i += 1) {
                    let delSum = 1 + empty7[i];
                    delIndex = '.cls' + delSum;
                    if (delSum != randomNumber && delSum != randomNumber2 & delSum != randomNumber3 & delSum != randomNumber4
                        & delSum != randomNumber5 & delSum != randomNumber6 & delSum != randomNumber7 & delSum != randomNumber8 & delSum != randomNumber9) {
                        if ($(delIndex).hasClass('_get-image')) {

                        } else {
                            $(delIndex).append($('<img src="https://raw.githack.com/Maestro455/chess/92be3613a66b5451fb0bdb5c7c3a1a9c09258b0e/img/krest.png" class="krest" alt="">'));
                            $(delIndex).addClass('_get-image');
                        }


                    };
                };
            };
            addKrest7();
            //------------------------------------------ВОСЬМОЙ-ФЕРЗЬ-------------------------------------------------------------------------------------------

            function putAnotherFerz8() {
                let available = [];
                let m = 0;
                while (m < 64) {                                 //заполнение массива для доступных ячеек
                    available.push(m++);
                };
                let resultCellsArray = available.filter(e => !~empty7.indexOf(e)); //КЛЮЧИ от свободных классов 
                let randomKeyResultArray = Math.floor(Math.random() * (resultCellsArray.length)); //тут получаем рандомный КЛЮЧ
                var randomKeyResultClass = randomKeyResultClass = '.cls' + (resultCellsArray[randomKeyResultArray] + 1); //тут создаем из КЛЮЧА КЛАСС, ТК ПРИБАВИЛИ 1
                console.log(randomKeyResultClass);

                randomKeyResultArray = Math.floor(Math.random() * resultCellsArray.length); //тут получаем рандомный КЛЮЧ


                console.log(available);
                console.log(empty7);
                console.log(resultCellsArray);
                console.log(randomKeyResultArray);
                console.log(randomKeyResultClass);
                console.log(resultCellsArray[randomKeyResultArray]);
                console.log('сверху 8 ферзь');
                //--------------------------------------------------------------------------------------------------------------------------------------------------------
                randomNumber8 = (resultCellsArray[randomKeyResultArray] + 1); //здесь получаем randomNumber, но для след ферзя
                arrayNumber8 = (resultCellsArray[randomKeyResultArray]); //здесь получаем arrayNumber, но для след ферзя
                delete availableCellsArray[arrayNumber8];
                //--------------------------------------------------------------------------------------------------------------------------------------------------------
                if ($(randomKeyResultClass).hasClass('_get-image')) {

                } else {
                    $(randomKeyResultClass).append($('<img src="https://raw.githack.com/Maestro455/chess/92be3613a66b5451fb0bdb5c7c3a1a9c09258b0e/img/ferz.png" alt="">'));
                    $(randomKeyResultClass).addClass('_get-image');
                    $(randomKeyResultClass).addClass('_counter7');
                };
                if (resultCellsArray.length != 1) {
                    location.reload();
                };
            };
            putAnotherFerz8();
            deleteAllCells(arrayNumber8);

            function searchDeleteCells8() { //в empty3 КЛЮЧИ занятых классов от 3х ферзей
                availableCellsArray.forEach((_, i) => deletedElemArray8.push(i));
                empty8 = Array.from({ length: availableCellsArray.length }, (_, i) => i)
                    .filter(i => !deletedElemArray8.includes(i));
            };
            searchDeleteCells8();

            function addKrest8() {
                for (i = 0; i < empty8.length; i += 1) {
                    let delSum = 1 + empty8[i];
                    delIndex = '.cls' + delSum;
                    if (delSum != randomNumber && delSum != randomNumber2 & delSum != randomNumber3 & delSum != randomNumber4
                        & delSum != randomNumber5 & delSum != randomNumber6 & delSum != randomNumber7 & delSum != randomNumber8 & delSum != randomNumber9) {
                        if ($(delIndex).hasClass('_get-image')) {

                        } else {
                            $(delIndex).append($('<img src="https://raw.githack.com/Maestro455/chess/92be3613a66b5451fb0bdb5c7c3a1a9c09258b0e/img/krest.png" class="krest" alt="">'));
                            $(delIndex).addClass('_get-image');
                        }


                    };
                };
            };
            addKrest8();




        };

    });
});















function start() {

    if ($('#check').hasClass('_not-changed')) {

        for (dopClass = 1; dopClass < 65; dopClass++) {

            $('#add').append($('<div class="cell "></div>'));
            $('.cell').attr('id', '#cell');

            $("div").addClass(function (index, currentClass) {
                let addedClass;
                if (currentClass === "cell ") {
                    addedClass = 'cls' + dopClass;
                };
                return addedClass;
            });
        };
        $("#check").removeClass("_not-changed");
        $("#check").removeClass("_inactive");
        $("#exit").toggleClass("hidden");
        $("#exit").toggleClass("exit");
    } else {
        $("#check").toggleClass("_inactive");
        $("#exit").toggleClass("hidden");
        $("#exit").toggleClass("exit");
    };
};

$(document).ready(function () {
    $('#btn-2').click(function () {
        $('img').remove();
        $('.cell').removeClass('_get-image');
    });
});


$(document).ready(function () {
    $('#btn-4').click(function () {
        location.reload();
        start();
    });
});



window.addEventListener("load", function () {
    start();
});




// function takeAvailableCellsAndAddSecondFerz() {
//     // const available = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
//     // const empty = ['b', 'd', 'f'];

//     let resultCellsArray = available.filter(el => !empty.includes(el)); //тут собираем индексы свободных ячеек

//     // результат ['a', 'c', 'e', 'g'] // resultCellsArray содержит все свободные элементы
//     // Получаем случайный ключ массива

//     let randomKeyResultArray = Math.ceil(Math.random() * resultCellsArray.length); //тут получаем рандомный индекс
//     // randomArrayKey = randomKeyResultArray - 1;
//     let randomKeyResultClass = '.cls' + (resultCellsArray[randomKeyResultArray] + 1); //тут получаем рандомный класс + индекс+1

//     //--------------------------------------------------------------------------------------------------------------------------------------------------------
//     randomNumber2 = (resultCellsArray[randomKeyResultArray] + 1); //здесь получаем randomNumber, но для второго ферзя
//     arrayNumber2 = (resultCellsArray[randomKeyResultArray] + 1) - 1; //здесь получаем arrayNumber, но для второго ферзя
//     //--------------------------------------------------------------------------------------------------------------------------------------------------------

//     $(randomKeyResultClass).append($('<img src="/img/true_ferz.png" alt="">'));
//     $(randomKeyResultClass).addClass('_get-image');

// };