import EditorPanel from 'components/EditorPanel';
import { useState } from 'react';
import styles from './style.module.scss';

const TSEditor = () => {
  const [code, setCode] = useState('');

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <div className={styles.tsEditor}>
      <EditorPanel
        readonly
        withFilePicker
        language='typescript'
        label='TypeScript'
        onChange={handleCodeChange}
        value={code}
      />
    </div>
  );
};

export default TSEditor;
