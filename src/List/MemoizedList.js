import React, {useMemo} from "react";
import {array} from "prop-types";
import {ListItem} from "./";

const List = ({users}) => {
    console.info("MemoizedList rendered");

    const memoizedItems = useMemo(() => {
        return users.map((user) => {
            console.info("MemoizedList item rendered");
            return <ListItem key={user.id} user={user} />;
        });
    }, [users]);

    return (
        <div>
            <h1>Memoized Users</h1>

            {/* Renders one time, and then just when "users" change. 
            React will do a comparison between each of the values (via Object.is)
             to determine whether your effect callback should be called.  */}
            <ul>{memoizedItems}</ul>

            {/* Renders every time List renders */}
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
export const MemoizedList = React.memo(List);

List.propTypes = {
    users: array.isRequired
};
