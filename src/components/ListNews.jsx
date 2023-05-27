import News from "./News";

const ListNews = ({ news }) => {
  const { title } = news;
  return (
    <div className="mt-4 card-deck d-flex flex-wrap justify-content-between">
      {news.map((article) => (
        <News article={article} key={title} />
      ))}
    </div>
  );
};

export default ListNews;
