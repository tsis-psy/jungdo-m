var GUBUN = ":/@"
var NATIVE_NONE = -1;
var NATIVE_ANDROID = 1;
var NATIVE_IOS = 2;

var userAgent = navigator.userAgent;
function getNativeFlag() {
	if (userAgent.indexOf("jeondoAndroid") > -1)
		return NATIVE_ANDROID;
	if (userAgent.indexOf("jeondoIOS") > -1)
		return NATIVE_IOS;
	
	return NATIVE_NONE;
}

function getWebAndFlag() {

	if(userAgent.toLowerCase().indexOf("android") > -1 ){
		return true;
	}
	return false;
}



var REGISTER_KEY = "";
var OS_TYPE = "";

var native = {
	
	getPushKey: function(script) {
		var nFlag = getNativeFlag();
		
		if(nFlag == NATIVE_NONE){
			OS_TYPE = "MWEB";
		}else if(nFlag == NATIVE_ANDROID){
			OS_TYPE = "AND";
		}else if(nFlag == NATIVE_IOS){
			OS_TYPE = "IOS";
		}else{
		}
		
		/*if(nFlag == NATIVE_NONE){
			alert("nFlag: NATIVE_NONE");
		}else if(nFlag == NATIVE_ANDROID){
			alert("nFlag: NATIVE_ANDROID"); 
		}else if(nFlag == NATIVE_IOS){
			alert("nFlag: NATIVE_IOS");
		}else{
			alert("nFlag: " + nFlag );
		}*/
		
		
		
		if (nFlag == NATIVE_NONE) return;
		
		var json = {
			script: script
		}
		var obj = JSON.stringify(json);
		if (nFlag == NATIVE_ANDROID) {
			try {
				jeondointer.getPushKey(obj);
			} catch(err) {}
		}
		else if (nFlag == NATIVE_IOS) {
			setTimeout(function() {
//				location.href = "getpushkey" + GUBUN + obj;
				callNative01();
			}, 100);
		}
	}
	
}



function callNative01() {
	try {
        webkit.messageHandlers.callbackHandler.postMessage("pushkey");
    } catch(error) {
        alert(error);
    }
}



function pushCallBack(message) {
//     alert(message);
     REGISTER_KEY = message;
}

function leftKeyClick(){
	//alert("leftKeyClick()");
	KeyClick(-1);
}

function rightKeyClick(){
	//alert("rightKeyClick()");
	KeyClick(+1);
}

function KeyClick(pos){
	
	setTimeout(function(){
	
		if($("#sub-container").is(":visible")){
			if(confirm("작성을 종료하시겠습니까?")){
				tab_lnk(3);
			}
		}else{
			if(pos > 0){
				swiper_2.slideNext();
			}else{
				swiper_2.slidePrev();
			}
		}
		return false;
	
	}, 100);
}



