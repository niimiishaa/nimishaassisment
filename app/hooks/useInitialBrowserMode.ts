import { LOCAL_STORAGES } from '@/core/Constants'
import BrowserDarkMode from '@/utils/BrowserDarkMode'
import { getLocalStorage } from '@/utils/LocalStorage'
import { PaletteMode } from '@/context/SettingsContext'

//Get browser and local strorage dark mode;
export default function useInitialBrowserMode() {
  return () => {
    let darkMode = false
    darkMode = BrowserDarkMode()

    const ls = getLocalStorage(LOCAL_STORAGES.LS_DARK_MODE)
    if (ls !== null) darkMode = ls

    return darkMode ? PaletteMode.DARK : PaletteMode.LIGHT
  }
}
