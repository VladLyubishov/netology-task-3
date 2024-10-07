import checkHealth from '../src/health'

test('checkHealth', () => { 
    expect(checkHealth({name: 'Маг', health: 90})).toBe('healthy'); 
});

// const heroes = [
//     {name: 'мечник', health: 10},
//     {name: 'маг', health: 100},
//     {name: 'лучник', health: 80},
// ]

// const handler = test.each(heroes);

// handler(prefix, ()=>{
//     const result = checkHealth();
// })