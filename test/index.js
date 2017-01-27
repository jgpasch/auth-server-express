import http from 'http';
import assert from 'assert';

import '../lib/index';

describe('Auth Node Server', () => {
  it('should return 200', (done) => {
    http.get('http://localhost:8000', res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});