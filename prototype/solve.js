const SOME_OBJECT = {};

app.get("/validateToken", function (req, res) {
  if (req.header("token")) {
    const token = Buffer.from(req.header("token"), "base64");

    if (SOME_OBJECT.hasOwnProperty(token) && token) {
      return res.send("true");
    }
  }
  return res.send("false");
});
