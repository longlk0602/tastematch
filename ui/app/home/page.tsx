'use client';

import Link from 'next/link';

export default function HomeScreen() {
  return (
    <div className="scr justify-center items-center text-center">
      <div className="hero-emojis">
        <span style={{ animationDelay: '0s' }}>🍔</span>
        <span style={{ animationDelay: '.3s' }}>🎬</span>
        <span style={{ animationDelay: '.6s' }}>✈️</span>
      </div>
      <h1 className="wordmark">
        Swipe<span>Match</span>
      </h1>
      <p className="tagline">Don't think. Just swipe.</p>
      <p className="subtag">Your group decides in 2 minutes. No arguments. Everyone gets a say.</p>
      <Link
        href="/create"
        className="block w-full text-center no-underline text-white rounded-[18px] font-outfit font-bold cursor-pointer transition-transform active:scale-97 py-4 text-[17px] bg-gradient-to-r from-brand to-brand-dark shadow-[0_12px_26px_-8px_rgba(255,46,99,0.6)]"
      >
        Create Room
      </Link>
      <Link
        href="/join"
        className="block w-full text-center no-underline rounded-[18px] font-outfit font-bold cursor-pointer transition-transform active:scale-97 py-4 text-[17px] bg-surface text-text shadow-[0_4px_14px_rgba(120,60,40,0.12)] mt-3"
      >
        Join Room
      </Link>
      <p className="text-text-subtle text-xs tracking-wide mt-[18px]">Private votes · Equal weight · Everyone decides</p>
    </div>
  );
}
