import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    // usually the property, and a method to change that property
    const [text, setText] = useState('');

    // form inputs will be component level state
    const onChange = (e) => {
        // e.target.name will change the value of the attribute that triggered the event
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please enter something!', 'light');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input
                    type='text'
                    name='text'
                    placeholder='Search Users...'
                    value={text}
                    onChange={onChange}
                />
                <input
                    type='submit'
                    value='Search'
                    className='btn btn-dark btn-block'
                />
            </form>
            {githubContext.users.length > 0 && (
                <button
                    className='btn btn-light btn-block'
                    onClick={githubContext.clearUsers}
                >
                    Clear
                </button>
            )}
        </div>
    );
};

export default Search;
