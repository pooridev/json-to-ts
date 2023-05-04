import EditorPanel from 'components/EditorPanel';
import { useState } from 'react';

const JSONEditor = () => {
  const [code, setCode] = useState('');

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <div>
      <EditorPanel withFilePicker language='json' label='JSON' onChange={handleCodeChange} value={code} />
    </div>
  );
};

export default JSONEditor;
