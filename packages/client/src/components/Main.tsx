import NewPuppyForm from './NewPuppyForm';
import PuppiesList from './PuppiesList';
import Search from './Search';
import ShortList from './ShortList';
import { puppies as puppiesData } from '../data/puppies';
import type { Puppy } from '../types/puppy';
import { useState } from 'react';
import { LikedContext } from '../context/likedContext';
/* import ApiPuppies from './ApiPuppies'; */

const Main = () => {
   const [liked, setLiked] = useState<Puppy['_id'][]>([]);
   const [searchQuery, setSearchQuery] = useState<string>('');
   const [puppies, setPuppies] = useState<Puppy[]>(puppiesData);

   return (
      <main>
         {/* <ApiPuppies /> */}
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
         <NewPuppyForm setPuppies={setPuppies} />
      </main>
   );
};

export default Main;
