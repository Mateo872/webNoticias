const News = ({ article }) => {
  const { urlToImage, title, description, url } = article;

  return (
    <div className="card mb-3" style={{ width: "18rem" }}>
      <img
        src={urlToImage}
        className="card-img-top"
        alt={title}
        style={{ height: "12.5rem", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title text-truncate">{title}</h5>
        <p className="card-text text-truncate">{description}</p>
        <a href={url} className="btn btn-primary">
          Leer más
        </a>
      </div>
    </div>
  );
};

export default News;
