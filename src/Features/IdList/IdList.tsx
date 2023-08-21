import React, { useState } from 'react';

export default function IdList({
  ids,
  setSelectedId,
}: {
  ids: number[];
  setSelectedId: (id: number) => void;
}): JSX.Element {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  return (
    <>
      <nav id="idList">
        <h2>Выберите чат:</h2>
        <ul>
          {ids.map((id, index) => (
            <li
            className={selectedItemId === id ? 'active' : ''}
              key={id}
              onClick={() => {
                setSelectedId(id);
                setSelectedItemId(id);
              }}
            >
              Чат {index + 1}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
