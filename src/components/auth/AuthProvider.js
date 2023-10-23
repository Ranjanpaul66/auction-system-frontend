import {createContext, useContext, useEffect, useRef, useState,} from 'react'
import * as authHelper from './AuthHelpers'
import {getUserByToken} from './_requests'
import {LayoutSplashScreen} from "../../_metronic/layout/core";

const initAuthContextPropsState = {
    auth: authHelper.getAuth(),
    saveAuth: () => {
    },
    currentUser: undefined,
    setCurrentUser: () => {
    },
    logout: () => {
    },
}

const AuthContext = createContext(initAuthContextPropsState)

const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(authHelper.getAuth())
    const [currentUser, setCurrentUser] = useState()
    const saveAuth = (auth) => {
        console.log("AuthProvider: ", auth)
        setAuth(auth)
        if (auth) {
            authHelper.setAuth(auth)
        } else {
            authHelper.removeAuth()
        }
    }

    const logout = () => {
        console.log("logout")
        saveAuth(undefined)
        setCurrentUser(undefined)
    }

    return (
        <AuthContext.Provider value={{auth, saveAuth, currentUser, setCurrentUser, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

const AuthInit = ({children}) => {
    const {auth, logout, setCurrentUser} = useAuth()
    const didRequest = useRef(false)
    const [showSplashScreen, setShowSplashScreen] = useState(true)
    // We should request user by authToken (IN OUR EXAMPLE IT'S API_TOKEN) before rendering the application
    useEffect(() => {
        console.log('AuthInit: ', auth)
        const requestUser = async (apiToken) => {
            try {
                if (!didRequest.current) {
                    // const {data} = await getUserByToken(apiToken)
                    if (auth) {
                        setCurrentUser(auth)
                    }
                }
            } catch (error) {
                console.error(error)
                if (!didRequest.current) {
                    logout()
                }
            } finally {
                setShowSplashScreen(false)
            }

            return () => (didRequest.current = true)
        }

        if (auth && auth.accessToken) {
            requestUser(auth.accessToken)
        } else {
            logout()
            setShowSplashScreen(false)
        }
        // eslint-disable-next-line
    }, [])

    return showSplashScreen ? <LayoutSplashScreen/> : <>{children}</>
}

export {AuthProvider, AuthInit, useAuth}
