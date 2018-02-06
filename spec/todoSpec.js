const test = require('../src/script.js')

console.log(test());

describe('test',()=> {
    it('should be call test return true', ()=> {
        expect(test()).toBe(true)
    })
})
