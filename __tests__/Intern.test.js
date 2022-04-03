const Intern = require('../lib/Intern');

test('get school information for the intern', () => {
    const intern = new Intern('BYU');

    expect(intern.school).toBe('BYU');
})