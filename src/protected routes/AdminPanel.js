import React, { useContext, useRef, useEffect } from 'react'
import AdminPanelCard from './AdminPanelCard'
import { faGears, faUsersGear, faFolderOpen, faUser, faFolderPlus, faMessage, faReply} from '@fortawesome/free-solid-svg-icons'
import DataContext from '../context/DataContext'

const AdminPanel = () => {
    const {allAssets, allUsers, allMessages} = useContext(DataContext)


    const pageRef = useRef(null);

    useEffect(() => {
      pageRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [])
     
    return (
        <section ref={pageRef} className='admin--panel--page'>
                <div className='admin-info-tab'>
                    <span >
                        <h1 className='app--stats'>Total users : {allUsers?.length}</h1>
                    </span>
                    <span>
                        <h1 className='app--stats'>Total Assets : {allAssets?.length}</h1>
                    </span>
                    <span>
                        <h1 className='app--stats'>Total Messages : {allMessages?.length}</h1>
                    </span>
                </div>
            <div className='admin-panel'>
                <AdminPanelCard title={'user settings'} icon={faUsersGear} pagelink={'/admin-panel-users'}/>
                <AdminPanelCard title={'send message'} icon={faReply} pagelink={'/admin-panel-send-message'}/>
                {/* <AdminPanelCard title={'Collections'} icon={faFolderOpen} pagelink={''}/> */}
                <AdminPanelCard title={'Create User'} icon={faUser} pagelink={'/admin-panel-create-user'} />
                <AdminPanelCard title={'View Assets'} icon={faFolderOpen} pagelink={'/admin-panel-assets'} />
                {/* <AdminPanelCard title={'Create Assets'} icon={faFolderPlus} pagelink={'/admin-panel-create-asset'} /> */}
                <AdminPanelCard title={'Messages'} icon={faMessage} pagelink={'/admin-panel-messages'} />
            </div>
        </section>
    )
}

export default AdminPanel