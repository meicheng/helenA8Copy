var data = require("../data.json");
var _ = require('underscore');

exports.editFolder = function(req, res) {   
  //Change Folder Name
  if(req.query.newFolderName != (null || '' || "")){
    for(var i = 0; i < _.size(data.folders); i++){
      if(data.folders[i].folderID == req.params.folderID){
        data.folders[i].name = req.query.newFolderName;
        break;
      }
    }
  }
  //Delete Folder
  if(req.query.confirmDelete == "DELETE"){
    for(var i = 0; i < _.size(data.folders); i++){
      if(data.folders[i].folderID == req.params.folderID){
        data.folders.splice(i,1);
        break;
      }
    }    
  }
  console.log(data);
  if(req.query.confirmDelete == "DELETE"){
    res.redirect('/index');
  } 
  else{ 
    res.redirect('/folder/' + req.params.folderID);
  }
};
