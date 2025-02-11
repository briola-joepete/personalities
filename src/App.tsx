import { useState } from 'react';
import { sculptureList } from './data.tsx';
import "./style.css";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    }
  }

  function handleBackClick() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <h1>JOE PETE BRIOLA</h1>
      <button onClick={handleNextClick}>
        Next
      </button>
      <button onClick={handleBackClick}>
        Back
      </button>
      <h2 className='boxerName'>
        {sculpture.name} 
      </h2>
      <h3 className='address'>
      {sculpture.place} <br />
      {sculpture.records}
      </h3>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}