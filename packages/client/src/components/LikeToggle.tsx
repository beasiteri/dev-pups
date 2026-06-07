import { Heart } from 'lucide-react';
import type { Puppy } from '../types/puppy';
import type { Dispatch, SetStateAction } from 'react';

type LikedToggleProps = {
   id: Puppy['id'];
   liked: Puppy['id'][];
   setLiked: Dispatch<SetStateAction<Puppy['id'][]>>;
};

const LikeToggle = ({ id, liked, setLiked }: LikedToggleProps) => {
   const isThisPuppyLiked = liked.includes(id);

   function toggleLikedPuppy() {
      if (isThisPuppyLiked) {
         setLiked(liked.filter((pupid) => pupid !== id));
      } else {
         setLiked([...liked, id]);
      }
   }

   return (
      <button className="group" onClick={toggleLikedPuppy}>
         <Heart
            className={
               isThisPuppyLiked
                  ? 'fill-pink-500 stroke-none'
                  : 'stroke-slate-200 group-hover:stroke-slate-300'
            }
         />
      </button>
   );
};

export default LikeToggle;
