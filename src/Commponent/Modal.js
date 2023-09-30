import React from "react";
import "../css/Modal.css";
const Modal = ({ handalechange }) => {
  return (
    <>
      <div className="modal-popup">
        <div className="file-add">
          <i className="ri-folder-add-line"></i>
          <p className="new-folder">New Folder</p>
        </div>
        <hr className="modal-hr" />
        <div className="file-uploade">
          <i className="ri-file-upload-line"></i>
          <label for="file-upload">File uploade</label>
          <input id="file-upload" type="file" onChange={handalechange} />
        </div>

        <div className="folder-uploade">
          <i className="ri-folder-upload-line"></i>
          <p className="new-folder">Folder uploade</p>
        </div>
        <hr className="modal-hr" />
      </div>
    </>
  );
};

export default Modal;
