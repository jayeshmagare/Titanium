
	app.view.ShowDetailWin = function(){
		return {
    	  	createShowWin: function(e) {
				var win= Ti.UI.createWindow({
					backgroundColor : '#fff',
					title : "Show User Data"
				});
				var label2 = Titanium.UI.createLabel({
						color:'#999',
					text:e.rowData.title,
					font:{fontSize:20,fontFamily:'Helvetica Neue'},
					textAlign:'center',
					width:'auto'
					});			
				
				win.add(label2);
					
				new app.controller.menu().loadMenu(win);	
					
				Titanium.UI.currentTab.open(win,{animated:true});  
				
				//setTimeout(function()
			    //{
			    //    win.close();
			    //},1700);
				
				// FOR APP PROPERTY DEMO
				Ti.App.Properties.setString('last_state','You were in show details window');  		
    	  	}
		}    	
	}
