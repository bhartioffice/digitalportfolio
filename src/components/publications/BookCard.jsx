import React from "react";
import { Link } from "react-router-dom"; // Import Link
import Card from "../ui/Card";
import Button from "../ui/Button";
import Img from "../Img";

const BookCard = ({ data }) => {
  return (
    <Card
      className="book-card-pro"
      style={{ overflow: "visible", opacity: 1, transform: "none" }}
    >
      <div className="book-cover-container">
        {/* Wrap Image with Link */}
        <Link to={`/publications/${data.id}`} className="book-cover-3d">
          <Img
            src={data.img}
            alt={data.title}
            loading="lazy"
            onError={(e) =>
              (e.target.src = "https://placehold.co/300x450?text=Cover")
            }
          />
        </Link>
      </div>
      <div className="book-info-pro">
        <div className="book-badges">
          <span className="b-badge year">{data.year}</span>
          {data.category && <span className="source-tag">{data.category}</span>}
        </div>
        
        {/* Wrap Title with Link */}
        <h4>
          <Link to={`/publications/${data.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
            {data.title}
          </Link>
        </h4>
        
        <p className="b-subtitle">{data.subtitle}</p>
        <div className="b-action">
          {data.link !== "#" && (
            <Button variant="text" href={data.link} target="_blank">
              View Book <i className="fa-solid fa-arrow-right"></i>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default BookCard;