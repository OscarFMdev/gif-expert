
export const GifItem = ({title, id, url}) => {

  return (
    <div key={id} className='card'>
      <img src={ url } alt={ title } />
      <p>{title}</p>
      
    </div>
  )
}
