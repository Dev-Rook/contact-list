import styles from "../styles/comp-styles/input.module.scss";

// Material UI Import:
import SearchIcon from "@mui/icons-material/Search";

const Input = ({ setSearch }) => {
  return (
    <div className={styles.inputContainer}>
      <SearchIcon sx={{ color: "black" }} />
      <input
        type="text"
        className={styles.input}
        placeholder="Search via first name"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Input;
