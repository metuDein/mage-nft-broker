import {useContext, useEffect, useState} from 'react'
import useAuth from '../hook/useAuth';
import DataContext from '../context/DataContext';
import axios from '../api/axios';
import { useParams, Link } from 'react-router-dom';
import AdminSendMessage from './AdminSendMessage';


const AdminViewMessage = () => {
    const { isLoading, setIsLoading, allMessages, getImgUrl} = useContext(DataContext);
    const {id} = useParams()

    const message = allMessages.find(message => message._id === id)

    // const [message, setMesage] = useState([])
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options =  {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
          };;
        return date.toLocaleDateString(undefined, options);
      };

      const handleDelete = async (e) => {
        e.preventDefault()
    
    
        if(!id) return window.alert('id required');
       
        console.log(id)
        try {
          const response = await axios.post(`/deletemessage`, JSON.stringify({ id : id}));
          console.log(response.status)
          console.log(response.data)
    
          if(response.status === 200) {
            window.alert('message deleted');
            
            
          }
        } catch (error) {
          console.log(error.response.status)
          console.log(error.response.data)
        }
      } 
    
     

  return (
    <section className="create-nft" style={{marginTop : '20px', minHeight : '90vh'}}>
         <div>
        
        <Link to={'/admin-panel'} style={{color: '#000', background : '#fff', padding : '10px', textDecoration : 'none', borderRadius : '10px'}}> Back To panel</Link>
    </div>
            <div className='create-nft-form'>
                <form onSubmit={e => e.preventDefault()}>
                    
            <h1>{!message.title && 'New Message'} {message.title && message.title}</h1>

            <div style={{minHeight :'400px', fontSize : '15px', textAlign :'left', background : '#fff', borderRadius : '10px', padding : '10px', color : '#000', display:'flex', flexDirection : 'column', borderBottom : '1px solid #777'}}>
                     <div>
                       <p>sent at :{formatDate(message.date)}</p> 
                       <p>sent from :{message.send_from}</p> 
                     </div>   
                     { message?.image && <img src={getImgUrl(message.image)} alt=""  width={'100%'} height={'200px'} style={{objectFit : 'contain', flexGrow : '1', margin : '10px 0'}}/>}

                    {message.body}
                    </div>

                    <button> <Link to={'/admin-panel-send-message'} style={{color :'#000', textDecoration : 'none', width : '100%'}}> Reply </Link>  </button>
                    <button style={{marginLeft : '10px'}} onClick={handleDelete}> Delete </button>
                </form>
            </div>

            <div style={{display : 'none'}}>
            <AdminSendMessage contractAddress={message.send_from} />
            </div>
        </section>
  )
}

export default AdminViewMessage