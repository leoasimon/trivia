export const shuffleArray = (arr) => {
  let indexes = Array.from({ length: arr.length }, (_, i) => i);
  const shuffled = [];

  for (let i = 0; i < arr.length; i++) {
    const index = Math.floor(Math.random() * indexes.length);
    const randomIndex = indexes[index];
    shuffled.push(arr[randomIndex]);
    indexes.splice(index, 1);
  }
  return shuffled;
};