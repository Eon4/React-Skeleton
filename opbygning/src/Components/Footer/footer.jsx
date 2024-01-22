
import style from "../Footer/footer.module.scss";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.gridContainer}>
        <div className={style.gridItem}>
          <h2>Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>

        <div className={style.gridItem}>
          <h2>Contact</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>

        <div className={style.gridItem}>
          <h2>Location</h2>
          <p>123 Main Street</p>
          <p>Cityville, State</p>
        </div>
      </div>
    </footer>
  );
};
