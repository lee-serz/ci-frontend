import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-dracula';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const runCode = () => {
    try {
      const result = eval(code); // Выполнить JavaScript-код
      setOutput(result.toString()); // Отобразить результат выполнения кода
    } catch (error) {
      setOutput('Ошибка выполнения кода: ' + error);
    }
  };
  return (
    <div>
      <AceEditor
        mode="javascript"
        theme="monokai"
        value={code}
        onChange={handleCodeChange}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
        style={{ width: '100%', height: '500px' }}
      />
      <button onClick={runCode}>Запустить код</button>
      <div>
        <h2>Результат выполнения кода:</h2>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;
