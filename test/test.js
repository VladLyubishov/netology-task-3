import checkHealth from '../src/health'

const heroes = [
    ['мечник', 10, 'critical'],
    ['маг', 100, 'healthy'],
    ['лучник', 80, 'healthy'],
]

const handler = test.each(heroes);

handler('testing checkHealth function with %s name and %i health, has status %s', (name, health, status) => {
    const result = checkHealth(health);
    expect(result).toBe(status)
})