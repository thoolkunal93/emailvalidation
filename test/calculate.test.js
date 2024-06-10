
import { validate } from '../dist/modules/validate.js';
import { assert } from 'chai';

describe('Validate Email', async () => {
  it('Fails if there is no domain in mail.', async () => {
      const data =  await validate('');
      assert.strictEqual(data.status, false);
  });


  it('Fails if there is no valid domain.', async () => {
      const data =  await validate('test@gmm');
      assert.strictEqual(data.status, false);
  });


  it('Fails if there is no valid domain eg: .com.', async () => {
      const data =  await validate('test@gmm.');
      assert.strictEqual(data.status, false);
  });


  it('Fails to find Mx record for invalid domain', async () => {
    const data =  await validate('test@gmmsdsdsdsdsdsdsd.com');
      assert.strictEqual(data.status, false);
  });


  it('Fails to Validate email for Valid Mx record but invalid mail (testasdasdsadsdQQQQQQ@gmail.com).', async() => {
      const data =  await validate('testasdasdsadsdQQQQQQ@gmail.com');
      assert.strictEqual(data.status, false);
  });


  it('Success Validate email for Valid Mx record and valid mail (thoolkunal93@gmail.com).', async () => {
      const data =  await validate('thoolkunal93@gmail.com');
      assert.strictEqual(data.status, true);
  });
});