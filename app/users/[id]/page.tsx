import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: { id: number }
}

const UserDetail = ({ params }: Props) => {
  if (params.id > 10) notFound()

  return (
    <>
    <h1>User - {params.id}</h1>
    </>
  )
}

export default UserDetail