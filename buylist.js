var LIST = $('.products');
var LEFT = $('.toBuy');
var BOUGHT = $('.bought');
var ITEM = $('#item').html();
var ITEM2 = $('#item2').html();

$('.add').click(function () {
    add();
});

document.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        add();
    }
});

function add() {
    var node = $(ITEM);
    var item = $(ITEM2);
    var item2 = $(ITEM2);
    var text = document.getElementsByTagName("input")[0];
    var title = text.value;


    var product = node.find(".product");
    var num = node.find(".num");
    var minus = node.find('.minus');
    var plus = node.find('.plus');
    var notBought = node.find('.notBought');
    var buy = node.find('.Buy');
    var x = node.find('.x');


    if (title != "") {
        product.text(title);
        LIST.append(node);
        item.find(".pr").text(title);
        item2.find(".pr").text(title);
        LEFT.append(item);
        BOUGHT.append(item2);
        item2.css("display", "none");
        text.value = "";
        text.focus();
    }

    x.click(function () {
        node.remove();
        item.remove();
        item2.remove();
    });

    if (parseInt(num.text(), 10) === 1) {
        var ability = true;
        minus.attr('disabled', true);
        minus.css("opacity", "0.7");
    }

    plus.click(function () {
        if (ability == true) {
            minus.attr('disabled', false);
            ability = false;
            minus.css("opacity", "1");
        }
        var a = num.text();
        var n = parseInt(a, 10) + 1;
        num.text(n);
        signs(item, item2, n)
    });

    minus.click(function () {
        var a = num.text();
        var n = parseInt(a, 10) - 1;
        num.text(n);
        if (parseInt(num.text(), 10) === 1) {
            minus.attr('disabled', true);
            ability = true;
            minus.css("opacity", "0.7");
        }
    });

    node.find('.Buy').click(function () {
        leftbought("line-through", "block", "none", "hidden");
        notBought.css("width", "100%");
    });

    notBought.click(function () {
        leftbought("none", "none", "block", "visible");
    });

    function leftbought(text, none, display, visibility) {
        product.css("text-decoration", text);
        item2.find(".pr").css("text-decoration", text);
        item.css("display", display);
        item2.css("display", none);
        plus.css("visibility", visibility);
        minus.css("visibility", visibility);
        notBought.css("display", none);
        buy.css("display", display);
        x.css("display", display);
    };
};

function signs(item1, item2, n) {
    item1.find(".circle").text(n);
    item2.find(".circle").text(n);
};



