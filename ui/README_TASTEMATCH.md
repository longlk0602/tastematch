# TasteMatch - Tinder-Like Group Decision App

A beautiful, mobile-first Next.js app that helps groups make decisions through swiping.

## Features

✨ **Beautiful Design**
- Modern, animated UI with smooth transitions
- Mobile-optimized responsive design
- Custom CSS with gradient backgrounds
- Engaging micro-interactions

🎮 **Core Functionality**
- **Create Room**: Host can create a new voting session
- **Join Room**: Players can join with a 4-character code
- **Swipe Voting**: Three voting options (Like ♥️, Pass ✕, Kill 💀)
- **Real-time Progress**: Visual progress bar showing voting completion
- **Results & Ranking**: See winners, rankings, and rejected items
- **New Round**: Host can start a new voting round with the same group

## How to Run

### Development Server

```bash
cd ui
npm install  # if not already done
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The app will automatically reload when you make changes.

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
app/
├── page.tsx           # Main component with all screens
├── data.ts           # Mock data and types
├── layout.tsx        # Root layout
└── globals.css       # All styles (no Tailwind)
```

## App Screens

### 1. Home Screen
- Welcome with animated emojis
- "Create Room" and "Join Room" buttons
- App tagline and description

### 2. Create Room
- Enter your name
- Generate a unique 4-character room code
- Redirects to Lobby

### 3. Join Room
- Enter your name
- Enter the 4-character room code
- Redirects to Lobby

### 4. Lobby
- Display room code (copyable)
- List of players in the room
- "Start Voting" button (host only)
- Shows host badge

### 5. Swipe Screen
- Progress bar showing voting progress
- Large card with emoji, name, description, and tags
- Three control buttons: Pass (✕), Like (♥), Abandon (💀)
- Card animates when voting
- Stamps appear on vote

### 6. Results Screen
- Winner displayed prominently with emoji
- Full ranking of all items
- "Rejected" section showing killed items
- "New Round" button (host only)
- "Go Home" button

## Customization

### Change the Items to Vote On

Edit [app/data.ts](app/data.ts) and modify the `ITEMS` array:

```typescript
export const ITEMS: Item[] = [
  {
    id: '1',
    emoji: '🎬',
    name: 'Movie Title',
    description: 'Movie description',
    color: '#FF6B35',
    tags: ['Genre', 'Rating'],
  },
  // Add more items...
];
```

### Customize Colors

- **Main Colors**: Edit `ITEMS` color values and CSS classes in [app/globals.css](app/globals.css)
- **Scheme**: 
  - Primary Gradient: `#FF6A3D` to `#FF2E63`
  - Background: `#FFF4EA`
  - Text: `#2B1410`
  - Accents: `#27c46b` (like), `#FF2E63` (pass), `#2B1410` (kill)

### Use Different Categories

Modify the voting categories by:
1. Changing `ITEMS` in data.ts
2. Update emojis, names, and descriptions
3. Adjust card colors to match the category

**Examples:**
- **Restaurants**: 🍕 🍣 🍔 🍜
- **Movies**: 🎬 🎭 🎪 🎨
- **Activities**: ✈️ 🎭 🏃 🎮
- **Books**: 📚 📖 ✍️ 📝

## Game Flow

```
Home
  ├─→ Create Room ─→ Lobby ─→ Swipe ─→ Results ─→ (New Round or Home)
  └─→ Join Room ──→ Lobby ─→ Swipe ─→ Results ─→ (New Round or Home)
```

## Vote Types

- **Like ♥️**: Positive vote (counted toward ranking)
- **Pass ✕**: Neutral vote (not counted)
- **Kill 💀**: Negative vote (ranked separately)

## Voting Results

Items are ranked by:
1. Number of likes
2. Display rejected items (more kills than likes)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technical Stack

- **Framework**: Next.js 16 with React 19
- **Language**: TypeScript
- **Styling**: Custom CSS (no Tailwind)
- **State Management**: React hooks (useState)
- **Build**: Turbopack

## Advanced Features to Add

1. **Real-time Multiplayer**
   - WebSocket integration (Socket.io)
   - Backend server with database
   - Real player joining/voting

2. **Persistence**
   - Save voting history
   - Leaderboards
   - User profiles

3. **More Voting Options**
   - Rank items (1-5 stars)
   - Comment on items
   - Time-limited rounds

4. **Analytics**
   - Track voting patterns
   - Popular items
   - Group insights

5. **Social Features**
   - Share results
   - Invite via QR code
   - Voting history

## Troubleshooting

**App not showing on localhost:3000**
- Check if port 3000 is available
- Try: `npm run dev -- -p 3001`

**Styles not applying**
- Clear browser cache (Cmd/Ctrl + Shift + R)
- Restart dev server

**Types errors**
- Run: `npm run build`
- Check browser console for errors

## License

Created with ❤️ inspired by TasteMatch design pattern.
