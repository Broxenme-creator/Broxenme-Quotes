# BROXENME - Quote Social Platform

A TikTok-style social platform for quotes built with HTML, CSS, JavaScript, and Firebase.

## 🚀 How to Deploy on GitHub Pages

1. **Create a GitHub repository** and upload all files maintaining the folder structure
2. Go to **Settings → Pages**
3. Select **main branch** and **root folder**
4. Click **Save**

## 📁 File Structure
broxenme/
├── index.html          # Main entry point
├── css/
│   └── style.css       # All styles
├── js/
│   ├── firebase-config.js  # Firebase init
│   ├── utils.js            # Helper functions
│   ├── auth.js             # Authentication
│   ├── reels.js            # Reels page
│   ├── community.js        # Community page
│   ├── discover.js         # Discover page
│   ├── profile.js          # Profile page
│   ├── creator.js          # Post creator
│   └── app.js              # Main controller
└── README.md

## 🔥 Firebase Setup
1. Create a Firebase project at console.firebase.google.com
2. Enable Authentication (Email/Password + Anonymous)
3. Create Firestore Database
4. Copy your config to js/firebase-config.js
5. Deploy Firestore rules from the rules section below

## ✅ Features
- TikTok-style reels with double-tap like
- Comments with replies, likes, dislikes
- Emoji reactions (❤️🔥😂😭🙏💯👏🚀)
- Community feed with polls
- WhatsApp-style group chat
- DM system
- Notifications
- Advanced post creator with draggable text
- Profile with stats, achievements
- Dark/Light theme
- Streak tracking