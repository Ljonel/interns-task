import { useEffect, useState } from "react";

const useGetIntern = (id) => {
  const [intern, setIntern] = useState({
    id: 0,
    name: "",
    email: "",
    internshipStart: "",
    internshipEnd: "",
  });

  useEffect(() => {
    const fetchInterns = async () => {
      const response = await fetch(`http://localhost:3001/interns/${id}`);
      const data = await response.json();
      setIntern(data);
    };

    fetchInterns();
  }, [id]);

  return intern;
};

export default useGetIntern;
