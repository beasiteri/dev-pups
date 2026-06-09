import { use, useState } from 'react';

import NewPuppyForm from './NewPuppyForm';
import PuppiesList from './PuppiesList';
import Search from './Search';
import ShortList from './ShortList';

import { LikedContext } from '../context/likedContext';
import type { Puppy } from '../types/puppy';
import getPuppies from '../queries';

const puppyPromise = getPuppies();

const Main = () => {
   const apiPuppies = use(puppyPromise);
   const [liked, setLiked] = useState<Puppy['_id'][]>([]);
   const [searchQuery, setSearchQuery] = useState<string>('');
   const [puppies, setPuppies] = useState<Puppy[]>(apiPuppies);

   return (
      <main>
         <LikedContext.Provider value={{ liked, setLiked }}>
            <div className="mt-24 mb-10 grid gap-8 sm:grid-cols-2">
               <Search
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
               />
               <ShortList puppies={puppies} />
            </div>

            <PuppiesList puppies={puppies} searchQuery={searchQuery} />
         </LikedContext.Provider>
         <NewPuppyForm setPuppies={setPuppies} />
      </main>
   );
};

export default Main;
