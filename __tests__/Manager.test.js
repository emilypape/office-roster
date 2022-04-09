const Manager = require('../lib/Manager');

test('gets office number for manager', () => {
    const manager = new Manager('Emily', '45', 'gmail', '221')

    expect(manager.officeNumber).toBe('221');
}) 