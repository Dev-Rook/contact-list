import { useState } from "react";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/sec-styles/contactGrid.module.scss";

// Json Import:
import DummyContacts from "../data/DummyContact.json";

// Material UI Import:
import SearchIcon from "@mui/icons-material/Search";
import TagIcon from '@mui/icons-material/Tag';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Component Import:
import Input from "../components/Input"

const ContactGrid = () => {
  const [data, setData] = useState(DummyContacts);
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div className="section">
      <Input setSearch={setSearch} />
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
                <img src={""} alt="" className={styles.img} />
              </div>
              <div className={styles.deatailsContainer}>
                <p className={styles.name}>
                  {item.first_name} {item.last_name}
                </p>
                <p className={styles.bio}>{item.bio.slice(0, 40)}...</p>
              </div>
              <div className={styles.callToActionContainer}>
                <button className={styles.actionButton}>Profile</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ContactGrid;
