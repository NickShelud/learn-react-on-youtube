import React from "react";
import s from './friends.module.css';
import Friend from "./Friend/friend";

const Friends = (props) => {

    let friends = props.state.map(friend => <Friend name={friend.name} id={friend.id} />)

    return (
        <div>

            <div>
                <p className={s.friends_title_block}>friends</p>
            </div>

            <div className={s.friends}>
                { friends }
            </div>
        </div>
    )
}

export default Friends;