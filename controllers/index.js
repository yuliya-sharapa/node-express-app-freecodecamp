exports.index =function(req, res, next) {
    //'index' - page to render, { title: 'Express' - js object with data passed to pug}
    res.render('index', { title: 'Express' });
  }