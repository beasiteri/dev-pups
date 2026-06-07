import { useEffect, useState } from 'react';
import { LoaderCircle } from 'lucide-react';
import NewPuppyForm from './NewPuppyForm';
import PuppiesList from './PuppiesList';
import Search from './Search';
import ShortList from './ShortList';
import type { Puppy } from '../types/puppy';
import { LikedContext } from '../context/likedContext';

const Main = () => {
   const [liked, setLiked] = useState<Puppy['_id'][]>([]);
   const [searchQuery, setSearchQuery] = useState<string>('');
   const [puppies, setPuppies] = useState<Puppy[]>([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState<string>('');

   useEffect(() => {
      async function getPuppies() {
         setIsLoading(true);
         try {
            const response = await fetch('/puppies');
            if (!response.ok) {
               const errorData = await response.json();
               setError(errorData.message || 'Something went wrong');
               throw errorData;
            }
            const data = await response.json();
            console.log(data);
            setPuppies(data);
         } catch (error) {
            console.log(error);
            setError('Failed to load puppies');
         } finally {
            setIsLoading(false);
         }
      }

      getPuppies();
   }, []);

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

            {isLoading && (
               <LoaderCircle className="animate-spin stroke-slate-300" />
            )}
            {error && <p className="text-red-500">{error}</p>}

            <PuppiesList puppies={puppies} searchQuery={searchQuery} />
         </LikedContext.Provider>
         <NewPuppyForm setPuppies={setPuppies} />
      </main>
   );
};

export default Main;
