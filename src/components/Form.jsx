import { useEffect, useState } from "react";

const Form = ({ handleCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const apiKey = "b9adb0d4fb554c4e870dcc4577bd6bb0";
      const apiUrl = `https://newsapi.org/v2/sources?apiKey=${apiKey}`;

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
        console.log("Error", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="form-group">
      <label htmlFor="categorySelect">Selecciona una categoría</label>
      <select
        id="categorySelect"
        className="form-control"
        onChange={handleCategoryChange}
      >
        <option value="">Todas</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Form;
