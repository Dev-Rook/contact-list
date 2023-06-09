import { useState, useEffect, useCallback, useMemo } from "react";

// Firebase 🔥
import { db } from "../firebase/firebase";
import { collection, getDoc } from "firebase/firestore";


const useFirebase = ({table, id }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
  
    useMemo(async () => {
      setLoading(true);
      try {
        const data = await getDoc(doc(db, table, id));
        setData(state => ({ ...data(), id })));
        console.log(data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
   }, [table, id]);
  
    return { loading, data, error };
}
  export default useFirebase;