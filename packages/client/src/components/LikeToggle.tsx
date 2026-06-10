import { Heart, LoaderCircle } from 'lucide-react';
import { useState, type Dispatch, type SetStateAction } from 'react';
import { likePuppy, unlikePuppy } from '../queries';
import type { Puppy } from '../types/puppy';

type LikedToggleProps = {
   puppy: Puppy;
   setPuppies: Dispatch<SetStateAction<Puppy[]>>;
};

const LikeToggle = ({ puppy, setPuppies }: LikedToggleProps) => {
   const [pending, setPending] = useState(false);

   async function toggleLikedPuppy() {
      setPending(true);

      const isLiked = puppy.likedBy.includes(1);

      const updatedPuppy = isLiked
         ? await unlikePuppy(puppy._id)
         : await likePuppy(puppy._id);

      setPuppies((prev) =>
         prev.map((p) => (p._id === updatedPuppy._id ? updatedPuppy : p))
      );

      setPending(false);
   }

   return (
      <button className="group" onClick={toggleLikedPuppy}>
         {pending ? (
            <LoaderCircle className="animate-spin stroke-slate-300" />
         ) : (
            <Heart
               className={`cursor-pointer ${
                  puppy.likedBy.includes(1)
                     ? 'fill-pink-500 stroke-none'
                     : 'stroke-slate-200 group-hover:stroke-slate-300'
               }`}
            />
         )}
      </button>
   );
};

export default LikeToggle;
