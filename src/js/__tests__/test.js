import filter from '../app';
const array1 = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];

test('filter array according to person health decrease', () => {
  const result = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ];
  expect(result).toEqual(filter(array1));
});


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
