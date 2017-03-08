//=====================================================================================
function killErrors() {
	return true;
}
window.onerror = killErrors;
//创建浏览器兼容的Ajax对象
function initXmlHttpReq(){  
	var browserVersion = navigator.appVersion;  
	var xmlhttpReq;  
	if(window.XMLHttpRequest){  
		xmlhttpReq = new XMLHttpRequest();  
	}else if(window.ActiveXObject){  
		var a = ['MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP', 'MICROSOFT.XMLHTTP.1.0', 'MICROSOFT.XMLHTTP.1', 'MICROSOFT.XMLHTTP'];
		for (var i = 0; i < a.length; i++) {  
			if(browserVersion.indexOf("MSIE 6.0")){  
				xmlhttpReq = new ActiveXObject("MSXML2.XMLHTTP");  
				break;  
			}else{  
				xmlhttpReq = new ActiveXObject(a[i]);  
				if(xmlhttpReq){  
					break; 
				}  
			}  
		}  
	}  
	return xmlhttpReq;  
}
