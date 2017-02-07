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


if($("#dragtarget").parent().id = "th" ){
$("#dragtarget").mouseenter(function() {
    //$("#dragtarget").parent().css("background-color", "green")
        $("#th1,#th2,#th3,#th4,#th5,#th6,#th7").css("background-color", "green")
   //$("#dragtarget2").parent().css("background-color", "green")
   // $("#th1").css("background-color", "green")

   //  $("#th1,#th2,#th3,#th4,#th5,#th6,#th7").css("background-color", "green")
});}

// $("#dragtarget").mouseleave(function() {
//     $("#th1,#th2,#th3,#th4,#th5,#th6,#th7").css("background-color", "#515A5A")
// });

