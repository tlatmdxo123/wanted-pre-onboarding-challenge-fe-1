import { useState } from 'react'

import { ValueOf } from '@utils/typeUtils'
import { authType } from '@components/Auth/constants'

interface AuthStateHook {
  isLogin: boolean
  changeAuthState: () => void
}

export const useAuthState = (): AuthStateHook => {
  const [authState, setAuthState] = useState<ValueOf<typeof authType>>(authType.signUp)
  const isLogin = authState === authType.login
  const changeAuthState = (): void => { setAuthState(isLogin ? authType.signUp : authType.login) }

  return { isLogin, changeAuthState }
}
