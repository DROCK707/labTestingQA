const { returnTwo, greeting, add } = require('./functions.js')



test('Does this return the value of 2?', () => {
    expect(returnTwo(2)).toEqual(2)
})

test('Does this greeting return the right name?', () => {
    expect(greeting("James")).toEqual("Hello, James.")
})

test('Does this greeting return the right name?', () => {
    expect(greeting("Jill")).toBe("Hello, Jill.")
})

test('Does this test add two values together?', () => {
    expect(add(1, 2)).toEqual(3)
})

test('Does this test add two values together?', () => {
    expect(add(5, 9)).toEqual(14)
})