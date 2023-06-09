import { useState, useMemo } from "react";

// Firebase 🔥
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const useFirebase = ({table}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useMemo(async () => {
    setLoading(true);
    try {
      const data = await getDocs(collection(db, `${table}`));
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data());
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
 }, [table]);

  return { loading, data, error };
};

export default useFirebase;
