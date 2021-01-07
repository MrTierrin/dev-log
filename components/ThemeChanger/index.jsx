import { useTheme } from 'next-themes'

import Moon from '@/components/Icons/Moon';
import Sun from '@/components/Icons/Sun';

function ThemeChanger() {
  const { theme, setTheme } = useTheme()

  function handleClick() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button onClick={handleClick}>
      {theme === 'light' ? (
        <Sun />
      ) : (
        <Moon />
      )}
    </button>
  )
}

export default ThemeChanger;