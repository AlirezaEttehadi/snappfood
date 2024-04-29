import clsx from "clsx";

import styles from "./app.module.scss";

const App = () => {
  return (
    <div className={clsx(styles.App, "shadow-main")}>Snappfood Home Page</div>
  );
};

export default App;
