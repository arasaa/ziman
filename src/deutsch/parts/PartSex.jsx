import React, { useState } from 'react';
import './partSex.css';

function DraggableElement() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      setPosition({
        x: position.x + event.movementX,
        y: position.y + event.movementY,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className='part-sex-container'>
    <div
    className='drageble-element'
      style={{
        position: 'relative',
        left: position.x,
        top: position.y,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      Drag me!
    </div>
    </div>
  );
}

export default DraggableElement;
