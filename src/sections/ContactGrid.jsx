import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

// Firebase 🔥
import useFirebase from "../firebase/useFirebase";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/sec-styles/contactGrid.module.scss";
import "../styles/imported-styles/smallCard.css";

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

  const { contact, loading, error } = useFirebase();

  return (
    <div className="section">
      <Input setSearch={setSearch} />
      <div className={"contactGrid"}>
        {data
          ?.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.first_name.toLowerCase().includes(search);
          })
          .slice(0, 4)
          .map((item) => (
            <div className="card" key={item.id}>
              <div className="infos">
                <div className="imageContainer"></div>
                <div className="info">
                  <div>
                    <p className="name">
                      {item.first_name} {item.last_name}
                    </p>
                    <p className="function">{item.occupation}</p>
                  </div>
                  <div className="stats">
                    <p className="flex flex-col">
                      Gender
                      <span className="state-value">{item.gender}</span>
                    </p>
                    <p className="flex">
                      Followers
                      <span className="state-value">455</span>
                    </p>
                  </div>
                </div>
              </div>
              <button className="request" type="button">
                Profile
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ContactGrid;
