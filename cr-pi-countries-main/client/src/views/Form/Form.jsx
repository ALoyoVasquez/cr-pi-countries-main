import { useState } from "react";
// import axios from "axios";
import style from "./Form.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, postActivity, getAllActivities, orderByName } from "../../redux/actions";
import CardActivity from "../../components/CardActivity/CardActivity";

const Form = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const activities = useSelector((state)=> state.activities)

  const [form, setForm] = useState({
    name: "",
    difficulty: "1",
    duration:"",
    season: "",
    countries: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration:"",
    season: "",
    countries: [],
  });

  const handleChange2=(e)=> {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    console.log(value);
    return setForm({ ...form, ["countries"]: value });
  }

  const ordenar = ()=>{
    dispatch(orderByName('az'));
  }

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    // getSelectValues(select);

    validate({ ...form, [property]: value });
    setForm({ ...form, [property]: value });
  };

  const validate = (form) => {
    
    if (!form.difficulty) setErrors({...errors, difficulty: "Difficulty cannot be empty or 0"})
    else setErrors({...errors, difficulty:""})

    if (form.countries==="") setErrors({...errors, countries:"Choose a Country"})
    else setErrors({...errors, countries:""})
  };


  const submitHandler = (event) => {
    // form.countries=[form.countries]
    console.log(form)

    // event.preventDefault();
    dispatch(postActivity(form))
  };


  //?Trae los Paises para agregarlos al Select
  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllActivities());
  }, []);


  return (
    <div className={style.container}>
      <div className={style.container2}>
        <form onSubmit={submitHandler} width="max-width:600px">
          <h3>Add a New Tourist Activity</h3>
          <hr />
          <div>
            <label htmlFor="name" className={style.label}>Name</label>
            <div> <input type="text" id="name" name="name" className={style.input} value={form.name} onChange={changeHandler} required /></div>
          </div>
          <div>
            <label htmlFor="season" className={style.label}>Season</label>
            <div><select name="season" id="season-select" value={form.season} onChange={changeHandler}  className={style.select} required>
                    <option value="">--Please choose an option--</option>
                    <option value="Summer">Summer</option>
                    <option value="Winter">Winter</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Spring">Spring</option>
                  </select>
            </div>
          </div>
          <hr />
          <div>
            <label htmlFor="duration" className={style.label}>Duration</label>
            <div><input type="number" min="1" max="24" id="duration" name="duration" value={form.duration} onChange={changeHandler} required className={style.duration}/>{"  "}HRS<br />
              <small> Please insert duration in hours. Ex.→  2</small>
            </div>
          </div>
          <div>
            <label htmlFor="difficulty" className={style.label}>Difficulty</label>
            <div><h4> <input required type='range' name="difficulty" onChange={changeHandler} min={1} max={5} step={1} value={form.difficulty} className={style.difficulty} />
              {"   "} {form.difficulty}</h4>
              <small> Please select between 1 to 5</small>
              {errors.difficulty && <span>ER: {errors.difficulty} </span>}
            </div>
          </div>
          <div>
            <label htmlFor="countries" className={style.label}>Country</label>
            <div>
              {
                <select id="countries" name="countries" onChange={handleChange2} className={style.select1}
                multiple required>
                  {/* <option value="">--Please choose an option--</option> */}
                  {ordenar()}
                  {countries.map((country) => {
                    return (<option key={country.id} value={country.idCountry}>{" "} {country.name} </option> );
                  })}
                </select>
              }
              <br />
              <small> Hold down the control key to select more than one country.</small>
            </div>
          </div>
          <div>
            <hr />
            <div> <button type="submit" className={style.button}>Create!</button> </div>
          </div>
        </form>
      </div>
      <div className={style.activities}>
        <h2>ACTIVITIES</h2>  
        { activities.map((actividad) => {
            return (
              <CardActivity 
                key={actividad.id}
                id={actividad.id}
                name={actividad.name}
                countries={actividad.Countries}
                // countries={actividad.Countries[0]?.flags}
                pais={actividad.countries}
                season={actividad.season}
                duration={actividad.duration}
                difficulty={actividad.difficulty}
                />
            );
          })}  
      </div>
    </div>
  );
};

export default Form;
