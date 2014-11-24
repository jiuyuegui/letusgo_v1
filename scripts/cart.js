/**
 * Created by zyy on 14-11-21.
 */
$(document).ready(function(){
    var itemList = localStorage.getItem("itemlist");
    var amounts = JSON.parse(itemList).amount;
    var allItems = loadAllItems();
    var total = 0.0;
    for(var row in amounts) {
        var item = allItems[parseInt(row)];
        var listItems = $('<tr>\
                            <td>' + item.name + '</td>\
                            <td>' + item.price + '</td>\
                            <td>' + item.unit + '</td>\
                            <td>' + amounts[row] + '</td>\
                            <td>' + amounts[row]*item.price + '</td>\
                          </tr>');
        $('#cart').append(listItems);
        total += parseFloat(amounts[row]*item.price);
    }
    $('#sum').text(total + "(元)");

});