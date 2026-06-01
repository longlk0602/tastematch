import { Item } from './data';

export interface Player {
  id: string;
  name: string;
  emoji: string;
}

export interface GameState {
  id: string;
  code: string;
  host: Player;
  players: Player[];
  currentDeck: Item[];
  items: Item[];
  phase: 'lobby' | 'voting' | 'results';
  round: number;
}

export type Vote = Record<string, 'like' | 'pass' | 'kill'>;
