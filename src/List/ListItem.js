import React from "react";
import {object} from "prop-types";

export const ListItem = ({user}) => {
    return <li key={user.id}>{user.name}</li>;
};
ListItem.propTypes = {
    user: object.isRequired
};
