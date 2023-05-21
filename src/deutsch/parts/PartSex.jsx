import React, { useState } from 'react';
import './partSex.css';

function PartSex() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const containerRef = React.useRef(null);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const containerBounds = containerRef.current.getBoundingClientRect();
      const newPosition = {
        x: position.x + event.movementX,
        y: position.y + event.movementY,
      };

      // Limit the position within the container boundaries
      const minX = 0;
      const minY = 0;
      const maxX = containerBounds.width - event.target.offsetWidth;
      const maxY = containerBounds.height - event.target.offsetHeight;

      newPosition.x = Math.max(minX, Math.min(newPosition.x, maxX));
      newPosition.y = Math.max(minY, Math.min(newPosition.y, maxY));

      setPosition(newPosition);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="part-sex-container" ref={containerRef}>
      <div
        className="draggable-element"
        style={{
          position: 'absolute',
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

export default PartSex;
