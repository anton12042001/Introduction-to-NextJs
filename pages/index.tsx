import React from "react";
import Link from "next/link";


const Index = () => {
    return (
        <div>
            <div className='navbar' >
                <Link href="">
                    <span className='link' >Главная</span>
                </Link>
                <Link href="/users">
                    <span className='link' >Пользователи</span>
                </Link>
            </div>
            <h1>Главная страница</h1>
            <style jsx>
                {`
                    .navbar{
                    background:orange;
                    padding:15px;
                    }
                    .link{
                    text-decoration: none;
                    color: white;
                    font-size: 20px;
                    margin: 10px;
                    }
                `}
            </style>
        </div>
    );
};

export default Index;