import React from 'react'

interface Props {
    params: { slug: string[] };
    searchParams: { sortOrder: string }
}

const ProductPage = ({ params }: Props) => {
  return (
    <div>
        Product Page - {params.slug}
    </div>
  )
}

export default ProductPage