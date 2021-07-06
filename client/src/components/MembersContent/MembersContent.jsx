import React, { useEffect, useState } from "react";
import "./MembersContent.css";
import { Typography, Grid } from "@material-ui/core";
import MemberCard from "../../components/MemberCard/MemberCard";
import { getMembers } from "../../constants/apiReqs";
import CircleLoading from "../CircleLoading/CircleLoading";

function MembersContent(props) {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMembers().then((members) => {
      setLoading(false);
      setMembers(members);
    });
  }, []);

  return (
    <div className="members-content-wrapper">
      <Typography variant="h5" className="title">
        Members
      </Typography>
      <hr className="hr" />
      <Grid container style={{ display: "flex", justifyContent: "center" }}>
        {members.length > 0 &&
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
          })}
        {!loading && members.length === 0 && (
          <p style={{ opacity: 0.8, margin: "auto", marginTop: "3rem" }}>
            No members found !
          </p>
        )}
        {loading && <CircleLoading />}
      </Grid>
    </div>
  );
}

export default MembersContent;
