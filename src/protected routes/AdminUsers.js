import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import { FaEthereum } from 'react-icons/fa';
import DataContext from '../context/DataContext';

const AdminUsers = () => {

    const { allUsers } = useContext(DataContext)
    const [users, setUsers] = useState([])

 

    const rowCell = (
       allUsers.slice().reverse().map( user => {
            return <tr key={user._id} className='table--row'>
                <div className='row--hover'>
                    <Link to={`/admin-panel-edit-user/${user._id}`} style={{ textDecoration: 'none', background: "blue", color: '#fff', padding: '5px 30px', borderRadius: '5px' }}> Edit </Link>
                </div>
                <td>{user?.userName && user.userName} {!user?.userName && 'user'}</td>
                <td>{user?.verified  && "verified user"} {!user?.verified  && "not verified"}</td>
                <td><FaEthereum />{user?.balance && user.balance}</td>
            </tr>
        })
    )

    return (
        <section className='adminusers--section'>
            <div>
                <span>Total users  : {allUsers?.length} </span>
                <Link to={'/admin-panel'} style={{color: '#000', background : '#fff', padding : '10px', textDecoration : 'none', borderRadius : '10px'}}> Back To panel</Link>
            </div>
            <div className='collection-settings'>
                <span className='tab--select active'> Users</span>
                <form>
                    <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                    <input type="text" className='collection--search' placeholder='find a user' />
                </form>
            </div>

            <table className='data--table'>
                <thead>
                    <th>Name</th>
                    <th>Verified</th>
                    <th>Balance</th>
                </thead>
                <tbody>
                    {rowCell}
                </tbody>
            </table>
        </section>
    )
}

export default AdminUsers