import styles from "./Header.module.css";
import img from "../../../public/cart.png";
import location from "../../../public/document-clipart-disorderly-1.png"
import search from "../../../public/search_104498.png"
import cart from "../../../public/shopping-cart-svg-png-icon-download-28.png"
import username from "../../assets/username.png"


function Header() {
  return (
    <div className={styles.head}>
      <div className={styles.left}>
        <img src={img} alt="logo" />
        <section>
          <input type="search" />
          <img src={search} alt="Search Button" />
        </section>
      </div>
      <div className={styles.right}>
        <section className= {styles.combo}>
          <img src={username} alt="usernameIcon" className={styles.userIcon}/>
          <label>username</label>  
        </section>
        <section className= {styles.combo}>
          <img src={cart} alt="cartIcon" />
          <label>Cart</label>
        </section>
        <section className= {styles.combo}>
          <img src={location} alt="cartIcon" />
          <label>Location</label>
        </section>
      </div>
    </div>
  );
}

export default Header;
