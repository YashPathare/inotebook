import React from "react";

function NoteItem(props) {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}Mollit ea irure cupidatat fugiat amet pariatur amet cupidatat in laboris. Minim laborum qui anim amet ipsum non minim aliqua non et proident pariatur. Consectetur ea id irure duis cillum pariatur nulla nulla minim. Laboris cillum mollit magna id occaecat laborum consequat sit eiusmod dolor. Cupidatat aliquip laborum esse in officia tempor dolore adipisicing deserunt dolor labore in. Voluptate labore enim aute veniam ea tempor ad qui enim. Officia sunt minim quis eiusmod est irure commodo laborum ex elit do.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
