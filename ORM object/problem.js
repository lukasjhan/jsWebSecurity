app.post("/user", (req, res) => {
  db.collection("users").find(
    {
      // this can be { $ne: null } or { $ne: "" }, then ORM will return all users
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
