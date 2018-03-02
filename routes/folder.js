
/*
 * GET folder page.
 */
//Get folder data
var data = require('../data.json');
var sharedData = require('../sharedData.json');
//Lets us see the size of JSON
var _ = require('underscore');

exports.view = function(req, res){

// Only Show Notes In the folder 
  var folderNotes = new Array();

  for(var i = 0; i < _.size(data.notes); i++){
    if(data.notes[i].folder == req.params.folderID){
      folderNotes.push(data.notes[i]);
    }
  }

// Find folder name and sync code 
  var folderName; 
  var syncCode;

  for(var i = 0; i < _.size(data.folders); i++){
    if(data.folders[i].folderID == req.params.folderID){
      folderName = data.folders[i].name;
      syncCode = data.folders[i].sync;
    }
  }

// Find shared notes
  var syncedNotes = new Array();
  
  for(var i = 0; i < _.size(sharedData.notes); i++){
    if(sharedData.notes[i].sync == syncCode){
      syncedNotes.push(sharedData.notes[i]);
    }
  }

// Render the Page
  res.render('folder', {
    folderName: folderName,  
    folderID: req.params.folderID,
    notes: folderNotes, 
    syncCode: syncCode,
    syncedNotes: syncedNotes,
  });
};
