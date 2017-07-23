'use strict'

const sum = (a, b) => new Promise((res, rej) => {
  setTimeout(() => {
    res(a + b)
  }, 2000)
})

module.exports = sum
