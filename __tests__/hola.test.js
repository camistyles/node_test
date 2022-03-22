const {expon, sum} = require('../cmd/hola')
const {ff} = require('../cmd/otro')
describe ("hola test", () => {
    test('test to deploy pipeline', () => {
        const rel = expon(0,2)
    
         expect(rel).toBe(0)
    })
})

describe ("hola sum", () => {
    test('sum to deploy pipeline', () => {
        const rel = sum(3,3)
    
         expect(rel).toBe(6)
    })
})

describe ("hola sum", () => {
    test('sum to deploy pipeline', () => {
        const rel = sum(3,3)
    
         expect(rel).toBe(6)
    })
})

describe ("hola ff", () => {
    test('ff to deploy pipeline', () => {
        const rel = ff(2,2)
    
         expect(rel).toBe(6)
    })
})
