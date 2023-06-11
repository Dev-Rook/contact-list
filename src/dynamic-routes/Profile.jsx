import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

// Firebase 🔥
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/sec-styles/profileInfo.module.scss";

// Component Import:
import PageHead from "../components/PageHead";

const Profile = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [details, setDetails] = useState({});

  useMemo(async () => {
    setLoading(true);
    try {
      const data = await getDoc(doc(db, "contact", id));
      const contactData = data.data();
      setDetails(contactData);
      console.log(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  const title = "Profile";
  const image = "";

  return (
    <div className="page">
      <PageHead title={title} image={image} />
      <div className="section">
        <div className={styles.contentContainer}>
          <div className={styles.imageContainer}>
            <img src={details.img} alt="" className={styles.img} />
          </div>
          <div className={styles.infoContainer}>
            {/* <div className={styles.nameBox}></div> */}
            <p>
              {details.title}, {details.first_name} {details.last_name}
            </p>
            <p>Gender: {details.gender}</p>
            <p>Age: {details.age}</p>
            <p>Occupation: {details.occupation}</p>
            <p>Phone: {details.phone}</p>
            <p>Email: {details.email}</p>
            <p>Address: {details.address}</p>
            <p>Bio: {details.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
