import { Heart } from 'lucide-react';
import type { Puppy } from '../types/puppy';

const LikeToggle = ({ puppy }: { puppy: Puppy }) => {
   return (
      <button className="group">
         <Heart
            className={
               puppy.id === 2 // Chase
                  ? 'fill-pink-500 stroke-none'
                  : 'stroke-slate-200 group-hover:stroke-slate-300'
            }
         />
      </button>
   );
};

export default LikeToggle;
