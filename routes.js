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
  //app.get('/facebook', function(req, res){
  // res.redirect('http://www.facebook.com/EricMSauer')
  //})
  //app.get('/twitter', function(req, res){
  // res.redirect('http://www.twitter.com/EricMSauer')
  //})
  //app.get('/google', function(req, res){
  // res.redirect('http://www.plus.google.com/108773096190491439348')
  //})
}

exports.set_routes = set_routes
