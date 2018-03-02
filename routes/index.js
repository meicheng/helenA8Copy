/*
 * GET home page.
 */
//Get folder data
var data = require('../data.json');

exports.view = function(req, res){
  console.log(data);
  res.render('index', {
    folders: data.folders,
    notes: data.notes,   
  });
};
