import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

export const Users = () => {
    const githubContext = useContext(GithubContext);

    const { loading, users } = githubContext;

    if (loading) {
        return <Spinner />;
    } else {
        // basically, what this is doing is taking the array of users, and passing each user in as a prop into UserItem
        return (
            <div style={userStyle}>
                {users.map((user) => (
                    // passing each user item into UserItem as a prop
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }
};

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
};

export default Users;
