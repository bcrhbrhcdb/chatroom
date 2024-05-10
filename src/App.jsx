import React from 'react';
import ChatRoom from './ChatRoom';
import data from '../public/data.json';

function App() {
  return (
    <div>
      <ChatRoom data={data} />
    </div>
  );
}

export default App;
