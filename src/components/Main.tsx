import NewPuppyForm from './NewPuppyForm';
import PuppiesList from './PuppiesList';
import Search from './Search';
import ShortList from './ShortList';
import { puppies } from '../data/puppies';

const Main = () => (
  <main>
    <div className="mt-24 grid gap-8 sm:grid-cols-2">
      <Search />
      <ShortList />
    </div>
    <PuppiesList puppies={puppies} />
    <NewPuppyForm />
  </main>
);

export default Main;
