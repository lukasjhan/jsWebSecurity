import validator from "validator";

app.post("/validateEmail", function (req, res) {
  if (req.body.email) {
    // regex is slow so we need to limit the input or use validator
    if (validator.isEmail(req.body.email)) {
      return res.send("true");
    }
  }
  return res.send("false");
});
