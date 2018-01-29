import { WinLossPipe } from './win-loss.pipe';

describe('WinLossPipe', () => {
  it('create an instance', () => {
    const pipe = new WinLossPipe();
    expect(pipe).toBeTruthy();
  });
});
