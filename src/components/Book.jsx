import React from 'react';
import './Book.css';

const Book = () => {
  return (
    <section className="book-section" id="book">
      <div className="book-banner">
        <h2 className="book-heading">Ready to Drop Your Next Hit?</h2>
        
        <hr className="book-divider" />
        
        <p className="book-subtext">
          Book your studio time — your sound starts here.
        </p>
        
        <button className="book-btn">Book Now</button>
      </div>
    </section>
  );
};

export default Book;