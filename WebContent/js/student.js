myFocus.set({
	id: 'myFocus', //ID
	pattern: 'mF_classicHB' //风格
});

function getDom(id) {
	return document.getElementById(id);
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
		getDom("student-leavemass").style.display = "block";
		getDom("new").style.display="none";
		getDom("question").style.display="none";
		getDom("file").style.display="none";
		ex();
	}
	getDom("action").onclick = function() {
		getDom("student-leavemass").style.display = "none";
		getDom("new").style.display="block";
		getDom("question").style.display="none";
		getDom("file").style.display="none";
		
	}
	getDom("que").onclick = function() {
		getDom("student-leavemass").style.display = "none";
		getDom("new").style.display="none";
		getDom("question").style.display="block";
		getDom("file").style.display="none";
		mi();
	}
	getDom("put").onclick = function() {
		getDom("student-leavemass").style.display = "none";
		getDom("new").style.display="none";
		getDom("question").style.display="none";
		getDom("file").style.display="block";
	}

}
list();