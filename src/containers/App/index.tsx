import JSONEditor from './components/JsonEditor';
import TSEditor from './components/TsEditor';

import styles from './style.module.scss';

const App = () => {
  return (
    <main className={styles.app}>
      <JSONEditor />
      <TSEditor />
    </main>
  );
};

export default App;
