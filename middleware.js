module.exports.isLoggedIn = (req, res, next) => {

    if (!req.isAuthenticated()) {

        req.flash("error", "Please login first.");

        return res.redirect("/login");

    }

    next();

};

module.exports.isAdmin = (req, res, next) => {

    if (!req.user || !req.user.isAdmin) {

        req.flash("error", "Access denied.");

        return res.redirect("/");

    }

    next();

};