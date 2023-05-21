Substantiv: color: Green area {hallo}
Satz: color: Blue area
Nomen: color: Yellow area
Adjektive: color: Orange area
Verb: color: brown area
Wortverbindung: color: Gray area {guten morgen}
------------------------------------------------
partSex
onmousMovement && onTouchMovement

partSeven
text including all words reading it and in the same time highliting it



_____________________
  <div
        className="guten-morgen"
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
      >
        Guten Morgen
      </div>
      <div
        className="guten-tag"
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
      >
        Guten Tag
      </div>
      <div
        className="guten-abend"
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
      >
        Guten Abend
      </div>