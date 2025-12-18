import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
const PostCard = ({ post }) => {
  const { author, title, ups, num_comments, thumbnail } = post.data
  const isValidImage = thumbnail && thumbnail.includes('http')

  return (
    <div className='bg-white text-gray-800 border border-gray-400 rounded-lg m-2 shadow-lg'>
      <div className='flex items-start justify-center'>
        <div className='flex flex-col items-center justify-center bg-orange-100 w-12 p-3 gap-1 self-stretch border border-gray-400 rounded-sm'>
          <AiOutlineLike className='text-orange-700 text-lg' />
          <span className='text-orange-700'>{ups}</span>
          <AiOutlineDislike className='text-orange-700 text-lg' />
        </div>
        <div className='flex-1 p-2'>
          <p className='text-xs text-gray-500'>{author}</p>
          <div className='flex gap-4 justify-between'>
            <div className='flex-1'>
              <h2 className='text-lg font-semibold'>{title}</h2>
            </div>

            {isValidImage && (
              <img
                src={thumbnail}
                alt={title}
                className='w-16 h-16 object-cover rounded-md flex-shrink-0'
              />
            )}
          </div>
          <div>Comentarios: {num_comments}</div>
        </div>
      </div>
    </div>
  )
}

export { PostCard }
