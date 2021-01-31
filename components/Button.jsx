function Button({
  children,
  className,
  ...props
}) {
  return (
    <button
      className={`transition text-white m-1 p-2 min-w-max rounded focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;