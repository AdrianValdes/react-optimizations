import React, {useEffect, useState} from "react";
import {returnUsers} from "./api/fetchUsers";
import {useForceRender} from "./hooks/useForceRerender";
import {MemoizedUserList} from "./users/MemoizedUserList";
import {UserList} from "./users/UserList";

function App() {
    const [users, setUsers] = useState([]);
    const [amount, setAmount] = useState(5);
    const [value, setValue] = useState(amount);

    useForceRender(2000);

    const handleSubmit = (e) => {
        e.preventDefault();
        setAmount(value);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await returnUsers(amount);
            setUsers(users);
        };
        fetchUsers();
    }, [amount]);

    // if we pass userListModified as the value of the users prop, the MemoizedUserList component will always re-render
    // const userListModified = users.map((user) => user + 1);

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button>use amount</button>
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
