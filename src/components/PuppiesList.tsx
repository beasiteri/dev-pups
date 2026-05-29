import type { Puppy } from '../types/puppy';
import PuppyCard from './PuppyCard';

type PuppiesListProps = {
  puppies: Puppy[];
  searchQuery: string;
};

const PuppiesList = ({ puppies, searchQuery }: PuppiesListProps) => {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {puppies
        .filter((puppy) => puppy.trait.toLowerCase().includes(searchQuery.toLowerCase()))
        .map((puppy) => (
          <PuppyCard key={puppy.id} puppy={puppy} />
        ))}
    </ul>
  );
};

export default PuppiesList;
