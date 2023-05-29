let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

app.post("/validateEmail", function (req, res) {
  if (req.body.email) {
    // regex is slow so we need to limit the input or use validator
    if (regex.test(req.body.email)) {
      return res.send("true");
    }
  }
  return res.send("false");
});
