import React, { useState } from 'react';
import { QuillEditor } from './QuillEditor';
import './App.css';

function App() {
  const [content, setContent] = useState('');

  const handlechange = (content:string) => {
      setContent(content);
      console.log(content);
  }

  return (
    <div className="App">
      <h1>Quill Editor Demo</h1>
      <div className="editor-container">
        <QuillEditor 
          value={content}
          onChange={setContent}
        />
      </div>
      
    </div>
  );
}

export default App;
