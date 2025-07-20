import { CountLettersPipe } from './count-letters.pipe';

describe('CountLettersPipe', () => {
  it('create an instance', () => {
    const pipe = new CountLettersPipe();
    expect(pipe).toBeTruthy();
  });
});
