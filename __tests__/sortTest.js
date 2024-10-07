import sortHeroes from '../src/sort'

const arrHeroes = [
    {name: 'лучник', health: 80},
    {name: 'маг', health: 100},
    {name: 'мечник', health: 10},
  ]

test('test sort', () => {
    expect(sortHeroes(arrHeroes)).toEqual(arrHeroes);
})