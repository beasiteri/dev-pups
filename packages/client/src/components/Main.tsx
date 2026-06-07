import { puppies } from '../data/puppies';
import NewPuppyForm from './NewPuppyForm';
import PuppiesList from './PuppiesList';
import Search from './Search';
import ShortList from './ShortList';
import type { Puppy } from '../types/puppy';
import { useState } from 'react';
import { LikedContext } from '../context/likedContext';

const Main = () => {
   const [liked, setLiked] = useState<Puppy['id'][]>([]);
   const [searchQuery, setSearchQuery] = useState<string>('');

   return (
      <main>
         <LikedContext.Provider value={{ liked, setLiked }}>
            <div className="mt-24 grid gap-8 sm:grid-cols-2">
               <Search
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
               />
               <ShortList puppies={puppies} />
            </div>
            <PuppiesList puppies={puppies} searchQuery={searchQuery} />
         </LikedContext.Provider>
         <NewPuppyForm />
      </main>
   );
};

export default Main;
