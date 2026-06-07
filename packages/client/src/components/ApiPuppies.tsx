import { useEffect, useState } from 'react';
import { LoaderCircle } from 'lucide-react';

const ApiPuppies = () => {
   const [apiPuppies, setApiPuppies] = useState<string[]>([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState<string>('');

   useEffect(() => {
      async function getPuppies() {
         setIsLoading(true);
         try {
            const response = await fetch(
               'https://dog.ceo/api/breeds/image/random/6'
            );
            if (!response.ok) {
               const errorData = await response.json();
               setError(errorData.message || 'Something went wrong');
               throw errorData;
            }
            const data = await response.json();
            console.log(data);
            setApiPuppies(data.message);
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
      <div className="mt-12 bg-white p-6 shadow ring ring-black/5">
         {isLoading && (
            <LoaderCircle className="animate-spin stroke-slate-300" />
         )}
         {apiPuppies.length > 0 && (
            <pre>{JSON.stringify(apiPuppies, null, 2)}</pre>
         )}
         {error && <p className="text-red-500">{error}</p>}
      </div>
   );
};

export default ApiPuppies;
