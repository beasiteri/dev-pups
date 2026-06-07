import { createContext, use, type Dispatch, type SetStateAction } from 'react';
import type { Puppy } from '../types/puppy';

export const LikedContext = createContext<{
   liked: Puppy['id'][];
   setLiked: Dispatch<SetStateAction<Puppy['id'][]>>;
}>(null!);

export function useLiked() {
   const context = use(LikedContext);

   if (!context) {
      throw new Error(
         'The useLiked must be used within a LikedContext wrapper'
      );
   }
   return context;
}
