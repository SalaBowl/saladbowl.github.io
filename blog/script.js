(function(){
	var footerload = new XMLHttpRequest();
	footerload.open("get", "../header.html");
	footerload.send();
	footerload.addEventListener("load", function(){
		var html = document.getElementById("head");

		if(html) html.innerHTML = this.response;
	}, false);
})();

(function(){
	var footerload = new XMLHttpRequest();
	footerload.open("get", "../sidemenu.html");
	footerload.send();
	footerload.addEventListener("load", function(){
		var html = document.getElementById("sidemenu");

		if(html) html.innerHTML = this.response;
	}, false);
})();

(function(){
	var footerload = new XMLHttpRequest();
	footerload.open("get", "../footer.html");
	footerload.send();
	footerload.addEventListener("load", function(){
		var html = document.getElementById("footer");

		if(html) html.innerHTML = this.response;
	}, false);
})();
