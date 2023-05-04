export interface EditorPanelProps {
  readonly?: boolean;
  label: string;
  withFilePicker?: boolean;
  language: 'typescript' | 'json';
  /** Entered code */
  value: string;
  onChange: (code: string) => void;
}
