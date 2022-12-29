import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from '@testing-library/react';
import {beforeEach, it, afterEach, expect, test} from '@jest/globals';
import Counter from '../components/Counter';

let container: HTMLElement | null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container!);
  container = null;
});

it('can render and update a counter', () => {

  act(() => {
    ReactDOM.createRoot(container!).render(<Counter />);
  });

  const button = container!.querySelector('button');
  const label = container!.querySelector('p');
  expect(label!.textContent).toBe('You clicked 0 times');
  expect(document.title).toBe('You clicked 0 times');

  // 再测试 render 和 componentDidUpdate
  act(() => {
    button!.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
  expect(label!.textContent).toBe('You clicked 1 times');
  expect(document.title).toBe('You clicked 1 times');
 
});