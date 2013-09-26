function set_routes(app){
  app.get('/', function(req, res){
   res.render('index',
    { title : 'Home' }
    )
  })
  app.get('/projects', function(req, res){
   res.render('projects',
    { title : 'Home' }
    )
  })
  app.get('/resume', function(req, res){
   res.render('resume',
    { title : 'Home' }
    )
  })
  app.get('/about', function(req, res){
   res.render('about',
    { title : 'Home' }
    )
  })
}

exports.set_routes = set_routes
