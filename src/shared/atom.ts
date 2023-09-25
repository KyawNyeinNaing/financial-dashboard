'use client';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { WINDOW_WIDTH } from './enum';

export const searchAtom = atom<string>('');
export const windowWidthAtom = atomWithStorage<WINDOW_WIDTH>('window_size', WINDOW_WIDTH.LG);

export const getWindowWidth = () => {
  const windowWidth = window.localStorage.getItem('window_size');
  return { windowWidth };
};
