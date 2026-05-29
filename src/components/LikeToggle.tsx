import { use } from 'react';
import { Heart } from 'lucide-react';
import type { Puppy } from '../types/puppy';
import { LikedContext } from '../context/likedContext';

type LikedToggleProps = {
  id: Puppy['id'];
};

const LikeToggle = ({ id }: LikedToggleProps) => {
  const { liked, setLiked } = use(LikedContext);
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
