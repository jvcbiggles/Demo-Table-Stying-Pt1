/*
Lucid Generated Code
*/
function lucidDebug(uid,event) {
	try{
event.allAttributes_Lucid = "";
 for(var propertyName in event) {event.allAttributes_Lucid += propertyName+",";}		window.LucidWebPreviewDelegate.javascriptFunctionEntered_withEvent_(uid,event);
	} catch(err) { }
}


function lucidLog(uid,value) {
	try{
		console.log(value);
		window.LucidWebPreviewDelegate.lucidLog_withValue_(uid,value);
	} catch(err) { }
}




$(document).ready(function() {


//Lucid_LucidBinding_0_23_160385059770224663589070533
/*lucidcode*/
$(/*luc!d_element*/document/*luc!d_element_end*/).bind(/*luc!d_event*/'ready'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('160385059770224663589070533',event);/*luc!d_debug_end*/
	/*luc!d_function*/addClassEvenRow(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid

//Lucid_LucidBinding_100_23_15267361971720648623926616259
/*lucidcode*/
$(/*luc!d_element*/'.mytable tr'/*luc!d_element_end*/).bind(/*luc!d_event*/'mouseover'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('15267361971720648623926616259',event);/*luc!d_debug_end*/
	/*luc!d_function*/addClassBlur(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid

//Lucid_LucidBinding_200_23_929351579963423622234116574
/*lucidcode*/
$(/*luc!d_element*/'.mytable tr'/*luc!d_element_end*/).bind(/*luc!d_event*/'mouseout'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('929351579963423622234116574',event);/*luc!d_debug_end*/
	/*luc!d_function*/removeClassOver(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid


});

//Lucid_LucidCustomAction_79_187_16834824451192403890414785426
function addClassEvenRow(senderObject, event) {
	lucidDebug('16834824451192403890414785426',event);
/*lucidcode*/$('.mytable tr:even').addClass('even-row');/*lucidcode_end*/

/*luc!d_callback*/addClassOddRow(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidCustomAction_237_281_2049114677275129400567533809
function addClassOver(senderObject, event) {
	lucidDebug('2049114677275129400567533809',event);
/*lucidcode*/$(senderObject).addClass('over');/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidCustomAction_400_185_4456305241436739779979338785
function removeClassOver(senderObject, event) {
	lucidDebug('4456305241436739779979338785',event);
/*lucidcode*/$(senderObject).removeClass('over');/*lucidcode_end*/

/*luc!d_callback*/removeClassBlur(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidCustomAction_78_283_1621614734763870261710234861
function addClassOddRow(senderObject, event) {
	lucidDebug('1621614734763870261710234861',event);
/*lucidcode*/$('.mytable tr:odd').addClass('odd-row');/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidCustomAction_237_185_1853618879227232324867745102
function addClassBlur(senderObject, event) {
	lucidDebug('1853618879227232324867745102',event);
/*lucidcode*/$('.mytable td').addClass('blur');/*lucidcode_end*/

/*luc!d_callback*/addClassOver(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidCustomAction_400_282_13738608847357048441927957329
function removeClassBlur(senderObject, event) {
	lucidDebug('13738608847357048441927957329',event);
/*lucidcode*/$('.mytable td').removeClass('blur');/*lucidcode_end*/

}
//EndLucid

