import type { Puppy } from '../types/puppy';

async function getPuppies() {
   const response = await fetch('/puppies');
   const result = await response.json();

   if (!response.ok) {
      throw result;
   }

   return result;
}

export default getPuppies;

export async function toggleLikedStatus(id: Puppy['_id']) {
   const response = await fetch(`/puppies/${id}/like`, {
      method: 'PATCH',
      headers: {
         Accept: 'application/json',
      },
   });
   if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
   }
   const { data } = await response.json();
   return data;
}
