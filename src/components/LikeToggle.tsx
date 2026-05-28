import type { Dispatch, SetStateAction } from 'react';
import { Heart } from 'lucide-react';
import type { Puppy } from '../types/puppy';

type LikedToggleProps = {
  id: Puppy['id'];
  liked: Puppy['id'][];
  setLiked: Dispatch<SetStateAction<Puppy['id'][]>>;
};

const LikeToggle = ({ id, liked, setLiked }: LikedToggleProps) => {
  const isThisPuppyLiked = liked.includes(id);

  function handleOnClick() {
    if (liked.includes(id)) {
      setLiked(liked.filter((pupid) => pupid !== id));
    } else {
      setLiked([...liked, id]);
    }
  }

  return (
    <button className="group" onClick={handleOnClick}>
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
