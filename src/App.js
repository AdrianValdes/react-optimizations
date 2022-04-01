import React, {useEffect, useState} from "react";
import {returnUsers} from "./api/fetchUsers";
import {useForceRender} from "./hooks/useForceRerender";
import {MemoizedUserList} from "./users/MemoizedUserList";
import {UserList} from "./users/UserList";

function App() {
    const [users, setUsers] = useState([]);
    const [amount, setAmount] = useState(3);
    const [value, setValue] = useState(amount);

    // useForceRender(2000);

    const handleSubmit = (e) => {
        e.preventDefault();
        setAmount(value);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await fetch(
                `https://jsonplaceholder.typicode.com/users/?_limit=${amount}`
            ).then((response) => response.json());

            setUsers(users);
        };

        fetchUsers();
    }, [amount]);

    // if we pass userListModified as the value of the users prop, the MemoizedUserList component will always re-render
    // const userListModified = users.map((user) => {...user, newProperty: "example"});

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button type="submit">set amount</button>
                </form>
            </div>
            {/* Renders every time useForceRender runs */}
            <UserList users={users} />
            {/* Renders just when amount changes */}
            <MemoizedUserList users={users} />
        </div>
    );
}

export default App;
