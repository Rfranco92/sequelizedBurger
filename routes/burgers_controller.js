// Import the model (cat.js) to use its database functions.
var db = require("../models");

module.exports =function(router){

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect('/burgers');
});

router.get("/burgers", function(req, res){

   db.burger.findAll({}).then(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
})

router.post("/burgers/create", function(req, res) {
  console.log(req.body.name);
  db.burger.create({
    burger_name: req.body.name
  }).then(function(result){
    res.redirect('/burgers');
  })
});

router.put("/burgers/update/:id", function(req, res) {
  db.burger.update({
        devoured: req.body.devoured
     }, { 
      where: {
        id: req.params.id
      }
  }).then(function(dbBurger){
   
    res.redirect('/burgers');
      
  });
});
};

