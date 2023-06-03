// Styles Import:
import "../styles/global.scss";
import styles from "../styles/comp-styles/pageHead.module.scss";

const PageHead = ({ title, image }) => {
  return (
    <div className={styles.pageHead}>
      <div className={styles.imgContainer}>
        <img src={image} alt="" className={styles.img} />
      </div>
      <div className={styles.diffuser}></div>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};

export default PageHead;
