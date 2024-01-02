import React, { useEffect , useState} from "react";
import Navbar from "./Components/Navbar";
import HomeCont from "./Components/HomeCont";
import Loader from "./Components/Loader";
const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(delay);
  }, []);
  return (
    <>
      {loading?<Loader />:
        <div className="homepage">
          <Navbar />
          <HomeCont />
        </div>
      }
    </>
  );
};

export default Home;
