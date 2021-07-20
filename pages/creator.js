import styles from "../styles/dom.module.css";
import Image from "next/image";

const DOM = ({ developer }) => {
  console.log(developer);
  return (
    <div className={styles.main}>
      <h1>Creator</h1>
      <div className={styles.developer}>
        <h3> {developer.name} </h3>
        <h6> {developer.position} </h6>
        <Image
          unoptimized="true"
          src={developer.image}
          alt="creator-image"
          height="200"
          width="200"
        />
        <p>{developer.description}</p>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const apiRes = await fetch(
    "https://my-json-server.typicode.com/PraBhu127/newsapp/devOfMonth"
  );

  const developer = await apiRes.json();

  return {
    props: {
      developer,
    },
  };
};

export default DOM;
