// HARDWARE MENU VIEW FILE 
	
	app.view.menu = function(){
		
		var win = Ti.UI.currentWindow;
	  	var activity = Ti.Android.currentActivity;
		activity.onCreateOptionsMenu = function(e) {
		    var menu = e.menu;
		    var menuItem = menu.add({ title: "Add Data" });
		   // menuItem.setIcon("icon.png");
		    menuItem.addEventListener("click", function(e) {
		        new app.view.ShowDataWin().createAddDataWin();
		    });
		};
	}