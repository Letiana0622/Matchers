function compareArrayElements(n1,n2) {
  /*if (n1.health === n2.health) {return 0};*/
  if (n1.health < n2.health) {return 1}
  else {return -1};
};

export default function sortArray(array) {
 const result = array.sort(compareArrayElements);
 return result;
}

/*
Если функция возвращает 0, то данные элементы массива равны;
Если функция возвращает 1 (или больше 0), то это означает что первый элемент массива больше второго;
Если функция возвращает -1 (или меньше 0), то это означает что второй элемент массива больше первого.


decreasing array:
function compareNumbers(n1,n2)
{
  if (n1==n2) return 0;
  if (n1<n2)
    return 1;
  else 
    return -1;
}

increasing array:
function compareNumbers(n1,n2)
{
  if (n1==n2) return 0;
  if (n1>n2)
    return 1;
  else 
    return -1;
}

*/

/*

Дан массив с информацией о героях, например:

[
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]
В отсортированном порядке должно выглядеть следующим образом:

[
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
]
Убедитесь, что toBe работать не будет, но будет работать toEqual. 
Изучите документацию на toBe и toEqual и выясните в чём разница (а так же термин Deep Equality). 
Убедитесь, что вы обеспечили 100% покрытие тестами по строкам.

Вы можете дополнительно изучить список доступных "матчер" (список приведён на странице Документация по expect),
 для организации сравнения.


*/