import React, { useState } from 'react';
import './partSex.css';
import gutenTag from '../data/image/gutenTag.png';
import gutenMorgen from '../data/image/gutenMorgen.png';

function PartSex() {
  const [divs, setDivs] = useState([
    { id: 1, isDragging: false, position: { x: 0, y: 0 }, text: 'Guten Morgen' },
    { id: 2, isDragging: false, position: { x: 0, y: 0 }, text: 'Guten Tag' },
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

  const handleMouseMove = (event) => {
    const updatedDivs = divs.map((div) => {
      if (div.isDragging) {
        const newPosition = {
          x: event.clientX - div.dragStartPos.x,
          y: event.clientY - div.dragStartPos.y,
        };

        const containerBounds = document.querySelector('.part-sex-container').getBoundingClientRect();
        const elementBounds = document.querySelector(`.div-${div.id}`).getBoundingClientRect();

        const maxX = containerBounds.width - elementBounds.width;
        const maxY = containerBounds.height - elementBounds.height;

        newPosition.x = Math.max(0, Math.min(newPosition.x, maxX));
        newPosition.y = Math.max(0, Math.min(newPosition.y, maxY));

        return { ...div, position: newPosition };
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
    if (dragText === dataWord) {
      alert('Match!');
    } else {
      alert('Not a match!');
    }
  };

  const handleDragStart = (event, text) => {
    event.dataTransfer.setData('text', text);
  };

  return (
    <div
      className="part-sex-container"
      onMouseMove={handleMouseMove}
    >
      {divs.map((div) => (
        <div
          key={div.id}
          className={`draggable-div div-${div.id}`}
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
        <img
          className="tag"
          dataWord="Guten Tag"
          src={gutenTag}
          alt=""
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => handleDrop(event, 'Guten Tag')}
        />
        <img
          className="morgen"
          dataWord="Guten Morgen"
          src={gutenMorgen}
          alt=""
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => handleDrop(event, 'Guten Morgen')}
        />
      </div>
    </div>
  );
}

export default PartSex;
