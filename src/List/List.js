import {array} from "prop-types";
import React, {useMemo} from "react";
import {ListItem} from "./";

export const List = ({users}) => {
    console.info("usersList rendered");

    const memoizedItems = useMemo(() => {
        return users.map((user) => {
            console.info("item rendered");
            return <ListItem key={user.id} user={user} />;
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

List.propTypes = {
    users: array.isRequired
};
