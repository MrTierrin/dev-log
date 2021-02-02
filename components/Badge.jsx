function Badge({
  className,
  text,
  icon,
  ...props
}) {
  return (
    <div className={`p-2 rounded border-2 border-solid ${className}`} {...props}>
      {text} {icon}
    </div>
  )
}

export default Badge;