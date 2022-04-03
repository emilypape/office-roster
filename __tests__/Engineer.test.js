const Engineer = require('../lib/Engineer')

test('gets the engineer github', () => {
    const engineer = new Engineer('emilypape')

    expect(engineer.github).toBe('emilypape')
})