import ChangeProfile from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

const ProfilePage = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <div>Profile for {username}</div>
      <ChangeProfile />
    </div>
  );
};

export default ProfilePage;
