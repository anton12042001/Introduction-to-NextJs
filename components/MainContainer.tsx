import React from 'react';
import A from "@/components/A";
import Head from "next/head";


interface MainContainerProps {
    children:React.ReactNode
    title:string
}


const MainContainer = ({children,title}:MainContainerProps) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className='navbar'>
                <A href={"/"} text="Главная"/>
                <A href={"users"} text="Пользователи"/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                  .navbar {
                    background: orange;
                    padding: 15px;
                  }
                `}
            </style>
        </>
    );
};

export default MainContainer;