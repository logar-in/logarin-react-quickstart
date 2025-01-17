import React, { useEffect, useState } from "react"
import useStore from "../Context"
import FirstSignUp from "./FirstSignUp"
import VerifyEmail from "./VerifyEmail"
import { LayoutSignIn } from "../ui"

function initStep() {
  const path = window.location.pathname
  if (path.includes("verify")) return 2
  return 1
}

export default function SignUp() {
  const { routerReplace, routerPush, isSignedIn, configLoaded } = useStore()
  const [step, setStep] = useState(initStep())

  function onChangeStep(v) {
    setStep(v)
    if (v === 1) routerReplace("/sign-up")
    if (v === 2) routerReplace("/sign-up/verify")
  }

  useEffect(() => {
    if (isSignedIn) routerPush("/dashboard")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignedIn])

  return (
    <div>
      {configLoaded && (
        <LayoutSignIn step={step} isSignIn={false}>
          {step === 1 && <FirstSignUp onChangeStep={onChangeStep} />}
          {step === 2 && <VerifyEmail onChangeStep={onChangeStep} />}
        </LayoutSignIn>
      )}
    </div>
  )
}
