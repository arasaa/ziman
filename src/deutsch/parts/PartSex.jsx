import React, { useState } from 'react';
import './partSex.css';
import gutenTag from '../data/image/gutenTag.png';
import gutenMorgen from '../data/image/gutenMorgen.png';

function PartSex() {
  const [divs, setDivs] = useState([
    { id: 1, isDragging: false, position: { x: 800, y: 0 }, text: 'Guten Morgen', isMatched: false },
    { id: 2, isDragging: false, position: { x: 500, y: 0 }, text: 'Guten Tag', isMatched: false },
    // Add more div objects as needed
  ]);

  const handleMouseDown = (event, id) => {
    const index = divs.findIndex((div) => div.id === id);
    const updatedDivs = [...divs];
    updatedDivs[index].isDragging = true;
    updatedDivs[index].dragStartPos = {
      x: event.clientX - updatedDivs[index].position.x,
      y: event.clientY - updatedDivs[index].position.y,
    };
    setDivs(updatedDivs);

    document.addEventListener('mouseup', () => handleMouseUp(id), { once: true });
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

  return (
    <div className="part-sex-container" onMouseMove={handleMouseMove}>
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
        >
          {div.text}
        </div>
      ))}
      <div className="icon-container">
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
