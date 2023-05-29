app.get("/api/data", async function (req, res) {
  const url = req.query.url;
  // https://example.com/api/data?url=file:///etc/passwd
  try {
    const data = await fetch(url);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
