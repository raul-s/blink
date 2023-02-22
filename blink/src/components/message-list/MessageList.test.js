import { render, screen } from '@testing-library/react';

import MessageList from './MessageList';
import CLASSES from "./classes";

test('renders conversation', async () => {
  const conversations = {
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
      }
    ]
  };

  const renderFunction = jest.fn((message) => <li key={message.id}>{message.id}</li>);
  const { container } = render(<MessageList selectedConversation={conversations} renderMessageListItem={renderFunction}/>);
  const title = container.querySelector(`.${CLASSES.SUB_ELEMENTS.TITLE}`);
  const list = container.querySelector(`.${CLASSES.SUB_ELEMENTS.LIST}`);
  const firstMessage = screen.getByText(/5f58bcd7352396fffbae8b6e/i);
  const secondMessage = screen.getByText(/5f58bcd7d95151eaa14ab8aa/i);

  expect(title.querySelector("h1").innerHTML).toBe("Messages");
  expect(renderFunction).toHaveBeenCalled();
  expect(list.querySelectorAll("li").length).toBe(2);
  expect(firstMessage).toBeInTheDocument();
  expect(secondMessage).toBeInTheDocument();
});

test('renders without conversation', async () => {
  const conversations = null;

  const renderFunction = jest.fn((message) => <li key={message.id}>{message.id}</li>);
  const { container } = render(<MessageList selectedConversation={conversations} renderMessageListItem={renderFunction}/>);
  const title = container.querySelector(`.${CLASSES.SUB_ELEMENTS.TITLE}`);
  const list = container.querySelector(`.${CLASSES.SUB_ELEMENTS.LIST}`);
  const text = screen.getByText(/Click on a conversation to view its messages/i);

  expect(title.querySelector("h1").innerHTML).toBe("Messages");
  expect(renderFunction).not.toHaveBeenCalled();
  expect(list).toBe(null);
  expect(text).toBeInTheDocument();
});
