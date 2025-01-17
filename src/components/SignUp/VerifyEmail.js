import React, { Fragment, useEffect, useState } from "react"
import useStore from "../Context"
import { apiCore } from "../../api"
import InputOtp from "../InputOtp"
import EmailLink from "../EmailLink"
import { strategieCode } from "../../lib/const"
import { getEmailSettingSignUp, getOtpByParams } from "../../lib/function"
import { Button } from "../ui"

function getStrategy(emailSetting) {
  if (!emailSetting) return "Null"
  if (emailSetting.is_verification_code) return strategieCode.EMAIL_CODE
  return strategieCode.EMAIL_LINK
}

export default function VerifyEmail({ children, onChangeStep }) {
  const { setLogin, setLoaded, firstSignIn, user_general_setting } = useStore()
  const emailSetting = getEmailSettingSignUp(user_general_setting?.contact)

  const strategy = getStrategy(emailSetting)
  var [otp_code, email] = getOtpByParams()
  const [otp, setOtp] = useState()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  console.log({ strategy })

  async function onOk() {
    try {
      setLoaded(false)
      setLoading(true)
      const body = {
        strategy: strategy,
        email_or_phone: email || firstSignIn.email,
        code: otp_code ? otp_code : otp
      }
      const { data } = await apiCore.attemptSignUp(body)
      setLogin(data)
    } catch (error) {
      console.log(error)
      setError("Incorrect code")
    } finally {
      setLoading(false)
      setLoaded(true)
    }
  }

  function onChangeOtp(value) {
    setOtp(value)
  }
  function onBack() {
    onChangeStep(1)
  }
  async function fetch() {
    try {
      const dataBody = {
        strategy: strategy,
        email_or_phone: firstSignIn.email
      }
      if (emailSetting.is_verification_link) {
        dataBody.redirect_url = window.location.href
        dataBody.url = window.location.href
      }
      await apiCore.prepareSignUp(dataBody)
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    if (emailSetting?.is_need_verify_at_sign_up) {
      if (otp_code) {
        onOk(otp_code)
      } else {
        fetch()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user_general_setting])

  return (
    <Fragment>
      {emailSetting.is_verification_link ? (
        <EmailLink onResend={fetch} onBack={onBack} />
      ) : (
        <Fragment>
          <InputOtp
            onChange={onChangeOtp}
            value={otp}
            error={error}
            onResend={fetch}
            step={"sign-up"}
            firstSignIn={firstSignIn}
          />
          <div className="ox_mb_6"></div>
          <Button onClick={onOk} type="primary" disabled={!otp} loading={loading} isSubmit={true}>
            Continue
          </Button>
        </Fragment>
      )}
    </Fragment>
  )
}
