// unit test for slug.util.ts

import { slugify } from './slug.utils';

describe('slugify', () => {
  it('should return empty string if no text is provided', () => {
    expect(slugify()).toEqual('');
  });

  it('should return a slug from any text', () => {
    expect(slugify('This is a test')).toEqual('this-is-a-test');
  });
});
