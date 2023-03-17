
const CHANGE_LANGUEAGE = "LanguageSelector/CHANGE_LANGUAGE" as const

export const changeLanguageBy = (language : string) => ({
  type: CHANGE_LANGUEAGE,
  payload : language
})

type LanguageSelectorAction =
 | ReturnType<typeof changeLanguageBy>


type LanguageSelectorState = {
 language: string 
}

const initialState : LanguageSelectorState = {
  language: ''
}

function LanguageSelector(
  state : LanguageSelectorState = initialState,
  action : LanguageSelectorAction
) : LanguageSelectorState {
  switch (action.type) {
    case CHANGE_LANGUEAGE:
      return {language: action.payload}
    default:
      return state
  }
}

export default LanguageSelector