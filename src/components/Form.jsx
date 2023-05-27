import React, { useEffect, useState } from "react";

const Form = ({ handleCountryChange, handleCategoryChange }) => {
  const [countries, setCountries] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCountries();
    fetchCategories();
  }, []);

  const fetchCountries = async () => {
    const apiKey = "b9adb0d4fb554c4e870dcc4577bd6bb0";
    const apiUrl = `https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.sources) {
        const uniqueCountries = Array.from(
          new Set(data.sources.map((source) => source.country))
        );
        setCountries(uniqueCountries);
      }
    } catch (error) {
      console.log("Error fetching countries:", error);
    }
  };

  const fetchCategories = async () => {
    const apiKey = "b9adb0d4fb554c4e870dcc4577bd6bb0";
    const apiUrl = `https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.sources) {
        const uniqueCategories = Array.from(
          new Set(data.sources.map((source) => source.category))
        );
        setCategories(uniqueCategories);
      }
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="countrySelect">Selecciona un país:</label>
        <select
          id="countrySelect"
          className="form-control"
          onChange={handleCountryChange}
        >
          <option value="">Todos</option>
          {countries.map((country) => (
            <option value={country} key={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="categorySelect">Selecciona una categoría:</label>
        <select
          id="categorySelect"
          className="form-control"
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Form;
