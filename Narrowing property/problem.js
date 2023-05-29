app.post("/signup", function (req, res) {
  db.users.find({ username: req.body.username }, async (err, result) => {
    if (err) {
      return res.status(404).send("user not found");
    }

    if (result.length === 0) {
      // using specific property instead whole body object
      await db.user.insert(req.body);
      return res.status(200);
    }

    return res.status(400);
  });
});
