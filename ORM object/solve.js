app.post("/user", (req, res) => {
  if (typeof req.body.username !== "string") {
    return res.status(400).json({
      error: "Bad Request",
    });
  }

  db.collection("users").find(
    {
      username: req.body.username,
    },
    (err, result) => {
      if (err || !result) {
        return res.status(404).json({
          error: "User not found",
        });
      }
      return res.status(200).json({
        result,
      });
    }
  );
});
