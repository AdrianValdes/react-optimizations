import React, {useEffect, useState} from "react";
import {returnUsers} from "./api/fetchUsers";
import {useForceRender} from "./hooks/useForceRerender";
import {UserList} from "./users/UserList";

function App() {
    const [users, setUsers] = useState(undefined);
    useForceRender(2000);
    useEffect(() => {
        const fetchUsers = async () => {
            const users = await returnUsers();

            setUsers(users);
        };
        fetchUsers();
    }, []);
    return <div>{users && <UserList users={users} />}</div>;
}

export default App;
