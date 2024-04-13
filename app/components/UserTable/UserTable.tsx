import Link from 'next/link';
import React from 'react';
import { sort } from 'fast-sort';


interface User {
    id: number;
    name: string;
    email: string
}

interface Props {
    sortOrder: string
}


const UserTable = async (props: Props) => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await response.json()

    const sortedUsers = sort(users).asc(props.sortOrder === "email" ? user => user.email : user => user.name)

    return (
        <>
        <table className='table table-zebra'>
            <thead>
                <tr>
                <th>
                    <Link href="/users?sortOrder=name">Name</Link>
                </th>
                <th>
                    <Link href="/users?sortOrder=email">Email Addres</Link>
                </th>
                </tr>
            </thead>
            <tbody>
                {sortedUsers.map(user => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </>
  )
}

export default UserTable