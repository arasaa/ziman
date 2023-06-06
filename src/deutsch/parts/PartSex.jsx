import React, { useState } from 'react';
import './partSex.css';
import gutenTag from '../data/image/gutenTag.png';
import tag from '../sounds/tag.mp3';
import gutenMorgen from '../data/image/gutenMorgen.png';
import morgen from '../sounds/morgen.mp3';

function PartSex() {
  // Define the state for the draggable elements
  const [divs, setDivs] = useState([
    { id: 1, isDragging: false, position: { x: 800, y: 0 }, text: 'Guten Morgen', path: morgen, isMatched: false },
    { id: 2, isDragging: false, position: { x: 500, y: 0 }, text: 'Guten Tag', path: tag, isMatched: false },
    // Add more div objects as needed
  ]);

// Event handler for when the mouse button is pressed on a draggable element
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

    document.addEventListener('mouseup', () => handleMouseUp(id), { once: true });
  }
};


  // Check if the draggable element is over the icon
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

  // Event handler for when the mouse is moved
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

  // Event handler for when the mouse button is released
  const handleMouseUp = (id) => {
    const updatedDivs = divs.map((div) => {
      if (div.id === id) {
        return { ...div, isDragging: false };
      }
      return div;
    });

    setDivs(updatedDivs);
  };

  // Event handler for when a draggable element is dropped on the icon
  const handleDrop = (event, dataWord) => {
    const dragText = event.dataTransfer.getData('text');
    const updatedDivs = divs.map((div) => {
      if (div.text === dragText && !div.isMatched) {
        if (dragText === dataWord) {
          alert('Match!');
          return { ...div, isMatched: true };
        } else {
          alert('Not a match!');
        }
      }
      return div;
    });

    setDivs(updatedDivs);
  };

  // Event handler for when a draggable element starts being dragged
  const handleDragStart = (event, text) => {
    event.dataTransfer.setData('text', text);
  };

  // Event handler for playing audio when a draggable element is clicked
  const handleClick = (path) => {
    const audio = new Audio(path);
    audio.play();
  };

  return (
    <div className="part-sex-container" onMouseMove={handleMouseMove}>
      {/* Render the draggable elements */}
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

      {/* Render the icon container */}
      <div className="icon-container">
        {/* Render the Guten Tag icon if it hasn't been matched */}
        {!divs.find((div) => div.isMatched && div.text === 'Guten Tag') && (
          <img
            className="tag"
            dataWord="Guten Tag"
            src={gutenTag}
            alt=""
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => handleDrop(event, 'Guten Tag')}
          />
        )}
        {/* Render the Guten Morgen icon if it hasn't been matched */}
        {!divs.find((div) => div.isMatched && div.text === 'Guten Morgen') && (
          <img
            className="morgen"
            dataWord="Guten Morgen"
            src={gutenMorgen}
            alt=""
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => handleDrop(event, 'Guten Morgen')}
          />
        )}
      </div>
    </div>
  );
}

export default PartSex;
