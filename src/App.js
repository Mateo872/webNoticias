import React, { useState, useEffect } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import ListNews from "./components/ListNews";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = "b9adb0d4fb554c4e870dcc4577bd6bb0";
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

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
  }, [country, category]);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="container">
      <Title />
      <Form
        handleCountryChange={handleCountryChange}
        handleCategoryChange={handleCategoryChange}
      />
      <ListNews news={news} />
    </div>
  );
};

export default App;
