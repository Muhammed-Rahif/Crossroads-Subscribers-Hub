import React from "react";
import EditProfilePopover from "../components/EditProfilePopover/EditProfilePopover";
import ProfileContent from "../components/ProfileContent/ProfileContent";

function Profile(props) {
  return (
    <React.Fragment>
      <ProfileContent />
      <EditProfilePopover />
    </React.Fragment>
  );
}

export default Profile;
