$(document).ready(function () {
    showCount();
    var feature = (function () {
        var initItems = function () {
            var items = loadAllItems();

            _(items).each(function (item , row) {
                var addCart = '<button>加入购物车</button>';
                var listItem = $('<tr id = "' + row + '">\
                            <td>' + item.name + '</td>\
                            <td>' + item.price + '</td>\
                            <td>' + item.unit + '</td>\
                            <td class="addCart">' + addCart + '</td>\
                          </tr>');
                $('#item-table').append(listItem);
            });
        };

        var printDate = function() {
            $("#pay-date").text(utils.getDate());
        };

        return {
            init: initItems,
            printDate: printDate
        };
    })();

    feature.init();
    feature.printDate();
});

function showCount() {
    var tempCount = localStorage.getItem("num") || 0;
    $("#count").text(tempCount);
    return 0;
}