  
import React from 'react';

class NameList extends React.Component {   
    render() {
        const nameList  = this.props.nameList.map(name =>
                <li key = {name}>{name}</li>
            );
        return(
            <div>
                <ol>
                    {nameList}
                </ol>
            </div>
        )
    }
}

export default NameList;