function compareArrayElements(n1,n2) {
  /*if (n1.health === n2.health) {return 0};*/
  if (n1.health < n2.health) {return 1}
  else {return -1}
}

export default function sortArray(array) {
 const result = array.sort(compareArrayElements);
 return result;
}