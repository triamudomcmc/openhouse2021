import React, { useState, useEffect, useContext } from 'react'
import Router from 'next/router'
import cookie from 'js-cookie'

import firebase from './firebase'
import { createUser, getCurrentUserData } from './db'
import { AUTH_COOKIE } from './constants'

export interface IUserData extends IInitialUserData {
  prefix: string
  firstname: string
  lastname: string
  nickname: string
  status: string
  level: string
  school: string
  news: string[]
  purpose: string[]
  tos: boolean
  wishes: string
  type: string
}

interface IInitialUserData {
  uid: string
  email: string
  name: string
  provider: string
  photoUrl: string
}

interface IAuthContext {
  user: firebase.User | null
  userData: IUserData
  loading: boolean
  signinWithFacebook: (redirect: string) => Promise<void>
  signinWithGoogle: (redirect: string) => Promise<void>
  signout: () => void
}

const AuthContext = React.createContext<IAuthContext | null>(null)

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

function useProvideAuth() {
  const [user, setUser] = useState<firebase.User | null>(null)
  const [userData, setUserData] = useState<IUserData>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (userData && Object.keys(userData).length === 5) {
      Router.push('/onboard')
    }
  }, [userData])

  useEffect(() => {
    const getData = async () => {
      const data = await getCurrentUserData(user.uid)
      if (data) {
        setUserData(data as IUserData)
      } else {
        setUserData(null)
      }
    }

    if (user) {
      getData()
    }
  }, [user])

  const handleUser = async (rawUser: firebase.User) => {
    if (rawUser) {
      const user = formatUser(rawUser)
      createUser(user.uid, user)
      setUser(rawUser)

      cookie.set(AUTH_COOKIE, true, {
        expires: 1
      })

      setLoading(false)
    } else {
      setUser(null)
      cookie.remove(AUTH_COOKIE)

      setLoading(false)
    }
  }

  const signinWithFacebook = async (redirect: string) => {
    setLoading(true)

    const response = await firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())

    handleUser(response.user)

    if (redirect) {
      Router.push(redirect)
    }
  }

  const signinWithGoogle = async (redirect: string) => {
    setLoading(true)

    const response = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())

    handleUser(response.user)

    if (redirect) {
      Router.push(redirect)
    }
  }

  const signout = async () => {
    Router.push('/')

    await firebase.auth().signOut()
    return await handleUser(null)
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser)

    return () => unsubscribe()
  }, [])

  return {
    user,
    userData,
    loading,
    signinWithFacebook,
    signinWithGoogle,
    signout
  }
}

const formatUser = (user: firebase.User): IInitialUserData => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL
  }
}
