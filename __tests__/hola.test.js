const {expon} = require('../cmd/hola')
describe ("hola test", () => {
    test('test to deploy pipeline', () => {
        const rel = expon(0,2)
    
         expect(rel).toBe(0)
    })
})
