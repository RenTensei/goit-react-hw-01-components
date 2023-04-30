import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileDescription,
  ProfileName,
  ProfileInfo,
  Stats,
  StatsLabel,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <ProfileCard>
      <ProfileDescription>
        <img src={avatar} alt="User avatar" className="avatar" height={80} />
        <ProfileName>{username}</ProfileName>
        <ProfileInfo>@{tag}</ProfileInfo>
        <ProfileInfo>{location}</ProfileInfo>
      </ProfileDescription>

      <Stats>
        <li>
          <StatsLabel>Followers</StatsLabel>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <StatsLabel>Views</StatsLabel>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <StatsLabel className="label">Likes</StatsLabel>
          <span className="quantity">{likes}</span>
        </li>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
