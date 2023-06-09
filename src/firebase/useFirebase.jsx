import { useState, useEffect, useCallback } from "react";

// Firebase 🔥
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const useFirebase = ({table}) => {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const contactRef = collection(db, `${table}`);

  const getContact = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getDocs(contactRef);
      setContact(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getContact();
  }, [getContact]);

  return { loading, contact, error };
};

export default useFirebase;
