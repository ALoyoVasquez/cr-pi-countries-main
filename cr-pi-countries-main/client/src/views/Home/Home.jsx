import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  
  //? Dispatch al cargar--- Llena todos los paises
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div className={style.containeP}>
            <div className={style.tarjeta}>
              <Cards/>
            </div>
      </div>              
    </div>
  );
};

export default Home;




// const activities = useSelector((state) => state.activities);
// const [aux, setAux] = useState(false);
// const [continente, setContinente] = useState("all") 