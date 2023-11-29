import React from 'react'

import styles from './ViewList.module.css'

export default function ViewList({ list }) {

    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.count}</td>
                                <td>{item.price}</td>
                                <td>{item.discount}</td>
                                <td>{item.total}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
