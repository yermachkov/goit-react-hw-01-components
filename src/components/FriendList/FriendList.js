import { FriendListItem } from "./FriendListItem/FriendListItem";
import PropTypes, { arrayOf } from 'prop-types';
import {Friends} from './FriendList.styled'

export const FriendList = ({friends}) => {
  return (
    <Friends>
      {friends.map(({id, isOnline, avatar, name}) =>
        <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        )}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  )
};