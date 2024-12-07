import axios from "axios";
import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const PopularAuthors = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/authors",
          { withCredentials: true }
        );
        if (data && data.authors) {
          setAuthors(data.authors);
        } else {
          throw new Error("Unexpected data format");
        }
      } catch (err) {
        console.error("Error fetching authors:", err);
        setError("Failed to load popular authors.");
      } finally {
        setLoading(false);
      }
    };
    fetchAuthors();
  }, []);

  if (loading) {
    return <BeatLoader color="gray" size={30} style={{ padding: "100px 0" }} />;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <section className="popularAuthors">
      <h3>Popular Authors</h3>
      <div className="container">
        {authors && authors.length > 0 ? (
          authors.slice(0, 4).map((element) => (
            <div className="card" key={element._id}>
              {element.avatar && element.avatar.url && (
                <img src={element.avatar.url} alt="author" />
              )}
              <p>{element.name}</p>
              <p>{element.role}</p>
            </div>
          ))
        ) : (
          <p>No popular authors found.</p>
        )}
      </div>
    </section>
  );
};

export default PopularAuthors;
