import styled from "styled-components";
import Image from "next/image";
import BlueFlixLogo from "../assets/Blueflix.png";
import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CreateIcon from "@material-ui/icons/Create";

const FullPageDiv = styled.div`
  background-color: #000;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const HeaderDiv = styled.div`
  position: fixed;
  top: 0;
  height: 100px;
  width: 100%;
  display: grid;
  grid-template-areas: "a b c" "d e f";
  grid-template-rows: 50% 50%;
  grid-template-columns: 33% 33% 33%;
`;
const HeaderLogo = styled.div`
  grid-area: b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderIcons = styled.div`
  grid-area: c;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  align-items: center;
  top: 0;
  left: 0;
`;

const ProfilesDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const ProfilesTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 100;
  text-align: center;
`;

const ProfileDetails = styled.div`
  display: grid;
  grid-template-areas: "a b";
  /* width: 100%; */
  gap: 1rem 0;
`;

const ProfileItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileName = styled.p`
  margin: 5px;
  padding: 0;
`;

const ProfileImage = styled.div`
  background-color: ${(props) => props.color};
  /* height: 80px; */
  width: 80%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100px; */
`;

const DUMMY_PROFILES = [
  {
    name: "Gustavo",
    url: "https://avatars.dicebear.com/api/avataaars/gustavo.svg",
    color: "#74afc7",
  },
  {
    name: "Lulai",
    url: "https://avatars.dicebear.com/api/avataaars/lulai.svg",
    color: "#c11a3a",
  },
  {
    name: "Ma",
    url: "https://avatars.dicebear.com/api/avataaars/ma.svg",
    color: "#50d045",
  },
  {
    name: "Dogs",
    url: "https://avatars.dicebear.com/api/avataaars/dogs.svg",
    color: "#d2ed16",
  },
];

export default function Home() {
  // TODO: Edition profile modal
  // TODO: Change header on Edit Profile modal
  // TODO: On edit profile change name and picture
  return (
    <FullPageDiv>
      <HeaderDiv>
        <HeaderLogo>
          <Image
            src={BlueFlixLogo}
            alt="Blueflix Logo"
            height={50}
            width={120}
          />
        </HeaderLogo>
        <HeaderIcons>
          <CreateIcon />
        </HeaderIcons>
      </HeaderDiv>
      <ProfilesDiv>
        <ProfilesTitle>{`Who's Watching?`}</ProfilesTitle>
        <ProfileDetails>
          {DUMMY_PROFILES.map((profile) => (
            <ProfileItem key={profile.name}>
              <ProfileImage color={profile.color}>
                <Image
                  src={profile.url}
                  alt={`image profile for ${profile.name}`}
                  width={100}
                  height={100}
                />
              </ProfileImage>
              <ProfileName>{profile.name}</ProfileName>
            </ProfileItem>
          ))}
          <ProfileItem>
            <ProfileImage color={"#000"}>
              <AddCircleIcon style={{ fontSize: 80 }} />
            </ProfileImage>
            <ProfileName>Add Profile</ProfileName>
          </ProfileItem>
        </ProfileDetails>
      </ProfilesDiv>
    </FullPageDiv>
  );
}
