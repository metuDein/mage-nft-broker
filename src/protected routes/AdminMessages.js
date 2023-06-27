import {useState, useEffect, useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import useAuth from '../hook/useAuth';

const AdminMessages = () => {

    const { isLoading, setIsLoading, setSendTo, allMessages} = useContext(DataContext);
    const {auth} = useAuth()
    const {user} = auth
    
    const [messages, setMessages] = useState([]);

   


    const rowCell = ( 
        allMessages.map(message => {
            return <tr key={message._id} className='table--row'>
            <div className='row--hover'>
                <Link onClick={() => setSendTo(message.send_from)} to={`/admin-panel-message/${message._id}`} style={{ textDecoration: 'none', background: "blue", color: '#fff', padding: '5px 30px', borderRadius: '5px' }}> View </Link>
            </div>
            <td>{(message.send_from).substring(0, 8)}...</td>
            <td>{message.title}</td>
            <td>{message.date}</td>
          
        </tr>
        })
    )

  return (
    <section className='adminusers--section'>
    <div>
        <span>Total messages  : {messages.length} </span>
        <Link to={'/admin-panel'} style={{color: '#000', background : '#fff', padding : '10px', textDecoration : 'none', borderRadius : '10px'}}> Back To panel</Link>
    </div>
    <div className='collection-settings'>
        <span className='tab--select active'> Messages</span>
        <form>
            <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
            <input type="text" className='collection--search' placeholder='find a user' />
        </form>
    </div>

    <table className='data--table'>
        <thead>
            <th>From</th>
            <th>title</th>
            <th>Date</th>
        </thead>
        <tbody>
            {rowCell}
        </tbody>
    </table>
</section>
  )
}

export default AdminMessages