exports.get_landing = function(req, res, next) {
    //'landing' - page to render, { title: 'Express' - js object with data passed to pug}
    res.render('landing', { title: 'Express' });
  }

exports.submit_lead = function(req, res, next) {//we use body parser to extract an email
  console.log('lead email:', req.body.lead_email);
  //after successful post eq we usually redirect
  res.redirect('/')
  }