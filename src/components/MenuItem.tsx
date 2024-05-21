import { orderActions } from '../reducers/order-reducer'
import type { MenuItem } from '../types'
import { Dispatch } from 'react'

type MenuItemProps = {
    item: MenuItem
    dispatch: Dispatch<orderActions>
}


export default function MenuItem({item, dispatch} : MenuItemProps  ) {
  return (
    <button 
      className='border-2 border-teal-400 hover:bg-teal-200 w-full p-2 flex justify-between'
      onClick={ () => dispatch({type: 'add-item', payload: {item}}) }
    >
      <p>{item.name}</p>
      <p className='font-black'>$ {item.price}</p>
    </button>
  )
}
