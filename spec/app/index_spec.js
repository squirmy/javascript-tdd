var app = require('../../app/');

describe('sanity', function() {

  it('one should equal one', function() {

    expect(app.run()).toEqual(1);

  });

});
