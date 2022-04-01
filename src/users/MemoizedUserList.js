import React, {useMemo} from "react";
import {array} from "prop-types";

const UserList = ({users}) => {
    console.info("MemoizedUserList rendered");

    const memoizedItems = useMemo(() => {
        return users.map((user) => {
            console.info("MemoizedUserList item rendered");
            return <li key={user.id}>{user.name}</li>;
        });
    }, [users]);

    return (
        <div>
            <h1>Memoized Users</h1>

            {/* Renders one time, and then just when "users" change. 
            React will do a comparison between each of the values (via Object.is)
             to determine whether your effect callback should be called.  */}
            <ul>{memoizedItems}</ul>

            {/* Renders every time UserList renders */}
            {/* <ul>
                {users.map((user) => {
                    console.log("item", user);
                    return <li key={user}>{user}</li>;
                })}
            </ul> */}
        </div>
    );
};

// React.memo relies on "shallow equality" checks of the current props vs the previous props.
export const MemoizedUserList = React.memo(UserList);

UserList.propTypes = {
    users: array.isRequired
};
