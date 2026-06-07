import { Delete } from 'lucide-react';
import { useRef, type Dispatch, type SetStateAction } from 'react';

type SearchProps = {
   searchQuery: string;
   setSearchQuery: Dispatch<SetStateAction<string>>;
};

const Search = ({ searchQuery, setSearchQuery }: SearchProps) => {
   const inputRef = useRef<HTMLInputElement | null>(null);

   return (
      <div>
         <label htmlFor="search" className="font-medium">
            Search for a character trait
         </label>
         <div className="mt-2 flex items-center gap-4">
            <input
               ref={inputRef}
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               placeholder="playful..."
               name="search"
               id="search"
               type="text"
               className="w-full max-w-80 bg-white px-4 py-2 ring ring-black/5 focus:ring-2 focus:ring-[#4a3b38] focus:outline-none"
            />
            <button
               onClick={() => {
                  setSearchQuery('');
                  inputRef.current?.focus();
               }}
               className="inline-block rounded bg-[#4a3b38] px-4 py-2 pr-3! pl-2.5! font-medium text-white hover:bg-[#4a3b38] focus:ring-2 focus:ring-[#4a3b38] focus:outline-none cursor-pointer"
            >
               <Delete />
            </button>
         </div>
      </div>
   );
};

export default Search;
