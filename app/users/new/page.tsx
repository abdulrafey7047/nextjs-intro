'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const NewUser = () => {
  const router = useRouter()

  return (
    <div>
      <h1>NewUser Page</h1>
      <button
        className='btn btn-primary'
        onClick={() => {router.push("/users")}}
      >
        Add New User
      </button>
    </div>
  )
}

export default NewUser