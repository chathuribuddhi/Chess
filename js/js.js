/**
 * Created by CHATHURI on 2017-02-06.
 */

/* Event fired on the drag target */
document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("demo").innerHTML = "Started to drag the p element.";
});

/* Events fired on the drop target */
document.addEventListener("dragover", function(event) {
    event.preventDefault();
});

document.addEventListener("drop", function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "The p element was dropped";
});



// White Rook 1
$(document).ready(function () {

    $("#dragtarget").mouseenter(function () {
        if (($("#dragtarget").parent().attr("id") == "th") || ($("#dragtarget").parent().attr("id") == "th1") || ($("#dragtarget").parent().attr("id") == "th2") || ($("#dragtarget").parent().attr("id") == "th3") || ($("#dragtarget").parent().attr("id") == "th4") || ($("#dragtarget").parent().attr("id") == "th5") || ($("#dragtarget").parent().attr("id") == "th6") || ($("#dragtarget").parent().attr("id") == "th7"))
        {$("#th,#th1,#th2,#th3,#th4,#th5,#th6,#th7").css("background-color", "green")}

        if (($("#dragtarget").parent().attr("id") == "th8") || ($("#dragtarget").parent().attr("id") == "th9") || ($("#dragtarget").parent().attr("id") == "th10") || ($("#dragtarget").parent().attr("id") == "th11") || ($("#dragtarget").parent().attr("id") == "th12") || ($("#dragtarget").parent().attr("id") == "th13") || ($("#dragtarget").parent().attr("id") == "th14") || ($("#dragtarget").parent().attr("id") == "th15") )
        {$("#th8,#th9,#th10,#th11,#th12,#th13,#th14,#th15").css("background-color", "green")}

        if (($("#dragtarget").parent().attr("id") == "th16") || ($("#dragtarget").parent().attr("id") == "th17") || ($("#dragtarget").parent().attr("id") == "th18") || ($("#dragtarget").parent().attr("id") == "th19") || ($("#dragtarget").parent().attr("id") == "th20") || ($("#dragtarget").parent().attr("id") == "th21") || ($("#dragtarget").parent().attr("id") == "th22") || ($("#dragtarget").parent().attr("id") == "th23") )
        {$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23").css("background-color", "green")}

        if (($("#dragtarget").parent().attr("id") == "th24") || ($("#dragtarget").parent().attr("id") == "th25") || ($("#dragtarget").parent().attr("id") == "th26") || ($("#dragtarget").parent().attr("id") == "th27") || ($("#dragtarget").parent().attr("id") == "th28") || ($("#dragtarget").parent().attr("id") == "th29") || ($("#dragtarget").parent().attr("id") == "th30") || ($("#dragtarget").parent().attr("id") == "th31") )
        {$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31").css("background-color", "green")}

        if (($("#dragtarget").parent().attr("id") == "th32") || ($("#dragtarget").parent().attr("id") == "th33") || ($("#dragtarget").parent().attr("id") == "th34") || ($("#dragtarget").parent().attr("id") == "th35") || ($("#dragtarget").parent().attr("id") == "th36") || ($("#dragtarget").parent().attr("id") == "th37") || ($("#dragtarget").parent().attr("id") == "th38") || ($("#dragtarget").parent().attr("id") == "th39") )
        {$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39").css("background-color", "green")}

        if (($("#dragtarget").parent().attr("id") == "th40") || ($("#dragtarget").parent().attr("id") == "th41") || ($("#dragtarget").parent().attr("id") == "th42") || ($("#dragtarget").parent().attr("id") == "th43") || ($("#dragtarget").parent().attr("id") == "th44") || ($("#dragtarget").parent().attr("id") == "th45") || ($("#dragtarget").parent().attr("id") == "th46") || ($("#dragtarget").parent().attr("id") == "th47") )
        {$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47").css("background-color", "green")}

        if (($("#dragtarget").parent().attr("id") == "th48") || ($("#dragtarget").parent().attr("id") == "th49") || ($("#dragtarget").parent().attr("id") == "th50") || ($("#dragtarget").parent().attr("id") == "th51") || ($("#dragtarget").parent().attr("id") == "th52") || ($("#dragtarget").parent().attr("id") == "th53") || ($("#dragtarget").parent().attr("id") == "th54") || ($("#dragtarget").parent().attr("id") == "th55") )
        {$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55").css("background-color", "green")}

        if (($("#dragtarget").parent().attr("id") == "th56") || ($("#dragtarget").parent().attr("id") == "th57") || ($("#dragtarget").parent().attr("id") == "th58") || ($("#dragtarget").parent().attr("id") == "th59") || ($("#dragtarget").parent().attr("id") == "th60") || ($("#dragtarget").parent().attr("id") == "th61") || ($("#dragtarget").parent().attr("id") == "th62") || ($("#dragtarget").parent().attr("id") == "th63") )
        {$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63").css("background-color", "green")}

        if (($("#dragtarget").parent().attr("id") == "th") || ($("#dragtarget").parent().attr("id") == "th8") || ($("#dragtarget").parent().attr("id") == "th16") || ($("#dragtarget").parent().attr("id") == "th24") || ($("#dragtarget").parent().attr("id") == "th32") || ($("#dragtarget").parent().attr("id") == "th40") || ($("#dragtarget").parent().attr("id") == "th48") || ($("#dragtarget").parent().attr("id") == "th56") )
        {$("#th,#th8,#th16,#th24,#th32,#th40,#th48,#th56").css("background-color", "green")}

        if (($("#dragtarget").parent().attr("id") == "th1") || ($("#dragtarget").parent().attr("id") == "th9") || ($("#dragtarget").parent().attr("id") == "th17") || ($("#dragtarget").parent().attr("id") == "th25") || ($("#dragtarget").parent().attr("id") == "th33") || ($("#dragtarget").parent().attr("id") == "th41") || ($("#dragtarget").parent().attr("id") == "th49") || ($("#dragtarget").parent().attr("id") == "th57") )
        {$("#th1,#th9,#th17,#th25,#th33,#th41,#th49,#th57").css("background-color", "green")}

        if (($("#dragtarget").parent().attr("id") == "th2") || ($("#dragtarget").parent().attr("id") == "th10") || ($("#dragtarget").parent().attr("id") == "th18") || ($("#dragtarget").parent().attr("id") == "th26") || ($("#dragtarget").parent().attr("id") == "th34") || ($("#dragtarget").parent().attr("id") == "th42") || ($("#dragtarget").parent().attr("id") == "th50") || ($("#dragtarget").parent().attr("id") == "th58") )
        {$("#th2,#th10,#th18,#th26,#th34,#th42,#th50,#th58").css("background-color", "green")}

        if (($("#dragtarget").parent().attr("id") == "th3") || ($("#dragtarget").parent().attr("id") == "th11") || ($("#dragtarget").parent().attr("id") == "th19") || ($("#dragtarget").parent().attr("id") == "th27") || ($("#dragtarget").parent().attr("id") == "th35") || ($("#dragtarget").parent().attr("id") == "th43") || ($("#dragtarget").parent().attr("id") == "th51") || ($("#dragtarget").parent().attr("id") == "th59") )
        {$("#th3,#th11,#th19,#th27,#th35,#th43,#th51,#th59").css("background-color", "green")}

        if (($("#dragtarget").parent().attr("id") == "th4") || ($("#dragtarget").parent().attr("id") == "th12") || ($("#dragtarget").parent().attr("id") == "th20") || ($("#dragtarget").parent().attr("id") == "th28") || ($("#dragtarget").parent().attr("id") == "th36") || ($("#dragtarget").parent().attr("id") == "th44") || ($("#dragtarget").parent().attr("id") == "th52") || ($("#dragtarget").parent().attr("id") == "th60") )
        {$("#th4,#th12,#th20,#th28,#th36,#th44,#th52,#th60").css("background-color", "green")}

        if (($("#dragtarget").parent().attr("id") == "th5") || ($("#dragtarget").parent().attr("id") == "th13") || ($("#dragtarget").parent().attr("id") == "th21") || ($("#dragtarget").parent().attr("id") == "th29") || ($("#dragtarget").parent().attr("id") == "th37") || ($("#dragtarget").parent().attr("id") == "th45") || ($("#dragtarget").parent().attr("id") == "th53") || ($("#dragtarget").parent().attr("id") == "th61") )
        {$("#th5,#th13,#th21,#th29,#th37,#th45,#th53,#th61").css("background-color", "green")}

        if (($("#dragtarget").parent().attr("id") == "th6") || ($("#dragtarget").parent().attr("id") == "th14") || ($("#dragtarget").parent().attr("id") == "th22") || ($("#dragtarget").parent().attr("id") == "th30") || ($("#dragtarget").parent().attr("id") == "th38") || ($("#dragtarget").parent().attr("id") == "th46") || ($("#dragtarget").parent().attr("id") == "th54") || ($("#dragtarget").parent().attr("id") == "th62") )
        {$("#th6,#th14,#th22,#th30,#th38,#th46,#th54,#th62").css("background-color", "green")}

        if (($("#dragtarget").parent().attr("id") == "th7") || ($("#dragtarget").parent().attr("id") == "th15") || ($("#dragtarget").parent().attr("id") == "th23") || ($("#dragtarget").parent().attr("id") == "th31") || ($("#dragtarget").parent().attr("id") == "th39") || ($("#dragtarget").parent().attr("id") == "th47") || ($("#dragtarget").parent().attr("id") == "th55") || ($("#dragtarget").parent().attr("id") == "th63") )
        {$("#th7,#th15,#th23,#th31,#th39,#th47,#th55,#th63").css("background-color", "green")}

    });



//White Rook 2
    $("#dragtarget8").mouseenter(function () {
        if (($("#dragtarget8").parent().attr("id") == "th") || ($("#dragtarget8").parent().attr("id") == "th1") || ($("#dragtarget8").parent().attr("id") == "th2") || ($("#dragtarget8").parent().attr("id") == "th3") || ($("#dragtarget8").parent().attr("id") == "th4") || ($("#dragtarget8").parent().attr("id") == "th5") || ($("#dragtarget8").parent().attr("id") == "th6") || ($("#dragtarget8").parent().attr("id") == "th7"))
        {$("#th,#th1,#th2,#th3,#th4,#th5,#th6,#th7").css("background-color", "green")}

        if (($("#dragtarget8").parent().attr("id") == "th8") || ($("#dragtarget8").parent().attr("id") == "th9") || ($("#dragtarget8").parent().attr("id") == "th10") || ($("#dragtarget8").parent().attr("id") == "th11") || ($("#dragtarget8").parent().attr("id") == "th12") || ($("#dragtarget8").parent().attr("id") == "th13") || ($("#dragtarget8").parent().attr("id") == "th14") || ($("#dragtarget8").parent().attr("id") == "th15") )
        {$("#th8,#th9,#th10,#th11,#th12,#th13,#th14,#th15").css("background-color", "green")}

        if (($("#dragtarget8").parent().attr("id") == "th16") || ($("#dragtarget8").parent().attr("id") == "th17") || ($("#dragtarget8").parent().attr("id") == "th18") || ($("#dragtarget8").parent().attr("id") == "th19") || ($("#dragtarget8").parent().attr("id") == "th20") || ($("#dragtarget8").parent().attr("id") == "th21") || ($("#dragtarget8").parent().attr("id") == "th22") || ($("#dragtarget8").parent().attr("id") == "th23") )
        {$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23").css("background-color", "green")}

        if (($("#dragtarget8").parent().attr("id") == "th24") || ($("#dragtarget8").parent().attr("id") == "th25") || ($("#dragtarget8").parent().attr("id") == "th26") || ($("#dragtarget8").parent().attr("id") == "th27") || ($("#dragtarget8").parent().attr("id") == "th28") || ($("#dragtarget8").parent().attr("id") == "th29") || ($("#dragtarget8").parent().attr("id") == "th30") || ($("#dragtarget8").parent().attr("id") == "th31") )
        {$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31").css("background-color", "green")}

        if (($("#dragtarget8").parent().attr("id") == "th32") || ($("#dragtarget8").parent().attr("id") == "th33") || ($("#dragtarget8").parent().attr("id") == "th34") || ($("#dragtarget8").parent().attr("id") == "th35") || ($("#dragtarget8").parent().attr("id") == "th36") || ($("#dragtarget8").parent().attr("id") == "th37") || ($("#dragtarget8").parent().attr("id") == "th38") || ($("#dragtarget8").parent().attr("id") == "th39") )
        {$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39").css("background-color", "green")}

        if (($("#dragtarget8").parent().attr("id") == "th40") || ($("#dragtarget8").parent().attr("id") == "th41") || ($("#dragtarget8").parent().attr("id") == "th42") || ($("#dragtarget8").parent().attr("id") == "th43") || ($("#dragtarget8").parent().attr("id") == "th44") || ($("#dragtarget8").parent().attr("id") == "th45") || ($("#dragtarget8").parent().attr("id") == "th46") || ($("#dragtarget8").parent().attr("id") == "th47") )
        {$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47").css("background-color", "green")}

        if (($("#dragtarget8").parent().attr("id") == "th48") || ($("#dragtarget8").parent().attr("id") == "th49") || ($("#dragtarget8").parent().attr("id") == "th50") || ($("#dragtarget8").parent().attr("id") == "th51") || ($("#dragtarget8").parent().attr("id") == "th52") || ($("#dragtarget8").parent().attr("id") == "th53") || ($("#dragtarget8").parent().attr("id") == "th54") || ($("#dragtarget8").parent().attr("id") == "th55") )
        {$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55").css("background-color", "green")}

        if (($("#dragtarget8").parent().attr("id") == "th56") || ($("#dragtarget8").parent().attr("id") == "th57") || ($("#dragtarget8").parent().attr("id") == "th58") || ($("#dragtarget8").parent().attr("id") == "th59") || ($("#dragtarget8").parent().attr("id") == "th60") || ($("#dragtarget8").parent().attr("id") == "th61") || ($("#dragtarget8").parent().attr("id") == "th62") || ($("#dragtarget8").parent().attr("id") == "th63") )
        {$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63").css("background-color", "green")}

        if (($("#dragtarget8").parent().attr("id") == "th") || ($("#dragtarget8").parent().attr("id") == "th8") || ($("#dragtarget8").parent().attr("id") == "th16") || ($("#dragtarget8").parent().attr("id") == "th24") || ($("#dragtarget8").parent().attr("id") == "th32") || ($("#dragtarget8").parent().attr("id") == "th40") || ($("#dragtarget8").parent().attr("id") == "th48") || ($("#dragtarget8").parent().attr("id") == "th56") )
        {$("#th,#th8,#th16,#th24,#th32,#th40,#th48,#th56").css("background-color", "green")}

        if (($("#dragtarget8").parent().attr("id") == "th1") || ($("#dragtarget8").parent().attr("id") == "th9") || ($("#dragtarget8").parent().attr("id") == "th17") || ($("#dragtarget8").parent().attr("id") == "th25") || ($("#dragtarget8").parent().attr("id") == "th33") || ($("#dragtarget8").parent().attr("id") == "th41") || ($("#dragtarget8").parent().attr("id") == "th49") || ($("#dragtarget8").parent().attr("id") == "th57") )
        {$("#th1,#th9,#th17,#th25,#th33,#th41,#th49,#th57").css("background-color", "green")}

        if (($("#dragtarget8").parent().attr("id") == "th2") || ($("#dragtarget8").parent().attr("id") == "th10") || ($("#dragtarget8").parent().attr("id") == "th18") || ($("#dragtarget8").parent().attr("id") == "th26") || ($("#dragtarget8").parent().attr("id") == "th34") || ($("#dragtarget8").parent().attr("id") == "th42") || ($("#dragtarget8").parent().attr("id") == "th50") || ($("#dragtarget8").parent().attr("id") == "th58") )
        {$("#th2,#th10,#th18,#th26,#th34,#th42,#th50,#th58").css("background-color", "green")}

        if (($("#dragtarget8").parent().attr("id") == "th3") || ($("#dragtarget8").parent().attr("id") == "th11") || ($("#dragtarget8").parent().attr("id") == "th19") || ($("#dragtarget8").parent().attr("id") == "th27") || ($("#dragtarget8").parent().attr("id") == "th35") || ($("#dragtarget8").parent().attr("id") == "th43") || ($("#dragtarget8").parent().attr("id") == "th51") || ($("#dragtarget8").parent().attr("id") == "th59") )
        {$("#th3,#th11,#th19,#th27,#th35,#th43,#th51,#th59").css("background-color", "green")}

        if (($("#dragtarget8").parent().attr("id") == "th4") || ($("#dragtarget8").parent().attr("id") == "th12") || ($("#dragtarget8").parent().attr("id") == "th20") || ($("#dragtarget8").parent().attr("id") == "th28") || ($("#dragtarget8").parent().attr("id") == "th36") || ($("#dragtarget8").parent().attr("id") == "th44") || ($("#dragtarget8").parent().attr("id") == "th52") || ($("#dragtarget8").parent().attr("id") == "th60") )
        {$("#th4,#th12,#th20,#th28,#th36,#th44,#th52,#th60").css("background-color", "green")}

        if (($("#dragtarget8").parent().attr("id") == "th5") || ($("#dragtarget8").parent().attr("id") == "th13") || ($("#dragtarget8").parent().attr("id") == "th21") || ($("#dragtarget8").parent().attr("id") == "th29") || ($("#dragtarget8").parent().attr("id") == "th37") || ($("#dragtarget8").parent().attr("id") == "th45") || ($("#dragtarget8").parent().attr("id") == "th53") || ($("#dragtarget8").parent().attr("id") == "th61") )
        {$("#th5,#th13,#th21,#th29,#th37,#th45,#th53,#th61").css("background-color", "green")}

        if (($("#dragtarget8").parent().attr("id") == "th6") || ($("#dragtarget8").parent().attr("id") == "th14") || ($("#dragtarget8").parent().attr("id") == "th22") || ($("#dragtarget8").parent().attr("id") == "th30") || ($("#dragtarget8").parent().attr("id") == "th38") || ($("#dragtarget8").parent().attr("id") == "th46") || ($("#dragtarget8").parent().attr("id") == "th54") || ($("#dragtarget8").parent().attr("id") == "th62") )
        {$("#th6,#th14,#th22,#th30,#th38,#th46,#th54,#th62").css("background-color", "green")}

        if (($("#dragtarget8").parent().attr("id") == "th7") || ($("#dragtarget8").parent().attr("id") == "th15") || ($("#dragtarget8").parent().attr("id") == "th23") || ($("#dragtarget8").parent().attr("id") == "th31") || ($("#dragtarget8").parent().attr("id") == "th39") || ($("#dragtarget8").parent().attr("id") == "th47") || ($("#dragtarget8").parent().attr("id") == "th55") || ($("#dragtarget8").parent().attr("id") == "th63") )
        {$("#th7,#th15,#th23,#th31,#th39,#th47,#th55,#th63").css("background-color", "green")}

    });



//White Bishop 1
    $("#dragtarget3").mouseenter(function () {
        if ($("#dragtarget3").parent().attr("id") == "th")
        {$("#th").css("background-color", "green")}

        if (($("#dragtarget3").parent().attr("id") == "th2") || ($("#dragtarget3").parent().attr("id") == "th9") || ($("#dragtarget3").parent().attr("id") == "th16") )
        {$("#th2,#th9,#th16").css("background-color", "green")}

        if (($("#dragtarget3").parent().attr("id") == "th4") || ($("#dragtarget3").parent().attr("id") == "th11") || ($("#dragtarget3").parent().attr("id") == "th18") || ($("#dragtarget3").parent().attr("id") == "th25") || ($("#dragtarget3").parent().attr("id") == "th32")  )
        {$("#th4,#th11,#th18,#th25,#th32").css("background-color", "green")}

        if (($("#dragtarget3").parent().attr("id") == "th6") || ($("#dragtarget3").parent().attr("id") == "th13") || ($("#dragtarget3").parent().attr("id") == "th20") || ($("#dragtarget3").parent().attr("id") == "th27") || ($("#dragtarget3").parent().attr("id") == "th34") || ($("#dragtarget3").parent().attr("id") == "th41") || ($("#dragtarget3").parent().attr("id") == "th48") )
        {$("#th6,#th13,#th20,#th27,#th34,#th41,#th48").css("background-color", "green")}

        if (($("#dragtarget3").parent().attr("id") == "th15") || ($("#dragtarget3").parent().attr("id") == "th22") || ($("#dragtarget3").parent().attr("id") == "th29") || ($("#dragtarget3").parent().attr("id") == "th36") || ($("#dragtarget3").parent().attr("id") == "th43") || ($("#dragtarget3").parent().attr("id") == "th50") || ($("#dragtarget3").parent().attr("id") == "th57") )
        {$("#th15,#th22,#th29,#th36,#th43,#th50,#th57").css("background-color", "green")}

        if (($("#dragtarget3").parent().attr("id") == "th31") || ($("#dragtarget3").parent().attr("id") == "th38") || ($("#dragtarget3").parent().attr("id") == "th45") || ($("#dragtarget3").parent().attr("id") == "th52") || ($("#dragtarget3").parent().attr("id") == "th59")  )
        {$("#th31,#th38,#th45,#th52,#th59").css("background-color", "green")}

        if (($("#dragtarget3").parent().attr("id") == "th47") || ($("#dragtarget3").parent().attr("id") == "th54") || ($("#dragtarget3").parent().attr("id") == "th61") )
        {$("#th47,#th54,#th61").css("background-color", "green")}

        if ($("#dragtarget3").parent().attr("id") == "th63")
        {$("#th63").css("background-color", "green")}

        if (($("#dragtarget3").parent().attr("id") == "th6") || ($("#dragtarget3").parent().attr("id") == "th15") )
        {$("#th6,#th15").css("background-color", "green")}

        if (($("#dragtarget3").parent().attr("id") == "th4") || ($("#dragtarget3").parent().attr("id") == "th13") || ($("#dragtarget3").parent().attr("id") == "th22") || ($("#dragtarget").parent().attr("id") == "th31"))
        {$("#th4,#th13,#th22,#th31").css("background-color", "green")}

        if (($("#dragtarget3").parent().attr("id") == "th2") || ($("#dragtarget3").parent().attr("id") == "th11") || ($("#dragtarget3").parent().attr("id") == "th20") || ($("#dragtarget3").parent().attr("id") == "th29") || ($("#dragtarget3").parent().attr("id") == "th38") || ($("#dragtarget3").parent().attr("id") == "th47")  )
        {$("#th2,#th11,#th20,#th29,#th38,#th47").css("background-color", "green")}

        if (($("#dragtarget3").parent().attr("id") == "th") || ($("#dragtarget3").parent().attr("id") == "th9") || ($("#dragtarget3").parent().attr("id") == "th18") || ($("#dragtarget3").parent().attr("id") == "th27") || ($("#dragtarget3").parent().attr("id") == "th36") || ($("#dragtarget3").parent().attr("id") == "th45") || ($("#dragtarget3").parent().attr("id") == "th54") || ($("#dragtarget3").parent().attr("id") == "th63") )
        {$("#th,#th9,#th18,#th27,#th36,#th45,#th54,#th63").css("background-color", "green")}

        if (($("#dragtarget3").parent().attr("id") == "th16") || ($("#dragtarget3").parent().attr("id") == "th25") || ($("#dragtarget3").parent().attr("id") == "th34") || ($("#dragtarget3").parent().attr("id") == "th43") || ($("#dragtarget3").parent().attr("id") == "th52") || ($("#dragtarget3").parent().attr("id") == "th61")  )
        {$("#th16,#th25,#th34,#th43,#th52,#th61").css("background-color", "green")}

        if (($("#dragtarget3").parent().attr("id") == "th32") || ($("#dragtarget3").parent().attr("id") == "th41") || ($("#dragtarget3").parent().attr("id") == "th50") || ($("#dragtarget3").parent().attr("id") == "th59"))
        {$("#th32,#th41,#th50,#th59").css("background-color", "green")}

        if (($("#dragtarget3").parent().attr("id") == "th48") || ($("#dragtarget3").parent().attr("id") == "th57") )
        {$("#th48,#th57").css("background-color", "green")}

    });



//White Bishop 2
    $("#dragtarget6").mouseenter(function () {


        if (($("#dragtarget6").parent().attr("id") == "th1") || ($("#dragtarget6").parent().attr("id") == "th8") )
        {$("#th1,#th8").css("background-color", "green")}

        if (($("#dragtarget6").parent().attr("id") == "th3") || ($("#dragtarget6").parent().attr("id") == "th10") || ($("#dragtarget6").parent().attr("id") == "th17") || ($("#dragtarget6").parent().attr("id") == "th24"))
        {$("#th3,#th10,#th17,#th24").css("background-color", "green")}

        if (($("#dragtarget6").parent().attr("id") == "th5") || ($("#dragtarget6").parent().attr("id") == "th12") || ($("#dragtarget6").parent().attr("id") == "th19") || ($("#dragtarget6").parent().attr("id") == "th26") || ($("#dragtarget6").parent().attr("id") == "th33") || ($("#dragtarget6").parent().attr("id") == "th40")  )
        {$("#th5,#th12,#th19,#th26,#th33,#th40").css("background-color", "green")}

        if (($("#dragtarget6").parent().attr("id") == "th7") || ($("#dragtarget6").parent().attr("id") == "th14") || ($("#dragtarget6").parent().attr("id") == "th21") || ($("#dragtarget6").parent().attr("id") == "th28") || ($("#dragtarget6").parent().attr("id") == "th35") || ($("#dragtarget6").parent().attr("id") == "th42") || ($("#dragtarget6").parent().attr("id") == "th49") || ($("#dragtarget6").parent().attr("id") == "th56") )
        {$("#th7,#th14,#th21,#th28,#th35,#th42,#th49,#th56").css("background-color", "green")}

        if (($("#dragtarget6").parent().attr("id") == "th23") || ($("#dragtarget6").parent().attr("id") == "th30") || ($("#dragtarget6").parent().attr("id") == "th37") || ($("#dragtarget6").parent().attr("id") == "th44") || ($("#dragtarget6").parent().attr("id") == "th51") || ($("#dragtarget6").parent().attr("id") == "th58")  )
        {$("#th23,#th30,#th37,#th44,#th51,#th58").css("background-color", "green")}

        if (($("#dragtarget6").parent().attr("id") == "th39") || ($("#dragtarget6").parent().attr("id") == "th46") || ($("#dragtarget6").parent().attr("id") == "th53") || ($("#dragtarget6").parent().attr("id") == "th60"))
        {$("#th39,#th46,#th53,#th60").css("background-color", "green")}

        if (($("#dragtarget6").parent().attr("id") == "th55") || ($("#dragtarget6").parent().attr("id") == "th62") )
        {$("#th55,#th62").css("background-color", "green")}

        if ($("#dragtarget6").parent().attr("id") == "th7")
        {$("#th7").css("background-color", "green")}

        if (($("#dragtarget6").parent().attr("id") == "th5") || ($("#dragtarget6").parent().attr("id") == "th14") || ($("#dragtarget6").parent().attr("id") == "th23") )
        {$("#th5,#th14,#th23").css("background-color", "green")}

        if (($("#dragtarget6").parent().attr("id") == "th3") || ($("#dragtarget6").parent().attr("id") == "th12") || ($("#dragtarget6").parent().attr("id") == "th21") || ($("#dragtarget6").parent().attr("id") == "th30") || ($("#dragtarget6").parent().attr("id") == "th39")  )
        {$("#th3,#th12,#th21,#th30,#th39").css("background-color", "green")}

        if (($("#dragtarget6").parent().attr("id") == "th1") || ($("#dragtarget6").parent().attr("id") == "th10") || ($("#dragtarget6").parent().attr("id") == "th19") || ($("#dragtarget6").parent().attr("id") == "th28") || ($("#dragtarget6").parent().attr("id") == "th37") || ($("#dragtarget6").parent().attr("id") == "th46") || ($("#dragtarget6").parent().attr("id") == "th55") )
        {$("#th1,#th10,#th19,#th28,#th37,#th46,#th55").css("background-color", "green")}

        if (($("#dragtarget6").parent().attr("id") == "th8") || ($("#dragtarget6").parent().attr("id") == "th17") || ($("#dragtarget6").parent().attr("id") == "th26") || ($("#dragtarget6").parent().attr("id") == "th35") || ($("#dragtarget6").parent().attr("id") == "th43") || ($("#dragtarget6").parent().attr("id") == "th53") || ($("#dragtarget6").parent().attr("id") == "th62") )
        {$("#th8,#th17,#th26,#th35,#th44,#th53,#th62").css("background-color", "green")}

        if (($("#dragtarget6").parent().attr("id") == "th24") || ($("#dragtarget6").parent().attr("id") == "th33") || ($("#dragtarget6").parent().attr("id") == "th42") || ($("#dragtarget6").parent().attr("id") == "th51") || ($("#dragtarget6").parent().attr("id") == "th60")  )
        {$("#th24,#th33,#th42,#th51,#th60").css("background-color", "green")}

        if (($("#dragtarget6").parent().attr("id") == "th40") || ($("#dragtarget6").parent().attr("id") == "th49") || ($("#dragtarget6").parent().attr("id") == "th58") )
        {$("#th40,#th49,#th58").css("background-color", "green")}

        if ($("#dragtarget6").parent().attr("id") == "th56")
        {$("#th56").css("background-color", "green")}
    });



//White Queen
    $("#dragtarget5").mouseenter(function () {
        if (($("#dragtarget5").parent().attr("id") == "th") || ($("#dragtarget5").parent().attr("id") == "th1") || ($("#dragtarget5").parent().attr("id") == "th2") || ($("#dragtarget5").parent().attr("id") == "th3") || ($("#dragtarget5").parent().attr("id") == "th4") || ($("#dragtarget5").parent().attr("id") == "th5") || ($("#dragtarget5").parent().attr("id") == "th6") || ($("#dragtarget5").parent().attr("id") == "th7"))
        {$("#th,#th1,#th2,#th3,#th4,#th5,#th6,#th7").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th8") || ($("#dragtarget5").parent().attr("id") == "th9") || ($("#dragtarget5").parent().attr("id") == "th10") || ($("#dragtarget5").parent().attr("id") == "th11") || ($("#dragtarget5").parent().attr("id") == "th12") || ($("#dragtarget5").parent().attr("id") == "th13") || ($("#dragtarget5").parent().attr("id") == "th14") || ($("#dragtarget5").parent().attr("id") == "th15") )
        {$("#th8,#th9,#th10,#th11,#th12,#th13,#th14,#th15").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th16") || ($("#dragtarget5").parent().attr("id") == "th17") || ($("#dragtarget5").parent().attr("id") == "th18") || ($("#dragtarget5").parent().attr("id") == "th19") || ($("#dragtarget5").parent().attr("id") == "th20") || ($("#dragtarget5").parent().attr("id") == "th21") || ($("#dragtarget5").parent().attr("id") == "th22") || ($("#dragtarget5").parent().attr("id") == "th23") )
        {$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th24") || ($("#dragtarget5").parent().attr("id") == "th25") || ($("#dragtarget5").parent().attr("id") == "th26") || ($("#dragtarget5").parent().attr("id") == "th27") || ($("#dragtarget5").parent().attr("id") == "th28") || ($("#dragtarget5").parent().attr("id") == "th29") || ($("#dragtarget5").parent().attr("id") == "th30") || ($("#dragtarget5").parent().attr("id") == "th31") )
        {$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th32") || ($("#dragtarget5").parent().attr("id") == "th33") || ($("#dragtarget5").parent().attr("id") == "th34") || ($("#dragtarget5").parent().attr("id") == "th35") || ($("#dragtarget5").parent().attr("id") == "th36") || ($("#dragtarget5").parent().attr("id") == "th37") || ($("#dragtarget5").parent().attr("id") == "th38") || ($("#dragtarget5").parent().attr("id") == "th39") )
        {$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th40") || ($("#dragtarget5").parent().attr("id") == "th41") || ($("#dragtarget5").parent().attr("id") == "th42") || ($("#dragtarget5").parent().attr("id") == "th43") || ($("#dragtarget5").parent().attr("id") == "th44") || ($("#dragtarget5").parent().attr("id") == "th45") || ($("#dragtarget5").parent().attr("id") == "th46") || ($("#dragtarget5").parent().attr("id") == "th47") )
        {$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th48") || ($("#dragtarget5").parent().attr("id") == "th49") || ($("#dragtarget5").parent().attr("id") == "th50") || ($("#dragtarget5").parent().attr("id") == "th51") || ($("#dragtarget5").parent().attr("id") == "th52") || ($("#dragtarget5").parent().attr("id") == "th53") || ($("#dragtarget5").parent().attr("id") == "th54") || ($("#dragtarget5").parent().attr("id") == "th55") )
        {$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th56") || ($("#dragtarget5").parent().attr("id") == "th57") || ($("#dragtarget5").parent().attr("id") == "th58") || ($("#dragtarget5").parent().attr("id") == "th59") || ($("#dragtarget5").parent().attr("id") == "th60") || ($("#dragtarget5").parent().attr("id") == "th61") || ($("#dragtarget5").parent().attr("id") == "th62") || ($("#dragtarget5").parent().attr("id") == "th63") )
        {$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th") || ($("#dragtarget5").parent().attr("id") == "th8") || ($("#dragtarget5").parent().attr("id") == "th16") || ($("#dragtarget5").parent().attr("id") == "th24") || ($("#dragtarget5").parent().attr("id") == "th32") || ($("#dragtarget5").parent().attr("id") == "th40") || ($("#dragtarget5").parent().attr("id") == "th48") || ($("#dragtarget5").parent().attr("id") == "th56") )
        {$("#th,#th8,#th16,#th24,#th32,#th40,#th48,#th56").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th1") || ($("#dragtarget5").parent().attr("id") == "th9") || ($("#dragtarget5").parent().attr("id") == "th17") || ($("#dragtarget5").parent().attr("id") == "th25") || ($("#dragtarget5").parent().attr("id") == "th33") || ($("#dragtarget5").parent().attr("id") == "th41") || ($("#dragtarget5").parent().attr("id") == "th49") || ($("#dragtarget5").parent().attr("id") == "th57") )
        {$("#th1,#th9,#th17,#th25,#th33,#th41,#th49,#th57").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th2") || ($("#dragtarget5").parent().attr("id") == "th10") || ($("#dragtarget5").parent().attr("id") == "th18") || ($("#dragtarget5").parent().attr("id") == "th26") || ($("#dragtarget5").parent().attr("id") == "th34") || ($("#dragtarget5").parent().attr("id") == "th42") || ($("#dragtarget5").parent().attr("id") == "th50") || ($("#dragtarget5").parent().attr("id") == "th58") )
        {$("#th2,#th10,#th18,#th26,#th34,#th42,#th50,#th58").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th3") || ($("#dragtarget5").parent().attr("id") == "th11") || ($("#dragtarget5").parent().attr("id") == "th19") || ($("#dragtarget5").parent().attr("id") == "th27") || ($("#dragtarget5").parent().attr("id") == "th35") || ($("#dragtarget5").parent().attr("id") == "th43") || ($("#dragtarget5").parent().attr("id") == "th51") || ($("#dragtarget5").parent().attr("id") == "th59") )
        {$("#th3,#th11,#th19,#th27,#th35,#th43,#th51,#th59").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th4") || ($("#dragtarget5").parent().attr("id") == "th12") || ($("#dragtarget5").parent().attr("id") == "th20") || ($("#dragtarget5").parent().attr("id") == "th28") || ($("#dragtarget5").parent().attr("id") == "th36") || ($("#dragtarget5").parent().attr("id") == "th44") || ($("#dragtarget5").parent().attr("id") == "th52") || ($("#dragtarget5").parent().attr("id") == "th60") )
        {$("#th4,#th12,#th20,#th28,#th36,#th44,#th52,#th60").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th5") || ($("#dragtarget5").parent().attr("id") == "th13") || ($("#dragtarget5").parent().attr("id") == "th21") || ($("#dragtarget5").parent().attr("id") == "th29") || ($("#dragtarget").parent().attr("id") == "th37") || ($("#dragtarget5").parent().attr("id") == "th45") || ($("#dragtarget5").parent().attr("id") == "th53") || ($("#dragtarget5").parent().attr("id") == "th61") )
        {$("#th5,#th13,#th21,#th29,#th37,#th45,#th53,#th61").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th6") || ($("#dragtarget5").parent().attr("id") == "th14") || ($("#dragtarget5").parent().attr("id") == "th22") || ($("#dragtarget5").parent().attr("id") == "th30") || ($("#dragtarget5").parent().attr("id") == "th38") || ($("#dragtarget5").parent().attr("id") == "th46") || ($("#dragtarget5").parent().attr("id") == "th54") || ($("#dragtarget5").parent().attr("id") == "th62") )
        {$("#th6,#th14,#th22,#th30,#th38,#th46,#th54,#th62").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th7") || ($("#dragtarget5").parent().attr("id") == "th15") || ($("#dragtarget5").parent().attr("id") == "th23") || ($("#dragtarget5").parent().attr("id") == "th31") || ($("#dragtarget5").parent().attr("id") == "th39") || ($("#dragtarget5").parent().attr("id") == "th47") || ($("#dragtarget5").parent().attr("id") == "th55") || ($("#dragtarget5").parent().attr("id") == "th63") )
        {$("#th7,#th15,#th23,#th31,#th39,#th47,#th55,#th63").css("background-color", "green")}

        if ($("#dragtarget5").parent().attr("id") == "th")
        {$("#th").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th2") || ($("#dragtarget5").parent().attr("id") == "th9") || ($("#dragtarget5").parent().attr("id") == "th16") )
        {$("#th2,#th9,#th16").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th4") || ($("#dragtarget5").parent().attr("id") == "th11") || ($("#dragtarget5").parent().attr("id") == "th18") || ($("#dragtarget5").parent().attr("id") == "th25") || ($("#dragtarget5").parent().attr("id") == "th32")  )
        {$("#th4,#th11,#th18,#th25,#th32").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th6") || ($("#dragtarget5").parent().attr("id") == "th13") || ($("#dragtarget5").parent().attr("id") == "th20") || ($("#dragtarget5").parent().attr("id") == "th27") || ($("#dragtarget5").parent().attr("id") == "th34") || ($("#dragtarget5").parent().attr("id") == "th41") || ($("#dragtarget5").parent().attr("id") == "th48") )
        {$("#th6,#th13,#th20,#th27,#th34,#th41,#th48").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th15") || ($("#dragtarget5").parent().attr("id") == "th22") || ($("#dragtarget5").parent().attr("id") == "th29") || ($("#dragtarget5").parent().attr("id") == "th36") || ($("#dragtarget5").parent().attr("id") == "th43") || ($("#dragtarget5").parent().attr("id") == "th50") || ($("#dragtarget5").parent().attr("id") == "th57") )
        {$("#th15,#th22,#th29,#th36,#th43,#th50,#th57").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th31") || ($("#dragtarget5").parent().attr("id") == "th38") || ($("#dragtarget5").parent().attr("id") == "th45") || ($("#dragtarget5").parent().attr("id") == "th52") || ($("#dragtarget5").parent().attr("id") == "th59")  )
        {$("#th31,#th38,#th45,#th52,#th59").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th47") || ($("#dragtarget5").parent().attr("id") == "th54") || ($("#dragtarget5").parent().attr("id") == "th61") )
        {$("#th47,#th54,#th61").css("background-color", "green")}

        if ($("#dragtarget5").parent().attr("id") == "th63")
        {$("#th63").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th6") || ($("#dragtarget5").parent().attr("id") == "th15") )
        {$("#th6,#th15").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th4") || ($("#dragtarget5").parent().attr("id") == "th13") || ($("#dragtarget5").parent().attr("id") == "th22") || ($("#dragtarget5").parent().attr("id") == "th31"))
        {$("#th4,#th13,#th22,#th31").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th2") || ($("#dragtarget5").parent().attr("id") == "th11") || ($("#dragtarget5").parent().attr("id") == "th20") || ($("#dragtarget5").parent().attr("id") == "th29") || ($("#dragtarget5").parent().attr("id") == "th38") || ($("#dragtarget5").parent().attr("id") == "th47")  )
        {$("#th2,#th11,#th20,#th29,#th38,#th47").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th") || ($("#dragtarget5").parent().attr("id") == "th9") || ($("#dragtarget5").parent().attr("id") == "th18") || ($("#dragtarget5").parent().attr("id") == "th27") || ($("#dragtarget5").parent().attr("id") == "th36") || ($("#dragtarget5").parent().attr("id") == "th45") || ($("#dragtarget5").parent().attr("id") == "th54") || ($("#dragtarget5").parent().attr("id") == "th63") )
        {$("#th,#th9,#th18,#th27,#th36,#th45,#th54,#th63").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th16") || ($("#dragtarget5").parent().attr("id") == "th25") || ($("#dragtarget5").parent().attr("id") == "th34") || ($("#dragtarget5").parent().attr("id") == "th43") || ($("#dragtarget5").parent().attr("id") == "th52") || ($("#dragtarget5").parent().attr("id") == "th61")  )
        {$("#th16,#th25,#th34,#th43,#th52,#th61").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th32") || ($("#dragtarget5").parent().attr("id") == "th41") || ($("#dragtarget5").parent().attr("id") == "th50") || ($("#dragtarget5").parent().attr("id") == "th59"))
        {$("#th32,#th41,#th50,#th59").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th48") || ($("#dragtarget5").parent().attr("id") == "th57") )
        {$("#th48,#th57").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th1") || ($("#dragtarget5").parent().attr("id") == "th8") )
        {$("#th1,#th8").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th3") || ($("#dragtarget5").parent().attr("id") == "th10") || ($("#dragtarget5").parent().attr("id") == "th17") || ($("#dragtarget5").parent().attr("id") == "th24"))
        {$("#th3,#th10,#th17,#th24").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th5") || ($("#dragtarget5").parent().attr("id") == "th12") || ($("#dragtarget5").parent().attr("id") == "th19") || ($("#dragtarget5").parent().attr("id") == "th26") || ($("#dragtarget5").parent().attr("id") == "th33") || ($("#dragtarget5").parent().attr("id") == "th40")  )
        {$("#th5,#th12,#th19,#th26,#th33,#th40").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th7") || ($("#dragtarget5").parent().attr("id") == "th14") || ($("#dragtarget5").parent().attr("id") == "th21") || ($("#dragtarget5").parent().attr("id") == "th28") || ($("#dragtarget5").parent().attr("id") == "th35") || ($("#dragtarget5").parent().attr("id") == "th42") || ($("#dragtarget5").parent().attr("id") == "th49") || ($("#dragtarget5").parent().attr("id") == "th56") )
        {$("#th7,#th14,#th21,#th28,#th35,#th42,#th49,#th56").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th23") || ($("#dragtarget5").parent().attr("id") == "th30") || ($("#dragtarget5").parent().attr("id") == "th37") || ($("#dragtarget5").parent().attr("id") == "th44") || ($("#dragtarget5").parent().attr("id") == "th51") || ($("#dragtarget5").parent().attr("id") == "th58")  )
        {$("#th23,#th30,#th37,#th44,#th51,#th58").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th39") || ($("#dragtarget5").parent().attr("id") == "th46") || ($("#dragtarget5").parent().attr("id") == "th53") || ($("#dragtarget5").parent().attr("id") == "th60"))
        {$("#th39,#th46,#th53,#th60").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th55") || ($("#dragtarget5").parent().attr("id") == "th62") )
        {$("#th55,#th62").css("background-color", "green")}

        if ($("#dragtarget5").parent().attr("id") == "th7")
        {$("#th7").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th5") || ($("#dragtarget5").parent().attr("id") == "th14") || ($("#dragtarget5").parent().attr("id") == "th23") )
        {$("#th5,#th14,#th23").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th3") || ($("#dragtarget5").parent().attr("id") == "th12") || ($("#dragtarget5").parent().attr("id") == "th21") || ($("#dragtarget5").parent().attr("id") == "th30") || ($("#dragtarget5").parent().attr("id") == "th39")  )
        {$("#th3,#th12,#th21,#th30,#th39").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th1") || ($("#dragtarget5").parent().attr("id") == "th10") || ($("#dragtarget5").parent().attr("id") == "th19") || ($("#dragtarget5").parent().attr("id") == "th28") || ($("#dragtarget5").parent().attr("id") == "th37") || ($("#dragtarget5").parent().attr("id") == "th46") || ($("#dragtarget5").parent().attr("id") == "th55") )
        {$("#th1,#th10,#th19,#th28,#th37,#th46,#th55").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th8") || ($("#dragtarget5").parent().attr("id") == "th17") || ($("#dragtarget5").parent().attr("id") == "th26") || ($("#dragtarget5").parent().attr("id") == "th35") || ($("#dragtarget5").parent().attr("id") == "th43") || ($("#dragtarget5").parent().attr("id") == "th53") || ($("#dragtarget5").parent().attr("id") == "th62") )
        {$("#th8,#th17,#th26,#th35,#th44,#th53,#th62").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th24") || ($("#dragtarget5").parent().attr("id") == "th33") || ($("#dragtarget5").parent().attr("id") == "th42") || ($("#dragtarget5").parent().attr("id") == "th51") || ($("#dragtarget5").parent().attr("id") == "th60")  )
        {$("#th24,#th33,#th42,#th51,#th60").css("background-color", "green")}

        if (($("#dragtarget5").parent().attr("id") == "th40") || ($("#dragtarget5").parent().attr("id") == "th49") || ($("#dragtarget5").parent().attr("id") == "th58") )
        {$("#th40,#th49,#th58").css("background-color", "green")}

        if ($("#dragtarget5").parent().attr("id") == "th56")
        {$("#th56").css("background-color", "green")}
    });



//White knight 1
    $("#dragtarget2").mouseenter(function () {

        if (($("#dragtarget2").parent().attr("id") == "th")) {
            $("#th10,#th17").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th7")) {
            $("#th13,#th22").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th56")) {
            $("#th41,#th50").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th63")) {
            $("#th46,#th53").css("background-color", "green")
        }

        if (($("#dragtarget2").parent().attr("id") == "th1")) {
            $("#th11,#th16,#th18").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th2")) {
            $("#th8,#th12,#th17,#th19").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th3")) {
            $("#th9,#th13,#th18,#th20").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th4")) {
            $("#th10,#th14,#th19,#th21").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th5")) {
            $("#th11,#th15,#th20,#th22").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th6")) {
            $("#th12,#th21,#th23").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th8")) {
            $("#th2,#th18,#th25").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th16")) {
            $("#th1,#th10,#th26,#th33").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th24")) {
            $("#th18,#th9,#th34,#th41").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th32")) {
            $("#th17,#th26,#th42,#th49").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th40")) {
            $("#th34,#th350,#th25,#th57").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th48")) {
            $("#th42,#th58,#th33").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th15")) {
            $("#th5,#th21,#th30").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th23")) {
            $("#th16,#th13,#th29,#th38").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th31")) {
            $("#th14,#th46,#th21,#th37").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th39")) {
            $("#th22,#th54,#th29,#th45").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th47")) {
            $("#th30,#th62,#th37,#th53").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th55")) {
            $("#th61,#th45,#th38").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th57")) {
            $("#th40,#th42,#th51").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th58")) {
            $("#th41,#th43,#th52,#th48").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th59")) {
            $("#th42,#th44,#th53,#th49").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th60")) {
            $("#th43,#th45,#th53,#th50").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th61")) {
            $("#th44,#th46,#th51,#th55").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th62")) {
            $("#th45,#th47,#th52").css("background-color", "green")
        }

        if (($("#dragtarget2").parent().attr("id") == "th9")) {
            $("#th24,#th26,#th3,#th19").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th10")) {
            $("#th25,#th27,#th4,#th20,#th,#th16").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th11")) {
            $("#th26,#th28,#th5,#th21,#th1,#th17").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th12")) {
            $("#th27,#th29,#th6,#th22,#th2,#th18").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th13")) {
            $("#th28,#th30,#th7,#th23,#th3,#th19").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th14")) {
            $("#th29,#th31,#th4,#th20").css("background-color", "green")
        }

        if (($("#dragtarget2").parent().attr("id") == "th17")) {
            $("#th32,#th34,#th11,#th27,#th,#th2").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th18")) {
            $("#th33,#th35,#th12,#th28,#th1,#th3,#th8,#th24").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th19")) {
            $("#th34,#th36,#th13,#th29,#th2,#th4,#th9,#th25").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th20")) {
            $("#th35,#th37,#th14,#th30,#th3,#th5,#th10,#th26").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th21")) {
            $("#th36,#th38,#th15,#th31,#th4,#th6,#th11,#th27").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th22")) {
            $("#th37,#th39,#th5,#th7,#th12,#th28").css("background-color", "green")
        }

        if (($("#dragtarget2").parent().attr("id") == "th25")) {
            $("#th8,#th10,#th40,#th42,#th19,#th35").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th26")) {
            $("#th9,#th11,#th41,#th43,#th20,#th36,#th16,#th32").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th27")) {
            $("#th10,#th12,#th42,#th44,#th21,#th37,#th17,#th33").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th28")) {
            $("#th11,#th13,#th43,#th45,#th22,#th38,#th18,#th34").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th29")) {
            $("#th12,#th14,#th44,#th46,#th23,#th39,#th19,#th35").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th30")) {
            $("#th13,#th15,#th45,#th47,#th20,#th36").css("background-color", "green")
        }

        if (($("#dragtarget2").parent().attr("id") == "th33")) {
            $("#th16,#th18,#th48,#th50,#th27,#th43").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th34")) {
            $("#th17,#th19,#th49,#th51,#th28,#th44,#th24,#th40").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th35")) {
            $("#th18,#th20,#th50,#th52,#th29,#th45,#th25,#th41").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th36")) {
            $("#th19,#th21,#th51,#th53,#th30,#th46,#th26,#th42").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th37")) {
            $("#th20,#th22,#th52,#th54,#th31,#th47,#th27,#th43").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th38")) {
            $("#th21,#th23,#th53,#th55,#th28,#th44").css("background-color", "green")
        }

        if (($("#dragtarget2").parent().attr("id") == "th41")) {
            $("#th24,#th26,#th56,#th58,#th35,#th51").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th42")) {
            $("#th25,#th27,#th57,#th59,#th36,#th52,#th32,#th48").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th43")) {
            $("#th26,#th28,#th58,#th60,#th37,#th53,#th33,#th49").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th44")) {
            $("#th27,#th29,#th59,#th61,#th38,#th54,#th34,#th50").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th45")) {
            $("#th28,#th30,#th60,#th62,#th39,#th55,#th35,#th51").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th46")) {
            $("#th29,#th31,#th61,#th63,#th36,#th2").css("background-color", "green")
        }

        if (($("#dragtarget2").parent().attr("id") == "th49")) {
            $("#th32,#th34,#th43,#th59").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th50")) {
            $("#th33,#th35,#th44,#th60,#th40,#th56").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th51")) {
            $("#th34,#th36,#th45,#th61,#th41,#th57").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th52")) {
            $("#th35,#th37,#th46,#th62,#th42,#th58").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th53")) {
            $("#th36,#th38,#th47,#th63,#th43,#th59").css("background-color", "green")
        }
        if (($("#dragtarget2").parent().attr("id") == "th54")) {
            $("#th37,#th39,#th44,#th60").css("background-color", "green")
        }

    });


//White knight 2
    $("#dragtarget7").mouseenter(function () {

        if (($("#dragtarget7").parent().attr("id") == "th")) {
            $("#th10,#th17").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th7")) {
            $("#th13,#th22").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th56")) {
            $("#th41,#th50").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th63")) {
            $("#th46,#th53").css("background-color", "green")
        }

        if (($("#dragtarget7").parent().attr("id") == "th1")) {
            $("#th11,#th16,#th18").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th2")) {
            $("#th8,#th12,#th17,#th19").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th3")) {
            $("#th9,#th13,#th18,#th20").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th4")) {
            $("#th10,#th14,#th19,#th21").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th5")) {
            $("#th11,#th15,#th20,#th22").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th6")) {
            $("#th12,#th21,#th23").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th8")) {
            $("#th2,#th18,#th25").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th16")) {
            $("#th1,#th10,#th26,#th33").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th24")) {
            $("#th18,#th9,#th34,#th41").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th32")) {
            $("#th17,#th26,#th42,#th49").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th40")) {
            $("#th34,#th350,#th25,#th57").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th48")) {
            $("#th42,#th58,#th33").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th15")) {
            $("#th5,#th21,#th30").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th23")) {
            $("#th16,#th13,#th29,#th38").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th31")) {
            $("#th14,#th46,#th21,#th37").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th39")) {
            $("#th22,#th54,#th29,#th45").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th47")) {
            $("#th30,#th62,#th37,#th53").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th55")) {
            $("#th61,#th45,#th38").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th57")) {
            $("#th40,#th42,#th51").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th58")) {
            $("#th41,#th43,#th52,#th48").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th59")) {
            $("#th42,#th44,#th53,#th49").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th60")) {
            $("#th43,#th45,#th53,#th50").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th61")) {
            $("#th44,#th46,#th51,#th55").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th62")) {
            $("#th45,#th47,#th52").css("background-color", "green")
        }

        if (($("#dragtarget7").parent().attr("id") == "th9")) {
            $("#th24,#th26,#th3,#th19").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th10")) {
            $("#th25,#th27,#th4,#th20,#th,#th16").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th11")) {
            $("#th26,#th28,#th5,#th21,#th1,#th17").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th12")) {
            $("#th27,#th29,#th6,#th22,#th2,#th18").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th13")) {
            $("#th28,#th30,#th7,#th23,#th3,#th19").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th14")) {
            $("#th29,#th31,#th4,#th20").css("background-color", "green")
        }

        if (($("#dragtarget7").parent().attr("id") == "th17")) {
            $("#th32,#th34,#th11,#th27,#th,#th2").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th18")) {
            $("#th33,#th35,#th12,#th28,#th1,#th3,#th8,#th24").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th19")) {
            $("#th34,#th36,#th13,#th29,#th2,#th4,#th9,#th25").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th20")) {
            $("#th35,#th37,#th14,#th30,#th3,#th5,#th10,#th26").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th21")) {
            $("#th36,#th38,#th15,#th31,#th4,#th6,#th11,#th27").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th22")) {
            $("#th37,#th39,#th5,#th7,#th12,#th28").css("background-color", "green")
        }

        if (($("#dragtarget7").parent().attr("id") == "th25")) {
            $("#th8,#th10,#th40,#th42,#th19,#th35").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th26")) {
            $("#th9,#th11,#th41,#th43,#th20,#th36,#th16,#th32").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th27")) {
            $("#th10,#th12,#th42,#th44,#th21,#th37,#th17,#th33").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th28")) {
            $("#th11,#th13,#th43,#th45,#th22,#th38,#th18,#th34").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th29")) {
            $("#th12,#th14,#th44,#th46,#th23,#th39,#th19,#th35").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th30")) {
            $("#th13,#th15,#th45,#th47,#th20,#th36").css("background-color", "green")
        }

        if (($("#dragtarget7").parent().attr("id") == "th33")) {
            $("#th16,#th18,#th48,#th50,#th27,#th43").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th34")) {
            $("#th17,#th19,#th49,#th51,#th28,#th44,#th24,#th40").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th35")) {
            $("#th18,#th20,#th50,#th52,#th29,#th45,#th25,#th41").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th36")) {
            $("#th19,#th21,#th51,#th53,#th30,#th46,#th26,#th42").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th37")) {
            $("#th20,#th22,#th52,#th54,#th31,#th47,#th27,#th43").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th38")) {
            $("#th21,#th23,#th53,#th55,#th28,#th44").css("background-color", "green")
        }

        if (($("#dragtarget7").parent().attr("id") == "th41")) {
            $("#th24,#th26,#th56,#th58,#th35,#th51").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th42")) {
            $("#th25,#th27,#th57,#th59,#th36,#th52,#th32,#th48").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th43")) {
            $("#th26,#th28,#th58,#th60,#th37,#th53,#th33,#th49").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th44")) {
            $("#th27,#th29,#th59,#th61,#th38,#th54,#th34,#th50").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th45")) {
            $("#th28,#th30,#th60,#th62,#th39,#th55,#th35,#th51").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th46")) {
            $("#th29,#th31,#th61,#th63,#th36,#th2").css("background-color", "green")
        }

        if (($("#dragtarget7").parent().attr("id") == "th49")) {
            $("#th32,#th34,#th43,#th59").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th50")) {
            $("#th33,#th35,#th44,#th60,#th40,#th56").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th51")) {
            $("#th34,#th36,#th45,#th61,#th41,#th57").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th52")) {
            $("#th35,#th37,#th46,#th62,#th42,#th58").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th53")) {
            $("#th36,#th38,#th47,#th63,#th43,#th59").css("background-color", "green")
        }
        if (($("#dragtarget7").parent().attr("id") == "th54")) {
            $("#th37,#th39,#th44,#th60").css("background-color", "green")
        }

    });




//White phone
    $("#dragtarget9").mouseenter(function () {

        if (($("#dragtarget9").parent().attr("id") ==  "th8")) {$("#th16,#th24").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th9")) {$("#th17,#th25").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th10" )){$("#th18,#th26").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th11")) {$("#th19,#th27").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th12")){$("#th20,#th28").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th13")){$("#th21,#th29").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th14")){$("#th22,#th30").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th15")){$("#th23,#th31").css("background-color", "green")}

        if (($("#dragtarget9").parent().attr("id") ==  "th16")){$("#th24").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th17")){$("#th25").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th18")) {$("#th26").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th19")){$("#th27").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th20")){$("#th28").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th21")){$("#th29").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th22")){$("#th30").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th23")){$("#th31").css("background-color", "green")}

        if (($("#dragtarget9").parent().attr("id") ==  "th24")){$("#th32").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th25")){$("#th33").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th26")){$("#th34").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th27")){$("#th35").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th28")){$("#th36").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th29")){$("#th37").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th30")){$("#th38").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th31")){$("#th39").css("background-color", "green")}

        if (($("#dragtarget9").parent().attr("id") ==  "th32")){$("#th40").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th33")){$("#th41").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th34")){$("#th42").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th35")){$("#th43").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th36")){$("#th44").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th37")){$("#th45").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th38")){$("#th46").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th39")){$("#th47").css("background-color", "green")}

        if (($("#dragtarget9").parent().attr("id") ==  "th40")){$("#th48").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th41")){$("#th49").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th42")){$("#th50").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th43")){$("#th51").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th44")){$("#th52").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th45")){$("#th53").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th46")){$("#th54").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th47")){$("#th55").css("background-color", "green")}

        if (($("#dragtarget9").parent().attr("id") ==  "th48")){$("#th56").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th49")){$("#th57").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th50")){$("#th58").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th51")){$("#th59").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th52")){$("#th60").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th53")){$("#th61").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th54")){$("#th62").css("background-color", "green")}
        if (($("#dragtarget9").parent().attr("id") ==  "th55")){$("#th63").css("background-color", "green")}




    });

    $("#dragtarget10").mouseenter(function () {

        if (($("#dragtarget10").parent().attr("id") ==  "th8")) {$("#th16,#th24").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th9")) {$("#th17,#th25").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th10" )){$("#th18,#th26").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th11")) {$("#th19,#th27").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th12")){$("#th20,#th28").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th13")){$("#th21,#th29").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th14")){$("#th22,#th30").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th15")){$("#th23,#th31").css("background-color", "green")}

        if (($("#dragtarget10").parent().attr("id") ==  "th16")){$("#th24").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th17")){$("#th25").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th18")) {$("#th26").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th19")){$("#th27").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th20")){$("#th28").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th21")){$("#th29").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th22")){$("#th30").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th23")){$("#th31").css("background-color", "green")}

        if (($("#dragtarget10").parent().attr("id") ==  "th24")){$("#th32").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th25")){$("#th33").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th26")){$("#th34").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th27")){$("#th35").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th28")){$("#th36").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th29")){$("#th37").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th30")){$("#th38").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th31")){$("#th39").css("background-color", "green")}

        if (($("#dragtarget10").parent().attr("id") ==  "th32")){$("#th40").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th33")){$("#th41").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th34")){$("#th42").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th35")){$("#th43").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th36")){$("#th44").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th37")){$("#th45").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th38")){$("#th46").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th39")){$("#th47").css("background-color", "green")}

        if (($("#dragtarget10").parent().attr("id") ==  "th40")){$("#th48").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th41")){$("#th49").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th42")){$("#th50").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th43")){$("#th51").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th44")){$("#th52").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th45")){$("#th53").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th46")){$("#th54").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th47")){$("#th55").css("background-color", "green")}

        if (($("#dragtarget10").parent().attr("id") ==  "th48")){$("#th56").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th49")){$("#th57").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th50")){$("#th58").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th51")){$("#th59").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th52")){$("#th60").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th53")){$("#th61").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th54")){$("#th62").css("background-color", "green")}
        if (($("#dragtarget10").parent().attr("id") ==  "th55")){$("#th63").css("background-color", "green")}




    });

    $("#dragtarget11").mouseenter(function () {

        if (($("#dragtarget11").parent().attr("id") ==  "th8")) {$("#th16,#th24").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th9")) {$("#th17,#th25").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th10" )){$("#th18,#th26").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th11")) {$("#th19,#th27").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th12")){$("#th20,#th28").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th13")){$("#th21,#th29").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th14")){$("#th22,#th30").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th15")){$("#th23,#th31").css("background-color", "green")}

        if (($("#dragtarget11").parent().attr("id") ==  "th16")){$("#th24").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th17")){$("#th25").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th18")) {$("#th26").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th19")){$("#th27").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th20")){$("#th28").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th21")){$("#th29").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th22")){$("#th30").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th23")){$("#th31").css("background-color", "green")}

        if (($("#dragtarget11").parent().attr("id") ==  "th24")){$("#th32").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th25")){$("#th33").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th26")){$("#th34").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th27")){$("#th35").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th28")){$("#th36").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th29")){$("#th37").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th30")){$("#th38").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th31")){$("#th39").css("background-color", "green")}

        if (($("#dragtarget11").parent().attr("id") ==  "th32")){$("#th40").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th33")){$("#th41").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th34")){$("#th42").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th35")){$("#th43").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th36")){$("#th44").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th37")){$("#th45").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th38")){$("#th46").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th39")){$("#th47").css("background-color", "green")}

        if (($("#dragtarget11").parent().attr("id") ==  "th40")){$("#th48").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th41")){$("#th49").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th42")){$("#th50").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th43")){$("#th51").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th44")){$("#th52").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th45")){$("#th53").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th46")){$("#th54").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th47")){$("#th55").css("background-color", "green")}

        if (($("#dragtarget11").parent().attr("id") ==  "th48")){$("#th56").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th49")){$("#th57").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th50")){$("#th58").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th51")){$("#th59").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th52")){$("#th60").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th53")){$("#th61").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th54")){$("#th62").css("background-color", "green")}
        if (($("#dragtarget11").parent().attr("id") ==  "th55")){$("#th63").css("background-color", "green")}




    });

    $("#dragtarget12").mouseenter(function () {

        if (($("#dragtarget12").parent().attr("id") ==  "th8")) {$("#th16,#th24").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th9")) {$("#th17,#th25").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th10" )){$("#th18,#th26").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th11")) {$("#th19,#th27").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th12")){$("#th20,#th28").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th13")){$("#th21,#th29").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th14")){$("#th22,#th30").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th15")){$("#th23,#th31").css("background-color", "green")}

        if (($("#dragtarget12").parent().attr("id") ==  "th16")){$("#th24").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th17")){$("#th25").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th18")) {$("#th26").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th19")){$("#th27").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th20")){$("#th28").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th21")){$("#th29").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th22")){$("#th30").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th23")){$("#th31").css("background-color", "green")}

        if (($("#dragtarget12").parent().attr("id") ==  "th24")){$("#th32").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th25")){$("#th33").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th26")){$("#th34").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th27")){$("#th35").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th28")){$("#th36").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th29")){$("#th37").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th30")){$("#th38").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th31")){$("#th39").css("background-color", "green")}

        if (($("#dragtarget12").parent().attr("id") ==  "th32")){$("#th40").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th33")){$("#th41").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th34")){$("#th42").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th35")){$("#th43").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th36")){$("#th44").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th37")){$("#th45").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th38")){$("#th46").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th39")){$("#th47").css("background-color", "green")}

        if (($("#dragtarget12").parent().attr("id") ==  "th40")){$("#th48").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th41")){$("#th49").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th42")){$("#th50").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th43")){$("#th51").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th44")){$("#th52").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th45")){$("#th53").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th46")){$("#th54").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th47")){$("#th55").css("background-color", "green")}

        if (($("#dragtarget12").parent().attr("id") ==  "th48")){$("#th56").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th49")){$("#th57").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th50")){$("#th58").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th51")){$("#th59").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th52")){$("#th60").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th53")){$("#th61").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th54")){$("#th62").css("background-color", "green")}
        if (($("#dragtarget12").parent().attr("id") ==  "th55")){$("#th63").css("background-color", "green")}




    });

    $("#dragtarget13").mouseenter(function () {

        if (($("#dragtarget13").parent().attr("id") ==  "th8")) {$("#th16,#th24").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th9")) {$("#th17,#th25").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th10" )){$("#th18,#th26").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th11")) {$("#th19,#th27").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th12")){$("#th20,#th28").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th13")){$("#th21,#th29").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th14")){$("#th22,#th30").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th15")){$("#th23,#th31").css("background-color", "green")}

        if (($("#dragtarget13").parent().attr("id") ==  "th16")){$("#th24").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th17")){$("#th25").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th18")) {$("#th26").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th19")){$("#th27").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th20")){$("#th28").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th21")){$("#th29").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th22")){$("#th30").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th23")){$("#th31").css("background-color", "green")}

        if (($("#dragtarget13").parent().attr("id") ==  "th24")){$("#th32").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th25")){$("#th33").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th26")){$("#th34").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th27")){$("#th35").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th28")){$("#th36").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th29")){$("#th37").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th30")){$("#th38").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th31")){$("#th39").css("background-color", "green")}

        if (($("#dragtarget13").parent().attr("id") ==  "th32")){$("#th40").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th33")){$("#th41").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th34")){$("#th42").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th35")){$("#th43").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th36")){$("#th44").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th37")){$("#th45").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th38")){$("#th46").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th39")){$("#th47").css("background-color", "green")}

        if (($("#dragtarget13").parent().attr("id") ==  "th40")){$("#th48").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th41")){$("#th49").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th42")){$("#th50").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th43")){$("#th51").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th44")){$("#th52").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th45")){$("#th53").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th46")){$("#th54").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th47")){$("#th55").css("background-color", "green")}

        if (($("#dragtarget13").parent().attr("id") ==  "th48")){$("#th56").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th49")){$("#th57").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th50")){$("#th58").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th51")){$("#th59").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th52")){$("#th60").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th53")){$("#th61").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th54")){$("#th62").css("background-color", "green")}
        if (($("#dragtarget13").parent().attr("id") ==  "th55")){$("#th63").css("background-color", "green")}




    });

    $("#dragtarget14").mouseenter(function () {

        if (($("#dragtarget14").parent().attr("id") ==  "th8")) {$("#th16,#th24").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th9")) {$("#th17,#th25").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th10" )){$("#th18,#th26").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th11")) {$("#th19,#th27").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th12")){$("#th20,#th28").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th13")){$("#th21,#th29").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th14")){$("#th22,#th30").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th15")){$("#th23,#th31").css("background-color", "green")}

        if (($("#dragtarget14").parent().attr("id") ==  "th16")){$("#th24").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th17")){$("#th25").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th18")) {$("#th26").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th19")){$("#th27").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th20")){$("#th28").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th21")){$("#th29").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th22")){$("#th30").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th23")){$("#th31").css("background-color", "green")}

        if (($("#dragtarget14").parent().attr("id") ==  "th24")){$("#th32").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th25")){$("#th33").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th26")){$("#th34").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th27")){$("#th35").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th28")){$("#th36").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th29")){$("#th37").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th30")){$("#th38").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th31")){$("#th39").css("background-color", "green")}

        if (($("#dragtarget14").parent().attr("id") ==  "th32")){$("#th40").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th33")){$("#th41").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th34")){$("#th42").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th35")){$("#th43").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th36")){$("#th44").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th37")){$("#th45").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th38")){$("#th46").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th39")){$("#th47").css("background-color", "green")}

        if (($("#dragtarget14").parent().attr("id") ==  "th40")){$("#th48").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th41")){$("#th49").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th42")){$("#th50").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th43")){$("#th51").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th44")){$("#th52").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th45")){$("#th53").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th46")){$("#th54").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th47")){$("#th55").css("background-color", "green")}

        if (($("#dragtarget14").parent().attr("id") ==  "th48")){$("#th56").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th49")){$("#th57").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th50")){$("#th58").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th51")){$("#th59").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th52")){$("#th60").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th53")){$("#th61").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th54")){$("#th62").css("background-color", "green")}
        if (($("#dragtarget14").parent().attr("id") ==  "th55")){$("#th63").css("background-color", "green")}



    });

    $("#dragtarget15").mouseenter(function () {

        if (($("#dragtarget15").parent().attr("id") ==  "th8")) {$("#th16,#th24").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th9")) {$("#th17,#th25").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th10" )){$("#th18,#th26").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th11")) {$("#th19,#th27").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th12")){$("#th20,#th28").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th13")){$("#th21,#th29").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th14")){$("#th22,#th30").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th15")){$("#th23,#th31").css("background-color", "green")}

        if (($("#dragtarget15").parent().attr("id") ==  "th16")){$("#th24").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th17")){$("#th25").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th18")) {$("#th26").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th19")){$("#th27").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th20")){$("#th28").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th21")){$("#th29").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th22")){$("#th30").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th23")){$("#th31").css("background-color", "green")}

        if (($("#dragtarget15").parent().attr("id") ==  "th24")){$("#th32").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th25")){$("#th33").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th26")){$("#th34").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th27")){$("#th35").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th28")){$("#th36").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th29")){$("#th37").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th30")){$("#th38").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th31")){$("#th39").css("background-color", "green")}

        if (($("#dragtarget15").parent().attr("id") ==  "th32")){$("#th40").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th33")){$("#th41").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th34")){$("#th42").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th35")){$("#th43").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th36")){$("#th44").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th37")){$("#th45").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th38")){$("#th46").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th39")){$("#th47").css("background-color", "green")}

        if (($("#dragtarget15").parent().attr("id") ==  "th40")){$("#th48").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th41")){$("#th49").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th42")){$("#th50").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th43")){$("#th51").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th44")){$("#th52").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th45")){$("#th53").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th46")){$("#th54").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th47")){$("#th55").css("background-color", "green")}

        if (($("#dragtarget15").parent().attr("id") ==  "th48")){$("#th56").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th49")){$("#th57").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th50")){$("#th58").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th51")){$("#th59").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th52")){$("#th60").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th53")){$("#th61").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th54")){$("#th62").css("background-color", "green")}
        if (($("#dragtarget15").parent().attr("id") ==  "th55")){$("#th63").css("background-color", "green")}




    });

    $("#dragtarget16").mouseenter(function () {

        if (($("#dragtarget16").parent().attr("id") ==  "th8")) {$("#th16,#th24").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th9")) {$("#th17,#th25").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th10" )){$("#th18,#th26").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th11")) {$("#th19,#th27").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th12")){$("#th20,#th28").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th13")){$("#th21,#th29").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th14")){$("#th22,#th30").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th15")){$("#th23,#th31").css("background-color", "green")}

        if (($("#dragtarget16").parent().attr("id") ==  "th16")){$("#th24").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th17")){$("#th25").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th18")) {$("#th26").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th19")){$("#th27").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th20")){$("#th28").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th21")){$("#th29").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th22")){$("#th30").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th23")){$("#th31").css("background-color", "green")}

        if (($("#dragtarget16").parent().attr("id") ==  "th24")){$("#th32").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th25")){$("#th33").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th26")){$("#th34").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th27")){$("#th35").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th28")){$("#th36").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th29")){$("#th37").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th30")){$("#th38").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th31")){$("#th39").css("background-color", "green")}

        if (($("#dragtarget16").parent().attr("id") ==  "th32")){$("#th40").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th33")){$("#th41").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th34")){$("#th42").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th35")){$("#th43").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th36")){$("#th44").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th37")){$("#th45").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th38")){$("#th46").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th39")){$("#th47").css("background-color", "green")}

        if (($("#dragtarget16").parent().attr("id") ==  "th40")){$("#th48").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th41")){$("#th49").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th42")){$("#th50").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th43")){$("#th51").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th44")){$("#th52").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th45")){$("#th53").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th46")){$("#th54").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th47")){$("#th55").css("background-color", "green")}

        if (($("#dragtarget16").parent().attr("id") ==  "th48")){$("#th56").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th49")){$("#th57").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th50")){$("#th58").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th51")){$("#th59").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th52")){$("#th60").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th53")){$("#th61").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th54")){$("#th62").css("background-color", "green")}
        if (($("#dragtarget16").parent().attr("id") ==  "th55")){$("#th63").css("background-color", "green")}

    });


//black king
    $("#dragtarget4").mouseenter(function () {

        if (($("#dragtarget4").parent().attr("id") == "th")) {
            $("#th1,#th8,#th9").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th7")) {
            $("#th6,#th14,#th15").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th56")) {
            $("#th48,#th49,#th57").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th63")) {
            $("#th54,#th55,#th62").css("background-color", "green")
        }

        if (($("#dragtarget4").parent().attr("id") == "th1")) {
            $("#th,#th2,#th8,#th9,#th10").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th2")) {
            $("#th1,#th3,#th11,#th9,#th10").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th3")) {
            $("#th4,#th2,#th11,#th12,#th10").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th4")) {
            $("#th3,#th5,#th11,#th12,#th13").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th5")) {
            $("#th4,#th6,#th12,#th13,#th14").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th6")) {
            $("#th5,#th7,#th13,#th14,#th15").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th8")) {
            $("#th,#th1,#th16,#th9,#th17").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th16")) {
            $("#th8,#th9,#th17,#th24,#th25").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th24")) {
            $("#th16,#th17,#th25,#th32,#th33").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th32")) {
            $("#th24,#th25,#th33,#th40,#th41").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th40")) {
            $("#th32,#th33,#th41,#th48,#th49").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th48")) {
            $("#th40,#th41,#th49,#th56,#th57").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th15")) {
            $("#th7,#th6,#th14,#th22,#th23").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th23")) {
            $("#th14,#th15,#th22,#th30,#th31").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th31")) {
            $("#th22,#th23,#th30,#th38,#th39").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th39")) {
            $("#th30,#th31,#th38,#th46,#th47").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th47")) {
            $("#th38,#th39,#th46,#th54,#th55").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th55")) {
            $("#th46,#th47,#th54,#th62,#th63").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th57")) {
            $("#th48,#th49,#th50,#th56,#th58").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th58")) {
            $("#th49,#th50,#th51,#th57,#th59").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th59")) {
            $("#th50,#th51,#th52,#th58,#th60").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th60")) {
            $("#th51,#th52,#th53,#th59,#th61").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th61")) {
            $("#th52,#th53,#th54,#th60,#th62").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th62")) {
            $("#th53,#th54,#th55,#th61,#th63").css("background-color", "green")
        }

        if (($("#dragtarget4").parent().attr("id") == "th9")) {
            $("#th,#th1,#th2,#th8,#th10,#th16,#th17,#th18").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th10")) {
            $("#th1,#th2,#th3,#th9,#th11,#th18,#th17,#th19").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th11")) {
            $("#th2,#th3,#th4,#th10,#th12,#th19,#th18,#th20").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th12")) {
            $("#th3,#th4,#th5,#th11,#th13,#th20,#th19,#th21").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th13")) {
            $("#th4,#th5,#th6,#th12,#th14,#th21,#th20,#th22").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th14")) {
            $("#th5,#th6,#th7,#th13,#th15,#th22,#th21,#th23").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th17")) {
            $("#th8,#th9,#th10,#th16,#th18,#th25,#th24,#th26").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th18")) {
            $("#th9,#th10,#th11,#th17,#th19,#th26,#th25,#th27").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th19")) {
            $("#th10,#th11,#th12,#th18,#th20,#th27,#th26,#th28").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th20")) {
            $("#th11,#th12,#th13,#th19,#th21,#th28,#th27,#th29").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th21")) {
            $("#th12,#th13,#th14,#th20,#th22,#th29,#th28,#th30").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th22")) {
            $("#th13,#th14,#th15,#th21,#th23,#th30,#th29,#th31").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th25")) {
            $("#th16,#th17,#th18,#th24,#th26,#th33,#th32,#th34").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th26")) {
            $("#th17,#th18,#th19,#th25,#th27,#th34,#th33,#th35").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th27")) {
            $("#th18,#th19,#th20,#th26,#th28,#th35,#th34,#th36").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th28")) {
            $("#th19,#th20,#th21,#th27,#th29,#th36,#th35,#th37").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th29")) {
            $("#th20,#th21,#th22,#th28,#th30,#th37,#th36,#th38").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th30")) {
            $("#th21,#th22,#th23,#th29,#th31,#th38,#th37,#th39").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th33")) {
            $("#th24,#th25,#th26,#th32,#th34,#th41,#th40,#th42").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th34")) {
            $("#th25,#th26,#th27,#th33,#th35,#th42,#th41,#th43").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th35")) {
            $("#th26,#th27,#th28,#th34,#th36,#th43,#th42,#th44").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th36")) {
            $("#th27,#th28,#th29,#th35,#th37,#th44,#th43,#th45").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th37")) {
            $("#th28,#th29,#th30,#th36,#th38,#th45,#th44,#th46").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th38")) {
            $("#th29,#th30,#th31,#th37,#th39,#th46,#th45,#th47").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th41")) {
            $("#th32,#th33,#th34,#th40,#th42,#th49,#th48,#th50").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th42")) {
            $("#th33,#th34,#th35,#th41,#th43,#th50,#th49,#th51").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th43")) {
            $("#th34,#th35,#th36,#th42,#th44,#th51,#th50,#th52").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th44")) {
            $("#th35,#th36,#th37,#th43,#th45,#th52,#th51,#th53").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th45")) {
            $("#th36,#th37,#th38,#th44,#th46,#th53,#th52,#th54").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th46")) {
            $("#th37,#th38,#th39,#th45,#th47,#th54,#th53,#th55").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th49")) {
            $("#th40,#th41,#th42,#th48,#th50,#th57,#th56,#th58").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th50")) {
            $("#th41,#th42,#th43,#th49,#th51,#th58,#th57,#th59").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th51")) {
            $("#th42,#th43,#th44,#th50,#th52,#th59,#th58,#th60").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th52")) {
            $("#th43,#th44,#th45,#th51,#th53,#th60,#th59,#th61").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th53")) {
            $("#th44,#th45,#th46,#th52,#th54,#th61,#th60,#th62").css("background-color", "green")
        }
        if (($("#dragtarget4").parent().attr("id") == "th54")) {
            $("#th45,#th46,#th47,#th53,#th55,#th62,#th61,#th63").css("background-color", "green")
        }
    });










    // Black Rook 1


        $("#dragtarget25").mouseenter(function () {
            if (($("#dragtarget25").parent().attr("id") == "th") || ($("#dragtarget25").parent().attr("id") == "th1") || ($("#dragtarget25").parent().attr("id") == "th2") || ($("#dragtarget25").parent().attr("id") == "th3") || ($("#dragtarget25").parent().attr("id") == "th4") || ($("#dragtarget25").parent().attr("id") == "th5") || ($("#dragtarget25").parent().attr("id") == "th6") || ($("#dragtarget25").parent().attr("id") == "th7"))
            {$("#th,#th1,#th2,#th3,#th4,#th5,#th6,#th7").css("background-color", "green")}

            if (($("#dragtarget25").parent().attr("id") == "th8") || ($("#dragtarget25").parent().attr("id") == "th9") || ($("#dragtarget25").parent().attr("id") == "th10") || ($("#dragtarget25").parent().attr("id") == "th11") || ($("#dragtarget25").parent().attr("id") == "th12") || ($("#dragtarget25").parent().attr("id") == "th13") || ($("#dragtarget25").parent().attr("id") == "th14") || ($("#dragtarget25").parent().attr("id") == "th15") )
            {$("#th8,#th9,#th10,#th11,#th12,#th13,#th14,#th15").css("background-color", "green")}

            if (($("#dragtarget25").parent().attr("id") == "th16") || ($("#dragtarget25").parent().attr("id") == "th17") || ($("#dragtarget25").parent().attr("id") == "th18") || ($("#dragtarget25").parent().attr("id") == "th19") || ($("#dragtarget25").parent().attr("id") == "th20") || ($("#dragtarget25").parent().attr("id") == "th21") || ($("#dragtarget25").parent().attr("id") == "th22") || ($("#dragtarget25").parent().attr("id") == "th23") )
            {$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23").css("background-color", "green")}

            if (($("#dragtarget25").parent().attr("id") == "th24") || ($("#dragtarget25").parent().attr("id") == "th25") || ($("#dragtarget25").parent().attr("id") == "th26") || ($("#dragtarget25").parent().attr("id") == "th27") || ($("#dragtarget25").parent().attr("id") == "th28") || ($("#dragtarget25").parent().attr("id") == "th29") || ($("#dragtarget25").parent().attr("id") == "th30") || ($("#dragtarget25").parent().attr("id") == "th31") )
            {$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31").css("background-color", "green")}

            if (($("#dragtarget25").parent().attr("id") == "th32") || ($("#dragtarget25").parent().attr("id") == "th33") || ($("#dragtarget25").parent().attr("id") == "th34") || ($("#dragtarget25").parent().attr("id") == "th35") || ($("#dragtarget25").parent().attr("id") == "th36") || ($("#dragtarget25").parent().attr("id") == "th37") || ($("#dragtarget25").parent().attr("id") == "th38") || ($("#dragtarget25").parent().attr("id") == "th39") )
            {$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39").css("background-color", "green")}

            if (($("#dragtarget25").parent().attr("id") == "th40") || ($("#dragtarget25").parent().attr("id") == "th41") || ($("#dragtarget25").parent().attr("id") == "th42") || ($("#dragtarget25").parent().attr("id") == "th43") || ($("#dragtarget25").parent().attr("id") == "th44") || ($("#dragtarget25").parent().attr("id") == "th45") || ($("#dragtarget25").parent().attr("id") == "th46") || ($("#dragtarget25").parent().attr("id") == "th47") )
            {$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47").css("background-color", "green")}

            if (($("#dragtarget25").parent().attr("id") == "th48") || ($("#dragtarget25").parent().attr("id") == "th49") || ($("#dragtarget25").parent().attr("id") == "th50") || ($("#dragtarget25").parent().attr("id") == "th51") || ($("#dragtarget25").parent().attr("id") == "th52") || ($("#dragtarget25").parent().attr("id") == "th53") || ($("#dragtarget25").parent().attr("id") == "th54") || ($("#dragtarget25").parent().attr("id") == "th55") )
            {$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55").css("background-color", "green")}

            if (($("#dragtarget25").parent().attr("id") == "th56") || ($("#dragtarget25").parent().attr("id") == "th57") || ($("#dragtarget25").parent().attr("id") == "th58") || ($("#dragtarget25").parent().attr("id") == "th59") || ($("#dragtarget25").parent().attr("id") == "th60") || ($("#dragtarget25").parent().attr("id") == "th61") || ($("#dragtarget25").parent().attr("id") == "th62") || ($("#dragtarget25").parent().attr("id") == "th63") )
            {$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63").css("background-color", "green")}

            if (($("#dragtarget25").parent().attr("id") == "th") || ($("#dragtarget25").parent().attr("id") == "th8") || ($("#dragtarget25").parent().attr("id") == "th16") || ($("#dragtarget25").parent().attr("id") == "th24") || ($("#dragtarget25").parent().attr("id") == "th32") || ($("#dragtarget25").parent().attr("id") == "th40") || ($("#dragtarget25").parent().attr("id") == "th48") || ($("#dragtarget25").parent().attr("id") == "th56") )
            {$("#th,#th8,#th16,#th24,#th32,#th40,#th48,#th56").css("background-color", "green")}

            if (($("#dragtarget25").parent().attr("id") == "th1") || ($("#dragtarget25").parent().attr("id") == "th9") || ($("#dragtarget25").parent().attr("id") == "th17") || ($("#dragtarget25").parent().attr("id") == "th25") || ($("#dragtarget25").parent().attr("id") == "th33") || ($("#dragtarget25").parent().attr("id") == "th41") || ($("#dragtarget25").parent().attr("id") == "th49") || ($("#dragtarget25").parent().attr("id") == "th57") )
            {$("#th1,#th9,#th17,#th25,#th33,#th41,#th49,#th57").css("background-color", "green")}

            if (($("#dragtarget25").parent().attr("id") == "th2") || ($("#dragtarget25").parent().attr("id") == "th10") || ($("#dragtarget25").parent().attr("id") == "th18") || ($("#dragtarget25").parent().attr("id") == "th26") || ($("#dragtarget25").parent().attr("id") == "th34") || ($("#dragtarget25").parent().attr("id") == "th42") || ($("#dragtarget25").parent().attr("id") == "th50") || ($("#dragtarget25").parent().attr("id") == "th58") )
            {$("#th2,#th10,#th18,#th26,#th34,#th42,#th50,#th58").css("background-color", "green")}

            if (($("#dragtarget25").parent().attr("id") == "th3") || ($("#dragtarget25").parent().attr("id") == "th11") || ($("#dragtarget25").parent().attr("id") == "th19") || ($("#dragtarget25").parent().attr("id") == "th27") || ($("#dragtarget25").parent().attr("id") == "th35") || ($("#dragtarget25").parent().attr("id") == "th43") || ($("#dragtarget25").parent().attr("id") == "th51") || ($("#dragtarget25").parent().attr("id") == "th59") )
            {$("#th3,#th11,#th19,#th27,#th35,#th43,#th51,#th59").css("background-color", "green")}

            if (($("#dragtarget25").parent().attr("id") == "th4") || ($("#dragtarget25").parent().attr("id") == "th12") || ($("#dragtarget25").parent().attr("id") == "th20") || ($("#dragtarget25").parent().attr("id") == "th28") || ($("#dragtarget25").parent().attr("id") == "th36") || ($("#dragtarget25").parent().attr("id") == "th44") || ($("#dragtarget25").parent().attr("id") == "th52") || ($("#dragtarget25").parent().attr("id") == "th60") )
            {$("#th4,#th12,#th20,#th28,#th36,#th44,#th52,#th60").css("background-color", "green")}

            if (($("#dragtarget25").parent().attr("id") == "th5") || ($("#dragtarget25").parent().attr("id") == "th13") || ($("#dragtarget25").parent().attr("id") == "th21") || ($("#dragtarget25").parent().attr("id") == "th29") || ($("#dragtarget25").parent().attr("id") == "th37") || ($("#dragtarget25").parent().attr("id") == "th45") || ($("#dragtarget25").parent().attr("id") == "th53") || ($("#dragtarget25").parent().attr("id") == "th61") )
            {$("#th5,#th13,#th21,#th29,#th37,#th45,#th53,#th61").css("background-color", "green")}

            if (($("#dragtarget25").parent().attr("id") == "th6") || ($("#dragtarget25").parent().attr("id") == "th14") || ($("#dragtarget25").parent().attr("id") == "th22") || ($("#dragtarget25").parent().attr("id") == "th30") || ($("#dragtarget25").parent().attr("id") == "th38") || ($("#dragtarget25").parent().attr("id") == "th46") || ($("#dragtarget25").parent().attr("id") == "th54") || ($("#dragtarget25").parent().attr("id") == "th62") )
            {$("#th6,#th14,#th22,#th30,#th38,#th46,#th54,#th62").css("background-color", "green")}

            if (($("#dragtarget25").parent().attr("id") == "th7") || ($("#dragtarget25").parent().attr("id") == "th15") || ($("#dragtarget25").parent().attr("id") == "th23") || ($("#dragtarget25").parent().attr("id") == "th31") || ($("#dragtarget25").parent().attr("id") == "th39") || ($("#dragtarget25").parent().attr("id") == "th47") || ($("#dragtarget25").parent().attr("id") == "th55") || ($("#dragtarget25").parent().attr("id") == "th63") )
            {$("#th7,#th15,#th23,#th31,#th39,#th47,#th55,#th63").css("background-color", "green")}

        });



//Black Rook 2
        $("#dragtarget32").mouseenter(function () {
            if (($("#dragtarget32").parent().attr("id") == "th") || ($("#dragtarget32").parent().attr("id") == "th1") || ($("#dragtarget32").parent().attr("id") == "th2") || ($("#dragtarget32").parent().attr("id") == "th3") || ($("#dragtarget32").parent().attr("id") == "th4") || ($("#dragtarget32").parent().attr("id") == "th5") || ($("#dragtarget32").parent().attr("id") == "th6") || ($("#dragtarget32").parent().attr("id") == "th7"))
            {$("#th,#th1,#th2,#th3,#th4,#th5,#th6,#th7").css("background-color", "green")}

            if (($("#dragtarget32").parent().attr("id") == "th8") || ($("#dragtarget32").parent().attr("id") == "th9") || ($("#dragtarget32").parent().attr("id") == "th10") || ($("#dragtarget32").parent().attr("id") == "th11") || ($("#dragtarget32").parent().attr("id") == "th12") || ($("#dragtarget32").parent().attr("id") == "th13") || ($("#dragtarget32").parent().attr("id") == "th14") || ($("#dragtarget32").parent().attr("id") == "th15") )
            {$("#th8,#th9,#th10,#th11,#th12,#th13,#th14,#th15").css("background-color", "green")}

            if (($("#dragtarget32").parent().attr("id") == "th16") || ($("#dragtarget32").parent().attr("id") == "th17") || ($("#dragtarget32").parent().attr("id") == "th18") || ($("#dragtarget32").parent().attr("id") == "th19") || ($("#dragtarget32").parent().attr("id") == "th20") || ($("#dragtarget32").parent().attr("id") == "th21") || ($("#dragtarget32").parent().attr("id") == "th22") || ($("#dragtarget32").parent().attr("id") == "th23") )
            {$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23").css("background-color", "green")}

            if (($("#dragtarget32").parent().attr("id") == "th24") || ($("#dragtarget32").parent().attr("id") == "th25") || ($("#dragtarget32").parent().attr("id") == "th26") || ($("#dragtarget32").parent().attr("id") == "th27") || ($("#dragtarget32").parent().attr("id") == "th28") || ($("#dragtarget32").parent().attr("id") == "th29") || ($("#dragtarget32").parent().attr("id") == "th30") || ($("#dragtarget32").parent().attr("id") == "th31") )
            {$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31").css("background-color", "green")}

            if (($("#dragtarget32").parent().attr("id") == "th32") || ($("#dragtarget32").parent().attr("id") == "th33") || ($("#dragtarget32").parent().attr("id") == "th34") || ($("#dragtarget32").parent().attr("id") == "th35") || ($("#dragtarget32").parent().attr("id") == "th36") || ($("#dragtarget32").parent().attr("id") == "th37") || ($("#dragtarget32").parent().attr("id") == "th38") || ($("#dragtarget32").parent().attr("id") == "th39") )
            {$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39").css("background-color", "green")}

            if (($("#dragtarget32").parent().attr("id") == "th40") || ($("#dragtarget32").parent().attr("id") == "th41") || ($("#dragtarget32").parent().attr("id") == "th42") || ($("#dragtarget32").parent().attr("id") == "th43") || ($("#dragtarget32").parent().attr("id") == "th44") || ($("#dragtarget32").parent().attr("id") == "th45") || ($("#dragtarget32").parent().attr("id") == "th46") || ($("#dragtarget32").parent().attr("id") == "th47") )
            {$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47").css("background-color", "green")}

            if (($("#dragtarget32").parent().attr("id") == "th48") || ($("#dragtarget32").parent().attr("id") == "th49") || ($("#dragtarget32").parent().attr("id") == "th50") || ($("#dragtarget32").parent().attr("id") == "th51") || ($("#dragtarget32").parent().attr("id") == "th52") || ($("#dragtarget32").parent().attr("id") == "th53") || ($("#dragtarget32").parent().attr("id") == "th54") || ($("#dragtarget32").parent().attr("id") == "th55") )
            {$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55").css("background-color", "green")}

            if (($("#dragtarget32").parent().attr("id") == "th56") || ($("#dragtarget32").parent().attr("id") == "th57") || ($("#dragtarget32").parent().attr("id") == "th58") || ($("#dragtarget32").parent().attr("id") == "th59") || ($("#dragtarget32").parent().attr("id") == "th60") || ($("#dragtarget32").parent().attr("id") == "th61") || ($("#dragtarget32").parent().attr("id") == "th62") || ($("#dragtarget32").parent().attr("id") == "th63") )
            {$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63").css("background-color", "green")}

            if (($("#dragtarget32").parent().attr("id") == "th") || ($("#dragtarget32").parent().attr("id") == "th8") || ($("#dragtarget32").parent().attr("id") == "th16") || ($("#dragtarget32").parent().attr("id") == "th24") || ($("#dragtarget32").parent().attr("id") == "th32") || ($("#dragtarget32").parent().attr("id") == "th40") || ($("#dragtarget32").parent().attr("id") == "th48") || ($("#dragtarget32").parent().attr("id") == "th56") )
            {$("#th,#th8,#th16,#th24,#th32,#th40,#th48,#th56").css("background-color", "green")}

            if (($("#dragtarget32").parent().attr("id") == "th1") || ($("#dragtarget32").parent().attr("id") == "th9") || ($("#dragtarget32").parent().attr("id") == "th17") || ($("#dragtarget32").parent().attr("id") == "th25") || ($("#dragtarget32").parent().attr("id") == "th33") || ($("#dragtarget32").parent().attr("id") == "th41") || ($("#dragtarget32").parent().attr("id") == "th49") || ($("#dragtarget32").parent().attr("id") == "th57") )
            {$("#th1,#th9,#th17,#th25,#th33,#th41,#th49,#th57").css("background-color", "green")}

            if (($("#dragtarget32").parent().attr("id") == "th2") || ($("#dragtarget32").parent().attr("id") == "th10") || ($("#dragtarget32").parent().attr("id") == "th18") || ($("#dragtarget32").parent().attr("id") == "th26") || ($("#dragtarget32").parent().attr("id") == "th34") || ($("#dragtarget32").parent().attr("id") == "th42") || ($("#dragtarget32").parent().attr("id") == "th50") || ($("#dragtarget32").parent().attr("id") == "th58") )
            {$("#th2,#th10,#th18,#th26,#th34,#th42,#th50,#th58").css("background-color", "green")}

            if (($("#dragtarget32").parent().attr("id") == "th3") || ($("#dragtarget32").parent().attr("id") == "th11") || ($("#dragtarget32").parent().attr("id") == "th19") || ($("#dragtarget32").parent().attr("id") == "th27") || ($("#dragtarget32").parent().attr("id") == "th35") || ($("#dragtarget32").parent().attr("id") == "th43") || ($("#dragtarget32").parent().attr("id") == "th51") || ($("#dragtarget32").parent().attr("id") == "th59") )
            {$("#th3,#th11,#th19,#th27,#th35,#th43,#th51,#th59").css("background-color", "green")}

            if (($("#dragtarget32").parent().attr("id") == "th4") || ($("#dragtarget32").parent().attr("id") == "th12") || ($("#dragtarget32").parent().attr("id") == "th20") || ($("#dragtarget32").parent().attr("id") == "th28") || ($("#dragtarget32").parent().attr("id") == "th36") || ($("#dragtarget32").parent().attr("id") == "th44") || ($("#dragtarget32").parent().attr("id") == "th52") || ($("#dragtarget32").parent().attr("id") == "th60") )
            {$("#th4,#th12,#th20,#th28,#th36,#th44,#th52,#th60").css("background-color", "green")}

            if (($("#dragtarget32").parent().attr("id") == "th5") || ($("#dragtarget32").parent().attr("id") == "th13") || ($("#dragtarget32").parent().attr("id") == "th21") || ($("#dragtarget32").parent().attr("id") == "th29") || ($("#dragtarget32").parent().attr("id") == "th37") || ($("#dragtarget32").parent().attr("id") == "th45") || ($("#dragtarget32").parent().attr("id") == "th53") || ($("#dragtarget32").parent().attr("id") == "th61") )
            {$("#th5,#th13,#th21,#th29,#th37,#th45,#th53,#th61").css("background-color", "green")}

            if (($("#dragtarget32").parent().attr("id") == "th6") || ($("#dragtarget32").parent().attr("id") == "th14") || ($("#dragtarget32").parent().attr("id") == "th22") || ($("#dragtarget32").parent().attr("id") == "th30") || ($("#dragtarget32").parent().attr("id") == "th38") || ($("#dragtarget32").parent().attr("id") == "th46") || ($("#dragtarget32").parent().attr("id") == "th54") || ($("#dragtarget32").parent().attr("id") == "th62") )
            {$("#th6,#th14,#th22,#th30,#th38,#th46,#th54,#th62").css("background-color", "green")}

            if (($("#dragtarget32").parent().attr("id") == "th7") || ($("#dragtarget32").parent().attr("id") == "th15") || ($("#dragtarget32").parent().attr("id") == "th23") || ($("#dragtarget32").parent().attr("id") == "th31") || ($("#dragtarget32").parent().attr("id") == "th39") || ($("#dragtarget32").parent().attr("id") == "th47") || ($("#dragtarget32").parent().attr("id") == "th55") || ($("#dragtarget32").parent().attr("id") == "th63") )
            {$("#th7,#th15,#th23,#th31,#th39,#th47,#th55,#th63").css("background-color", "green")}

        });



//Black Bishop 1
        $("#dragtarget30").mouseenter(function () {
            if ($("#dragtarget30").parent().attr("id") == "th")
            {$("#th").css("background-color", "green")}

            if (($("#dragtarget30").parent().attr("id") == "th2") || ($("#dragtarget30").parent().attr("id") == "th9") || ($("#dragtarget3").parent().attr("id") == "th16") )
            {$("#th2,#th9,#th16").css("background-color", "green")}

            if (($("#dragtarget30").parent().attr("id") == "th4") || ($("#dragtarget30").parent().attr("id") == "th11") || ($("#dragtarget3").parent().attr("id") == "th18") || ($("#dragtarget3").parent().attr("id") == "th25") || ($("#dragtarget3").parent().attr("id") == "th32")  )
            {$("#th4,#th11,#th18,#th25,#th32").css("background-color", "green")}

            if (($("#dragtarget30").parent().attr("id") == "th6") || ($("#dragtarget30").parent().attr("id") == "th13") || ($("#dragtarget3").parent().attr("id") == "th20") || ($("#dragtarget3").parent().attr("id") == "th27") || ($("#dragtarget3").parent().attr("id") == "th34") || ($("#dragtarget3").parent().attr("id") == "th41") || ($("#dragtarget3").parent().attr("id") == "th48") )
            {$("#th6,#th13,#th20,#th27,#th34,#th41,#th48").css("background-color", "green")}

            if (($("#dragtarget30").parent().attr("id") == "th15") || ($("#dragtarget30").parent().attr("id") == "th22") || ($("#dragtarget3").parent().attr("id") == "th29") || ($("#dragtarget3").parent().attr("id") == "th36") || ($("#dragtarget3").parent().attr("id") == "th43") || ($("#dragtarget3").parent().attr("id") == "th50") || ($("#dragtarget3").parent().attr("id") == "th57") )
            {$("#th15,#th22,#th29,#th36,#th43,#th50,#th57").css("background-color", "green")}

            if (($("#dragtarget30").parent().attr("id") == "th31") || ($("#dragtarget30").parent().attr("id") == "th38") || ($("#dragtarget3").parent().attr("id") == "th45") || ($("#dragtarget3").parent().attr("id") == "th52") || ($("#dragtarget3").parent().attr("id") == "th59")  )
            {$("#th31,#th38,#th45,#th52,#th59").css("background-color", "green")}

            if (($("#dragtarget30").parent().attr("id") == "th47") || ($("#dragtarget30").parent().attr("id") == "th54") || ($("#dragtarget30").parent().attr("id") == "th61") )
            {$("#th47,#th54,#th61").css("background-color", "green")}

            if ($("#dragtarget30").parent().attr("id") == "th63")
            {$("#th63").css("background-color", "green")}

            if (($("#dragtarget30").parent().attr("id") == "th6") || ($("#dragtarget30").parent().attr("id") == "th15") )
            {$("#th6,#th15").css("background-color", "green")}

            if (($("#dragtarget30").parent().attr("id") == "th4") || ($("#dragtarget30").parent().attr("id") == "th13") || ($("#dragtarget30").parent().attr("id") == "th22") || ($("#dragtarget30").parent().attr("id") == "th31"))
            {$("#th4,#th13,#th22,#th31").css("background-color", "green")}

            if (($("#dragtarget30").parent().attr("id") == "th2") || ($("#dragtarget30").parent().attr("id") == "th11") || ($("#dragtarget30").parent().attr("id") == "th20") || ($("#dragtarget30").parent().attr("id") == "th29") || ($("#dragtarget30").parent().attr("id") == "th38") || ($("#dragtarget30").parent().attr("id") == "th47")  )
            {$("#th2,#th11,#th20,#th29,#th38,#th47").css("background-color", "green")}

            if (($("#dragtarget30").parent().attr("id") == "th") || ($("#dragtarget30").parent().attr("id") == "th9") || ($("#dragtarget30").parent().attr("id") == "th18") || ($("#dragtarget30").parent().attr("id") == "th27") || ($("#dragtarget30").parent().attr("id") == "th36") || ($("#dragtarget30").parent().attr("id") == "th45") || ($("#dragtarget30").parent().attr("id") == "th54") || ($("#dragtarget30").parent().attr("id") == "th63") )
            {$("#th,#th9,#th18,#th27,#th36,#th45,#th54,#th63").css("background-color", "green")}

            if (($("#dragtarget30").parent().attr("id") == "th16") || ($("#dragtarget30").parent().attr("id") == "th25") || ($("#dragtarget30").parent().attr("id") == "th34") || ($("#dragtarget30").parent().attr("id") == "th43") || ($("#dragtarget30").parent().attr("id") == "th52") || ($("#dragtarget30").parent().attr("id") == "th61")  )
            {$("#th16,#th25,#th34,#th43,#th52,#th61").css("background-color", "green")}

            if (($("#dragtarget30").parent().attr("id") == "th32") || ($("#dragtarget30").parent().attr("id") == "th41") || ($("#dragtarget30").parent().attr("id") == "th50") || ($("#dragtarget30").parent().attr("id") == "th59"))
            {$("#th32,#th41,#th50,#th59").css("background-color", "green")}

            if (($("#dragtarget30").parent().attr("id") == "th48") || ($("#dragtarget30").parent().attr("id") == "th57") )
            {$("#th48,#th57").css("background-color", "green")}

        });



//Black Bishop 2
        $("#dragtarget27").mouseenter(function () {


            if (($("#dragtarget27").parent().attr("id") == "th1") || ($("#dragtarget27").parent().attr("id") == "th8") )
            {$("#th1,#th8").css("background-color", "green")}

            if (($("#dragtarget27").parent().attr("id") == "th3") || ($("#dragtarget27").parent().attr("id") == "th10") || ($("#dragtarget27").parent().attr("id") == "th17") || ($("#dragtarget27").parent().attr("id") == "th24"))
            {$("#th3,#th10,#th17,#th24").css("background-color", "green")}

            if (($("#dragtarget27").parent().attr("id") == "th5") || ($("#dragtarget27").parent().attr("id") == "th12") || ($("#dragtarget27").parent().attr("id") == "th19") || ($("#dragtarget27").parent().attr("id") == "th26") || ($("#dragtarget27").parent().attr("id") == "th33") || ($("#dragtarget27").parent().attr("id") == "th40")  )
            {$("#th5,#th12,#th19,#th26,#th33,#th40").css("background-color", "green")}

            if (($("#dragtarget27").parent().attr("id") == "th7") || ($("#dragtarget27").parent().attr("id") == "th14") || ($("#dragtarget27").parent().attr("id") == "th21") || ($("#dragtarget27").parent().attr("id") == "th28") || ($("#dragtarget27").parent().attr("id") == "th35") || ($("#dragtarget27").parent().attr("id") == "th42") || ($("#dragtarget27").parent().attr("id") == "th49") || ($("#dragtarget27").parent().attr("id") == "th56") )
            {$("#th7,#th14,#th21,#th28,#th35,#th42,#th49,#th56").css("background-color", "green")}

            if (($("#dragtarget27").parent().attr("id") == "th23") || ($("#dragtarget27").parent().attr("id") == "th30") || ($("#dragtarget27").parent().attr("id") == "th37") || ($("#dragtarget27").parent().attr("id") == "th44") || ($("#dragtarget27").parent().attr("id") == "th51") || ($("#dragtarget27").parent().attr("id") == "th58")  )
            {$("#th23,#th30,#th37,#th44,#th51,#th58").css("background-color", "green")}

            if (($("#dragtarget27").parent().attr("id") == "th39") || ($("#dragtarget27").parent().attr("id") == "th46") || ($("#dragtarget27").parent().attr("id") == "th53") || ($("#dragtarget27").parent().attr("id") == "th60"))
            {$("#th39,#th46,#th53,#th60").css("background-color", "green")}

            if (($("#dragtarget27").parent().attr("id") == "th55") || ($("#dragtarget27").parent().attr("id") == "th62") )
            {$("#th55,#th62").css("background-color", "green")}

            if ($("#dragtarget27").parent().attr("id") == "th7")
            {$("#th7").css("background-color", "green")}

            if (($("#dragtarget27").parent().attr("id") == "th5") || ($("#dragtarget27").parent().attr("id") == "th14") || ($("#dragtarget27").parent().attr("id") == "th23") )
            {$("#th5,#th14,#th23").css("background-color", "green")}

            if (($("#dragtarget27").parent().attr("id") == "th3") || ($("#dragtarget27").parent().attr("id") == "th12") || ($("#dragtarget27").parent().attr("id") == "th21") || ($("#dragtarget27").parent().attr("id") == "th30") || ($("#dragtarget27").parent().attr("id") == "th39")  )
            {$("#th3,#th12,#th21,#th30,#th39").css("background-color", "green")}

            if (($("#dragtarget27").parent().attr("id") == "th1") || ($("#dragtarget27").parent().attr("id") == "th10") || ($("#dragtarget27").parent().attr("id") == "th19") || ($("#dragtarget27").parent().attr("id") == "th28") || ($("#dragtarget27").parent().attr("id") == "th37") || ($("#dragtarget27").parent().attr("id") == "th46") || ($("#dragtarget27").parent().attr("id") == "th55") )
            {$("#th1,#th10,#th19,#th28,#th37,#th46,#th55").css("background-color", "green")}

            if (($("#dragtarget27").parent().attr("id") == "th8") || ($("#dragtarget27").parent().attr("id") == "th17") || ($("#dragtarget27").parent().attr("id") == "th26") || ($("#dragtarget27").parent().attr("id") == "th35") || ($("#dragtarget27").parent().attr("id") == "th43") || ($("#dragtarget27").parent().attr("id") == "th53") || ($("#dragtarget27").parent().attr("id") == "th62") )
            {$("#th8,#th17,#th26,#th35,#th44,#th53,#th62").css("background-color", "green")}

            if (($("#dragtarget27").parent().attr("id") == "th24") || ($("#dragtarget27").parent().attr("id") == "th33") || ($("#dragtarget27").parent().attr("id") == "th42") || ($("#dragtarget27").parent().attr("id") == "th51") || ($("#dragtarget27").parent().attr("id") == "th60")  )
            {$("#th24,#th33,#th42,#th51,#th60").css("background-color", "green")}

            if (($("#dragtarget27").parent().attr("id") == "th40") || ($("#dragtarget27").parent().attr("id") == "th49") || ($("#dragtarget27").parent().attr("id") == "th58") )
            {$("#th40,#th49,#th58").css("background-color", "green")}

            if ($("#dragtarget27").parent().attr("id") == "th56")
            {$("#th56").css("background-color", "green")}
        });



//Black Queen
        $("#dragtarget28").mouseenter(function () {
            if (($("#dragtarget28").parent().attr("id") == "th") || ($("#dragtarget28").parent().attr("id") == "th1") || ($("#dragtarget28").parent().attr("id") == "th2") || ($("#dragtarget28").parent().attr("id") == "th3") || ($("#dragtarget28").parent().attr("id") == "th4") || ($("#dragtarget28").parent().attr("id") == "th5") || ($("#dragtarget28").parent().attr("id") == "th6") || ($("#dragtarget28").parent().attr("id") == "th7"))
            {$("#th,#th1,#th2,#th3,#th4,#th5,#th6,#th7").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th8") || ($("#dragtarget28").parent().attr("id") == "th9") || ($("#dragtarget28").parent().attr("id") == "th10") || ($("#dragtarget28").parent().attr("id") == "th11") || ($("#dragtarget28").parent().attr("id") == "th12") || ($("#dragtarget28").parent().attr("id") == "th13") || ($("#dragtarget28").parent().attr("id") == "th14") || ($("#dragtarget28").parent().attr("id") == "th15") )
            {$("#th8,#th9,#th10,#th11,#th12,#th13,#th14,#th15").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th16") || ($("#dragtarget28").parent().attr("id") == "th17") || ($("#dragtarget28").parent().attr("id") == "th18") || ($("#dragtarget28").parent().attr("id") == "th19") || ($("#dragtarget28").parent().attr("id") == "th20") || ($("#dragtarget28").parent().attr("id") == "th21") || ($("#dragtarget28").parent().attr("id") == "th22") || ($("#dragtarget28").parent().attr("id") == "th23") )
            {$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th24") || ($("#dragtarget28").parent().attr("id") == "th25") || ($("#dragtarget28").parent().attr("id") == "th26") || ($("#dragtarget28").parent().attr("id") == "th27") || ($("#dragtarget28").parent().attr("id") == "th28") || ($("#dragtarget28").parent().attr("id") == "th29") || ($("#dragtarget28").parent().attr("id") == "th30") || ($("#dragtarget28").parent().attr("id") == "th31") )
            {$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th32") || ($("#dragtarget28").parent().attr("id") == "th33") || ($("#dragtarget28").parent().attr("id") == "th34") || ($("#dragtarget28").parent().attr("id") == "th35") || ($("#dragtarget28").parent().attr("id") == "th36") || ($("#dragtarget28").parent().attr("id") == "th37") || ($("#dragtarget28").parent().attr("id") == "th38") || ($("#dragtarget28").parent().attr("id") == "th39") )
            {$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th40") || ($("#dragtarget28").parent().attr("id") == "th41") || ($("#dragtarget28").parent().attr("id") == "th42") || ($("#dragtarget28").parent().attr("id") == "th43") || ($("#dragtarget28").parent().attr("id") == "th44") || ($("#dragtarget28").parent().attr("id") == "th45") || ($("#dragtarget28").parent().attr("id") == "th46") || ($("#dragtarget28").parent().attr("id") == "th47") )
            {$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th48") || ($("#dragtarget28").parent().attr("id") == "th49") || ($("#dragtarget28").parent().attr("id") == "th50") || ($("#dragtarget28").parent().attr("id") == "th51") || ($("#dragtarget28").parent().attr("id") == "th52") || ($("#dragtarget28").parent().attr("id") == "th53") || ($("#dragtarget28").parent().attr("id") == "th54") || ($("#dragtarget28").parent().attr("id") == "th55") )
            {$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th56") || ($("#dragtarget28").parent().attr("id") == "th57") || ($("#dragtarget28").parent().attr("id") == "th58") || ($("#dragtarget28").parent().attr("id") == "th59") || ($("#dragtarget28").parent().attr("id") == "th60") || ($("#dragtarget28").parent().attr("id") == "th61") || ($("#dragtarget28").parent().attr("id") == "th62") || ($("#dragtarget28").parent().attr("id") == "th63") )
            {$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th") || ($("#dragtarget28").parent().attr("id") == "th8") || ($("#dragtarget28").parent().attr("id") == "th16") || ($("#dragtarget28").parent().attr("id") == "th24") || ($("#dragtarget28").parent().attr("id") == "th32") || ($("#dragtarget28").parent().attr("id") == "th40") || ($("#dragtarget28").parent().attr("id") == "th48") || ($("#dragtarget28").parent().attr("id") == "th56") )
            {$("#th,#th8,#th16,#th24,#th32,#th40,#th48,#th56").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th1") || ($("#dragtarget28").parent().attr("id") == "th9") || ($("#dragtarget28").parent().attr("id") == "th17") || ($("#dragtarget28").parent().attr("id") == "th25") || ($("#dragtarget28").parent().attr("id") == "th33") || ($("#dragtarget28").parent().attr("id") == "th41") || ($("#dragtarget28").parent().attr("id") == "th49") || ($("#dragtarget28").parent().attr("id") == "th57") )
            {$("#th1,#th9,#th17,#th25,#th33,#th41,#th49,#th57").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th2") || ($("#dragtarget28").parent().attr("id") == "th10") || ($("#dragtarget28").parent().attr("id") == "th18") || ($("#dragtarget28").parent().attr("id") == "th26") || ($("#dragtarget28").parent().attr("id") == "th34") || ($("#dragtarget28").parent().attr("id") == "th42") || ($("#dragtarget28").parent().attr("id") == "th50") || ($("#dragtarget28").parent().attr("id") == "th58") )
            {$("#th2,#th10,#th18,#th26,#th34,#th42,#th50,#th58").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th3") || ($("#dragtarget28").parent().attr("id") == "th11") || ($("#dragtarget28").parent().attr("id") == "th19") || ($("#dragtarget28").parent().attr("id") == "th27") || ($("#dragtarget28").parent().attr("id") == "th35") || ($("#dragtarget28").parent().attr("id") == "th43") || ($("#dragtarget28").parent().attr("id") == "th51") || ($("#dragtarget28").parent().attr("id") == "th59") )
            {$("#th3,#th11,#th19,#th27,#th35,#th43,#th51,#th59").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th4") || ($("#dragtarget28").parent().attr("id") == "th12") || ($("#dragtarget28").parent().attr("id") == "th20") || ($("#dragtarget28").parent().attr("id") == "th28") || ($("#dragtarget28").parent().attr("id") == "th36") || ($("#dragtarget28").parent().attr("id") == "th44") || ($("#dragtarget28").parent().attr("id") == "th52") || ($("#dragtarget28").parent().attr("id") == "th60") )
            {$("#th4,#th12,#th20,#th28,#th36,#th44,#th52,#th60").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th5") || ($("#dragtarget28").parent().attr("id") == "th13") || ($("#dragtarget28").parent().attr("id") == "th21") || ($("#dragtarget28").parent().attr("id") == "th29") || ($("#dragtarge28").parent().attr("id") == "th37") || ($("#dragtarget28").parent().attr("id") == "th45") || ($("#dragtarget28").parent().attr("id") == "th53") || ($("#dragtarget28").parent().attr("id") == "th61") )
            {$("#th5,#th13,#th21,#th29,#th37,#th45,#th53,#th61").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th6") || ($("#dragtarget28").parent().attr("id") == "th14") || ($("#dragtarget28").parent().attr("id") == "th22") || ($("#dragtarget28").parent().attr("id") == "th30") || ($("#dragtarget28").parent().attr("id") == "th38") || ($("#dragtarget28").parent().attr("id") == "th46") || ($("#dragtarget28").parent().attr("id") == "th54") || ($("#dragtarget28").parent().attr("id") == "th62") )
            {$("#th6,#th14,#th22,#th30,#th38,#th46,#th54,#th62").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th7") || ($("#dragtarget28").parent().attr("id") == "th15") || ($("#dragtarget28").parent().attr("id") == "th23") || ($("#dragtarget28").parent().attr("id") == "th31") || ($("#dragtarget28").parent().attr("id") == "th39") || ($("#dragtarget28").parent().attr("id") == "th47") || ($("#dragtarget28").parent().attr("id") == "th55") || ($("#dragtarget28").parent().attr("id") == "th63") )
            {$("#th7,#th15,#th23,#th31,#th39,#th47,#th55,#th63").css("background-color", "green")}

            if ($("#dragtarget28").parent().attr("id") == "th")
            {$("#th").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th2") || ($("#dragtarget28").parent().attr("id") == "th9") || ($("#dragtarget28").parent().attr("id") == "th16") )
            {$("#th2,#th9,#th16").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th4") || ($("#dragtarget28").parent().attr("id") == "th11") || ($("#dragtarget28").parent().attr("id") == "th18") || ($("#dragtarget28").parent().attr("id") == "th25") || ($("#dragtarget28").parent().attr("id") == "th32")  )
            {$("#th4,#th11,#th18,#th25,#th32").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th6") || ($("#dragtarget28").parent().attr("id") == "th13") || ($("#dragtarget28").parent().attr("id") == "th20") || ($("#dragtarget28").parent().attr("id") == "th27") || ($("#dragtarget28").parent().attr("id") == "th34") || ($("#dragtarget28").parent().attr("id") == "th41") || ($("#dragtarget28").parent().attr("id") == "th48") )
            {$("#th6,#th13,#th20,#th27,#th34,#th41,#th48").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th15") || ($("#dragtarget28").parent().attr("id") == "th22") || ($("#dragtarget28").parent().attr("id") == "th29") || ($("#dragtarget28").parent().attr("id") == "th36") || ($("#dragtarget28").parent().attr("id") == "th43") || ($("#dragtarget28").parent().attr("id") == "th50") || ($("#dragtarget28").parent().attr("id") == "th57") )
            {$("#th15,#th22,#th29,#th36,#th43,#th50,#th57").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th31") || ($("#dragtarget28").parent().attr("id") == "th38") || ($("#dragtarget28").parent().attr("id") == "th45") || ($("#dragtarget28").parent().attr("id") == "th52") || ($("#dragtarget28").parent().attr("id") == "th59")  )
            {$("#th31,#th38,#th45,#th52,#th59").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th47") || ($("#dragtarget28").parent().attr("id") == "th54") || ($("#dragtarget28").parent().attr("id") == "th61") )
            {$("#th47,#th54,#th61").css("background-color", "green")}

            if ($("#dragtarget28").parent().attr("id") == "th63")
            {$("#th63").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th6") || ($("#dragtarget28").parent().attr("id") == "th15") )
            {$("#th6,#th15").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th4") || ($("#dragtarget28").parent().attr("id") == "th13") || ($("#dragtarget28").parent().attr("id") == "th22") || ($("#dragtarget28").parent().attr("id") == "th31"))
            {$("#th4,#th13,#th22,#th31").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th2") || ($("#dragtarget28").parent().attr("id") == "th11") || ($("#dragtarget28").parent().attr("id") == "th20") || ($("#dragtarget28").parent().attr("id") == "th29") || ($("#dragtarget28").parent().attr("id") == "th38") || ($("#dragtarget28").parent().attr("id") == "th47")  )
            {$("#th2,#th11,#th20,#th29,#th38,#th47").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th") || ($("#dragtarget28").parent().attr("id") == "th9") || ($("#dragtarget28").parent().attr("id") == "th18") || ($("#dragtarget28").parent().attr("id") == "th27") || ($("#dragtarget28").parent().attr("id") == "th36") || ($("#dragtarget28").parent().attr("id") == "th45") || ($("#dragtarget28").parent().attr("id") == "th54") || ($("#dragtarget28").parent().attr("id") == "th63") )
            {$("#th,#th9,#th18,#th27,#th36,#th45,#th54,#th63").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th16") || ($("#dragtarget28").parent().attr("id") == "th25") || ($("#dragtarget28").parent().attr("id") == "th34") || ($("#dragtarget28").parent().attr("id") == "th43") || ($("#dragtarget28").parent().attr("id") == "th52") || ($("#dragtarget28").parent().attr("id") == "th61")  )
            {$("#th16,#th25,#th34,#th43,#th52,#th61").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th32") || ($("#dragtarget28").parent().attr("id") == "th41") || ($("#dragtarget28").parent().attr("id") == "th50") || ($("#dragtarget28").parent().attr("id") == "th59"))
            {$("#th32,#th41,#th50,#th59").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th48") || ($("#dragtarget28").parent().attr("id") == "th57") )
            {$("#th48,#th57").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th1") || ($("#dragtarget28").parent().attr("id") == "th8") )
            {$("#th1,#th8").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th3") || ($("#dragtarget28").parent().attr("id") == "th10") || ($("#dragtarget28").parent().attr("id") == "th17") || ($("#dragtarget28").parent().attr("id") == "th24"))
            {$("#th3,#th10,#th17,#th24").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th5") || ($("#dragtarget28").parent().attr("id") == "th12") || ($("#dragtarget28").parent().attr("id") == "th19") || ($("#dragtarget28").parent().attr("id") == "th26") || ($("#dragtarget28").parent().attr("id") == "th33") || ($("#dragtarget28").parent().attr("id") == "th40")  )
            {$("#th5,#th12,#th19,#th26,#th33,#th40").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th7") || ($("#dragtarget28").parent().attr("id") == "th14") || ($("#dragtarget28").parent().attr("id") == "th21") || ($("#dragtarget28").parent().attr("id") == "th28") || ($("#dragtarget28").parent().attr("id") == "th35") || ($("#dragtarget28").parent().attr("id") == "th42") || ($("#dragtarget28").parent().attr("id") == "th49") || ($("#dragtarget28").parent().attr("id") == "th56") )
            {$("#th7,#th14,#th21,#th28,#th35,#th42,#th49,#th56").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th23") || ($("#dragtarget28").parent().attr("id") == "th30") || ($("#dragtarget28").parent().attr("id") == "th37") || ($("#dragtarget28").parent().attr("id") == "th44") || ($("#dragtarget28").parent().attr("id") == "th51") || ($("#dragtarget28").parent().attr("id") == "th58")  )
            {$("#th23,#th30,#th37,#th44,#th51,#th58").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th39") || ($("#dragtarget28").parent().attr("id") == "th46") || ($("#dragtarget28").parent().attr("id") == "th53") || ($("#dragtarget28").parent().attr("id") == "th60"))
            {$("#th39,#th46,#th53,#th60").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th55") || ($("#dragtarget28").parent().attr("id") == "th62") )
            {$("#th55,#th62").css("background-color", "green")}

            if ($("#dragtarget28").parent().attr("id") == "th7")
            {$("#th7").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th5") || ($("#dragtarget28").parent().attr("id") == "th14") || ($("#dragtarget28").parent().attr("id") == "th23") )
            {$("#th5,#th14,#th23").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th3") || ($("#dragtarget28").parent().attr("id") == "th12") || ($("#dragtarget28").parent().attr("id") == "th21") || ($("#dragtarget28").parent().attr("id") == "th30") || ($("#dragtarget28").parent().attr("id") == "th39")  )
            {$("#th3,#th12,#th21,#th30,#th39").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th1") || ($("#dragtarget28").parent().attr("id") == "th10") || ($("#dragtarget28").parent().attr("id") == "th19") || ($("#dragtarget28").parent().attr("id") == "th28") || ($("#dragtarget28").parent().attr("id") == "th37") || ($("#dragtarget28").parent().attr("id") == "th46") || ($("#dragtarget28").parent().attr("id") == "th55") )
            {$("#th1,#th10,#th19,#th28,#th37,#th46,#th55").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th8") || ($("#dragtarget28").parent().attr("id") == "th17") || ($("#dragtarget28").parent().attr("id") == "th26") || ($("#dragtarget28").parent().attr("id") == "th35") || ($("#dragtarget28").parent().attr("id") == "th43") || ($("#dragtarget28").parent().attr("id") == "th53") || ($("#dragtarget28").parent().attr("id") == "th62") )
            {$("#th8,#th17,#th26,#th35,#th44,#th53,#th62").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th24") || ($("#dragtarget28").parent().attr("id") == "th33") || ($("#dragtarget28").parent().attr("id") == "th42") || ($("#dragtarget28").parent().attr("id") == "th51") || ($("#dragtarget28").parent().attr("id") == "th60")  )
            {$("#th24,#th33,#th42,#th51,#th60").css("background-color", "green")}

            if (($("#dragtarget28").parent().attr("id") == "th40") || ($("#dragtarget28").parent().attr("id") == "th49") || ($("#dragtarget28").parent().attr("id") == "th58") )
            {$("#th40,#th49,#th58").css("background-color", "green")}

            if ($("#dragtarget28").parent().attr("id") == "th56")
            {$("#th56").css("background-color", "green")}
        });


    //Black knight 1
    $("#dragtarget26").mouseenter(function () {

        if (($("#dragtarget26").parent().attr("id") == "th")) {
            $("#th10,#th17").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th7")) {
            $("#th13,#th22").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th56")) {
            $("#th41,#th50").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th63")) {
            $("#th46,#th53").css("background-color", "green")
        }

        if (($("#dragtarget26").parent().attr("id") == "th1")) {
            $("#th11,#th16,#th18").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th2")) {
            $("#th8,#th12,#th17,#th19").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th3")) {
            $("#th9,#th13,#th18,#th20").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th4")) {
            $("#th10,#th14,#th19,#th21").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th5")) {
            $("#th11,#th15,#th20,#th22").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th6")) {
            $("#th12,#th21,#th23").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th8")) {
            $("#th2,#th18,#th25").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th16")) {
            $("#th1,#th10,#th26,#th33").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th24")) {
            $("#th18,#th9,#th34,#th41").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th32")) {
            $("#th17,#th26,#th42,#th49").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th40")) {
            $("#th34,#th350,#th25,#th57").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th48")) {
            $("#th42,#th58,#th33").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th15")) {
            $("#th5,#th21,#th30").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th23")) {
            $("#th16,#th13,#th29,#th38").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th31")) {
            $("#th14,#th46,#th21,#th37").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th39")) {
            $("#th22,#th54,#th29,#th45").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th47")) {
            $("#th30,#th62,#th37,#th53").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th55")) {
            $("#th61,#th45,#th38").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th57")) {
            $("#th40,#th42,#th51").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th58")) {
            $("#th41,#th43,#th52,#th48").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th59")) {
            $("#th42,#th44,#th53,#th49").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th60")) {
            $("#th43,#th45,#th53,#th50").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th61")) {
            $("#th44,#th46,#th51,#th55").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th62")) {
            $("#th45,#th47,#th52").css("background-color", "green")
        }

        if (($("#dragtarget26").parent().attr("id") == "th9")) {
            $("#th24,#th26,#th3,#th19").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th10")) {
            $("#th25,#th27,#th4,#th20,#th,#th16").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th11")) {
            $("#th26,#th28,#th5,#th21,#th1,#th17").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th12")) {
            $("#th27,#th29,#th6,#th22,#th2,#th18").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th13")) {
            $("#th28,#th30,#th7,#th23,#th3,#th19").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th14")) {
            $("#th29,#th31,#th4,#th20").css("background-color", "green")
        }

        if (($("#dragtarget26").parent().attr("id") == "th17")) {
            $("#th32,#th34,#th11,#th27,#th,#th2").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th18")) {
            $("#th33,#th35,#th12,#th28,#th1,#th3,#th8,#th24").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th19")) {
            $("#th34,#th36,#th13,#th29,#th2,#th4,#th9,#th25").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th20")) {
            $("#th35,#th37,#th14,#th30,#th3,#th5,#th10,#th26").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th21")) {
            $("#th36,#th38,#th15,#th31,#th4,#th6,#th11,#th27").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th22")) {
            $("#th37,#th39,#th5,#th7,#th12,#th28").css("background-color", "green")
        }

        if (($("#dragtarget26").parent().attr("id") == "th25")) {
            $("#th8,#th10,#th40,#th42,#th19,#th35").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th26")) {
            $("#th9,#th11,#th41,#th43,#th20,#th36,#th16,#th32").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th27")) {
            $("#th10,#th12,#th42,#th44,#th21,#th37,#th17,#th33").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th28")) {
            $("#th11,#th13,#th43,#th45,#th22,#th38,#th18,#th34").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th29")) {
            $("#th12,#th14,#th44,#th46,#th23,#th39,#th19,#th35").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th30")) {
            $("#th13,#th15,#th45,#th47,#th20,#th36").css("background-color", "green")
        }

        if (($("#dragtarget26").parent().attr("id") == "th33")) {
            $("#th16,#th18,#th48,#th50,#th27,#th43").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th34")) {
            $("#th17,#th19,#th49,#th51,#th28,#th44,#th24,#th40").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th35")) {
            $("#th18,#th20,#th50,#th52,#th29,#th45,#th25,#th41").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th36")) {
            $("#th19,#th21,#th51,#th53,#th30,#th46,#th26,#th42").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th37")) {
            $("#th20,#th22,#th52,#th54,#th31,#th47,#th27,#th43").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th38")) {
            $("#th21,#th23,#th53,#th55,#th28,#th44").css("background-color", "green")
        }

        if (($("#dragtarget26").parent().attr("id") == "th41")) {
            $("#th24,#th26,#th56,#th58,#th35,#th51").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th42")) {
            $("#th25,#th27,#th57,#th59,#th36,#th52,#th32,#th48").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th43")) {
            $("#th26,#th28,#th58,#th60,#th37,#th53,#th33,#th49").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th44")) {
            $("#th27,#th29,#th59,#th61,#th38,#th54,#th34,#th50").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th45")) {
            $("#th28,#th30,#th60,#th62,#th39,#th55,#th35,#th51").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th46")) {
            $("#th29,#th31,#th61,#th63,#th36,#th2").css("background-color", "green")
        }

        if (($("#dragtarget26").parent().attr("id") == "th49")) {
            $("#th32,#th34,#th43,#th59").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th50")) {
            $("#th33,#th35,#th44,#th60,#th40,#th56").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th51")) {
            $("#th34,#th36,#th45,#th61,#th41,#th57").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th52")) {
            $("#th35,#th37,#th46,#th62,#th42,#th58").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th53")) {
            $("#th36,#th38,#th47,#th63,#th43,#th59").css("background-color", "green")
        }
        if (($("#dragtarget26").parent().attr("id") == "th54")) {
            $("#th37,#th39,#th44,#th60").css("background-color", "green")
        }

    });



    //Black knight 2
    $("#dragtarget31").mouseenter(function () {

        if (($("#dragtarget31").parent().attr("id") == "th")) {
            $("#th10,#th17").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th7")) {
            $("#th13,#th22").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th56")) {
            $("#th41,#th50").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th63")) {
            $("#th46,#th53").css("background-color", "green")
        }

        if (($("#dragtarget31").parent().attr("id") == "th1")) {
            $("#th11,#th16,#th18").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th2")) {
            $("#th8,#th12,#th17,#th19").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th3")) {
            $("#th9,#th13,#th18,#th20").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th4")) {
            $("#th10,#th14,#th19,#th21").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th5")) {
            $("#th11,#th15,#th20,#th22").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th6")) {
            $("#th12,#th21,#th23").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th8")) {
            $("#th2,#th18,#th25").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th16")) {
            $("#th1,#th10,#th26,#th33").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th24")) {
            $("#th18,#th9,#th34,#th41").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th32")) {
            $("#th17,#th26,#th42,#th49").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th40")) {
            $("#th34,#th350,#th25,#th57").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th48")) {
            $("#th42,#th58,#th33").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th15")) {
            $("#th5,#th21,#th30").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th23")) {
            $("#th16,#th13,#th29,#th38").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th31")) {
            $("#th14,#th46,#th21,#th37").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th39")) {
            $("#th22,#th54,#th29,#th45").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th47")) {
            $("#th30,#th62,#th37,#th53").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th55")) {
            $("#th61,#th45,#th38").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th57")) {
            $("#th40,#th42,#th51").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th58")) {
            $("#th41,#th43,#th52,#th48").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th59")) {
            $("#th42,#th44,#th53,#th49").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th60")) {
            $("#th43,#th45,#th53,#th50").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th61")) {
            $("#th44,#th46,#th51,#th55").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th62")) {
            $("#th45,#th47,#th52").css("background-color", "green")
        }

        if (($("#dragtarget31").parent().attr("id") == "th9")) {
            $("#th24,#th26,#th3,#th19").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th10")) {
            $("#th25,#th27,#th4,#th20,#th,#th16").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th11")) {
            $("#th26,#th28,#th5,#th21,#th1,#th17").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th12")) {
            $("#th27,#th29,#th6,#th22,#th2,#th18").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th13")) {
            $("#th28,#th30,#th7,#th23,#th3,#th19").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th14")) {
            $("#th29,#th31,#th4,#th20").css("background-color", "green")
        }

        if (($("#dragtarget31").parent().attr("id") == "th17")) {
            $("#th32,#th34,#th11,#th27,#th,#th2").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th18")) {
            $("#th33,#th35,#th12,#th28,#th1,#th3,#th8,#th24").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th19")) {
            $("#th34,#th36,#th13,#th29,#th2,#th4,#th9,#th25").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th20")) {
            $("#th35,#th37,#th14,#th30,#th3,#th5,#th10,#th26").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th21")) {
            $("#th36,#th38,#th15,#th31,#th4,#th6,#th11,#th27").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th22")) {
            $("#th37,#th39,#th5,#th7,#th12,#th28").css("background-color", "green")
        }

        if (($("#dragtarget31").parent().attr("id") == "th25")) {
            $("#th8,#th10,#th40,#th42,#th19,#th35").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th26")) {
            $("#th9,#th11,#th41,#th43,#th20,#th36,#th16,#th32").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th27")) {
            $("#th10,#th12,#th42,#th44,#th21,#th37,#th17,#th33").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th28")) {
            $("#th11,#th13,#th43,#th45,#th22,#th38,#th18,#th34").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th29")) {
            $("#th12,#th14,#th44,#th46,#th23,#th39,#th19,#th35").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th30")) {
            $("#th13,#th15,#th45,#th47,#th20,#th36").css("background-color", "green")
        }

        if (($("#dragtarget31").parent().attr("id") == "th33")) {
            $("#th16,#th18,#th48,#th50,#th27,#th43").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th34")) {
            $("#th17,#th19,#th49,#th51,#th28,#th44,#th24,#th40").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th35")) {
            $("#th18,#th20,#th50,#th52,#th29,#th45,#th25,#th41").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th36")) {
            $("#th19,#th21,#th51,#th53,#th30,#th46,#th26,#th42").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th37")) {
            $("#th20,#th22,#th52,#th54,#th31,#th47,#th27,#th43").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th38")) {
            $("#th21,#th23,#th53,#th55,#th28,#th44").css("background-color", "green")
        }

        if (($("#dragtarget31").parent().attr("id") == "th41")) {
            $("#th24,#th26,#th56,#th58,#th35,#th51").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th42")) {
            $("#th25,#th27,#th57,#th59,#th36,#th52,#th32,#th48").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th43")) {
            $("#th26,#th28,#th58,#th60,#th37,#th53,#th33,#th49").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th44")) {
            $("#th27,#th29,#th59,#th61,#th38,#th54,#th34,#th50").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th45")) {
            $("#th28,#th30,#th60,#th62,#th39,#th55,#th35,#th51").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th46")) {
            $("#th29,#th31,#th61,#th63,#th36,#th2").css("background-color", "green")
        }

        if (($("#dragtarget31").parent().attr("id") == "th49")) {
            $("#th32,#th34,#th43,#th59").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th50")) {
            $("#th33,#th35,#th44,#th60,#th40,#th56").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th51")) {
            $("#th34,#th36,#th45,#th61,#th41,#th57").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th52")) {
            $("#th35,#th37,#th46,#th62,#th42,#th58").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th53")) {
            $("#th36,#th38,#th47,#th63,#th43,#th59").css("background-color", "green")
        }
        if (($("#dragtarget31").parent().attr("id") == "th54")) {
            $("#th37,#th39,#th44,#th60").css("background-color", "green")
        }

    });



        $("#dragtarget17").mouseenter(function () {

            if (($("#dragtarget17").parent().attr("id") ==  "th48")) {$("#th40,#th32").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th49")) {$("#th41,#th33").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th50" )){$("#th42,#th34").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th51")) {$("#th43,#th35").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th52")){$("#th44,#th36").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th53")){$("#th45,#th37").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th54")){$("#th46,#th38").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th55")){$("#th47,#th39").css("background-color", "green")}

            if (($("#dragtarget17").parent().attr("id") ==  "th40")){$("#th32").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th41")){$("#th33").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th42")) {$("#th34").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th43")){$("#th35").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th44")){$("#th36").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th45")){$("#th37").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th46")){$("#th38").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th47")){$("#th39").css("background-color", "green")}

            if (($("#dragtarget17").parent().attr("id") ==  "th32")){$("#th24").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th33")){$("#th25").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th34")){$("#th26").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th35")){$("#th27").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th36")){$("#th28").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th37")){$("#th29").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th38")){$("#th30").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th39")){$("#th31").css("background-color", "green")}

            if (($("#dragtarget17").parent().attr("id") ==  "th24")){$("#th16").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th25")){$("#th17").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th26")){$("#th18").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th27")){$("#th19").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th28")){$("#th20").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th29")){$("#th21").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th30")){$("#th22").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th31")){$("#th23").css("background-color", "green")}

            if (($("#dragtarget17").parent().attr("id") ==  "th16")){$("#th8").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th17")){$("#th9").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th18")){$("#th10").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th19")){$("#th11").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th20")){$("#th12").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th21")){$("#th13").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th22")){$("#th14").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th23")){$("#th15").css("background-color", "green")}

            if (($("#dragtarget17").parent().attr("id") ==  "th8")){$("#th").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th9")){$("#th1").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th10")){$("#th2").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th11")){$("#th3").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th12")){$("#th4").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th13")){$("#th5").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th14")){$("#th6").css("background-color", "green")}
            if (($("#dragtarget17").parent().attr("id") ==  "th15")){$("#th7").css("background-color", "green")}




        });

        $("#dragtarget18").mouseenter(function () {

            if (($("#dragtarget18").parent().attr("id") ==  "th48")) {$("#th40,#th32").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th49")) {$("#th41,#th33").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th50" )){$("#th42,#th34").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th51")) {$("#th43,#th35").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th52")){$("#th44,#th36").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th53")){$("#th45,#th37").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th54")){$("#th46,#th38").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th55")){$("#th47,#th39").css("background-color", "green")}

            if (($("#dragtarget18").parent().attr("id") ==  "th40")){$("#th32").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th41")){$("#th33").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th42")) {$("#th34").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th43")){$("#th35").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th44")){$("#th36").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th45")){$("#th37").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th46")){$("#th38").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th47")){$("#th39").css("background-color", "green")}

            if (($("#dragtarget18").parent().attr("id") ==  "th32")){$("#th24").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th33")){$("#th25").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th34")){$("#th26").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th35")){$("#th27").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th36")){$("#th28").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th37")){$("#th29").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th38")){$("#th30").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th39")){$("#th31").css("background-color", "green")}

            if (($("#dragtarget18").parent().attr("id") ==  "th24")){$("#th16").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th25")){$("#th17").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th26")){$("#th18").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th27")){$("#th19").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th28")){$("#th20").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th29")){$("#th21").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th30")){$("#th22").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th31")){$("#th23").css("background-color", "green")}

            if (($("#dragtarget18").parent().attr("id") ==  "th16")){$("#th8").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th17")){$("#th9").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th18")){$("#th10").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th19")){$("#th11").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th20")){$("#th12").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th21")){$("#th13").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th22")){$("#th14").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th23")){$("#th15").css("background-color", "green")}

            if (($("#dragtarget18").parent().attr("id") ==  "th8")){$("#th").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th9")){$("#th1").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th10")){$("#th2").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th11")){$("#th3").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th12")){$("#th4").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th13")){$("#th5").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th14")){$("#th6").css("background-color", "green")}
            if (($("#dragtarget18").parent().attr("id") ==  "th15")){$("#th7").css("background-color", "green")}




        });

        $("#dragtarget19").mouseenter(function () {

            if (($("#dragtarget19").parent().attr("id") ==  "th48")) {$("#th40,#th32").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th49")) {$("#th41,#th33").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th50" )){$("#th42,#th34").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th51")) {$("#th43,#th35").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th52")){$("#th44,#th36").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th53")){$("#th45,#th37").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th54")){$("#th46,#th38").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th55")){$("#th47,#th39").css("background-color", "green")}

            if (($("#dragtarget19").parent().attr("id") ==  "th40")){$("#th32").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th41")){$("#th33").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th42")) {$("#th34").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th43")){$("#th35").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th44")){$("#th36").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th45")){$("#th37").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th46")){$("#th38").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th47")){$("#th39").css("background-color", "green")}

            if (($("#dragtarget19").parent().attr("id") ==  "th32")){$("#th24").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th33")){$("#th25").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th34")){$("#th26").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th35")){$("#th27").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th36")){$("#th28").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th37")){$("#th29").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th38")){$("#th30").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th39")){$("#th31").css("background-color", "green")}

            if (($("#dragtarget19").parent().attr("id") ==  "th24")){$("#th16").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th25")){$("#th17").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th26")){$("#th18").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th27")){$("#th19").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th28")){$("#th20").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th29")){$("#th21").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th30")){$("#th22").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th31")){$("#th23").css("background-color", "green")}

            if (($("#dragtarget19").parent().attr("id") ==  "th16")){$("#th8").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th17")){$("#th9").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th18")){$("#th10").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th19")){$("#th11").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th20")){$("#th12").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th21")){$("#th13").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th22")){$("#th14").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th23")){$("#th15").css("background-color", "green")}

            if (($("#dragtarget19").parent().attr("id") ==  "th8")){$("#th").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th9")){$("#th1").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th10")){$("#th2").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th11")){$("#th3").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th12")){$("#th4").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th13")){$("#th5").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th14")){$("#th6").css("background-color", "green")}
            if (($("#dragtarget19").parent().attr("id") ==  "th15")){$("#th7").css("background-color", "green")}




        });

        $("#dragtarget20").mouseenter(function () {

            if (($("#dragtarget20").parent().attr("id") ==  "th48")) {$("#th40,#th32").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th49")) {$("#th41,#th33").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th50" )){$("#th42,#th34").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th51")) {$("#th43,#th35").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th52")){$("#th44,#th36").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th53")){$("#th45,#th37").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th54")){$("#th46,#th38").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th55")){$("#th47,#th39").css("background-color", "green")}

            if (($("#dragtarget20").parent().attr("id") ==  "th40")){$("#th32").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th41")){$("#th33").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th42")) {$("#th34").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th43")){$("#th35").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th44")){$("#th36").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th45")){$("#th37").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th46")){$("#th38").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th47")){$("#th39").css("background-color", "green")}

            if (($("#dragtarget20").parent().attr("id") ==  "th32")){$("#th24").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th33")){$("#th25").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th34")){$("#th26").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th35")){$("#th27").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th36")){$("#th28").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th37")){$("#th29").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th38")){$("#th30").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th39")){$("#th31").css("background-color", "green")}

            if (($("#dragtarget20").parent().attr("id") ==  "th24")){$("#th16").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th25")){$("#th17").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th26")){$("#th18").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th27")){$("#th19").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th28")){$("#th20").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th29")){$("#th21").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th30")){$("#th22").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th31")){$("#th23").css("background-color", "green")}

            if (($("#dragtarget20").parent().attr("id") ==  "th16")){$("#th8").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th17")){$("#th9").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th18")){$("#th10").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th19")){$("#th11").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th20")){$("#th12").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th21")){$("#th13").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th22")){$("#th14").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th23")){$("#th15").css("background-color", "green")}

            if (($("#dragtarget20").parent().attr("id") ==  "th8")){$("#th").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th9")){$("#th1").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th10")){$("#th2").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th11")){$("#th3").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th12")){$("#th4").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th13")){$("#th5").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th14")){$("#th6").css("background-color", "green")}
            if (($("#dragtarget20").parent().attr("id") ==  "th15")){$("#th7").css("background-color", "green")}




        });

        $("#dragtarget21").mouseenter(function () {

            if (($("#dragtarget21").parent().attr("id") ==  "th48")) {$("#th40,#th32").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th49")) {$("#th41,#th33").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th50" )){$("#th42,#th34").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th51")) {$("#th43,#th35").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th52")){$("#th44,#th36").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th53")){$("#th45,#th37").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th54")){$("#th46,#th38").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th55")){$("#th47,#th39").css("background-color", "green")}

            if (($("#dragtarget21").parent().attr("id") ==  "th40")){$("#th32").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th41")){$("#th33").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th42")) {$("#th34").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th43")){$("#th35").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th44")){$("#th36").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th45")){$("#th37").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th46")){$("#th38").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th47")){$("#th39").css("background-color", "green")}

            if (($("#dragtarget21").parent().attr("id") ==  "th32")){$("#th24").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th33")){$("#th25").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th34")){$("#th26").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th35")){$("#th27").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th36")){$("#th28").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th37")){$("#th29").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th38")){$("#th30").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th39")){$("#th31").css("background-color", "green")}

            if (($("#dragtarget21").parent().attr("id") ==  "th24")){$("#th16").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th25")){$("#th17").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th26")){$("#th18").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th27")){$("#th19").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th28")){$("#th20").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th29")){$("#th21").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th30")){$("#th22").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th31")){$("#th23").css("background-color", "green")}

            if (($("#dragtarget21").parent().attr("id") ==  "th16")){$("#th8").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th17")){$("#th9").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th18")){$("#th10").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th19")){$("#th11").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th20")){$("#th12").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th21")){$("#th13").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th22")){$("#th14").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th23")){$("#th15").css("background-color", "green")}

            if (($("#dragtarget21").parent().attr("id") ==  "th8")){$("#th").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th9")){$("#th1").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th10")){$("#th2").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th11")){$("#th3").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th12")){$("#th4").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th13")){$("#th5").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th14")){$("#th6").css("background-color", "green")}
            if (($("#dragtarget21").parent().attr("id") ==  "th15")){$("#th7").css("background-color", "green")}




        });

        $("#dragtarget22").mouseenter(function () {

            if (($("#dragtarget22").parent().attr("id") ==  "th48")) {$("#th40,#th32").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th49")) {$("#th41,#th33").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th50" )){$("#th42,#th34").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th51")) {$("#th43,#th35").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th52")){$("#th44,#th36").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th53")){$("#th45,#th37").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th54")){$("#th46,#th38").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th55")){$("#th47,#th39").css("background-color", "green")}

            if (($("#dragtarget22").parent().attr("id") ==  "th40")){$("#th32").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th41")){$("#th33").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th42")) {$("#th34").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th43")){$("#th35").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th44")){$("#th36").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th45")){$("#th37").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th46")){$("#th38").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th47")){$("#th39").css("background-color", "green")}

            if (($("#dragtarget22").parent().attr("id") ==  "th32")){$("#th24").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th33")){$("#th25").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th34")){$("#th26").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th35")){$("#th27").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th36")){$("#th28").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th37")){$("#th29").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th38")){$("#th30").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th39")){$("#th31").css("background-color", "green")}

            if (($("#dragtarget22").parent().attr("id") ==  "th24")){$("#th16").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th25")){$("#th17").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th26")){$("#th18").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th27")){$("#th19").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th28")){$("#th20").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th29")){$("#th21").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th30")){$("#th22").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th31")){$("#th23").css("background-color", "green")}

            if (($("#dragtarget22").parent().attr("id") ==  "th16")){$("#th8").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th17")){$("#th9").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th18")){$("#th10").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th19")){$("#th11").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th20")){$("#th12").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th21")){$("#th13").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th22")){$("#th14").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th23")){$("#th15").css("background-color", "green")}

            if (($("#dragtarget22").parent().attr("id") ==  "th8")){$("#th").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th9")){$("#th1").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th10")){$("#th2").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th11")){$("#th3").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th12")){$("#th4").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th13")){$("#th5").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th14")){$("#th6").css("background-color", "green")}
            if (($("#dragtarget22").parent().attr("id") ==  "th15")){$("#th7").css("background-color", "green")}



        });

        $("#dragtarget23").mouseenter(function () {

            if (($("#dragtarget23").parent().attr("id") ==  "th48")) {$("#th40,#th32").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th49")) {$("#th41,#th33").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th50" )){$("#th42,#th34").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th51")) {$("#th43,#th35").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th52")){$("#th44,#th36").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th53")){$("#th45,#th37").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th54")){$("#th46,#th38").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th55")){$("#th47,#th39").css("background-color", "green")}

            if (($("#dragtarget23").parent().attr("id") ==  "th40")){$("#th32").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th41")){$("#th33").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th42")) {$("#th34").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th43")){$("#th35").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th44")){$("#th36").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th45")){$("#th37").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th46")){$("#th38").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th47")){$("#th39").css("background-color", "green")}

            if (($("#dragtarget23").parent().attr("id") ==  "th32")){$("#th24").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th33")){$("#th25").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th34")){$("#th26").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th35")){$("#th27").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th36")){$("#th28").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th37")){$("#th29").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th38")){$("#th30").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th39")){$("#th31").css("background-color", "green")}

            if (($("#dragtarget23").parent().attr("id") ==  "th24")){$("#th16").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th25")){$("#th17").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th26")){$("#th18").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th27")){$("#th19").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th28")){$("#th20").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th29")){$("#th21").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th30")){$("#th22").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th31")){$("#th23").css("background-color", "green")}

            if (($("#dragtarget23").parent().attr("id") ==  "th16")){$("#th8").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th17")){$("#th9").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th18")){$("#th10").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th19")){$("#th11").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th20")){$("#th12").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th21")){$("#th13").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th22")){$("#th14").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th23")){$("#th15").css("background-color", "green")}

            if (($("#dragtarget23").parent().attr("id") ==  "th8")){$("#th").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th9")){$("#th1").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th10")){$("#th2").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th11")){$("#th3").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th12")){$("#th4").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th13")){$("#th5").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th14")){$("#th6").css("background-color", "green")}
            if (($("#dragtarget23").parent().attr("id") ==  "th15")){$("#th7").css("background-color", "green")}




        });

        $("#dragtarget24").mouseenter(function () {

            if (($("#dragtarget24").parent().attr("id") ==  "th48")) {$("#th40,#th32").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th49")) {$("#th41,#th33").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th50" )){$("#th42,#th34").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th51")) {$("#th43,#th35").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th52")){$("#th44,#th36").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th53")){$("#th45,#th37").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th54")){$("#th46,#th38").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th55")){$("#th47,#th39").css("background-color", "green")}

            if (($("#dragtarget24").parent().attr("id") ==  "th40")){$("#th32").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th41")){$("#th33").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th42")) {$("#th34").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th43")){$("#th35").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th44")){$("#th36").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th45")){$("#th37").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th46")){$("#th38").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th47")){$("#th39").css("background-color", "green")}

            if (($("#dragtarget24").parent().attr("id") ==  "th32")){$("#th24").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th33")){$("#th25").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th34")){$("#th26").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th35")){$("#th27").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th36")){$("#th28").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th37")){$("#th29").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th38")){$("#th30").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th39")){$("#th31").css("background-color", "green")}

            if (($("#dragtarget24").parent().attr("id") ==  "th24")){$("#th16").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th25")){$("#th17").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th26")){$("#th18").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th27")){$("#th19").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th28")){$("#th20").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th29")){$("#th21").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th30")){$("#th22").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th31")){$("#th23").css("background-color", "green")}

            if (($("#dragtarget24").parent().attr("id") ==  "th16")){$("#th8").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th17")){$("#th9").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th18")){$("#th10").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th19")){$("#th11").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th20")){$("#th12").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th21")){$("#th13").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th22")){$("#th14").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th23")){$("#th15").css("background-color", "green")}

            if (($("#dragtarget24").parent().attr("id") ==  "th8")){$("#th").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th9")){$("#th1").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th10")){$("#th2").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th11")){$("#th3").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th12")){$("#th4").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th13")){$("#th5").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th14")){$("#th6").css("background-color", "green")}
            if (($("#dragtarget24").parent().attr("id") ==  "th15")){$("#th7").css("background-color", "green")}

        });


//black king
        $("#dragtarget29").mouseenter(function () {

            if (($("#dragtarget29").parent().attr("id") == "th")) {
                $("#th1,#th8,#th9").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th7")) {
                $("#th6,#th14,#th15").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th56")) {
                $("#th48,#th49,#th57").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th63")) {
                $("#th54,#th55,#th62").css("background-color", "green")
            }

            if (($("#dragtarget29").parent().attr("id") == "th1")) {
                $("#th,#th2,#th8,#th9,#th10").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th2")) {
                $("#th1,#th3,#th11,#th9,#th10").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th3")) {
                $("#th4,#th2,#th11,#th12,#th10").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th4")) {
                $("#th3,#th5,#th11,#th12,#th13").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th5")) {
                $("#th4,#th6,#th12,#th13,#th14").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th6")) {
                $("#th5,#th7,#th13,#th14,#th15").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th8")) {
                $("#th,#th1,#th16,#th9,#th17").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th16")) {
                $("#th8,#th9,#th17,#th24,#th25").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th24")) {
                $("#th16,#th17,#th25,#th32,#th33").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th32")) {
                $("#th24,#th25,#th33,#th40,#th41").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th40")) {
                $("#th32,#th33,#th41,#th48,#th49").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th48")) {
                $("#th40,#th41,#th49,#th56,#th57").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th15")) {
                $("#th7,#th6,#th14,#th22,#th23").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th23")) {
                $("#th14,#th15,#th22,#th30,#th31").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th31")) {
                $("#th22,#th23,#th30,#th38,#th39").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th39")) {
                $("#th30,#th31,#th38,#th46,#th47").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th47")) {
                $("#th38,#th39,#th46,#th54,#th55").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th55")) {
                $("#th46,#th47,#th54,#th62,#th63").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th57")) {
                $("#th48,#th49,#th50,#th56,#th58").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th58")) {
                $("#th49,#th50,#th51,#th57,#th59").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th59")) {
                $("#th50,#th51,#th52,#th58,#th60").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th60")) {
                $("#th51,#th52,#th53,#th59,#th61").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th61")) {
                $("#th52,#th53,#th54,#th60,#th62").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th62")) {
                $("#th53,#th54,#th55,#th61,#th63").css("background-color", "green")
            }

            if (($("#dragtarget29").parent().attr("id") == "th9")) {
                $("#th,#th1,#th2,#th8,#th10,#th16,#th17,#th18").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th10")) {
                $("#th1,#th2,#th3,#th9,#th11,#th18,#th17,#th19").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th11")) {
                $("#th2,#th3,#th4,#th10,#th12,#th19,#th18,#th20").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th12")) {
                $("#th3,#th4,#th5,#th11,#th13,#th20,#th19,#th21").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th13")) {
                $("#th4,#th5,#th6,#th12,#th14,#th21,#th20,#th22").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th14")) {
                $("#th5,#th6,#th7,#th13,#th15,#th22,#th21,#th23").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th17")) {
                $("#th8,#th9,#th10,#th16,#th18,#th25,#th24,#th26").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th18")) {
                $("#th9,#th10,#th11,#th17,#th19,#th26,#th25,#th27").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th19")) {
                $("#th10,#th11,#th12,#th18,#th20,#th27,#th26,#th28").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th20")) {
                $("#th11,#th12,#th13,#th19,#th21,#th28,#th27,#th29").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th21")) {
                $("#th12,#th13,#th14,#th20,#th22,#th29,#th28,#th30").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th22")) {
                $("#th13,#th14,#th15,#th21,#th23,#th30,#th29,#th31").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th25")) {
                $("#th16,#th17,#th18,#th24,#th26,#th33,#th32,#th34").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th26")) {
                $("#th17,#th18,#th19,#th25,#th27,#th34,#th33,#th35").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th27")) {
                $("#th18,#th19,#th20,#th26,#th28,#th35,#th34,#th36").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th28")) {
                $("#th19,#th20,#th21,#th27,#th29,#th36,#th35,#th37").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th29")) {
                $("#th20,#th21,#th22,#th28,#th30,#th37,#th36,#th38").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th30")) {
                $("#th21,#th22,#th23,#th29,#th31,#th38,#th37,#th39").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th33")) {
                $("#th24,#th25,#th26,#th32,#th34,#th41,#th40,#th42").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th34")) {
                $("#th25,#th26,#th27,#th33,#th35,#th42,#th41,#th43").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th35")) {
                $("#th26,#th27,#th28,#th34,#th36,#th43,#th42,#th44").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th36")) {
                $("#th27,#th28,#th29,#th35,#th37,#th44,#th43,#th45").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th37")) {
                $("#th28,#th29,#th30,#th36,#th38,#th45,#th44,#th46").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th38")) {
                $("#th29,#th30,#th31,#th37,#th39,#th46,#th45,#th47").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th41")) {
                $("#th32,#th33,#th34,#th40,#th42,#th49,#th48,#th50").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th42")) {
                $("#th33,#th34,#th35,#th41,#th43,#th50,#th49,#th51").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th43")) {
                $("#th34,#th35,#th36,#th42,#th44,#th51,#th50,#th52").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th44")) {
                $("#th35,#th36,#th37,#th43,#th45,#th52,#th51,#th53").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th45")) {
                $("#th36,#th37,#th38,#th44,#th46,#th53,#th52,#th54").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th46")) {
                $("#th37,#th38,#th39,#th45,#th47,#th54,#th53,#th55").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th49")) {
                $("#th40,#th41,#th42,#th48,#th50,#th57,#th56,#th58").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th50")) {
                $("#th41,#th42,#th43,#th49,#th51,#th58,#th57,#th59").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th51")) {
                $("#th42,#th43,#th44,#th50,#th52,#th59,#th58,#th60").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th52")) {
                $("#th43,#th44,#th45,#th51,#th53,#th60,#th59,#th61").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th53")) {
                $("#th44,#th45,#th46,#th52,#th54,#th61,#th60,#th62").css("background-color", "green")
            }
            if (($("#dragtarget29").parent().attr("id") == "th54")) {
                $("#th45,#th46,#th47,#th53,#th55,#th62,#th61,#th63").css("background-color", "green")
            }
        });

});


$("#dragtarget").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});

$("#dragtarget2").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});

$("#dragtarget7").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});


$("#dragtarget8").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});

$("#dragtarget3").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});

$("#dragtarget4").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});

$("#dragtarget6").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});

$("#dragtarget5").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});

$("#dragtarget9").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});

$("#dragtarget10").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});

$("#dragtarget11").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});
$("#dragtarget12").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});
$("#dragtarget13").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});
$("#dragtarget14").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});
$("#dragtarget15").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});
$("#dragtarget16").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});
$("#dragtarget17").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});
$("#dragtarget18").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});
$("#dragtarget19").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});
$("#dragtarget20").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});
$("#dragtarget21").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});
$("#dragtarget22").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});
$("#dragtarget23").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});
$("#dragtarget24").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});
$("#dragtarget25").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});
$("#dragtarget26").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});
$("#dragtarget27").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});
$("#dragtarget28").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});
$("#dragtarget29").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});
$("#dragtarget30").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});
$("#dragtarget31").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});
$("#dragtarget32").mouseleave(function() {
    $("#th1,#th3,#th5,#th7,#th8,#th10,#th12,#th14,#th17,#th19,#th21,#th23,#th24,#th26,#th28,#th30," +
        "#th33,#th35,#th37,#th39,#th40,#th42,#th44,#th46,#th49,#th51,#th53,#th55,#th56,#th58,#th60,#th62").css("background-color", "#515A5A")
    $("#th,#th2,#th4,#th6,#th9,#th11,#th13,#th15,#th16,#th18,#th20,#th22,#th25,#th27,#th29,#th31," +
        "#th32,#th34,#th36,#th38,#th41,#th43,#th45,#th47,#th48,#th50,#th52,#th54,#th57,#th59,#th61,#th63").css("background-color", "white")
});
