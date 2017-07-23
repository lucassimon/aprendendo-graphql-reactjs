'use strict'

let sum = require('./sum')
let sumAsync = require('./async_sum')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('async adds 1 + 2 to equal 3', async () => {
  const result = await sumAsync(2, 2)
  expect(result).toBe(4)
})
