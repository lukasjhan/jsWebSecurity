app.get("/api/data", async function (req, res) {
  const url = req.query.url;
  const allowed = ["https://example.com/data/data.json"];

  if (!allowed.includes(url)) {
    return res.status(403).json({ error: "Not allowed" });
  }
  try {
    const data = await fetch(url);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
