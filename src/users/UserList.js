import {array} from "prop-types";
import React, {useMemo} from "react";

export const UserList = ({users}) => {
    console.info("usersList rendered");

    const memoizedItems = useMemo(() => {
        return users.map((user) => {
            console.info("item rendered");
            return <li key={user.id}>{user.name}</li>;
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

UserList.propTypes = {
    users: array.isRequired
};
