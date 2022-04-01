import React, {useMemo} from "react";
import {array} from "prop-types";

const UserList = ({users}) => {
    console.info("MemoizedUserList rendered");

    const memoizedItems = useMemo(() => {
        return users.map((user) => {
            console.info("MemoizedUserList item rendered");
            return <li key={user}>{user}</li>;
        });
    }, [users]);

    return (
        <div>
            <h1>Users</h1>

            {/* Renders one time */}
            <ul>{memoizedItems}</ul>

            {/* Renders every time */}
            {/* <ul>
                {users.map((user) => {
                    console.log("item", user);
                    return <li key={user}>{user}</li>;
                })}
            </ul> */}
        </div>
    );
};
export const MemoizedUserList = React.memo(UserList);

UserList.propTypes = {
    users: array.isRequired
};
