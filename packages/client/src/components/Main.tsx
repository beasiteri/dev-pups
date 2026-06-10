import { use, useState } from 'react';
import { getPuppies } from '../queries';
import type { Puppy } from '../types/puppy';
import NewPuppyForm from './NewPuppyForm';
import PuppiesList from './PuppiesList';
import Search from './Search';
import ShortList from './ShortList';

const puppyPromise = getPuppies();

const Main = () => {
   const apiPuppies = use(puppyPromise);
   const [puppies, setPuppies] = useState<Puppy[]>(apiPuppies);
   const [searchQuery, setSearchQuery] = useState<string>('');

   return (
      <main>
         <div className="mt-24 mb-10 grid gap-8 sm:grid-cols-2">
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <ShortList puppies={puppies} setPuppies={setPuppies} />
         </div>

         <PuppiesList
            puppies={puppies}
            searchQuery={searchQuery}
            setPuppies={setPuppies}
         />
         <NewPuppyForm setPuppies={setPuppies} />
      </main>
   );
};

export default Main;
