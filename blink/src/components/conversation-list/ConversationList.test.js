import { render, screen } from '@testing-library/react';

import ConversationList from './ConversationList';
import CLASSES from "./classes";

test('renders conversation', async () => {
  const conversations = [{
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
    },
    {
      "id": "5f58bcd7c23d93722017ccb6",
      "name": "ex cupidatat elit",
      "last_updated": "2020-05-15T06:24:26",
      "messages": [
        {
          "id": "5f58bcd7bf8843d460502aad",
          "text": "qui sint irure sunt",
          "last_updated": "2020-02-24T03:21:14"
        },
        {
          "id": "5f58bcd72dfebe40537c379e",
          "text": "amet sint laborum ut",
          "last_updated": "2020-05-14T12:24:10"
        }
      ]
    }];

  const renderFunction = jest.fn((conversation) => <li key={conversation.id}>{conversation.id}</li>);
  const { container } = render(<ConversationList conversations={conversations} renderConversationListItem={renderFunction}/>);
  const title = container.querySelector(`.${CLASSES.SUB_ELEMENTS.TITLE}`);
  const list = container.querySelector(`.${CLASSES.SUB_ELEMENTS.LIST}`);
  const firstConversation = screen.getByText(/5f58bcd7a88fab5f34df94d6/i);
  const secondConversation = screen.getByText(/5f58bcd7c23d93722017ccb6/i);

  expect(title.querySelector("h2").innerHTML).toBe("Conversations");
  expect(renderFunction).toHaveBeenCalled();
  expect(list.querySelectorAll("li").length).toBe(2);
  expect(firstConversation).toBeInTheDocument();
  expect(secondConversation).toBeInTheDocument();
});
