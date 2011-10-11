// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var app = {
  view: {},
  controller: {},
  model: {},
  ui: {}
}

Ti.include("models/db.js");
Ti.include("controllers/menuController.js");
Ti.include("views/index.js");
Ti.include("views/menu.js");
Ti.include("views/adddata.js");
Ti.include("views/showdetail.js");
Ti.include("models/fugitiveDAO.js");

/* Initialize database with creating fugitive table*/
var fugitiveDbObj = new app.model.fugitiveModelMapper(); // THIS OBJECT WILL BE AVAILABLE IN OTHER FILES FOR CRUD OPERATIONS
fugitiveDbObj.init();
fugitiveDbObj.createTable();



var indexObj = new app.view.ShowIndexTabView();
var indexView = indexObj.getView();

indexView.open();


//============= FOR APP PROPERTY DEMO =======================
var lastState= Ti.App.Properties.getString('last_state');
if(lastState!="")
{
	//alert(lastState);	
}




