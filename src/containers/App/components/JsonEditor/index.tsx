import EditorPanel from 'components/EditorPanel';
import { useState } from 'react';
import styles from './style.module.scss';

const JSONEditor = () => {
  const [code, setCode] = useState('');

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <div className={styles.jsonEditor}>
      <EditorPanel withFilePicker language='json' label='JSON' onChange={handleCodeChange} value={code} />
    </div>
  );
};

export default JSONEditor;
