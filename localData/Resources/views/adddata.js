	Ti.include("../controllers/addFugitiveController.js");
	app.view.ShowDataWin = function() {
	   return {
    	  	createAddDataWin: function() {
				
				var win= Ti.UI.createWindow({
					backgroundColor : '#fff',
					title : "Add User Data"
				});
				var label2 = Titanium.UI.createLabel({
						color:'#999',
						text:'Add Fugitive',
						font:{fontSize:20,fontFamily:'Helvetica Neue'},
						textAlign:'center',
						width:'auto',
						top: 10,
						left :10
					});			
				
				var textfld = Titanium.UI.createTextField({
						color:'#999',
						font:{fontSize:20,fontFamily:'Helvetica Neue'},
						width:250,
						top: 50,
						left :10,
					});		
						
				textfld.addEventListener('return',function(e){

					textfld.blur();
					var value = textfld.value;
					
					var fugitiveCtrl= new app.controller.AddfugitiveController();
					fugitiveCtrl.addFugitive(value);
					
					//fugitiveDbObj.insertdata(value);
				});
				
				win.add(label2);
				win.add(textfld);
					
				new app.controller.menu().loadMenu(win);			
				Titanium.UI.currentTab.open(win,{animated:true});
				
				
				Ti.App.addEventListener("app:close_add_window",function(e){
					var cwin = Ti.UI.currentWindow;
					cwin.close();
				})
				
				// FOR APP PROPERTY DEMO
				Ti.App.Properties.setString('last_state','You were in add details window');  
			}
   		}
	}
	