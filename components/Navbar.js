import router, { useRouter } from "next/router";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/news/1")}>News</div>
      <div onClick={() => router.push("/creator")}>Creator</div>
    </div>
  );
};

export default Navbar;
