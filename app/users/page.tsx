import React, { Suspense } from 'react'
import UserTable from '../components/UserTable/UserTable'
import Link from 'next/link'

interface Props {
  searchParams: { sortOrder: string }
}

const UserPage = ({ searchParams }: Props) => {
  
  return (
    <>
    <h1>Users</h1>
    <Link href="users/new" className='btn'>Add New User</Link>
    <Suspense fallback={<p>Loading...</p>}>
      <UserTable sortOrder={searchParams.sortOrder}/>
    </Suspense>
    </>
  )
}

export default UserPage