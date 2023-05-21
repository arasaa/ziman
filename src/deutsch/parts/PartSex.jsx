import React, { useState } from 'react';
import './partSex.css';

function PartSex() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setDragStartPos({
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    });
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const newPosition = {
        x: event.clientX - dragStartPos.x,
        y: event.clientY - dragStartPos.y,
      };

      const containerBounds = document.querySelector('.part-sex-container').getBoundingClientRect();
      const elementBounds = document.querySelector('.draggable-element').getBoundingClientRect();

      const maxX = containerBounds.width - elementBounds.width;
      const maxY = containerBounds.height - elementBounds.height;

      newPosition.x = Math.max(0, Math.min(newPosition.x, maxX));
      newPosition.y = Math.max(0, Math.min(newPosition.y, maxY));

      setPosition(newPosition);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="part-sex-container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className="draggable-element"
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
      >
        Drag me!
      </div>
    </div>
  );
}

export default PartSex;
