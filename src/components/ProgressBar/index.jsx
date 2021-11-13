import styles from "./index.module.scss";

const ProgressBar = (props) => {
  console.log(props.props);
  return (
    <div className={styles["progress-bar"]}>
      <div className={styles.container}>
        <div className={styles.fill} style={{ width: props.props.width }}></div>
      </div>
      <div className={styles["circle-progress-bar"]}></div>
    </div>
  );
};

export default ProgressBar;
