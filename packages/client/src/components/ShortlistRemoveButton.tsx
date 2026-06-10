import { LoaderCircle, X } from 'lucide-react';
import { useState, type Dispatch, type SetStateAction } from 'react';
import type { Puppy } from '../types/puppy';
import { unlikePuppy } from '../queries';

type ShortlistRemoveButtonProps = {
   id: Puppy['_id'];
   setPuppies: Dispatch<SetStateAction<Puppy[]>>;
};

const ShortlistRemoveButton = ({
   id,
   setPuppies,
}: ShortlistRemoveButtonProps) => {
   const [pending, setPending] = useState(false);

   return (
      <button
         className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100"
         onClick={async () => {
            setPending(true);

            const updatedPuppy = await unlikePuppy(id);

            setPuppies((prev) =>
               prev.map((p) => (p._id === updatedPuppy._id ? updatedPuppy : p))
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

export default ShortlistRemoveButton;
