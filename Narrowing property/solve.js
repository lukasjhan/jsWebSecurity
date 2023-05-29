app.post("/signup", function (req, res) {
  db.users.find({ username: req.body.username }, async (err, result) => {
    if (err) {
      return res.status(404).send("user not found");
    }

    if (result.length === 0) {
      await db.user.insert({
        username: req.body.username,
        email: req.body.email,
      });
      return res.status(200);
    }

    return res.status(400);
  });
});
