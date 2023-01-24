function techList(array, string) {
  const sortedArray = array.sort();
  const technologies = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  if (array.length !== 0) {
    for (let index = 0; index < sortedArray.length; index += 1) {
      technologies.push({ tech: sortedArray[index], name: string });
    }
    return technologies;
  }
  return null;
}
techList([], 'ola');
module.exports = techList;
