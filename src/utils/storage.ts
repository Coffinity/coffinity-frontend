export const persistState = (storageKey: string, state: object): void => {
  window.localStorage.setItem(storageKey, JSON.stringify(state))
}

export const getIntialState = <T>(storageKey: string, defaultValue?: T): T | undefined => {
  const savedState = window.localStorage.getItem(storageKey)
  try {
    if (!savedState) {
      return defaultValue
    }
    return JSON.parse(savedState)
  } catch (e) {
    return defaultValue
  }
}

export enum STORAGE_KEY {
  APP_KEY = 'DMJ',
}
