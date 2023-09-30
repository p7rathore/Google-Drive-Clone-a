import React, { useEffect, useState } from "react";
import "../css/Data.css";
import ImgIcon from "../Images/image.png";
import { db } from "../Auth/firebase";
const Data = () => {
  const [file, setFile] = useState([]);

  useEffect(() => {
    db.collection("myFiles").onSnapshot((snapshort) => {
      setFile(
        snapshort.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  });

  function formtebyte(bytes, decimals = 2) {
    if (bytes === 0) return `0 bytes`;

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const size = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + `` + size[i];
  }

  return (
    <>
      <div className="data-component">
        {/* nav data */}
        <div className="my-drive_icons_nav">
          <div className="my-drive-opstion">
            <p className="my-d-name">My Drive</p>
            <i className="ri-arrow-down-s-fill"></i>
          </div>

          <div className="d-nave-icon">
            <div className="d-nav-icon-div">
              <i className="ri-filter-3-line"></i>
            </div>
            <div className="d-nav-icon-div">
              <i className="ri-window-line"></i>
            </div>
            <div className="d-nav-icon-div">
              <i className="ri-error-warning-line error"></i>
            </div>
          </div>
        </div>
        {/* data compo */}
        <div className="suggest-data-images">
          {/* <p className="suggest-name">suggested</p> */}

          {file.map((file) => {
            return (
              <>
                <div className="suggest-images">
                  <div className="img-n-m">
                    <img
                      className="img-icon"
                      src={ImgIcon}
                      alt="img-icon.png"
                    />
                    <p className="images-name">{file.data.filename}</p>
                  </div>
                  <div className="image-show">
                    <img
                      className="images-uploade-show"
                      src={file.data.fileURl}
                      alt="images-upload.jpg"
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>

        {/* list */}

        <div className="deta-list">
          <div className="data-list-name">
            <div className="name">
              <p className="name-m">Name</p>
              <i class="ri-arrow-down-line"></i>
            </div>

            <div className="owner-p">
              <p className="name-m">owner</p>
            </div>

            <div className="last-m">
              <p className="name-m">Last modified</p>
              <i class="ri-arrow-down-s-fill m-arroe"></i>
            </div>

            <div className="owner-f">
              <p className="name-m">File size</p>
            </div>
          </div>
          {/*  */}
          {file.map((file) => {
            return (
              <>
                <div className="data-list-items">
                  <div className="name-file">
                    <img
                      className="file-name-images"
                      src={ImgIcon}
                      alt="img.png"
                    />
                    <a href={file.data.fileURl}>
                      <p className="file-name-list">{file.data.filename}</p>
                    </a>
                  </div>
                  <div className="name-Ownear">
                    <p className="name-owner-name">Me</p>
                  </div>
                  <div className="name-last-modify">
                    <p className="name-modi-date">
                      {new Date(
                        file.data.timestamp?.seconds * 1000
                      ).toUTCString()}
                    </p>
                  </div>
                  <div className="name-file-size">
                    <p className="file-size-p">{formtebyte(file.data.size)}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Data;
