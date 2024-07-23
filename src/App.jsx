import React, { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('nutral');
  const [hunger, setHunger] = useState(50);
  const [happines, setHappines] = useState(50);
  const [dirty, setDirty] = useState(50);

  const feed = (event) => {
    setHunger((prev) => Math.max(prev - 20, 0));
    setDirty((prev) => Math.min(prev + 10, 100));
    setHappines((prev) => prev + 10);
  };

  const play = () => {
    setHunger((prev) => {
      return Math.min(prev + 10, 100);
    });
    setDirty((prev) => Math.min(prev + 5, 100));
    setHappines((prev) => prev + 20);
  };

  const clean = () => {
    setDirty((prev) => Math.max(prev - 20, 0));
    setHunger((prev) => Math.min(prev + 10, 100));
    setHappines((prev) => prev + 10);
  };

  const getstatus = () => {
    if (hunger == 100) setStatus('dog is hungry');
    else if (dirty == 100) setStatus('dog is dirty');
    else setStatus('nutral');
  };
  useEffect(() => {
    getstatus();
  }, [hunger, happines, dirty]);
  return (
    <>
      <p>status: {status}</p>
      <p>hunger level: {hunger}</p>
      <p>happines level: {happines}</p>
      <p>dirty level: {dirty}</p>
      <button
        onClick={feed}
        disabled={status == 'dog is dirty' || hunger == 0 ? true : false}
      >
        feed dog
      </button>
      <button onClick={play} disabled={status == 'nutral' ? false : true}>
        play with dog
      </button>
      <button
        onClick={clean}
        disabled={status == 'dog is hungry' || dirty == 0 ? true : false}
      >
        clean dog
      </button>
    </>
  );
}

export default App;
