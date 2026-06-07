import { puppies } from '../data/puppies';
import NewPuppyForm from './NewPuppyForm';
import PuppiesList from './PuppiesList';
import Search from './Search';
import ShortList from './ShortList';

const Main = () => {
   return (
      <main>
         <div className="mt-24 grid gap-8 sm:grid-cols-2">
            <Search />
            <ShortList />
         </div>
         <PuppiesList puppies={puppies} />
         <NewPuppyForm />
      </main>
   );
};

export default Main;
