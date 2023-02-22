import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Composer from './Composer';
import CLASSES from "./classes";

test('renders composer', async () => {
  const submitHandler = jest.fn();
  const changeHandler = jest.fn();
  const buttonLabel = "Send";
  const value = "Hello!";
  const placeholder = "Type your message here"

  const { container } = render(<Composer
    onSubmit={submitHandler}
    onChange={changeHandler}
    value={value}
    buttonLabel={buttonLabel}
    placeholder={placeholder}
  />);

  const input = container.querySelector(`.${CLASSES.SUB_ELEMENTS.INPUT}`);
  const button = container.querySelector(`.${CLASSES.SUB_ELEMENTS.BUTTON}`);

  await userEvent.type(input, 'Test')
  expect(changeHandler).toHaveBeenCalled();

  await userEvent.click(button);
  expect(submitHandler).toHaveBeenCalled();
});
