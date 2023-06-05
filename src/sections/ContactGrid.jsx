import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

// Firebase 🔥
import useFirebase from "../firebase/useFirebase";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/sec-styles/contactGrid.module.scss";

// Json Import:
import DummyContacts from "../data/DummyContact.json";

// Material UI Import:
import TagIcon from "@mui/icons-material/Tag";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// Component Import:
import Input from "../components/Input";

const ContactGrid = () => {
  const [data, setData] = useState(DummyContacts);
  const [search, setSearch] = useState("");

  const {contact, loading, error} = useFirebase()

  return (
    <div className="section">
      <Input setSearch={setSearch} />
      <div className={styles.contactGrid2}>
        {contact
          ?.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.first_name.toLowerCase().includes(search);
          }).slice(0, 1)
          .map((item) => (
            <div className={styles.contactCard2} key={item.id}>
              <div className={styles.imageContainer2}>
                <img src={""} alt="" className={styles.img2} />
              </div>
              <div className={styles.deatailsContainer2}>
                <p className={styles.name2}>
                  {item.first_name} {item.last_name}
                </p>
                <p>
                  {item.phone}
                </p>
                <p>
                  {item.email}
                </p>

                <p className={styles.bio2}>{item.bio.slice(0, 40)}...</p>
              </div>
              <div className={styles.callToActionContainer2}>
                <Link to={`/profile/${item.id}`}>
                  <button className={styles.actionButton2}>Profile</button>
                </Link>
                <MoreVertIcon
                  sx={{ fontSize: 25 }}
                  className={styles.moreIcon2}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ContactGrid;
