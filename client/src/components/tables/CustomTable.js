import React from 'react';
import Table from 'react-bootstrap/Table';

const capFirstChar = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const renderColumnNames = (columnList) => {
    return columnList.map( columnName => {
        return <th key={columnName}>{ capFirstChar(columnName) }</th>
    })
}

const CustomTable = ({ columnList, children }) => {
    return (
        <Table responsive bordered={ false } >
            <thead>
                <tr>
                    {renderColumnNames(columnList)}
                </tr>
            </thead>
            <tbody>
                { children }
            </tbody>
        </Table> 
    )
}

export default CustomTable