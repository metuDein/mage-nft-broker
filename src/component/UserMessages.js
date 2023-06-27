import { useContext, useEffect, useState } from 'react';
import DataContext from '../context/DataContext';
import useAuth from '../hook/useAuth';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from '../api/axios';


const UserMessages = () => {
    const { auth } = useAuth()
    const { allMessages, isLoading, setIsLoading } = useContext(DataContext);
 
    const myMessages = allMessages.filter( message =>  message.reciever === auth.user?.userName)



    console.log(typeof(display))

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options =  {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          };
        return date.toLocaleDateString(undefined, options);
      };
    
      useEffect(() => {
          setIsLoading(true)
        //   setMyMessages(myMessage);
          console.log(typeof(myMessages))
          setIsLoading(false)
      }, []);

      

   
    
    const rowCell = ( 
        myMessages.map((message, index) => {

            
            return <tr key={message._id} className='table--row'>
            <div className='row--hover'>
                <Link  to={`/user-notification/${message._id}`} style={{ textDecoration: 'none', background: "blue", color: '#fff', padding: '5px 30px', borderRadius: '5px' }}> View </Link>
            </div>
            <td>{('Tritons Admin').substring(0)}...</td>
            <td>{message.title}</td>
            <td>{formatDate(message.date)}</td>
          
        </tr>
        })
    )



    return (
        <section className='adminusers--section'>
            {!isLoading &&
            <>
                <div>
                <span>Total messages  :  </span>
                <Link to={'/user-profile'} style={{ color: '#000', background: '#fff', padding: '10px', textDecoration: 'none', borderRadius: '10px' }}> Back To profile</Link>
            </div>
            <div className='collection-settings'>
                <span className='tab--select active'> Notifications</span>
                
            </div>

            <table className='data--table'>
                <thead>
                    <th>Sender</th>
                    <th>title</th>
                    <th>Date</th>
                </thead>
                <tbody>
                 {rowCell}
                </tbody>
            </table>
            </>}
        </section>
    )
}

export default UserMessages