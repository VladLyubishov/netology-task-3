import { getLevel } from '../src/level'
import fetchData from '../src/http'
jest.mock('../src/http')

beforeEach(() => {
    jest.resetAllMocks();
})

test('test getLevel function, if response.status = not ok', () => {
    fetchData.mockReturnValue(new Error('Mock this!'));
    getLevel(1);
    expect(fetchData).toBeCalledWith('https://server/user/1');
})

test('test getLevel function, if response.status = ok', () => {
    const mockResponse = { status: 'ok', level: 10 }; 
    fetchData.mockReturnValue(mockResponse);
    expect(getLevel(1)).toBe('Ваш текущий уровень: 10'); 
})