  import styles from "./Electronics.module.css";
  import {MobilesAndTablets } from "../../data.js";

  function Electronics() {

    return (
      <>
        <main>
          {MobilesAndTablets.map((i,index)=>(
              <div className={styles.card} key={index}>
              <img src={i.img} alt="" />
              <div className={styles.descContianer}>
                <h5 className={styles.title}>{i.title.substring(0,45)+"..."}</h5>
                <p className={styles.price}>{i.price}</p>
                <p className={styles.rating}>{i.rating}</p>
              </div>
            </div>
          ))}
          
        </main>
      </>
    );
  }

  export default Electronics;


  