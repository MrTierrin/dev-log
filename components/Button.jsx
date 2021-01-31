function Button({
  children,
  ...props
}) {
  return (
    <button {...props} className="transition text-white m-1 p-2 min-w-max bg-discord rounded focus:outline-none hover:bg-gray-700 dark:hover:bg-gray-300">
      {children}
    </button>
  )
}

export default Button;