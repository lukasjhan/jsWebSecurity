const jwt = require("jwt");

// USE ENVIRONMENT VARIABLES INSTEAD HARDCODED VALUES
const secret = process.env.SECRET;

app.post("/login", (req, res) => {
  const token = jwt.sign({ username: req.body.username }, secret, {
    expiresIn: "1h",
  });
  res.send(token);
});
