import React, { useState } from "react";
import "../css/Sidebaar.css";
import Modal from "../Commponent/Modal";
import { db, storage } from "../Auth/firebase";
import firebase from "firebase/compat/app";
const Sidebaar = () => {
  const [open, setOpen] = useState(false);
  const [uploding, setUploding] = useState(false);
  const [file, setFile] = useState(null);

  const handalechange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setOpen(false);
    }
    uploadeFile();
  };

  const uploadeFile = () => {
    setUploding(true);
    storage
      .ref(`files/${file.name}`)
      .put(file)
      .then((snapshort) => {
        storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("myFiles").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              filename: file.name,
              fileURl: url,
              size: snapshort._delegate.bytesTransferred,
            });
            setUploding(false);
          });
      });
  };

  return (
    <>
      <div className="side_baar">
        <div className="add-image-file-button" onClick={() => setOpen(!open)}>
          <span className="plus">+</span>
          <span className="new-text">New</span>
        </div>
        {open ? (
          <>
            <Modal handalechange={handalechange} />
          </>
        ) : null}
        {/* uploding........ */}
        {uploding ? (
          <>
            <h1 className="uplode">Uplodding.....</h1>
          </>
        ) : null}
        <div className="side-baar-opstions">
          <div className="my-drive active">
            <i className="ri-drive-line"></i>
            <p className="my-drive-name">My Drive</p>
          </div>

          <div className="my-drive">
            <i className="ri-computer-fill"></i>
            <p className="my-drive-name">Computers</p>
          </div>

          <div className="my-drive">
            <i className="fa-solid fa-user-group"></i>
            <p className="my-drive-name">Share With Me</p>
          </div>

          <div className="my-drive">
            <i className="ri-time-line"></i>
            <p className="my-drive-name">Recent</p>
          </div>

          <div className="my-drive">
            <i class="fa-regular fa-star"></i>
            <p className="my-drive-name">Starred</p>
          </div>

          <div className="my-drive">
            <i className="ri-error-warning-line"></i>
            <p className="my-drive-name">Spam</p>
          </div>

          <div className="my-drive">
            <i className="fa-regular fa-trash-can"></i>
            <p className="my-drive-name">Bin</p>
          </div>

          <div className="my-drive">
            <i className="ri-cloudy-line"></i>
            <p className="my-drive-name">Storage</p>
          </div>
          <div className="storage-count">
            <div className="store-point"></div>
            <p className="store-live">10.0 MB of 15 GB used</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebaar;
