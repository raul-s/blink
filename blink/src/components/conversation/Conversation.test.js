import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Conversation from './Conversation';
import CLASSES from "./classes";

test('renders conversation', async () => {
  const conversation =   {
    "id": "5f58bcd7a88fab5f34df94d6",
    "name": "eiusmod nostrud sunt",
    "last_updated": "2020-05-24T03:21:14",
    "messages": [
      {
        "id": "5f58bcd7352396fffbae8b6e",
        "text": "Lorem labore ea et",
        "last_updated": "2020-02-16T04:35:16"
      },
      {
        "id": "5f58bcd7d95151eaa14ab8aa",
        "text": "ex excepteur deserunt laboris",
        "last_updated": "2020-08-18T11:16:45"
      },
      {
        "id": "5f58bcd7f7745918c2252086",
        "text": "dolore sunt reprehenderit cupidatat",
        "last_updated": "2020-03-23T10:06:33"
      }
    ]
  };

  const clickHandler = jest.fn();
  const { container } = render(<Conversation selectedConversation={conversation} conversation={conversation} clickHandler={clickHandler}/>);
  const name = container.querySelector(`.${CLASSES.SUB_ELEMENTS.NAME}`);
  const date = container.querySelector(`.${CLASSES.SUB_ELEMENTS.DATE}`);

  expect(date.innerHTML).toBe('(5/24/2020, 3:21:14 AM)');
  expect(name.innerHTML).toBe(conversation.name);

  await userEvent.click(screen.getByText(conversation.name));
  expect(clickHandler).toHaveBeenCalled();
});
