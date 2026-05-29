import { useState } from 'react';
import NewPuppyForm from './NewPuppyForm';
import PuppiesList from './PuppiesList';
import Search from './Search';
import ShortList from './ShortList';
import { puppies as puppiesData } from '../data/puppies';
import type { Puppy } from '../types/puppy';
import { LikedContext } from '../context/likedContext';

const Main = () => {
  const [liked, setLiked] = useState<Puppy['id'][]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [puppies, setPuppies] = useState<Puppy[]>(puppiesData);

  return (
    <main>
      <LikedContext value={{ liked, setLiked }}>
        <div className="mt-24 grid gap-8 sm:grid-cols-2">
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <ShortList puppies={puppies} />
        </div>
        <PuppiesList puppies={puppies} searchQuery={searchQuery} />
      </LikedContext>
      <NewPuppyForm puppies={puppies} setPuppies={setPuppies} />
    </main>
  );
};
export default Main;
