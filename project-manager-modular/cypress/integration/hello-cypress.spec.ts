import {should} from 'chai';

should();



describe.only('My First Test Suite', () => {
  it('should allow doing assertions', () => {
    expect(true).to.equal(true)
  })

  it('should also support the "should" syntax', () => {
    const b = true;
    b.should.be.a('boolean')
    b.should.equal(true)
  })
})
