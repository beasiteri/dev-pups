import type { Dispatch, SetStateAction } from 'react';
import type { Puppy } from '../types/puppy';
import LikeToggle from './LikeToggle';

type PuppyCardProps = {
   puppy: Puppy;
   setPuppies: Dispatch<SetStateAction<Puppy[]>>;
};

const PuppyCard = ({ puppy, setPuppies }: PuppyCardProps) => {
   return (
      <li
         key={puppy._id}
         className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5"
      >
         <img
            className="aspect-square object-cover"
            alt={puppy.name}
            src={puppy.imagePath}
         />
         <div className="gap flex items-center justify-between p-4 text-sm">
            <div className="flex items-center gap-2">
               <p className="font-semibold">{puppy.name}</p>
               <span className="text-slate-300">·</span>
               <p className="text-slate-500">{puppy.trait}</p>
            </div>
            <LikeToggle puppy={puppy} setPuppies={setPuppies} />
         </div>
      </li>
   );
};

export default PuppyCard;
