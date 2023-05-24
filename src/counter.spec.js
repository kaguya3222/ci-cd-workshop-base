import { setupCounter } from './counter';

describe('test', () => {
  test('test', () => {
    document.body.innerHTML = `
      <div>
        <button id="counter" type="button"></button>
      </div>
    `;

    setupCounter(document.querySelector('#counter'));

    document.querySelector('#counter').click();
    expect(document.querySelector('#counter').innerHTML).toBe('count is 3');
    document.querySelector('#counter').click();
    expect(document.querySelector('#counter').innerHTML).toBe('count is 2');
  });
});
