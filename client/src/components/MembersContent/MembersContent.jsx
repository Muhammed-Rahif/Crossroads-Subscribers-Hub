import React, { useEffect, useState } from "react";
import "./MembersContent.css";
import { Typography, Grid } from "@material-ui/core";
import MemberCard from "../../components/MemberCard/MemberCard";
import { getMembers } from "../../constants/apiReqs";

function MembersContent(props) {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMembers().then((members) => {
      setMembers(members);
    });
  }, []);

  return (
    <div className="members-content-wrapper">
      <Typography variant="h5" className="title">
        Members
      </Typography>
      <Grid container style={{ display: "flex", justifyContent: "center" }}>
        {members.length > 0 ? (
          members.map((itm, key) => {
            return (
              <Grid item xs={12} sm={key % 2 === 0 ? 4 : 3}>
                <MemberCard
                  key={key}
                  memberName={itm.fullName}
                  memberBadges={itm.badges}
                  emailLink={itm.email}
                  githubLink={itm.github}
                  instagramLink={itm.instagram}
                  avatarSrc={itm.profileImageUrl}
                  location={itm.location}
                />
              </Grid>
            );
          })
        ) : (
          <p style={{ opacity: 0.8, margin: "auto", marginTop: "3rem" }}>
            No members found !
          </p>
        )}
      </Grid>
    </div>
  );
}

export default MembersContent;
