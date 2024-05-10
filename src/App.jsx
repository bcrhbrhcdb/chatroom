import React from 'react';
import ChatRoom from './components/ChatRoom';

function App() {
  return (
    <div>
      <ChatRoom dataUrl={`${process.env.PUBLIC_URL}/data.json`} />
    </div>
  );
}

export default App;
