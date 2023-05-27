import { useState, useEffect } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import ListNews from "./components/ListNews";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = "b9adb0d4fb554c4e870dcc4577bd6bb0";
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.articles) {
          setNews(data.articles);
        }
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchNews();
  }, [category]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="container">
      <Title />
      <Form handleCategoryChange={handleCategoryChange} />
      <ListNews news={news} />
    </div>
  );
};

export default App;
