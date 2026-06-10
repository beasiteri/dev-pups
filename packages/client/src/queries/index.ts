// Fetch all puppies from the backend
export async function getPuppies() {
   const response = await fetch('/puppies');
   const result = await response.json();

   if (!response.ok) {
      throw result;
   }

   return result;
}

// Like a puppy (adds userId to likedBy array)
export async function likePuppy(id: string) {
  const res = await fetch(`/puppies/${id}/likes`, {
    method: "POST",
  });

  if (!res.ok) throw await res.json();

  const { data } = await res.json();
  return data;
}

// Unlike a puppy (removes userId from likedBy array)
export async function unlikePuppy(id: string) {
  const res = await fetch(`/puppies/${id}/likes`, {
    method: "DELETE",
  });

  if (!res.ok) throw await res.json();

  const { data } = await res.json();
  return data;
}
