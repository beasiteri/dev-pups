import { LoaderCircle, X } from 'lucide-react';
import { useState } from 'react';
import type { Puppy } from '../types/puppy';
import { toggleLikedStatus } from '../queries';

type DeleteButtonProps = {
   id: Puppy['_id'];
   setPuppies: React.Dispatch<React.SetStateAction<Puppy[]>>;
};

const DeleteButton = ({ id, setPuppies }: DeleteButtonProps) => {
   const [pending, setPending] = useState(false);

   return (
      <button
         className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100"
         onClick={async () => {
            setPending(true);
            const updatedPuppy = await toggleLikedStatus(id);
            setPuppies((prevPups) =>
               prevPups.map((existingPuppy) =>
                  existingPuppy._id === updatedPuppy._id
                     ? updatedPuppy
                     : existingPuppy
               )
            );
            setPending(false);
         }}
         disabled={pending}
      >
         {pending ? (
            <LoaderCircle className="size-4 animate-spin stroke-slate-300" />
         ) : (
            <X className="size-4 stroke-slate-400 group-hover:stroke-red-400 cursor-pointer" />
         )}
      </button>
   );
};

export default DeleteButton;
