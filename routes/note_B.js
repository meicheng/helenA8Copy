
/*
 * GET home page.
 */
 
exports.view = function(req, res){
  res.render('note_B', {
    folderID: req.params.folderID, 
  });
};
