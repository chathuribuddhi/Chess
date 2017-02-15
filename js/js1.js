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




$(document).ready(function () {
	
		$("#dragtarget").mouseenter(function() {
			if($("#dragtarget").parent().attr("id") == "th"){
		    $("#th1,#th2,#th3,#th4,#th5,#th6,#th7").css("background-color", "green")
		}
		});
});

$("#dragtarget").mouseleave(function() {
    $("#th1,#th2,#th3,#th4,#th5,#th6,#th7").css("background-color", "#515A5A")
});

// if ($("#dragtarget").parent().attr("id") == "th1") {$("#th,#th1,#th2,#th3,#th4,#th5,#th6,#th7").css("background-color", "green")}
// if ($("#dragtarget").parent().attr("id") == "th2") {$("#th,#th1,#th2,#th3,#th4,#th5,#th6,#th7").css("background-color", "green")}
// if ($("#dragtarget").parent().attr("id") == "th3") {$("#th,#th1,#th2,#th3,#th4,#th5,#th6,#th7").css("background-color", "green")}
// if ($("#dragtarget").parent().attr("id") == "th4") {$("#th,#th1,#th2,#th3,#th4,#th5,#th6,#th7").css("background-color", "green")}
// if ($("#dragtarget").parent().attr("id") == "th5") {$("#th,#th1,#th2,#th3,#th4,#th5,#th6,#th7").css("background-color", "green")}
// if ($("#dragtarget").parent().attr("id") == "th6") {$("#th,#th1,#th2,#th3,#th4,#th5,#th6,#th7").css("background-color", "green")}
// if ($("#dragtarget").parent().attr("id") == "th7") {$("#th,#th1,#th2,#th3,#th4,#th5,#th6,#th7").css("background-color", "green")}
//if($("#dragtarget").parent().attr("id") == "th8"||"th9"||"th10"||"th11"||"th12"||"th13"||"th14"||"th15" ){



if ($("#dragtarget").parent().attr("id") == "th9") {$("#th8,#th9,#th10,#th11,#th12,#th13,#th14,#th15").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th10") {$("#th8,#th9,#th10,#th11,#th12,#th13,#th14,#th15").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th11") {$("#th8,#th9,#th10,#th11,#th12,#th13,#th14,#th15").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th12") {$("#th8,#th9,#th10,#th11,#th12,#th13,#th14,#th15").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th13") {$("#th8,#th9,#th10,#th11,#th12,#th13,#th14,#th15").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th14") {$("#th8,#th9,#th10,#th11,#th12,#th13,#th14,#th15").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th15") {$("#th8,#th9,#th10,#th11,#th12,#th13,#th14,#th15").css("background-color", "green")}



if ($("#dragtarget").parent().attr("id") == "th17") {$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th18") {$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th19") {$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th20") {$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th21") {$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th22") {$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th23") {$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23").css("background-color", "green")}

if ($("#dragtarget").parent().attr("id") == "th25") {$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th26") {$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th27") {$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th28") {$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th29") {$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th30") {$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th31") {$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31").css("background-color", "green")}

if ($("#dragtarget").parent().attr("id") == "th33") {$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th34") {$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th35") {$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th36") {$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th37") {$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th38") {$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th39") {$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39").css("background-color", "green")}

if ($("#dragtarget").parent().attr("id") == "th41") {$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th42") {$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th43") {$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th44") {$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th45") {$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th46") {$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th47") {$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47").css("background-color", "green")}

if ($("#dragtarget").parent().attr("id") == "th49") {$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th50") {$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th51") {$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th52") {$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th53") {$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th54") {$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th55") {$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55").css("background-color", "green")}

if ($("#dragtarget").parent().attr("id") == "th57") {$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th58") {$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th59") {$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th60") {$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th61") {$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th62") {$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th63") {$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63").css("background-color", "green")}


if ($("#dragtarget").parent().attr("id") == "th1") {$("#th1,#th9,#th17,#th25,#th33,#th41,#th49,#th57").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th2") {$("#th2,#th10,#th18,#th26,#th34,#th42,#th50,#th58").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th3") {$("#th3,#th11,#th19,#th27,#th35,#th43,#th51,#th59").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th4") {$("#th4,#th12,#th20,#th28,#th36,#th44,#th52,#th60").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th5") {$("#th5,#th13,#th21,#th29,#th37,#th45,#th53,#th61").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th6") {$("#th6,#th14,#th22,#th30,#th38,#th46,#th54,#th62").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th7") {$("#th7,#th15,#th23,#th31,#th39,#th47,#th55,#th63").css("background-color", "green")}

if ($("#dragtarget").parent().attr("id") == "th9") {$("#th1,#th9,#th17,#th25,#th33,#th41,#th49,#th57").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th10") {$("#th2,#th10,#th18,#th26,#th34,#th42,#th50,#th58").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th11") {$("#th3,#th11,#th19,#th27,#th35,#th43,#th51,#th59").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th12") {$("#th4,#th12,#th20,#th28,#th36,#th44,#th52,#th60").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th13") {$("#th5,#th13,#th21,#th29,#th37,#th45,#th53,#th61").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th14") {$("#th6,#th14,#th22,#th30,#th38,#th46,#th54,#th62").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th15") {$("#th7,#th15,#th23,#th31,#th39,#th47,#th55,#th63").css("background-color", "green")}

if ($("#dragtarget").parent().attr("id") == "th17") {$("#th1,#th9,#th17,#th25,#th33,#th41,#th49,#th57").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th18") {$("#th2,#th10,#th18,#th26,#th34,#th42,#th50,#th58").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th19") {$("#th3,#th11,#th19,#th27,#th35,#th43,#th51,#th59").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th20") {$("#th4,#th12,#th20,#th28,#th36,#th44,#th52,#th60").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th21") {$("#th5,#th13,#th21,#th29,#th37,#th45,#th53,#th61").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th22") {$("#th6,#th14,#th22,#th30,#th38,#th46,#th54,#th62").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th23") {$("#th7,#th15,#th23,#th31,#th39,#th47,#th55,#th63").css("background-color", "green")}

if ($("#dragtarget").parent().attr("id") == "th25") {$("#th1,#th9,#th17,#th25,#th33,#th41,#th49,#th57").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th26") {$("#th2,#th10,#th18,#th26,#th34,#th42,#th50,#th58").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th27") {$("#th3,#th11,#th19,#th27,#th35,#th43,#th51,#th59").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th28") {$("#th4,#th12,#th20,#th28,#th36,#th44,#th52,#th60").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th29") {$("#th5,#th13,#th21,#th29,#th37,#th45,#th53,#th61").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th30") {$("#th6,#th14,#th22,#th30,#th38,#th46,#th54,#th62").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th31") {$("#th7,#th15,#th23,#th31,#th39,#th47,#th55,#th63").css("background-color", "green")}

if ($("#dragtarget").parent().attr("id") == "th33") {$("#th1,#th9,#th17,#th25,#th33,#th41,#th49,#th57").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th34") {$("#th2,#th10,#th18,#th26,#th34,#th42,#th50,#th58").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th35") {$("#th3,#th11,#th19,#th27,#th35,#th43,#th51,#th59").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th36") {$("#th4,#th12,#th20,#th28,#th36,#th44,#th52,#th60").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th37") {$("#th5,#th13,#th21,#th29,#th37,#th45,#th53,#th61").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th38") {$("#th6,#th14,#th22,#th30,#th38,#th46,#th54,#th62").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th39") {$("#th7,#th15,#th23,#th31,#th39,#th47,#th55,#th63").css("background-color", "green")}

if ($("#dragtarget").parent().attr("id") == "th41") {$("#th1,#th9,#th17,#th25,#th33,#th41,#th49,#th57").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th42") {$("#th2,#th10,#th18,#th26,#th34,#th42,#th50,#th58").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th43") {$("#th3,#th11,#th19,#th27,#th35,#th43,#th51,#th59").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th44") {$("#th4,#th12,#th20,#th28,#th36,#th44,#th52,#th60").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th45") {$("#th5,#th13,#th21,#th29,#th37,#th45,#th53,#th61").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th46") {$("#th6,#th14,#th22,#th30,#th38,#th46,#th54,#th62").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th47") {$("#th7,#th15,#th23,#th31,#th39,#th47,#th55,#th63").css("background-color", "green")}

if ($("#dragtarget").parent().attr("id") == "th49") {$("#th1,#th9,#th17,#th25,#th33,#th41,#th49,#th57").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th50") {$("#th2,#th10,#th18,#th26,#th34,#th42,#th50,#th58").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th51") {$("#th3,#th11,#th19,#th27,#th35,#th43,#th51,#th59").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th52") {$("#th4,#th12,#th20,#th28,#th36,#th44,#th52,#th60").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th53") {$("#th5,#th13,#th21,#th29,#th37,#th45,#th53,#th61").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th54") {$("#th6,#th14,#th22,#th30,#th38,#th46,#th54,#th62").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th55") {$("#th7,#th15,#th23,#th31,#th39,#th47,#th55,#th63").css("background-color", "green")}

if ($("#dragtarget").parent().attr("id") == "th57") {$("#th1,#th9,#th17,#th25,#th33,#th41,#th49,#th57").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th58") {$("#th2,#th10,#th18,#th26,#th34,#th42,#th50,#th58").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th59") {$("#th3,#th11,#th19,#th27,#th35,#th43,#th51,#th59").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th60") {$("#th4,#th12,#th20,#th28,#th36,#th44,#th52,#th60").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th61") {$("#th5,#th13,#th21,#th29,#th37,#th45,#th53,#th61").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th62") {$("#th6,#th14,#th22,#th30,#th38,#th46,#th54,#th62").css("background-color", "green")}
if ($("#dragtarget").parent().attr("id") == "th63") {$("#th7,#th15,#th23,#th31,#th39,#th47,#th55,#th63").css("background-color", "green")}












case "th8": {$("#th16,#th24").css("background-color", "green")}
case "th9": {$("#th17,#th25").css("background-color", "green")}
case "th10": {$("#th18,#th26").css("background-color", "green")}
case "th11": {$("#th19,#th27").css("background-color", "green")}
case "th12": {$("#th20,#th28").css("background-color", "green")}
case "th13": {$("#th21,#th29").css("background-color", "green")}
case "th14": {$("#th22,#th30").css("background-color", "green")}
case "th15": {$("#th23,#th31").css("background-color", "green")}

case "th16": {$("#th24").css("background-color", "green")}
case "th17": {$("#th25").css("background-color", "green")}
case "th18": {$("#th26").css("background-color", "green")}
case "th19": {$("#th27").css("background-color", "green")}
case "th20": {$("#th28").css("background-color", "green")}
case "th21": {$("#th29").css("background-color", "green")}
case "th22": {$("#th30").css("background-color", "green")}
case "th23": {$("#th31").css("background-color", "green")}

case "th24": {$("#th32").css("background-color", "green")}
case "th25": {$("#th33").css("background-color", "green")}
case "th26": {$("#th34").css("background-color", "green")}
case "th27": {$("#th35").css("background-color", "green")}
case "th28": {$("#th36").css("background-color", "green")}
case "th29": {$("#th37").css("background-color", "green")}
case "th30": {$("#th38").css("background-color", "green")}
case "th31": {$("#th39").css("background-color", "green")}

case "th32": {$("#th40").css("background-color", "green")}
case "th33": {$("#th41").css("background-color", "green")}
case "th34": {$("#th42").css("background-color", "green")}
case "th35": {$("#th43").css("background-color", "green")}
case "th36": {$("#th44").css("background-color", "green")}
case "th37": {$("#th45").css("background-color", "green")}
case "th38": {$("#th46").css("background-color", "green")}
case "th39": {$("#th47").css("background-color", "green")}

case "th40": {$("#th48").css("background-color", "green")}
case "th41": {$("#th49").css("background-color", "green")}
case "th42": {$("#th50").css("background-color", "green")}
case "th43": {$("#th51").css("background-color", "green")}
case "th44": {$("#th52").css("background-color", "green")}
case "th45": {$("#th53").css("background-color", "green")}
case "th46": {$("#th54").css("background-color", "green")}
case "th47": {$("#th55").css("background-color", "green")}

case "th48": {$("#th56").css("background-color", "green")}
case "th49": {$("#th57").css("background-color", "green")}
case "th50": {$("#th58").css("background-color", "green")}
case "th51": {$("#th59").css("background-color", "green")}
case "th52": {$("#th60").css("background-color", "green")}
case "th53": {$("#th61").css("background-color", "green")}
case "th54": {$("#th62").css("background-color", "green")}
case "th55": {$("#th63").css("background-color", "green")}