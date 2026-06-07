import { puppies } from '../data/puppies';
import NewPuppyForm from './NewPuppyForm';
import PuppiesList from './PuppiesList';
import Search from './Search';
import ShortList from './ShortList';
import type { Puppy } from '../types/puppy';
import { useState } from 'react';

const Main = () => {
   const [liked, setLiked] = useState<Puppy['id'][]>([]);

   return (
      <main>
         <div className="mt-24 grid gap-8 sm:grid-cols-2">
            <Search />
            <ShortList />
         </div>
         <PuppiesList puppies={puppies} liked={liked} setLiked={setLiked} />
         <NewPuppyForm />
      </main>
   );
};

export default Main;
