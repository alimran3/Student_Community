import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import { BeatLoader } from "react-spinners";

const AllAuthors = () => {
  const [authors, setAuthors] = useState([]);
  const { mode } = useContext(Context);
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
          throw new Error("Data format is incorrect");
        }
      } catch (err) {
        console.error("Error fetching authors:", err);
        setError("Failed to load authors.");
      } finally {
        setLoading(false);
      }
    };
    fetchAuthors();
  }, []);

  if (loading) {
    return <BeatLoader color="gray" size={50} style={{ padding: "200px 0" }} />;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <article
      className={mode === "dark" ? "dark-bg all-authors" : "light-bg all-authors"}
    >
      <h2>ALL AUTHORS</h2>
      <div className="container">
        {authors.length > 0 ? (
          authors.map((element) => (
            <div className="card" key={element._id}>
              {element.avatar && element.avatar.url && (
                <img src={element.avatar.url} alt="author_avatar" />
              )}
              <h3>{element.name}</h3>
              <p>{element.role}</p>
            </div>
          ))
        ) : (
          <p>No authors found.</p>
        )}
      </div>
    </article>
  );
};

export default AllAuthors;
