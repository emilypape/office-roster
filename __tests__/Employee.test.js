const Employee = require('../lib/Employee');

test('returns the name of the employee being added', () => {
    const employee = new Employee('Emily')

    expect(employee.name).toBe('Emily');
})

test('returns the employee id', () => {
    const employee = new Employee('Emily', '2')

    expect(employee.id).toBe('2')
});

test('returns the employee email', () => {
    const employee = new Employee('Emily', '2', 'eap6787@gmail.com')

    expect(employee.email).toBe('eap6787@gmail.com')
})

