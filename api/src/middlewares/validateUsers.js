const validateCreate = (req, res, next) => {
    const { name, email, phone } = req.body;
    if (!name) return res.status(400).json({ error: "Missing Name" });
    if (!email) return res.status(400).json({ error: "Missing Email" });
    if (!phone) return res.status(400).json({ error: "Missing Phone" });
    next();
}
module.exports = { validateCreate };