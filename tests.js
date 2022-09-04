const chai = window.chai
const expect = chai.expect

describe("getCelcius", () => {
    it("Should convert fahrenheit to celcius for all values in array", () => {
        expect(getCelcius([23, 140, 212, 41])).to.deep.equal([-5, 30, 100, 5])
    })
})



