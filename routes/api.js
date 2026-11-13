const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const contentFile = path.join(__dirname, '../data/content.json');
const messagesFile = path.join(__dirname, '../data/messages.json');

// GET /api/content  ->  list of videos
router.get('/content', (req, res) => {
  const items = JSON.parse(fs.readFileSync(contentFile, 'utf8'));
  res.json(items);
});

// POST /api/contact  ->  save a contact message
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' });
  }
  const messages = fs.existsSync(messagesFile)
    ? JSON.parse(fs.readFileSync(messagesFile, 'utf8'))
    : [];
  messages.push({ name, email, message, date: new Date().toISOString() });
  fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
  res.json({ ok: true });
});

module.exports = router;
