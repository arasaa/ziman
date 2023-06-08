import React, { useState, useEffect } from 'react';
import './partSex.css';
import '@fortawesome/fontawesome-free/css/all.css';
import gutenTag from '../data/image/gutenTag.png';
import tag from '../sounds/tag.mp3';
import gutenMorgen from '../data/image/gutenMorgen.png';
import morgen from '../sounds/morgen.mp3';


function TowPSex() {
  const [divs, setDivs] = useState([
    { id: 1, isDragging: false, position: { x: 800, y: 0 }, text: 'Guten Morgen', path: morgen, isMatched: false },
    { id: 2, isDragging: false, position: { x: 500, y: 0 }, text: 'Guten Tag', path: tag, isMatched: false },
  ]);

  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const handleMouseDown = (event, id) => {
    const index = divs.findIndex((div) => div.id === id);
    const updatedDivs = [...divs];
    const targetElement = event.target;

    if (targetElement.classList.contains(`div-${id}`)) {
      const audio = new Audio(updatedDivs[index].path);
      audio.play();
      updatedDivs[index].isDragging = true;
      updatedDivs[index].dragStartPos = {
        x: event.clientX - updatedDivs[index].position.x,
        y: event.clientY - updatedDivs[index].position.y,
      };
      setDivs(updatedDivs);
    }
  };

  const isOverIcon = (position) => {
    const iconBounds = document.querySelector('.icon-container').getBoundingClientRect();
    const draggableBounds = document.querySelector('.draggable-div').getBoundingClientRect();

    const draggableCenterX = position.x + draggableBounds.width / 2;
    const draggableCenterY = position.y + draggableBounds.height / 2;

    return (
      draggableCenterX >= iconBounds.left &&
      draggableCenterX <= iconBounds.right &&
      draggableCenterY >= iconBounds.top &&
      draggableCenterY <= iconBounds.bottom
    );
  };

  const handleMouseMove = (event) => {
    const updatedDivs = divs.map((div) => {
      if (div.isDragging) {
        const newPosition = {
          x: event.clientX - div.dragStartPos.x,
          y: event.clientY - div.dragStartPos.y,
        };

        div.position = newPosition;
        div.isOverIcon = isOverIcon(newPosition);

        return div;
      }
      return div;
    });

    setDivs(updatedDivs);
  };

  const handleMouseUp = (id) => {
    const updatedDivs = divs.map((div) => {
      if (div.id === id) {
        return { ...div, isDragging: false };
      }
      return div;
    });

    setDivs(updatedDivs);
  };

  const handleDrop = (event, dataWord) => {
    const dragText = event.dataTransfer.getData('text');
    const updatedDivs = divs.map((div) => {
      if (div.text === dragText && !div.isMatched) {
        if (dragText === dataWord) {
          alert('Match!');
          setIsPopUpVisible(true);
          return { ...div, isMatched: true };
        } else {
          alert('Not a match!');
        }
      }
      return div;
    });

    setDivs(updatedDivs);
  };

  const handleDragStart = (event, text) => {
    event.dataTransfer.setData('text', text);
  };

  const handleClick = (path) => {
    const audio = new Audio(path);
    audio.play();
  };

  const handleClosePopUp = () => {
    setIsPopUpVisible(false);
  };

  useEffect(() => {
    const handleDocumentMouseUp = () => {
      const updatedDivs = divs.map((div) => ({ ...div, isDragging: false }));
      setDivs(updatedDivs);
    };

    document.addEventListener('mouseup', handleDocumentMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleDocumentMouseUp);
    };
  }, [divs]);

  return (
    <div className="tow-p-sex-container" onMouseMove={handleMouseMove}>
      {divs.map((div) => (
        <div
          key={div.id}
          className={`draggable-div div-${div.id} ${div.isMatched ? 'matched' : ''}`}
          style={{
            position: 'absolute',
            left: div.position.x,
            top: div.position.y,
            cursor: div.isDragging ? 'grabbing' : 'grab',
          }}
          draggable
          onDragStart={(event) => handleDragStart(event, div.text)}
          onMouseDown={(event) => handleMouseDown(event, div.id)}
          onClick={() => handleClick(div.path)}
        >
          {div.text}
        </div>
      ))}

      <div className="icon-container">
        {!divs.find((div) => div.isMatched && div.text === 'Guten Tag') && (
          <img
            className="tag divs-icon"
            dataWord="Guten Tag"
            src={gutenTag}
            alt=""
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => handleDrop(event, 'Guten Tag')}
          />
        )}
        {!divs.find((div) => div.isMatched && div.text === 'Guten Morgen') && (
          <img
            className="morgen divs-icon"
            dataWord="Guten Morgen"
            src={gutenMorgen}
            alt=""
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => handleDrop(event, 'Guten Morgen')}
          />
        )}
      </div>

      {isPopUpVisible && (
  <div className="modal-container">
    <button className="modal-close-button" onClick={handleClosePopUp}>
      <i className="fa fa-times fa-3x"></i>
    </button>
    <div className="modal-check-icon">
      <i className="fa fa-check-circle fa-3x"></i>
    </div>
    <div className="modal-image">
      <img src={gutenMorgen} alt="morgen" />
    </div>
    <div className="modal-details">
      <p className="information">
        "Let's spread the joy, here is Christmas, the most awaited day of the year.
        Christmas Tree is what one needs the most. Here is the correct tree that will enhance your Christmas."
      </p>
    </div>
  </div>
)}

    </div>
  );
}

export default TowPSex;
