// Menu Loader	
	app.controller.menu = function() {
	   return {
    	  	loadMenu: function(win) {
				win.addEventListener('open', function(e) {
   			    app.view.menu();
				});
			}
   		}
	}