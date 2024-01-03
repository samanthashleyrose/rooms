// Creating authentication function that checks if user is logged in or not
const withAuth = (req, res, next) => {
    // If user is not logged in redirect them to login page
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;