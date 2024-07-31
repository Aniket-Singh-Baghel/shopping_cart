import styles from "./Home.module.css";
import { items, AdBanner } from "../../data.js";

function Home() {
  return (
    <>
      <div className="main">
      <div className={styles.showCase}>
        <ol>
          {items.map((i, index) => (
            <div className={styles.categories} key={index}>
              <div className={styles.round}>
                <img src={i.image} alt={i.title} />
              </div>
              <label>{i.title}</label>
            </div>
          ))}
        </ol>
      </div>

      <div className={styles.banner} >
        {AdBanner.map((i, index) => (
          <img src={i.destination} alt={i.alt} key={index}/>
        ))}
      </div>
      <div className="top-deala">
        
      </div>
      </div>
    </>
  );
}


export default Home;



