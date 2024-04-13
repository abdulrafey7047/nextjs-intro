import React from 'react'

interface Props {
  error: Error;
  reset: () => void;
}

const UserErrorPage = (props: Props) => {
  console.log(props.error)

  return (
    <>
      There was an error fetching this user
      <button
        className='btn btn-primary'
        onClick={() => props.reset()}
      >
        Retry
      </button>
    </>
  )
}

export default UserErrorPage