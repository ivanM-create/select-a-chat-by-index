import React, { useState, useEffect } from 'react';
import './ChatApp.css';
import { IdData, Message, MessageData } from './Features/type/type';
import IdList from './Features/IdList/IdList';
import Chat from './Features/Chat/Chat';

function ChatApp(): JSX.Element {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [ids, setIds] = useState<number[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  const URL = 'https://teledome.teorema.info/sup/HTgewqi00/';

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data: IdData) => setIds(data.data))
      .catch((error) => console.error('Error fetching IDs:', error));
  }, []);

  useEffect(() => {
    if (selectedId !== null) {
      fetch(`${URL}${selectedId}`)
        .then((response) => response.json())
        .then((data: MessageData) => setMessages(data.data))
        .catch((error) => console.error('Error fetching messages:', error));
    }
  }, [selectedId]);

  return (
    <div id="chatContainer">
      <IdList ids={ids} setSelectedId={setSelectedId} />
      <Chat messages={messages} />
    </div>
  );
}

export default ChatApp;
