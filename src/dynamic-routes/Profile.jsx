import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Firebase 🔥
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

// Styles Import:
import "../styles/global.scss";

// Component Import:
import PageHead from "../components/PageHead";

const Profile = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const contactRef = collection(db, `contact,${id}`);

  useEffect(() => {
    const getContact = async () => {
      const data = await getDocs(contactRef);
      setDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };
    getContact();
  }, []);

  // Header Props:
  const title = "Profile";
  const image = "";
  return (
    <div className="page">
      <PageHead title={title} image={image} />
      {details.firt_name}
    </div>
  );
};

export default Profile;
