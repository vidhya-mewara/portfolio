const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const path = require("path");
const Contact = require("./models/contact");
const Project = require("./models/project");
const methodOverride = require("method-override");
const passport = require("passport")
const LocalStrategy = require("passport-local")
const User = require("./models/user")
const session = require("express-session")
const flash = require("connect-flash")
const { isLoggedIn, isAdmin } = require("./middleware");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));



mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log(err);
    });
 

const sessionOptions = ({
    secret: "mysupersecret",
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires: Date.now() + 1000*60*60*24*7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    },
});

app.use(session(sessionOptions));
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
 
app.use((req, res, next) => {

    res.locals.currentUrl = req.path;

    next();

});
app.use((req, res, next) => {

    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUrl = req.path;
    res.locals.currUser = req.user;

    next();

});

app.get("/", (req, res) => {
    res.render("index");
})


app.get("/signup",(req,res) => {
    res.render("signup");
})
app.post("/signup" , async(req,res) => {
    try{
        let { username, email, password } = req.body;
        const newUser = new User({
            username,
            email,
        });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser)
        // req.flash("success","You are signed Up successfully!")
        res.redirect("/")

   
    } catch(e){
        req.flash("error",e.message);
        res.redirect("/signup")
    }
})

app.get("/login" , (req,res) => {
    res.render("login");
})

app.post("/login" , passport.authenticate("local" , {failureRedirect: "/login" , failureFlash:true}) ,async (req,res) => {
    req.flash("success", "Welcome to my portfolio")
    res.redirect("/")
})

app.get("/logout" , (req,res) => {
    req.logout((err) =>{
        if(err) {
            return next(err);
        }else{
            req.flash("success","logged you out!");
            res.redirect("/")
        }
    });
});

app.get("/contact", (req, res) => {
    res.render("contact");
})

app.get("/about", (req, res) => {
    res.render("about");
})
app.get("/skills", (req, res) => {
    res.render("skills");
})
app.get("/services", (req, res) => {
    res.render("services");
})
app.get("/projects", async(req, res) => {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.render("projects", { projects });
})
app.get("/addproject",
    isLoggedIn,
    isAdmin,
    (req, res) => {

        res.render("addproject");

    });


app.post("/addproject", isLoggedIn,
    isAdmin, async (req, res) => {
    try {
        console.log(req.body);
        const {
            title,
            description,
            images,
            technologies,
            projectLink,
            githubLink
        } = req.body;

        const project = new Project({
            title,
            description,
            images: images.split(",").map(img => img.trim()),
            technologies: technologies.split(",").map(tech => tech.trim()),
            projectLink,
            githubLink
        });

        await project.save();

        res.redirect("/projects");

    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});
app.get("/projects/:id/editProject", async(req, res) => {
    const project = await Project.findById(req.params.id)
    res.render("editProject",{ project })
})


app.put("/projects/:id", isLoggedIn,
    isAdmin, async (req, res) => {
    try {
        console.log(req.params.id);
        console.log(req.body);

        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).send("Project not found");
        }

        project.title = req.body.title;
        project.description = req.body.description;
        project.projectLink = req.body.projectLink;
        project.githubLink = req.body.githubLink;

        project.images = req.body.images
            .split(",")
            .map(img => img.trim());

        project.technologies = req.body.technologies
            .split(",")
            .map(tech => tech.trim());

        await project.save();

        res.redirect("/projects");
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
});
app.delete("/projects/:id", isLoggedIn,
    isAdmin, async (req, res) => {
    try {
        const { id } = req.params;

        const deletedProject = await Project.findByIdAndDelete(id);

        if (!deletedProject) {
            return res.status(404).send("Project not found");
        }

        res.redirect("/projects");
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
});
app.get("/dashboard",
    isLoggedIn,
    isAdmin,
    (req, res) => {

        res.render("dashboard");

    });
app.get("/download-cv", (req, res) => {

    const file = path.join(
        __dirname,
        "public",
        "resume",
        "Vidhya_Mewara_Resume.pdf"
    );

    res.download(file);

});


app.listen(8080, () => {
    console.log("Server is listining to port 8080")
});
