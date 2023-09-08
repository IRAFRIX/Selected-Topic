import React from 'react';
import { userContext } from './context';

export default function Content2() {
    let [user, setUser] = React.useContext(userContext); // ใช้ useContext เพื่อรับค่า user และ setUser จาก context

    const contentStyle = {
        backgroundColor: '#ddd',
        textAlign: 'center',
        margin: 10,
        padding: 10
    };

    const onClickSignin = (event) => {
        event.preventDefault();
        setUser('IRAFRIX'); // ตั้งค่า user เมื่อ Signin
    };

    return (
        <div style={contentStyle}>
            {
                (user)
                    ? <span>Hello {user}</span>
                    : <span>Please <a href="/" onClick={onClickSignin}>Signin</a></span>
            }
        </div>
    );
}




