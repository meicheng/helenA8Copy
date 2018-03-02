var data = require("../data.json");
var _ = require('underscore');

exports.changeSync = function(req, res) {   
  
  for(var i = 0; i < _.size(data.folders); i++){
    if(data.folders[i].folderID == req.params.folderID){
      data.folders[i].sync = req.query.syncCode;
      break;
    }
  }
  console.log(data);
  res.redirect('/folder/' + req.params.folderID);
};
