import {useRouter} from "next/router"
import {User} from "@/types/types";
import MainContainer from "@/components/MainContainer";


interface UserProps {
    user: User
}

interface GetUserInfoProps {
    params: { id: number }
}

export default function ({user}: UserProps) {

    const {query} = useRouter()

    return (
        <MainContainer>
            <div>
                <h1>Пользователь c id {query.id}</h1>
                <div>Имя пользователя - {user.name} </div>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}: GetUserInfoProps) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: {user}
    }
}



