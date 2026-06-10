import type { Dispatch, SetStateAction } from 'react';
import type { Puppy } from '../types/puppy';
import PuppyCard from './PuppyCard';

type PuppiesListProps = {
   puppies: Puppy[];
   searchQuery: string;
   setPuppies: Dispatch<SetStateAction<Puppy[]>>;
};

const PuppiesList = ({
   puppies,
   searchQuery,
   setPuppies,
}: PuppiesListProps) => {
   return (
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
         {puppies
            .filter((puppy) =>
               puppy.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((puppy) => (
               <PuppyCard
                  key={puppy._id}
                  puppy={puppy}
                  setPuppies={setPuppies}
               />
            ))}
      </ul>
   );
};

export default PuppiesList;
