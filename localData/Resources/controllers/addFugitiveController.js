	Ti.include("../models/fugitiveVO.js");
	
	app.controller.AddfugitiveController = function(){
		return {
			addFugitive : function(value){
				if(value == "")
				{
					Ti.UI.createAlertDialog({ title : 'Error', message : 'Please enter fugitive name!' ,buttonNames: ['OK']}).show();
				}
				else
				{
					
					var fugitiveObj = new app.model.fugitiveModel("",value,"0");
					
					var fugitiveDbObj = new app.model.fugitiveModelMapper().insertdata(fugitiveObj);

					//Titanium.UI.currentTab.open(indexView,{animated:true});
					
				 	Ti.App.fireEvent("app:close_add_window");
  	
				}			
			}
		}
	}
	

