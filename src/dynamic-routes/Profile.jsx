import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Firebase 🔥
import { db } from "../firebase/firebase";
import { collection, getDoc } from "firebase/firestore";

// Styles Import:
import "../styles/global.scss";

// Component Import:
import PageHead from "../components/PageHead";

const Profile = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const contactRef = collection(db, `contact + ${id}`);

  useEffect(() => {
    const getContact = async () => {
      const snapshot = await getDoc(contactRef);
      const data = snapshot.data();
      // setDetails({ ...data, id: snapshot.id });
      setDetails(data.docs.map((doc) => ({ ...data, id: snapshot.id })));
      console.log(data);
    };
    return () => getContact();
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
