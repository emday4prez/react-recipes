import { useTheme } from '../hooks/useTheme'
import modeIcon from '../assets/modeIcon.svg'

//styles
import './ThemeSelector.css'

const themeColors = ['#58249c', '#249c6b', '#b70233']

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme()
  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
  }
  return (
    <div className="theme-selector">
    <div className="mode-toggle">
      <img 
        style={{filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}
        onClick={toggleMode}
        src={modeIcon} 
        alt="mode icon" />
    </div>
      <div className="theme-buttons">
        {themeColors.map((color) => {
          return (
            <div
              key={color}
              onClick={() => changeColor(color)}
              style={{ background: color }}
            />
          )
        })}
      </div>
    </div>
  )
}
