import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

// Firebase 🔥
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

// Styles Import:
import "../styles/global.scss";

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

  // useEffect(() => {
  //   const getContact = async () => {
  //     const snapshot = await getDoc(contactRef);
  //     const data = snapshot.data();
  //     // setDetails({ ...data, id: snapshot.id });
  //     setDetails(data.docs.map((doc) => ({ ...data, id: snapshot.id })));
  //     console.log(data);
  //   };
  //   return () => getContact();
  // }, []);

  // Header Props:
  const title = "Profile";
  const image = "";

  return (
    <div className="page">
      <PageHead title={title} image={image} />
      <p>{details.first_name}</p>
      <p>{details.last_name}</p>
      <p>{details.gender}</p>
    </div>
  );
};

export default Profile;
