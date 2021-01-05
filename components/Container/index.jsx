/* import styles from './styles.module.css'; */
function Container({
  children
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow-0 flex-shrink-0">Header</div>
      <div className="flex-1">
        {children}
      </div>
      <div className="flex-grow-0 flex-shrink-0">Footer</div>
    </div>
  )
}

export default Container;