import { useState } from "react";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/sec-styles/contactGrid.module.scss";

// Json Import:
import DummyContacts from "../data/DummyContact.json";

// Material UI Import:
import SearchIcon from "@mui/icons-material/Search";

const ContactGrid = () => {
  const [data, setData] = useState(DummyContacts);
  const [search, setSearch] = useState("");
  console.log(search)

  return (
    <div className="section">
      <div className={styles.inputContainer}>
      <SearchIcon sx={{color: "black"}} />
        <input
          type="text"
          className={styles.input}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={styles.contactGrid}>
        {data
          ?.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.first_name.toLowerCase().includes(search);
          })
          .map((item) => (
            <div className={styles.contactCard} key={item.id}>
              <div className={styles.imageContainer}>
                <img src="" alt="" className={styles.img} />
              </div>
              <div className={styles.deatailsContainer}>
                <p className={styles.name}></p>
                <p className={styles.description}></p>
              </div>
              <div className={styles.callToActionContainer}>
                
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ContactGrid;
