import React, { Fragment, useEffect, useState } from "react"
import useStore from "../Context"
import { apiCore } from "../../api"
import BottomFormLogin from "../BottomFormLogin"
import InputOtp from "../InputOtp"
import EmailLink from "../EmailLink"
import { stepStatus, strategieCode } from "../../lib/const"
import { getAuthStrategies } from "../../lib/function"
import styles from "./styles.module.css"
import global from "../../global.module.css"

function getOtpByParams() {
  var url = new URL(window.location.href)
  return url.searchParams.get("otp_code")
}

export default function FactorOne({ children, onChangeStep }) {
  const { setLogin, setLoaded, firstSignIn, user_general_setting } = useStore()
  const strategies = getAuthStrategies(user_general_setting.authentication_strategies)
  var otp_code = getOtpByParams()
  const [otp, setOtp] = useState()
  const [error, setError] = useState("")

  async function onOk() {
    try {
      setLoaded(false)
      const body = {
        strategy: strategies[0],
        email_or_phone: firstSignIn.email,
        code: otp_code ? otp_code : otp
      }
      const { data } = await apiCore.attemptFirstfactor3(body)
      if (data?.user?.status === stepStatus.COMPLETED) {
        setLogin(data)
      } else {
        onChangeStep(3)
      }
    } catch (error) {
      console.log(error)
      setError("Incorrect code")
    }
  }

  function onChangeOtp(value) {
    setOtp(value)
  }

  async function fetch() {
    try {
      const dataBody = {
        strategy: strategies[0],
        email_or_phone: firstSignIn.email
      }
      if (strategies[0] === strategieCode.EMAIL_LINK) {
        dataBody.redirect_url = window.location.href
        dataBody.url = window.location.href
      }
      await apiCore.prepareFirstfactor2(dataBody)
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    if (strategies.length > 0) {
      if (otp_code) {
        onOk(otp_code)
      } else {
        fetch()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user_general_setting])

  return (
    <div className={styles.pageContainer}>
      <div className={styles.componentContainer}>
        <div className={styles.oxBox}>
          <div className={styles.ox_form}>
            {strategies[0] === strategieCode.EMAIL_LINK ? (
              <EmailLink onResend={fetch} />
            ) : (
              <Fragment>
                <InputOtp
                  onChange={onChangeOtp}
                  value={otp}
                  error={error}
                  onResend={fetch}
                  step={2}
                  strategie={strategies[0]}
                  firstSignIn={firstSignIn}
                />
                <button className={global.ox_button} onClick={onOk}>
                  Continue
                </button>
              </Fragment>
            )}
          </div>
          <BottomFormLogin isSignIn={true} />
        </div>
        {children}
      </div>
    </div>
  )
}
