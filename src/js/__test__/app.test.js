import chracterStatus from "../app";

test('healthy', () => {
    const character = {
        name: 'Маг',
        health: 90,
    };

    expect(chracterStatus(character)).toBe('healthy');
});

test('wounded', () => {
    const character = {
        name: 'Маг',
        health: 30,
    };

    expect(chracterStatus(character)).toBe('wounded');
});

test('critical', () => {
    const character = {
        name: 'Маг',
        health: 1,
    };

    expect(chracterStatus(character)).toBe('critical');
});

