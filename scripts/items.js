/**
 * Created by zyy on 14-11-24.
 */
$(document).ready(function(){
    var itemsList = {};
    if(!localStorage.getItem("itemlist")) {
        itemsList.amount = {};
    } else {
        itemsList = JSON.parse(localStorage.getItem("itemlist"));
    }
    $('.addCart').click(function(){
        storeGoods($(this),itemsList)
        var countAdd = $('#count').text();
        countAdd++;
        localStorage.setItem("num",countAdd);
        showCount();
    });

    function storeGoods(present,obj) {
        var row = present.parent()[0].id;
        var list = obj.amount;
        if(list[row] == undefined) {
            list[row] = 1;
        } else {
            list[row]++;
        }
        localStorage.setItem("itemlist",JSON.stringify(obj));
    }
});
