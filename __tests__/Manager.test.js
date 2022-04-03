const Manager = require('../lib/Manager');

test('gets office number for manager', () => {
    const manager = new Manager('221')

    expect(manager.officeNumber).toBe('221');
}) 