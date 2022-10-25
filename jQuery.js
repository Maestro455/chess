let checkStatus;
let dopClass;


$(document).ready(function () {
    $('#btn').click(function () {

        if ($('#check').hasClass('_not-changed')) {

            for (dopClass = 1; dopClass < 65; dopClass++) {

                $('#add').append($('<div class="cell "></div>'));

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
        } else {
            $("#check").toggleClass("_inactive");
        };
    });
});



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