function Post({ post }) {
  return (
    <article className="rounded-md bg-gray-400 max-w-xs">
      
      {/* Media */}
      <div>
        <img
          src="https://i.imgur.com/yQLDyiR.jpg"
          alt="Post image"
          className="w-full h-60 rounded-t-md object-cover"
          draggable="false"
        />
      </div>

      {/* Content */}
      <div className="p-4 overflow-ellipsis">
        <a
          className="text-2xl font-sans hover:underline"
          title="Como hacer una spa con ReactJS"
          href="#"
        >Como hacer una spa con ReactJS</a>
        <p className="opacity-80">En este tutorial crearemos una página tipo Single Page Application con ReactJS desde 0.</p>
      </div>
    </article>
  )
}

export default Post;