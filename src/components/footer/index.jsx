import React,{Component} from 'react';


require('dotenv').config();

class Copyright extends Component {
    render() {
        return (
            <span style={{
            }}>Copyright © 2021 <a
                target={'_blank'}
                href={'https://screening.moduit.id'} style={{
                color:'#165bb9'
            }}>PT Moduit Digital Indonesia</a>. ALl right reserved</span>
        )
    }
}

export default Copyright;