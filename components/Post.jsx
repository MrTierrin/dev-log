import Badge from '@/components/Badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Post({ post }) {
  return (
    <article className="rounded-md bg-gray-400 max-w-xs flex flex-col">
      
      {/* Media */}
      <div className="flex-inital">
        <img
          src="https://i.imgur.com/yQLDyiR.jpg"
          alt="Post image"
          className="w-full h-60 rounded-t-md object-cover"
          draggable="false"
        />
      </div>

      {/* Content */}
      <div className="p-4 overflow-ellipsis flex-1">
        <a
          className="text-2xl font-sans hover:underline"
          title="Lorem Ipsum"
          href="#"
        >Lorem Ipsum</a>
        <p className="opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet nulla leo, iaculis imperdiet mi tincidunt et.</p>
      </div>

      {/* Footer */}
      <div className="flex flex-initial justify-center pb-2">
        <Badge
          text="100"
          className="bg-green-400 border-green-300 bg-opacity-70 rounded-md"
          icon={<FontAwesomeIcon icon="bolt" size="lg" className="text-yellow-200" />}
        />
      </div>
    </article>
  )
}

export default Post;