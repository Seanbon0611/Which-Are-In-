const inArray = (array1,array2) => {
  //Create a set so values in the array are unique
  const mySet = new Set
  //iterate through the 2nd array
  for (let i = 0; i < array2.length; i++) {
    //within the 2nd array, iterate through the first
   for (let j = 0; j < array1.length; j++) {
     //check if the current element in array to contains the characters that are in the first array's element. If it does, we want to add to the set the element.
     if (array2[i].includes(array1[j])) {
       mySet.add(array1[j])
     }
   }
  }
  //return an array from the unique values in the set, then sort them in order.
  return Array.from(mySet).sort()
}
const a1 = ["live", "strong", "arp"];
const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

inArray(a1, a2)