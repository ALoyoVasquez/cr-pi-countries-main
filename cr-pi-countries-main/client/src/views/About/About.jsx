import style from "./About.module.css";

const About = () => {

  
  return (
    <div>
      <div className={style.container}></div>
      <div className={style.containerG}>
        {/* <h1>About Me</h1>    */}
        <img src="/src/assets/profile2.jpg" alt="profile" className={style.img} />
        <div width="60%">
          <center>
            {" "}
            <h1>About Me</h1>
          </center>
          <div className={style.container2}>
            <h2 className={style.h2}> Ana M. Loyo V. </h2>
            <hr />
            <p>
              De Yaracuy, Venezuela. Actualmente vivo en San Felipe,
              Venezuela.
            </p>
          </div>
          <div className={style.container3}>
            <h2> ESTUDIOS </h2>
            <hr />
            <p>Analista de Sistemas. UCLA - Barquisimeto, Venezuela - Mayo 2007</p>
          </div>
          <div className={style.container4}>
            <h3>OCUPACIÓN ACTUAL</h3>
            <hr />
            <p>
              <li>
                Personal Administrativo del Centro de Orientación Cristiano
                Internacional "Peniel". {"      "}
                Estudiante Full Stack Part Time de la Cohorte 13A en el
                Programa Henry.
              </li>
              <li>TA en Henry</li>
              <li>Voluntaria en YouVersion</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
