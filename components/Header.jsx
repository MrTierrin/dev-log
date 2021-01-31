import ThemeChanger from '@/components/ThemeChanger'

function Header() {
  return (
    <header className="flex-grow-0 flex-shrink-0 flex items-center h-16 shadow-md px-3 border-b dark:border-blue-400">
      <div className="flex-1 font-bold text-lg">Dev<span className="text-blue-600">Log</span></div>
      <div className="flex-grow-0 flex-shrink-0">
        <ThemeChanger />
      </div>
    </header>
  )
}

export default Header;