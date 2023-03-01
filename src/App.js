import { Fragment, useState } from "react";
import styles from "./App.module.css";
function App() {
  const [data, setData] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  let [count, setCount] = useState(0);
  const [v1, setV1] = useState(null);
  const [v2, setV2] = useState(null);
  const [v3, setV3] = useState(null);
  return (
    <Fragment>
      <div className={styles.app}>
        {data.map((e, i) => (
          <div
            className={e === 0 ? styles.app_box : styles.app_box2}
            key={i}
            onClick={() => {
              if (v1 === null) {
                setV1(i);
              } else if (v2 === null) {
                console.log("coming");
                setV2(i);
              }
              if (v3 === null && v1 !== null && v2 !== null) {
                data[v1] = 0;
                setData(data);
                setV1(v2);
                setV2(i);
                setV3(null);
              }
              data[i] = 1;
              setData(data);
              setCount(count + 1);
            }}
          ></div>
        ))}
      </div>
    </Fragment>
  );
}

export default App;
