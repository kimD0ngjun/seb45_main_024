import { FC } from "react";
import classes from "./Sidemenu.module.css";
import { useAppSelector } from "../../redux/hooks";
import logo_green_face from "../../assets/images/logo_green_face.png";
import { useNavigate, useParams } from "react-router-dom";

const SideMenu: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const selectedMenu = useAppSelector(state => state.menu.selectedMenu);
  const authorInfo = useAppSelector(state => state.authorInfo);

  const summaryClickHandler = () => {
    navigate(`mypage/${id}/summary`);
  };
  const profileClickHandler = () => {
    navigate(`mypage/${id}`);
  };
  const reviewClickHandler = () => {
    navigate(`mypage/${id}/review`);
  };
  const myInfoClickHandler = () => {
    navigate(`mypage/${id}/myinfo`);
  };

  return (
    <div className={classes.sidemenuContainer}>
      {/* 임의로 프로필 박스 */}
      <div className={classes.profileBox}>
        <div className={classes.profileImg}>
          <img src={logo_green_face} alt="sample profile" />
        </div>
        <div className={classes.profileInfo}>{authorInfo.username}</div>
      </div>
      <div className={classes.menuItemsContainer}>
        <ul className={classes.menuItems}>
          <li
            className={`${classes.menuItem} ${
              selectedMenu === "Summary" ? classes.selectedMenuItem : ""
            }`}
            onClick={summaryClickHandler}
          >
            Summary
          </li>
          <li
            className={`${classes.menuItem} ${
              selectedMenu === "Profile" ? classes.selectedMenuItem : ""
            }`}
            onClick={profileClickHandler}
          >
            Profile
          </li>
          <li
            className={`${classes.menuItem} ${
              selectedMenu === "Review" ? classes.selectedMenuItem : ""
            }`}
            onClick={reviewClickHandler}
          >
            Peer Review
          </li>
          {authorInfo.isAuthor && (
            <li
              className={`${classes.menuItem} ${
                selectedMenu === "MyInfo" ? classes.selectedMenuItem : ""
              }`}
              onClick={myInfoClickHandler}
            >
              My Info
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default SideMenu;
