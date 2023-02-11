import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { GrFormUpload } from "react-icons/gr";
import { AiOutlineSave } from "react-icons/ai";
import "./Profile.css";
const Profile = ({ role }) => {
  const [edit, setEdit] = useState(false);
  const previewFile = () => {
    var preview = document.getElementById("profileImage");
    var file = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();

    reader.onloadend = () => {
      preview.src = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  };
  const toggleEditMode = () => {
    setEdit(!edit);
  };
  useEffect(() => {
    if (edit)
      document
        .querySelectorAll("input")
        .forEach((input) => (input.disabled = false));
    else if (!edit)
      document
        .querySelectorAll("input")
        .forEach((input) => (input.disabled = true));
  }, [edit]);
  return (
    <section className="profileWrapper">
      <div className="sectionHeaderWrapper flex items-center content-between">
        <h2 className="sectionHeaderTitle"> Profile </h2>
      </div>
      <div className="sectionContentWrapper">
        <div className="profileWrapper">
          <div className="profileTopWrapper flex wrap items-center content-between">
            <div className="profileDiv flex  items-center content-start">
              <div className="profileImageWrapper">
                <img
                  src="https://api.dicebear.com/5.x/lorelei-neutral/svg?seed=Aneka"
                  className="profileImage"
                  id="profileImage"
                />
                {edit && (
                  <>
                    <label
                      htmlFor="profileImageInput"
                      id="profileImageUploadBtn"
                      className="btn btn-primary"
                    >
                      <GrFormUpload color="#fff" />
                    </label>
                    <input
                      type="file"
                      name="profileImageInput"
                      id="profileImageInput"
                      onChange={previewFile}
                    />
                  </>
                )}
              </div>
              <div className="profileDetails">
                <div className="profileName">Gourav G.</div>
                <div className="profileRole">{role}</div>
              </div>
            </div>
            {edit && (
              <div
                className="profileEditBtn btn btn-primary flex items-center"
                onClick={() => toggleEditMode()}
              >
                <span>
                  <AiOutlineSave />
                </span>
                &nbsp;
                <span>Save</span>
              </div>
            )}
            {!edit && (
              <div
                className="profileEditBtn btn btn-primary flex items-center"
                onClick={() => toggleEditMode()}
              >
                <span>
                  <FiEdit />
                </span>
                &nbsp;
                <span>Edit</span>
              </div>
            )}
          </div>
          <div className="profileContentWrapper">
            <form>
              <div className="profileFormWrapper">
                <div className="inputGroup flex items-center">
                  <div className="label">Username</div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Gourav G"
                    defaultValue="Gourav G"
                  />
                </div>
                <div className="inputGroup flex items-center">
                  <div className="label">Email</div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="slggourav@gmail.com"
                    defaultValue="slggourav@gmail.com"
                  />
                </div>
                <div className="inputGroup flex items-center">
                  <div className="label">Password</div>
                  <input
                    type="password"
                    className="form-control"
                    // placeholder="slggourav@gmail.com"
                    defaultValue="*******"
                  />
                </div>
                <div className="inputGroup flex items-center">
                  <div className="label">Organization</div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cascading Ninja"
                    defaultValue="Cascading Ninja"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
