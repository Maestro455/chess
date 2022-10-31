let checkStatus;
let dopClass;


$(document).ready(function () {
    $('#btn').click(function start() {

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
    });
});

$(document).ready(function () {
    $('#exit').click(function () {
        $("#check").toggleClass("_inactive");
        $("#exit").toggleClass("hidden");
        $("#exit").toggleClass("exit");
    });
});



// $(document).ready(function () {
//     $('#btn').click(function () {
//         if ($('.cell').hasClass('_get-image')) {

//         } else {
//             $('.cls45').append($('<img src="/img/true_ferz.png" alt="">'));
//             $(".cls45").addClass('_get-image');
//         }

//     });
// });























// $(document).ready(function () {
//     $('#btn').click(function () {
//         if ($("#add").has("div")) {
//             alert(123);
//         } else {
//             alert(123);
//         }
// });




// if (checkStatus = false) {
//     checkStatus = true;
//     for (i < 64; i + 1;) {
//     };
//     };
//     alert(checkStatus);