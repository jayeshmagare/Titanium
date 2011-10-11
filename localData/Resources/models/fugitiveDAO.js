
	// Fugitive db - id/name/captured
/*	app.model.fugitiveModel = {
		id :"",
		name :"",
		captured :"",
		setid : function(id){
			this.id = id ;
		},		
		getid : function(id){
			return this.id;
		},
		init : function(id){
			this.setid(id);
		}
	}*/
	/*app.model.fugitiveModel = function(id,name,captured){
		this.id = id;
		this.name = name;
		this.captured = captured;
	}*/

	app.model.fugitiveModelMapper = function(){
		this.dbObj = "";
		this.init = function()
		{
			this.dbObj = new app.model.dbObject();
			this.dbObj.open('airports');
		};
		this.createTable = function(){
			var query = 'CREATE TABLE IF NOT EXISTS fugitives(id INTEGER PRIMARY KEY, name TEXT, captured INTEGER)';
			this.dbObj.create(query);
		};
		
		this.insertdata = function(fugitiveObj){
			var query = 'INSERT INTO fugitives(name,captured) VALUES("'+ fugitiveObj.name +'","0")';
			var id = this.dbObj.execute_insert(query);
			
		};
		this.selectData = function(){
			var query = 'SELECT * FROM fugitives WHERE captured = "0" ORDER BY name ASC';
			var dataArr=this.dbObj.fetchRows(query);
			
			var finalArr = [];
			while (dataArr.isValidRow()) 
			{
				var fugitiveObj = new app.model.fugitiveModel(dataArr.fieldByName('id'),dataArr.fieldByName('name'),dataArr.fieldByName('captured'));
				finalArr.push(fugitiveObj);
				dataArr.next();
			}
			
			return finalArr;
			
		};
		
		this.init();
	}
	/*app.model.fugitiveModelMapper = {
		dbObj : "",
		init : function()
		{
			alert(1);
			this.dbObj=new db().open();
		},
		createTable : function(){
			var query = 'CREATE TABLE IF NOT EXISTS fugitives(id INTEGER PRIMARY KEY, name TEXT, captured INTEGER)';
			this.dbObj.create();
		},
		insertdata : function(){
			var query = 'INSERT INTO fugitives(name,captured) VALUES("jayesh","0")';
			this.dbObj.execute_insert_update();
		},
		selectData : function(){
			var query = 'SELECT * FROM fugitives WHERE captured = "0" ORDER BY name ASC';
			var dataArr=this.dbObj.fetchRows();
		}
	}*/
