let bill = 0;
let people = 0;
let custom = 0;
let flag = false;
let custom_flag = false;
let people_flag = false;
let bill_flag = false;
let percent = 0;
//Data collection
$("#bill").keyup(function(e) {
    bill = $("#bill").val();
    bill_flag = check(bill, "b");
    resultTotal();
});
$("#people").keyup(function(e) {
    people = $("#people").val();
    people_flag = check(people, "p");
    resultTotal();
});
$(".custom").keyup(function(e) {
    custom = $(".custom").val()
    custom_flag = check(custom, "c");
    if (custom_flag === true) {
        percent = custom;
    };
    resultTotal();
});

$(".custom").click(function() {
    $(".tip_percent").removeClass("active");
});



//Percent by button
$(".tip_percent").click(function() {
    $(".tip_percent").removeClass("active");
    $(this).addClass("active");
    percent = this.id;
    custom_flag = true;
    resultTotal();
    $(".custom").val("");
});



// Check function
function check(valore, caso) {
    if (caso === "c") {
        var label = ".resp_percent";
        var input = ".custom";
    }
    if (caso === "p") {
        var label = ".resp_people";
        var input = "#people";
    }
    if (caso === "b") {
        var label = ".resp_bill";
        var input = "#bill";
    }

    if (valore === "") {
        $(label).text("");
        $(input).removeClass("error");
        flag = false;
    } else if ((valore != 0) && (isNaN(valore) != true)) {
        $(label).text("");
        $(input).removeClass("error");
        flag = true;
    } else {
        $(label).text("Can't be zero");
        $(input).addClass("error");
        flag = false;
    };
    return flag;
};


$(".reset").click(function() {
    $("#bill").val("");
    $(".custom").val("");
    $("#people").val("");
    $("#tip_amount").text("$0.00");
    $("#total_amount").text("$0.00");
    $(".tip_percent").removeClass("active");
    bill = 0;
    people = 0;
    custom = 0;
    custom_flag = false;
    people_flag = false;
    bill_flag = false;
    // location.reload();
});




function resultTotal() {
    console.log("percent " + percent);
    console.log("custom " + people);
    console.log("bill " + bill);
    if (percent != 0 && people != 0 && bill != 0) {
        let total = bill / people;
        let tip = total / 100 * percent;
        tip = tip.toFixed(2);
        total = total.toFixed(2);
        $("#total_amount").text("$" + total);
        console.log(tip);
        $("#tip_amount").text("$" + tip);
    };
};