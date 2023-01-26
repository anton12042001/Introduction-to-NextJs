import React from 'react';
import Link from "next/link";
import {GetStaticProps} from "next";
import {User} from "@/types/types";
import MainContainer from "@/components/MainContainer";


interface UsersProps {
    users: User[]
}

const Users = ({users}: UsersProps) => {

    return (
        <MainContainer title={"Список пользователей"}>
            <h1>Список пользователей</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context: GetStaticProps) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
        props: {users},
    }
}