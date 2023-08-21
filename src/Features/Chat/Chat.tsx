import React from 'react';
import { Message } from '../type/type';

export default function Chat({
  messages,
}: {
  messages: Message[];
}): JSX.Element {
  function getId(): number[] {
    const idArr: number[] = [];
    messages.forEach((el) =>
      el.author === 'system' ? el : idArr.push(el.chat_id)
    );
    return idArr;
  }
  const chatId: number[] = getId();

  return (
    <main id="messageContainer">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${
            message.author === 'system'
              ? 'system'
              : chatId[index]
              ? 'other'
              : 'user'
          }`}
        >
          <p className="author">{message.author}:</p>
          <p>{message.message.replace(/[`*\\]/gi, '')}</p>
        </div>
      ))}
    </main>
  );
}
