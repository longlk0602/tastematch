'use client';

import { useState } from 'react';
import { Item } from '../data';

type CardProps = {
  item: Item;
  onLike: () => void;
  onPass: () => void;
  onKill: () => void;
};

export default function Card({ item, onLike, onPass, onKill }: CardProps) {
  const [voteType, setVoteType] = useState<'like' | 'pass' | 'kill' | null>(null);

  const handleLike = () => {
    setVoteType('like');
    setTimeout(onLike, 200);
  };

  const handlePass = () => {
    setVoteType('pass');
    setTimeout(onPass, 200);
  };

  const handleKill = () => {
    setVoteType('kill');
    setTimeout(onKill, 200);
  };

  return (
    <div
      className="card"
      style={{
        background: `linear-gradient(135deg, ${item.color}dd, ${item.color}99)`,
        transform:
          voteType === 'like'
            ? 'scale(1.02) rotate(8deg) translateX(120%)'
            : voteType === 'pass'
            ? 'scale(1.02) rotate(-8deg) translateX(-120%)'
            : voteType === 'kill'
            ? 'scale(0.9) rotate(0deg)'
            : 'scale(1) rotate(0deg)',
        transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        opacity: voteType ? 0.6 : 1,
      }}
    >
      <div className="card-shine" />
      <div className="card-emoji">{item.emoji}</div>

      {voteType === 'like' && (
        <div className="stamp like" style={{ opacity: 1 }}>
          LIKE
        </div>
      )}
      {voteType === 'pass' && (
        <div className="stamp pass" style={{ opacity: 1 }}>
          PASS
        </div>
      )}
      {voteType === 'kill' && (
        <div className="stamp kill" style={{ opacity: 1 }}>
          KILL
        </div>
      )}

      <div className="card-foot">
        {item.tags.length > 0 && (
          <div className="card-tags">
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
        <h2 className="card-name">{item.name}</h2>
        <p className="card-blurb">{item.description}</p>
      </div>
    </div>
  );
}
