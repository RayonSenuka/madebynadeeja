# NADEEJA site (madebynadeeja)

Node.js + Express portfolio site for a tech content creation channel.

## Run it
```
npm install
npm start
```
Open http://localhost:3000

## Structure
```
nadeeja-site/
├── server.js            Express server (static files + API)
├── package.json
├── routes/api.js        GET /api/content, POST /api/contact
├── data/content.json    Your videos (edit this to update Latest Content)
├── data/messages.json   Contact messages (created automatically)
└── public/
    ├── index.html       Home
    ├── about.html       About Us
    ├── content.html     Latest Content
    ├── contact.html     Contact Us
    ├── css/style.css
    ├── js/layout.js     Shared navbar + footer
    ├── js/content.js    Loads and filters videos
    ├── js/contact.js    Sends the contact form
    └── assets/          Put images/logo here
```
