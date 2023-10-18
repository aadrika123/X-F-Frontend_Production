// successfull react serve working code for react
const path = require("path");
const express = require("express");
const app = express(); // create express app

console.log('before hitt')
//home route will redirect to the citizen-pannel route
app.get("/", (req, res) => {
  console.log('home route hitted')
  res.redirect('/citizen')
});

//middleware to server static files also
app.use(express.static("citizen_build"));
app.use(express.static("property_build"));
app.use(express.static("water_build"));
app.use(express.static("trade_build"));
app.use(express.static("dashboard_build"));
app.use(express.static("advertisement_build"));
app.use(express.static("citizen_mb_build"));
app.use(express.static("tanker_admin_build"));
app.use(express.static("grievance_build"));
app.use(express.static("daily_license_build"));

//actual routes
app.get("/citizen", (req, res) => {
  res.sendFile(path.join(__dirname, "citizen_build", "index.html"));
});
app.get("/citizen/*", (req, res) => {
  res.sendFile(path.join(__dirname, "citizen_build", "index.html"));
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "dashboard_build", "index.html"));
});
app.get("/dashboard/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dashboard_build", "index.html"));
});
app.get("/property", (req, res) => {
  res.sendFile(path.join(__dirname, "property_build", "index.html"));
});
app.get("/property/*", (req, res) => {
  res.sendFile(path.join(__dirname, "property_build", "index.html"));
});
app.get("/water", (req, res) => {
  res.sendFile(path.join(__dirname, "water_build", "index.html"));
});
app.get("/water/*", (req, res) => {
  res.sendFile(path.join(__dirname, "water_build", "index.html"));
});
app.get("/trade", (req, res) => {
  res.sendFile(path.join(__dirname, "trade_build", "index.html"));
});
app.get("/trade/*", (req, res) => {
  res.sendFile(path.join(__dirname, "trade_build", "index.html"));
});
app.get("/advertisement", (req, res) => {
  res.sendFile(path.join(__dirname, "advertisement_build", "index.html"));
});
app.get("/advertisement/*", (req, res) => {
  res.sendFile(path.join(__dirname, "advertisement_build", "index.html"));
});
app.get("/mobile", (req, res) => {
  res.sendFile(path.join(__dirname, "citizen_mb_build", "index.html"));
});
app.get("/mobile/*", (req, res) => {
  res.sendFile(path.join(__dirname, "citizen_mb_build", "index.html"));
});

app.get("/agency", (req, res) => {
  res.sendFile(path.join(__dirname, "tanker_admin_build", "index.html"));
});
app.get("/agency/*", (req, res) => {
  res.sendFile(path.join(__dirname, "tanker_admin_build", "index.html"));
});
app.get("/grievance", (req, res) => {
  res.sendFile(path.join(__dirname, "grievance_build", "index.html"));
});
app.get("/grievance/*", (req, res) => {
  res.sendFile(path.join(__dirname, "grievance_build", "index.html"));
});
app.get("/daily-license-app", (req, res) => {
  res.sendFile(path.join(__dirname, "daily_license_build", "index.html"));
});
app.get("/daily-license-app/*", (req, res) => {
  res.sendFile(path.join(__dirname, "daily_license_build", "index.html"));
});
// start express server on port 80
app.listen(500, () => {
  console.log("server started on port 80");
});