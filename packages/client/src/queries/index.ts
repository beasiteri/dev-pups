async function getPuppies() {
   const response = await fetch("/puppies");
   const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
}

export default getPuppies;
