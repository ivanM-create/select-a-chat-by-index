import React, { useState, useEffect } from 'react';
import './App.css';

interface Message {
  author: string;
  message: string;
  type: string;
  dt: string;
  chat_id: number;
  sender_message: string;
  comment_message: string;
  receiver_message: string;
}

interface IdData {
  data: number[];
  error: string;
}

interface MessageData {
  data: Message[];
  error: string;
}

const ChatApp: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [ids, setIds] = useState<number[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch('https://teledome.teorema.info/sup/HTgewqi00/')
      .then(response => response.json())
      .then((data: IdData) => setIds(data.data))
      .catch(error => console.error('Error fetching IDs:', error));
  }, []);

  useEffect(() => {
    if (selectedId !== null) {
      fetch(`https://teledome.teorema.info/sup/HTgewqi00/${selectedId}`)
        .then(response => response.json())
        .then((data: MessageData) => setMessages(data.data))
        .catch(error => console.error('Error fetching messages:', error));
    }
  }, [selectedId]);

  return (
    <div className="chat-container">
      <div className="id-list">
        <h2>Выберите ID:</h2>
        <ul>
          {ids.map(id => (
            <li key={id} onClick={() => setSelectedId(id)}>
              {id}
            </li>
          ))}
        </ul>
      </div>
      <div className="message-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.author === 'system' ? 'system' : message.author === 'user' ? 'user' : 'other'}`}
          >
            {message.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatApp;
