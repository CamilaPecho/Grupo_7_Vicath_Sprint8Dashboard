import React from 'react';

function ChartRow(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name ? props.name : props.first_name}</td>
                    <td>{props.description ? props.description : props.email}</td>
                    <td><a href={props.detail}>Click para ver el detalle</a></td>
                </tr>
            )
    }

export default ChartRow;