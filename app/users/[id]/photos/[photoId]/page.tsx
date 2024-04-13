import React from 'react'

interface Props {
    params: {
        id: number;
        photoId: number
    }
}

const UserPhotoDetail = (props: Props) => {
  return (
    <>
    <h1>User - {props.params.id} Photo - {props.params.photoId}</h1>
    </>
  )
}

export default UserPhotoDetail