import React from 'react'

const UserTableCell = ({name, quantity, price, date, network}) => {
  return (
                <tr key="">
                    <td>{name}</td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                    <td>{date}</td>
                    <td>{network}</td>
                </tr>
  )
}

export default UserTableCell