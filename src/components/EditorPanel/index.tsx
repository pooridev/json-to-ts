import MonacoEditor from '@uiw/react-monacoeditor';

import { EditorPanelProps } from './types';
import UploadIcon from '../Icons/Upload';

import styles from './style.module.scss';
import { ChangeEvent, useRef } from 'react';

const EditorPanel = ({ language, onChange, value, readonly, withFilePicker, label }: EditorPanelProps) => {
  const filePickerRef = useRef<HTMLInputElement>(null);

  const extractCodeFromFile = (event: ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();

    fileReader.onload = function () {
      onChange(fileReader.result as string);
    };

    fileReader.readAsText(event.target.files?.[0] as Blob);
  };

  const openFilePicker = () => {
    filePickerRef.current?.click();
  };

  return (
    <div className={styles.editorPanel}>
      <header className={styles.header}>
        <h4>{label}</h4>
        {withFilePicker && (
          <div title='convert via upload a file' onClick={openFilePicker} className={styles.filePicker}>
            <UploadIcon size={20} />
            <input ref={filePickerRef} type='file' onChange={extractCodeFromFile} />
          </div>
        )}
      </header>
      <MonacoEditor
        language={language}
        value={value}
        height='100vh'
        onChange={onChange}
        options={{
          theme: 'vs-dark',
          readOnly: readonly,
          cursorStyle: 'line',
          automaticLayout: false,
          scrollbar: {
            // Subtle shadows to the left & top. Defaults to true.
            useShadows: false,
            // Render vertical arrows. Defaults to false.
            verticalHasArrows: true,
            // Render horizontal arrows. Defaults to false.
            horizontalHasArrows: true,
            // Render vertical scrollbar.
            // Accepted values: 'auto', 'visible', 'hidden'.
            // Defaults to 'auto'
            vertical: 'visible',
            // Render horizontal scrollbar.
            // Accepted values: 'auto', 'visible', 'hidden'.
            // Defaults to 'auto'
            horizontal: 'visible',
            verticalScrollbarSize: 17,
            horizontalScrollbarSize: 17,
            arrowSize: 30
          }
        }}
      />
    </div>
  );
};

export default EditorPanel;
