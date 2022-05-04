import { useEffect, useState } from "react";

const useGetInterns = () => {
  const [interns, setInterns] = useState([]);

  useEffect(() => {
    const fetchInterns = async () => {
      const response = await fetch("http://localhost:3001/interns");
      const interns = await response.json();
      setInterns(interns);
    };

    fetchInterns();
  }, []);

  return interns;
};

export default useGetInterns;
