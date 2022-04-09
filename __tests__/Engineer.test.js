const Engineer = require('../lib/Engineer')

test('gets the engineer github', () => {
    const engineer = new Engineer('emily', '5', 'gmail', 'emilypape')

    expect(engineer.github).toBe('emilypape')
})