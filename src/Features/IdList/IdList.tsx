import React from 'react';

export default function IdList({
  ids,
  setSelectedId,
}: {
  ids: number[];
  setSelectedId: (id: number) => void;
}): JSX.Element {
  return (
    <>
      <aside id="idList">
        <h2>Выберите чат:</h2>
        <ul>
          {ids.map((id, index) => (
            <li
              key={id}
              onClick={() => {
                setSelectedId(id);
              }}
            >
              Чат {index + 1}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
