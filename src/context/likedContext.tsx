import { createContext, type Dispatch, type SetStateAction } from 'react';
import type { Puppy } from '../types/puppy';

export const LikedContext = createContext<{
  liked: Puppy['id'][];
  setLiked: Dispatch<SetStateAction<Puppy['id'][]>>;
}>(null!);
