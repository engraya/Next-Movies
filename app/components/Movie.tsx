import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title : string,
  release_date : string
  poster_path : string
  id : number
}

function Movie({title,  release_date, poster_path, id} : Props) {
  const imagePath = 'https://image.tmdb.org/t/p/original'
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <div>
        <Link href={`/${id}`}>
          <Image src={imagePath + poster_path} height={100} width={100} alt='moviePoster'/>
        </Link>

      </div>
    </div>
  )
}

export default Movie
