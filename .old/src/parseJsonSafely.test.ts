import { parseJsonSafely } from './parseJsonSafely';

it('Should parse example strings correctly', () => {
    const testString = "{\"Authorization\": \"Bearer testsdtestdgsdsfgs\"}";

    const result = parseJsonSafely(testString);

    expect(result).toEqual({
        Authorization: 'Bearer testsdtestdgsdsfgs',
    });
});
