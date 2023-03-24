

import React from "react";

function TableData() {

    return (
        <div style={{
            display: 'grid',
            marginLeft: '20%',
            marginRight: '20%',
            paddingTop: '5%'
        }}>
            <table>
                <tr>
                    <th>Table Name</th>
                    <th>Column Name</th>
                    <th>Distinct value</th>
                    <th>User input</th>
                </tr>
                <tr>
                    <td>January</td>
                    <td>$100</td>
                </tr>
                <tr>
                    <td>February</td>
                    <td>$80</td>
                </tr>
            </table>
        </div>
    )
}

export default TableData;