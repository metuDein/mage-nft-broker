import React from 'react'

const AdminCollection = () => {
  return (
    <section className='adminusers--section'>
            <div> 
                <span>Total Collections  : 295 </span> 
                <button>View All Collections</button>
            </div>
            <div className='collection-settings'>
                <span className='tab--select active'> Users</span>
                <form>
                    <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                    <input type="text" className='collection--search' placeholder='find a user'/>
                </form>
            </div>

            <table className='data--table'>
                <thead>
                    <th>Name</th>
                    <th>total Assets</th>
                </thead>
                <tbody>
                    <tr className='table--row'>
                        <div className='row--hover'>
                            <Link style={{textDecoration  : 'none', background : "blue", color : '#fff', padding : '5px 30px', borderRadius: '5px'}}> Edit </Link>
                        </div>
                        <td>max</td>
                        <td>20</td>
                    </tr>
                </tbody>
            </table>
        </section>
  )
}

export default AdminCollection