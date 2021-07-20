import styles from "../../styles/news.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

const News = ({ articles, pageNumber }) => {
  const router = useRouter();
  return (
    <>
      <div className={styles.main}>
        {articles.map((article, index) => (
          <div key={index} className={styles.post}>
            <h1 onClick={() => (window.location.href = article.url)}>
              {article.title}
            </h1>
            <p>{article.description}</p>
            {!!article.urlToImage && (
              <Image
                unoptimized="true"
                src={article.urlToImage}
                alt="news app "
                height="300"
                width="600"
              />
            )}
          </div>
        ))}
      </div>
      <div className={styles.paginator}>
        <div
          className={pageNumber === 1 ? styles.disabled : styles.active}
          onClick={() => {
            if (pageNumber > 1) {
              router.push(`/news/${pageNumber - 1}`);
            }
          }}
        >
          Previous
        </div>

        <div> # {pageNumber} </div>

        <div
          className={pageNumber === 5 ? styles.disabled : styles.active}
          onClick={() => {
            if (pageNumber < 5) {
              router.push(`/news/${pageNumber + 1}`);
            }
          }}
        >
          Next
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.id;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEWS_API}`,
      },
    }
  );
  console.log(process.env.NEWS_API);

  const json = await apiRes.json();
  console.log(json);

  const { articles } = json;
  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default News;
