import { Heart } from 'lucide-react';
import type { Puppy } from '../types/puppy';
import ShortlistRemoveButton from './ShortlistRemoveButton';
import type { Dispatch, SetStateAction } from 'react';

type ShortListProps = {
   puppies: Puppy[];
   setPuppies: Dispatch<SetStateAction<Puppy[]>>;
};

const ShortList = ({ puppies, setPuppies }: ShortListProps) => {
   return (
      <div>
         <h2 className="flex items-center gap-2 font-medium">
            <span>Your shortlist</span>
            <Heart className="fill-pink-500 stroke-pink-500" />
         </h2>
         <ul className="mt-4 flex flex-wrap gap-4">
            {puppies
               .filter((pup) => pup.likedBy.includes(1))
               .map((puppy) => (
                  <li
                     key={puppy._id}
                     className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0"
                  >
                     <img
                        height={32}
                        width={32}
                        alt={puppy.name}
                        className="aspect-square w-8 object-cover"
                        src={puppy.imagePath}
                     />
                     <p className="px-3 text-sm text-slate-800">{puppy.name}</p>
                     <ShortlistRemoveButton
                        id={puppy._id}
                        setPuppies={setPuppies}
                     />
                  </li>
               ))}
         </ul>
      </div>
   );
};

export default ShortList;
