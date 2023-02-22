import { render } from '@testing-library/react';

import Message from './Message';
import CLASSES from "./classes";

test('renders message', () => {
  const textContent = "Lorem ipsum";
  const { container } = render(<Message message={{ last_updated: "2020-02-24T03:21:14", text: textContent }} />);
  const text = container.querySelector(`.${CLASSES.SUB_ELEMENTS.TEXT}`);
  const date = container.querySelector(`.${CLASSES.SUB_ELEMENTS.DATE}`);

  expect(date.innerHTML).toBe('2/24/2020, 3:21:14 AM');
  expect(text.innerHTML).toBe(textContent);
});
