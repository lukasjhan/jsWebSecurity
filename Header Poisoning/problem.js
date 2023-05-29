app.post("/reset/password", (req, res) => {
  // using value header can be dangerous. attacker can manipulate the value
  const resetPassword = `${req.header(
    "host"
  )}/reset/password?token=${resetToken}&id=${id}`;
  return res.json({ resetPassword });
});
