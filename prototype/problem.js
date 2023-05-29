const SOME_OBJECT = {};

app.get("/validateToken", function (req, res) {
  if (req.header("token")) {
    const token = Buffer.from(req.header("token"), "base64");

    // object prototype can contain
    if (SOME_OBJECT[token] && token) {
      return res.send("true");
    }
  }
  return res.send("false");
});
