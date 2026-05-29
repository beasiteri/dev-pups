import { useState } from 'react';
import NewPuppyForm from './NewPuppyForm';
import PuppiesList from './PuppiesList';
import Search from './Search';
import ShortList from './ShortList';
import { puppies } from '../data/puppies';
import type { Puppy } from '../types/puppy';
import { LikedContext } from '../context/likedContext';

const Main = () => {
  const [liked, setLiked] = useState<Puppy['id'][]>([]);

  return (
    <main>
      <LikedContext value={{ liked, setLiked }}>
        <div className="mt-24 grid gap-8 sm:grid-cols-2">
          <Search />
          <ShortList puppies={puppies} />
        </div>
        <PuppiesList puppies={puppies} />
      </LikedContext>
      <NewPuppyForm />
    </main>
  );
};
export default Main;
