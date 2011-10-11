app.model.dbObject = function(){
	this.dblink = "";
	
	this.open = function(dbname){
		this.dblink = Ti.Database.open(dbname);
		return this.dblink;
	};
	
	this.execute_insert = function(query){
		var res = this.dblink.execute(query);
		var last = this.dblink.lastInsertRowId;
		return last;
	};
	
	this.execute_update_delete = function(query){
		var res = this.dblink.execute(query);
		var last = this.dblink.rowsAffected;
		return last;
	};
	
	this.closeDb = function(){
		this.dblink.close();	
	};
	
	this.fetchRows = function(query){
		var result = this.dblink.execute(query);
		//var rows = [];
		//while (result.isValidRow()) {
		//	rows.push(result);
		//	result.next();
		//}
		//result.close();
		return result;
	};
	
	this.create = function(query){
		this.dblink.execute(query);
	};
};


