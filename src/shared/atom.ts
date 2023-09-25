'use client';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { WINDOW_WIDTH } from './enum';

export const searchAtom = atom<string>('');
export const windowWidthAtom = atomWithStorage<WINDOW_WIDTH | null>('window_size', null);
