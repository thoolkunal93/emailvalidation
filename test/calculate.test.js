
import { validate } from '../dist/modules/validate.js';

describe('Validate Email', async () => {
  it('Fails if there is no domain in mail.', () => {
      validate('test')
      .then((data) => {
         expect(data.status).toBe(false)
      });
  });


  it('Fails if there is no valid domain.', () => {
      validate('test@gmm')
      .then((data) => {
         expect(data.status).toBe(false)
      });
  });


  it('Fails if there is no valid domain eg: .com.', () => {
      validate('test@gmm.')
      .then((data) => {
         expect(data.status).toBe(false)
      });
  });


  it('Fails to find Mx record for invalid domain', () => {
      validate('test@gmmsdsdsdsdsdsdsd.com')
      .then((data) => {
         expect(data.status).toBe(false)
      });
  });


  it('Fails to Validate email for Valid Mx record but invalid mail (testasdasdsadsdQQQQQQ@gmail.com).', () => {
      validate('testasdasdsadsdQQQQQQ@gmail.com')
      .then((data) => {
         expect(data.status).toBe(false)
      });
  });


  it('Success Validate email for Valid Mx record and valid mail (thoolkunal93@gmail.com).', () => {
      validate('thoolkunal93@gmail.com')
      .then((data) => {
         expect(data.status).toBe(true)
      });
  });
});