import React from "react"
import useStore, { StoreProvider } from "./components/Context"
import "./variables.css"
export { default as SignIn } from "./components/SignIn"
export { default as SignUp } from "./components/SignUp"
export { default as SignedIn } from "./components/SignedIn"
export { default as SignedOut } from "./components/SignedOut"
export { default as UserButton } from "./components/UserButton"
export { default as UserProfile } from "./components/UserProfile"
export { StoreProvider as OneAuxiliaProvider }

export const ExampleComponent = ({ text }) => {
  return <div>Example Component: {text}</div>
}
export function useUser() {
  const { isSignedIn, fullName, first_name, last_name, isLoaded, avatar } = useStore()
  let user = { fullName, first_name, last_name, avatar }
  return { isSignedIn, user, isLoaded, avatar }
}
export function useAuth() {
  const { userId, isLoaded, isSignedIn, groups, org_id } = useStore()
  return { userId, isLoaded, isSignedIn, orgRole: groups, orgId: org_id }
}
export function useOneAuXilia() {
  const { openSignIn } = useStore()
  return { openSignIn }
}
export function useSignIn() {
  const { isLoaded, signIn } = useStore()
  return { isLoaded, signIn }
}
export function useSignUp() {
  const { isLoaded, signUp } = useStore()
  return { isLoaded, signUp }
}
export function useSession() {
  const { isLoaded, session, isSignedIn } = useStore()
  return { isLoaded, session, isSignedIn }
}
export function useSessionList() {
  const { isLoaded, sessions } = useStore()
  return { isLoaded, sessions }
}
export function useOrganization() {
  const { invitations } = useStore()
  return { invitations }
}
