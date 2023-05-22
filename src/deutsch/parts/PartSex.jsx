import React, { useState } from 'react';
import './partSex.css';
import gutenTag from '../data/image/gutenTag.png';
import gutenMorgen from '../data/image/gutenMorgen.png';

function PartSex() {
  const [elements, setElements] = useState([
    { id: 1, text: "Guten Morgen", dataWord: "Guten Morgen", position: { x: 0, y: 0 }, isDragging: false },
    { id: 2, text: "Guten Tag", dataWord: "Guten Tag", position: { x: 0, y: 0 }, isDragging: false },
  ]);

  const [matchedElements, setMatchedElements] = useState([]);

  const handleMouseDown = (event, element) => {
    const { id, position } = element;
    const offsetX = event.clientX - position.x;
    const offsetY = event.clientY - position.y;

    setElements((prevElements) =>
      prevElements.map((el) => {
        if (el.id === id) {
          return { ...el, isDragging: true, offsetX, offsetY };
        }
        return el;
      })
    );
  };

  const handleMouseMove = (event, element) => {
    const { id, isDragging, offsetX, offsetY } = element;

    if (isDragging) {
      const containerBounds = document.querySelector('.part-sex-container').getBoundingClientRect();
      const elementBounds = document.getElementById(`element-${id}`).getBoundingClientRect();

      const maxX = containerBounds.width - elementBounds.width;
      const maxY = containerBounds.height - elementBounds.height;

      const newPosition = {
        x: event.clientX - offsetX,
        y: event.clientY - offsetY,
      };

      newPosition.x = Math.max(0, Math.min(newPosition.x, maxX));
      newPosition.y = Math.max(0, Math.min(newPosition.y, maxY));

      setElements((prevElements) =>
        prevElements.map((el) => {
          if (el.id === id) {
            return { ...el, position: newPosition };
          }
          return el;
        })
      );
    }
  };

  const handleMouseUp = (element) => {
    const { id } = element;

    setElements((prevElements) =>
      prevElements.map((el) => {
        if (el.id === id) {
          return { ...el, isDragging: false };
        }
        return el;
      })
    );

    checkMatches(element);
  };

  const handleIconClick = (dataWord) => {
    const matchedElement = elements.find(
      (el) =>
        el.dataWord === dataWord &&
        !isElementMatched(el.id)
    );

    if (matchedElement) {
      setMatchedElements((prevMatchedElements) => [...prevMatchedElements, matchedElement.id]);
    } else {
      alert('No match!');
    }
  };

  const checkMatches = (element) => {
    const matchedElement = elements.find(
      (el) =>
        el.id !== element.id &&
        el.dataWord === element.dataWord &&
        !isElementMatched(el.id)
    );

    if (matchedElement) {
      setMatchedElements((prevMatchedElements) => [...prevMatchedElements, element.id, matchedElement.id]);
    } else {
      alert('No match!');
    }
  };

  const isElementMatched = (elementId) => {
    return matchedElements.includes(elementId);
  };

  return (
    <div className="part-sex-container">
      {elements.map((element) => (
        <div
          key={element.id}
          id={`element-${element.id}`}
          className={`draggable-element ${isElementMatched(element.id) ? 'matched' : ''}`}
          style={{
            position: 'absolute',
            left: element.position.x,
            top: element.position.y,
            cursor: element.isDragging ? 'grabbing' : 'grab',
          }}
          onMouseDown={(event) => handleMouseDown(event, element)}
          onMouseMove={(event) => handleMouseMove(event, element)}
          onMouseUp={() => handleMouseUp(element)}
        >
          {element.text}
        </div>
      ))}
      <div className="icon-container">
        <img
          className="tag"
          dataWord="Guten Tag"
          src={gutenTag}
          alt=""
          onClick={() => handleIconClick("Guten Tag")}
        />
        <img
          className="morgen"
          dataWord="Guten Morgen"
          src={gutenMorgen}
          alt=""
          onClick={() => handleIconClick("Guten Morgen")}
        />
      </div>
    </div>
  );
}

export default PartSex;
