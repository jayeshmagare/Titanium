// INDEX VIEW FILE 
	//Ti.include("../models/fugitiveModel.js");
	
	var tabs = Array();
	tabs[0]= "Fugative";
	tabs[1]= "Criminal";
	
	app.view.ShowIndexTabView = function() {
	   return {
    	  	getView: function() {
				
				var windowsArr = app.view.createIndexTabgrpWindow(tabs);	
				var mainTabGroup = app.view.createIndexTabGroup(tabs,windowsArr);
				return mainTabGroup;
			}
   		}
	}
	
	app.view.createIndexTabGroup = function(tabs,windowsArr){
		
		var tabgrp= Ti.UI.createTabGroup();
		
		for(var i=0;j=tabs.length,i<j;i++)
		{
			var tabobj = Ti.UI.createTab({
				title : tabs[i],
				window : windowsArr[tabs[i]],
			});
			tabobj.focusable=true;
			tabgrp.addTab(tabobj);
		}
		tabgrp.setActiveTab(0);
		
		tabgrp.addEventListener('focus', function(e) {
			//alert(11);
		    /*if (e.previousTab) {
		        e.previousTab.window.remove(webView);
		    }
		    if (e.tab) {
		        e.tab.window.add(webView);
		    }*/
		   //e.tab.window.open();
		   //alert(e.tab.window.title);
		   
		   
		});
		return tabgrp;
	}
	
	app.view.createIndexTabgrpWindow = function (tabs){
		
		/*  Dummy Data */
		
		var criminal = Array();
		criminal[0]= "Chetan Shah1";
		criminal[1]= "Jayesh Magare1";
		criminal[2]= "Vickram Bahadur1";
		/*  Dummy Data */
		
		var fugativeDataView = app.view.createIndexTabgrpDataObject();
		var criminalDataView = app.view.createIndexTabgrpDataObject();
		

		fugativeDataView.addEventListener('click',function(e){
					 new app.view.ShowDetailWin().createShowWin(e);
			});
					
		var windowsArr = Array();
		
		for(var i=0;j=tabs.length,i<j;i++)
		{
			
			var win= Ti.UI.createWindow({
				backgroundColor : '#fff',
				title : tabs[i]
			});
			
			if(tabs[i] == "Fugative")		{ win.add(fugativeDataView); }
			else if(tabs[i] == "Criminal")	{ win.add(criminalDataView); }
			
			new app.controller.menu().loadMenu(win);			

			//Ti.App.fireEvent("app:loadmenu",win);
			/*win.addEventListener('focus', function(e) {
					alert(1);
			});*/
			
			windowsArr[tabs[i]]=win;
		}
		//Ti.App.addEventListener('fugitiveAdded', function(fugativeDataView1){   app.view.populateData(fugativeDataView1); } );
		
		app.view.populateData(fugativeDataView);
		app.view.populateData(criminalDataView);
		
				
		return windowsArr;
	}
	
	app.view.populateData = function(fugativeDataView)
	{
		var fugitiveDbObjArr = new app.model.fugitiveModelMapper().selectData();
		
		var dataarr=[];
  	
	 	for(var i=0;j=fugitiveDbObjArr.length,i<j;i++)
		{
			var tmp = fugitiveDbObjArr[i].name;
			var row = Titanium.UI.createTableViewRow();
			var dataRow = Titanium.UI.createLabel({
							text:tmp,
							width:'auto',
							textAlign:'left',
							left:10,
							color : '#000'
						});
								
	  		row.hasChild=true;
	  		row.title = tmp; 
	  		row.add(dataRow);
	  		
	  		dataarr.push(row);
	  	}	
	  	
		fugativeDataView.setData(dataarr);
	}

	app.view.createIndexTabgrpDataObject = function (data) {
	  	
	  	var TheFugativeTable = Titanium.UI.createTableView();
						
	  	return TheFugativeTable; 
	}
	
	/*Ti.UI.currentWindow.addEventListener('focus', function(e) {
   				//tableview.setData(data);
   				alert(100);
			});*/
	
	

