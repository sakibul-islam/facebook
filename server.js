const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const Post = require("./models/posts");

var multer = require("multer");

const { graphqlHTTP } = require("express-graphql");
const { rootSchema } = require("./graphql/root-schema");
const mongoose = require("mongoose");
const port = process.env.PORT || 4000;

mongoose.connect("mongodb://localhost/facebook", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use(cors());
app.use(
	"/graphql",
	graphqlHTTP({
		schema: rootSchema,
		graphiql: true,
	})
);
app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
// 	res.send("Hello World");
// });

// app.use("/", express.static("../facebook/build"));
// app.use("/friends", express.static("../facebook/build"));
// app.use("/watch", express.static("../facebook/build"));

app.use("/public", express.static("./public"));
// app.use(upload.array());

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./public/uploads");
	},
	filename: function (req, file, cb) {
		cb(null, new Date().getTime().toString() + path.extname(file.originalname));
	},
	// fileFilter: function (req, file, cb) {
	// 	if(file) {
	// 		cb(null, true);
	// 	} else {
	// 		cb(null, false)
	// 	}
	// }
});

const upload = multer({ storage: storage });

app.post("/post/new", upload.single("photo"), function (req, res, next) {
	const {body, file} = req;
	console.log(body);

	if(file && file.size > 3000000) {
		return res.status(500).json({
			success: false,
			message: "Files more than 3MB is not allowed to post",
		});
	}

	function setUrl(file) {
		let photoURL, videoURL;
		if (!file) return;
		if (file.mimetype.match("image")) {
			photoURL = file.path;
			console.log(__dirname);
			return { photoURL };
		} else if (file.mimetype.match("video")) {
			videoURL = "http://localhost:3001/" + file.path;
			return { videoURL };
		}
	}
	console.log(setUrl(file));

	function savePostToDatabase(req) {
		const { userName, caption } = body;
		const url = setUrl(file);
		const post = new Post({
			userName,
			body: {
				caption,
				...url,
			},
		});
		return post.save();
	}
	savePostToDatabase(req).then(console.log);
	res.status(200);
});

app.get("/public/uploads:");

app.listen(port, () => {
	console.log("server is listing at port: " + port);
});
