import React from "react";
import style from "../Activities/FormActivities.module.css";

const FormActivities = () => {
  return (
    
      <form class="form-horizontal" className={style.containerF}>
        <fieldset>
          <legend>
            <h2>Add a New Activity</h2>
          </legend>
          <div className={style.container}>
            <label htmlFor="" className={style.label}>
              Name:
            </label>
            <br/>
            <input className={style.input}
              type="text"
              name="name"
              placeholder="Type your Activity name"
            />
            <br/>
            <label for="difficulty" className={style.label}>
              Difficulty (Between 1 : 5)
            </label>
            <br/>
            <input className={style.input}
              type="range"
              id="difficulty"
              name="difficulty"
              min="1"
              max="5"
              defaultValue={3}
              />
              <br/>
            <label htmlFor="" className={style.label}>Duration:</label>
              <br/>
            <input className={style.input}
              type="text"
              name="duration"
              placeholder="Type your duration in hours. Ex. 4"
            />
            <br />

            <label htmlFor="" className={style.label}>Season:</label> <br />
            <select name="season" id="season-select" className={style.input}>
              <option value="">--Please choose an option--</option>
              <option value="summer">Summer</option>
              <option value="winter">Winter</option>
              <option value="autumn">Autumn</option>
              <option value="spring">Spring</option>
            </select>
            <br />
            <label htmlFor="" className={style.label}>Countries:</label><br />
            <input className={style.input}
              type="text"
              name="countries"
              placeholder="Choose a Country"
            />
          </div>
        </fieldset>
      </form>
    
  );
};

export default FormActivities;
