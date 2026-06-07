import { Heart, LoaderCircle } from 'lucide-react';
import type { Puppy } from '../types/puppy';
import { useLiked } from '../context/likedContext';
import { useState } from 'react';

type LikedToggleProps = {
   id: Puppy['_id'];
};

const LikeToggle = ({ id }: LikedToggleProps) => {
   const { liked, setLiked } = useLiked();
   const isThisPuppyLiked = liked.includes(id);
   const [pending, setPending] = useState(false);

   function toggleLikedPuppy() {
      setPending(true);

      setTimeout(() => {
         if (isThisPuppyLiked) {
            setLiked(liked.filter((pupid) => pupid !== id));
         } else {
            setLiked([...liked, id]);
         }
         setPending(false);
      }, 1500);
   }

   return (
      <button className="group" onClick={toggleLikedPuppy}>
         {pending ? (
            <LoaderCircle className="animate-spin stroke-slate-300" />
         ) : (
            <Heart
               className={`cursor-pointer ${
                  isThisPuppyLiked
                     ? 'fill-pink-500 stroke-none'
                     : 'stroke-slate-200 group-hover:stroke-slate-300'
               }`}
            />
         )}
      </button>
   );
};

export default LikeToggle;
