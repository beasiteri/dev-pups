import type { Dispatch, SetStateAction } from 'react';
import type { Puppy } from '../types/puppy';
import SubmitButton from './SubmitButton';

type NewPuppyFormProps = {
   setPuppies: Dispatch<SetStateAction<Puppy[]>>;
};

const NewPuppyForm = ({ setPuppies }: NewPuppyFormProps) => {
   return (
      <div className="mt-12 flex items-center justify-between bg-white p-8 shadow ring ring-black/5">
         <form
            action={async (formData: FormData) => {
               await new Promise((resolve) => setTimeout(resolve, 1500));

               const newPuppy: Puppy = {
                  _id: Math.random().toString(36).substring(2, 9),
                  name: formData.get('name') as string,
                  trait: formData.get('trait') as string,
                  imagePath: `/images/${Math.floor(Math.random() * 16) + 7}.jpg`,
                  likedBy: [1],
               };
               setPuppies((prevPuppies) => [...prevPuppies, newPuppy]);
            }}
            className="mt-4 flex w-full flex-col items-start gap-4"
         >
            <div className="grid w-full gap-6 md:grid-cols-3">
               <fieldset className="flex w-full flex-col gap-1">
                  <label htmlFor="name">Name</label>
                  <input
                     required
                     className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-[#4a3b38] focus:outline-none"
                     id="name"
                     type="text"
                     name="name"
                  />
               </fieldset>
               <fieldset className="flex w-full flex-col gap-1">
                  <label htmlFor="trait">Personality trait</label>
                  <input
                     required
                     className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-[#4a3b38] focus:outline-none"
                     id="trait"
                     type="text"
                     name="trait"
                  />
               </fieldset>
               <fieldset
                  disabled={true}
                  className="col-span-2 flex w-full cursor-not-allowed flex-col gap-1 opacity-50"
               >
                  <label htmlFor="avatar_url">Profile pic</label>
                  <input
                     className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-[#4a3b38] focus:outline-none"
                     id="avatar_url"
                     type="file"
                     name="avatar_url"
                  />
               </fieldset>
            </div>
            <SubmitButton />
         </form>
      </div>
   );
};

export default NewPuppyForm;
