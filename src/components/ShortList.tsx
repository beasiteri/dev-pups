import { use } from 'react';
import { Heart, X } from 'lucide-react';
import type { Puppy } from '../types/puppy';
import { LikedContext } from '../context/likedContext';

type ShortListProps = {
  puppies: Puppy[];
};

const ShortList = ({ puppies }: ShortListProps) => {
  const { liked, setLiked } = use(LikedContext);

  function removeFromLiked(puppyId: Puppy['id']) {
    setLiked(liked.filter((id) => id !== puppyId));
  }

  return (
    <div>
      <h2 className="flex items-center gap-2 font-medium">
        <span>Your shortlist</span>
        <Heart className="inline-block size-6 fill-pink-500 stroke-pink-500" />
      </h2>
      <ul className="mt-4 flex flex-wrap gap-4">
        {puppies
          .filter((pup) => liked.includes(pup.id))
          .map((puppy) => (
            <li
              key={puppy.id}
              className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0"
            >
              <img
                height={32}
                width={32}
                alt="Chase"
                className="aspect-square w-8 object-cover"
                src={`/images/${puppy.id}.jpg`}
              />
              <p className="px-3 text-sm text-slate-800">{puppy.name}</p>
              <button
                className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100"
                onClick={() => removeFromLiked(puppy.id)}
              >
                <X className="size-4 stroke-slate-400 group-hover:stroke-red-400" />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ShortList;
