const express = require("express"); // Used to set up a server
const cors = require("cors"); // Used to prevent errors when working locally
const app = express(); // Initialize express as an app variable
app.set("port", process.env.PORT || 6969); // Set the port
app.use(express.json()); // Enable the server to handle JSON requests
app.use(cors()); // Dont let local development give errors
var bodyParser = require("body-parser");


// import routes
const userRoute = require("./routes/userRoute");
const productsRoute = require("./routes/productsRoute");
const orderRoute = require("./routes/orderRoute");

app.get("/", (req, res) => {
  res.json({ msg: "Welcome" });
});
app.use("/users", userRoute);
app.use("/products", productsRoute);
app.use("/orders", orderRoute);

app.listen(app.get("port"), () => {
  console.log(`Listening for calls on port ${app.get("port")}`);
  console.log("Press Ctrl+C to exit server");
});

app.use(express.static("public"));
app.get("/", function (req, res) {
res.sendFile(__dirnamev + "/" + "index.html")}
);