import styles from "../../styles/aboutus.module.css";
import {Image} from "../Image";
export function AboutUs() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Welcome to Magic Bookstore</h1>
          <p>
            📚 Step into a world where every book holds a touch of magic. Magic
            Bookstore isn’t just a bookstore – it’s a gateway to adventures,
            mysteries, and unforgettable stories.
          </p>
          <br />
          <p>
            ✨ Immerse yourself in literature that inspires, teaches, and
            captivates. From bestsellers to hidden literary gems, you’ll find
            books that ignite your imagination and transport you to
            extraordinary worlds.
          </p>
          <br />
          <p>
            🔮 Your next great journey starts here!
            <br />
            Whether you love fantasy, classics, non-fiction, or
            self-development, Magic Bookstore has something special just for
            you.
          </p>
          <br />
          <strong>
            👉 Explore our collection and discover your next favorite book
            today!
          </strong>
          <br /><br />
          <a href="#" className={styles.btn}>
            Discover More About Us ›
          </a>
        </div>
        <div className={styles.image}>
          <Image src="/assets/magicalLibrary.jpg" alt="Bookstore" />
        </div>
      </div>
    </>
  );
}
