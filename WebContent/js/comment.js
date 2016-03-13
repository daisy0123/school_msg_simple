myFocus.set({
	id: 'myFocus', //ID
	pattern: 'mF_classicHB' //风格
});

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

function getDom(id) {
	return document.getElementById(id);
}

function masslist() {
	getDom("list1").onclick = function() {
		getDom("content-right-mass-intro").style.display = "block";
	}
	getDom("list2").onclick = function() {
		getDom("content-right-mass-intro").style.display = "block";
	}
	getDom("list3").onclick = function() {
		getDom("content-right-mass-intro").style.display = "block";
	}
	getDom("list4").onclick = function() {
		getDom("content-right-mass-intro").style.display = "block";
	}
	getDom("list5").onclick = function() {
		getDom("content-right-mass-intro").style.display = "block";
	}
	getDom("list6").onclick = function() {
		getDom("content-right-mass-intro").style.display = "block";
	}
	getDom("list7").onclick = function() {
		getDom("content-right-mass-intro").style.display = "block";
	}
	getDom("list8").onclick = function() {
		getDom("content-right-mass-intro").style.display = "block";
	}
}
function responds() {
	getDom("ok").onclick = function() {
		getDom("content-right-mass-intro").style.display = "none";
	}
	getDom("no").onclick = function() {
		getDom("content-right-mass-intro").style.display = "none";
	}
	masslist();
}
function mi(){
	getDom("mi").onclick=function(){
		getDom("solved").style.display = "block";
		getDom("unresolved").style.display = "none";
	}
	getDom("mine").onclick=function(){
		getDom("solved").style.display = "none";
		getDom("unresolved").style.display = "block";
	}
}

function ex(){
	getDom("myleave").onclick=function(){
		getDom("mleave").style.display = "block";
		getDom("myleave-mass-intro").style.display = "none";
	}
	getDom("wantleave").onclick=function(){
		getDom("mleave").style.display = "none";
		getDom("myleave-mass-intro").style.display = "block";
	}
}

function list() {
	getDom("excuse").onclick = function() {
		getDom("content-right-mass").style.display = "block";
		getDom("new").style.display="none";
		getDom("question").style.display="none";
		getDom("file").style.display="none";
		
	}
	getDom("action").onclick = function() {
		getDom("content-right-mass").style.display = "none";
		getDom("new").style.display="block";
		getDom("question").style.display="none";
		getDom("file").style.display="none";
		
	}
	getDom("que").onclick = function() {
		getDom("content-right-mass").style.display = "none";
		getDom("new").style.display="none";
		getDom("question").style.display="block";
		getDom("file").style.display="none";
		mi();
	}
	getDom("put").onclick = function() {
		getDom("content-right-mass").style.display = "none";
		getDom("new").style.display="none";
		getDom("question").style.display="none";
		getDom("file").style.display="block";
	}
	responds();
}
list();

