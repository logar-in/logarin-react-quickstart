import React, { useState } from "react"
import Security from "./Security"
import styles from "./styles.module.css"
import Profile from "./Profile"
import useStore from "../Context"

export default function UserProfile({ isSignIn, step, backUrl = "/dashboard" }) {
  const { routerPush } = useStore()
  const [tab, setTab] = useState(1)
  const cl1 = tab === 1 ? styles.ox_btn_li_active : ""
  const cl2 = tab === 2 ? styles.ox_btn_li_active : ""

  return (
    <div className={styles.ox_user_profile}>
      <div className={styles.ox_user_profile_left}>
        <div>
          <div className={styles.ox_user_profile_left_title}>Account</div>
          <div className={styles.ox_user_profile_left_sub}>Manage your account info.</div>

          <div className={styles.ox_user_profile_left_action}>
            <div>
              <button onClick={() => setTab(1)} className={`${styles.ox_btn_li} ${cl1}`}>
                {icUser} Profile
              </button>
            </div>
            <div>
              <button onClick={() => setTab(2)} className={`${styles.ox_btn_li} ${cl2}`}>
                {icSe} Security
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.footer_secured} onClick={() => routerPush(backUrl)}>
            <div>Secured by</div>
            <div className={styles.ox_logo_bottom}>{icLogo}</div>
          </div>
        </div>
      </div>

      <div className={styles.ox_container}>{tab === 1 ? <Profile /> : <Security />}</div>
    </div>
  )
}
const icSe = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    width={16}
    height={16}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
    />
  </svg>
)

const icUser = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    width={16}
    height={16}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
)

const icLogo = (
  <svg width="65" height="10" viewBox="0 0 100 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1872_45236)">
      <path
        d="M13.0741 3.51042L9.30377 1.37946C8.18482 0.748512 6.81046 0.748512 5.69151 1.37946L1.92114 3.51042C0.802193 4.14137 0.121094 5.30804 0.121094 6.55804V10.8199C0.121094 12.0818 0.802193 13.2485 1.92114 13.8795L4.5604 15.3676C4.74284 15.4747 4.98609 15.3676 5.02258 15.1533L5.42394 12.7485C5.44826 12.5938 5.37529 12.4271 5.22934 12.3438C3.91579 11.5699 3.05225 10.1295 3.12523 8.49851C3.22253 6.28423 5.08339 4.48661 7.35778 4.41518C9.83892 4.34375 11.8701 6.28423 11.8701 8.68899C11.8701 10.2247 11.043 11.5818 9.79027 12.3318C9.64432 12.4152 9.57135 12.5818 9.60784 12.7366L10.0335 15.1176C10.07 15.3318 10.3133 15.439 10.4957 15.3318L13.0741 13.8795C14.1931 13.2485 14.8742 12.0818 14.8742 10.8199V6.55804C14.8742 5.30804 14.1809 4.14137 13.0741 3.51042Z"
        fill="black"
      />
      <path
        d="M9.49838 8.48609C9.62002 9.72418 8.56181 10.7718 7.29684 10.6408C6.36027 10.5456 5.59399 9.80751 5.49668 8.89085C5.36289 7.64085 6.43325 6.60513 7.69822 6.72418C8.64696 6.81942 9.40108 7.55751 9.49838 8.48609Z"
        fill="url(#paint0_linear_1872_45236)"
      />
      <path
        d="M17.0156 15.2978V5.42876H19.3995V6.50019C20.1414 5.72638 21.236 5.23828 22.4279 5.23828C24.7631 5.23828 26.3807 6.85733 26.3807 9.35733V15.2978H23.9969V9.85733C23.9969 8.20257 23.109 7.42876 21.8441 7.42876C20.4698 7.42876 19.3995 8.41685 19.3995 9.97638V15.3097H17.0156V15.2978Z"
        fill="black"
      />
      <path
        d="M33.2522 5.23828C36.1103 5.23828 38.0685 7.2859 38.0685 10.2264C38.0685 10.5954 38.0077 11.0121 37.9712 11.4049H30.4669C30.8683 12.6311 31.9994 13.3811 33.4954 13.3811C34.4684 13.3811 35.3928 13.0478 36.0009 12.393L37.509 13.8692C36.536 14.9169 35.1252 15.4883 33.4711 15.4883C30.4305 15.4883 28.1074 13.2621 28.1074 10.3573C28.1074 7.45257 30.321 5.23828 33.2522 5.23828ZM30.4305 9.59542H35.8306C35.6238 8.19066 34.5657 7.32161 33.2157 7.32161C31.817 7.33352 30.6251 8.23828 30.4305 9.59542Z"
        fill="black"
      />
      <path
        d="M38.4707 15.2961L43.9925 1.09375H46.5952L52.117 15.2961H49.5507L48.4075 12.3557H42.1803L41.037 15.2961H38.4707ZM47.5682 10.0342L45.306 4.2128L43.0316 10.0342H47.5682Z"
        fill="black"
      />
      <path
        d="M55.3028 5.42969V10.8702C55.3028 12.513 56.1907 13.2987 57.4556 13.2987C58.8299 13.2987 59.9002 12.2868 59.9002 10.7511V5.42969H62.2841V15.2987H59.9002V14.2273C59.1583 15.0011 58.0637 15.4892 56.8718 15.4892C54.5366 15.4892 52.9189 13.8702 52.9189 11.3702V5.42969H55.3028Z"
        fill="black"
      />
      <path
        d="M63.6104 15.2987L67.5875 10.1916L63.9023 5.44159H66.8699L69.0713 8.23921L71.2727 5.42969H74.2404L70.543 10.1916L74.5201 15.2987H71.5403L69.0835 12.144L66.6023 15.2987H63.6104Z"
        fill="black"
      />
      <path
        d="M77.0379 0.894531C77.8285 0.894531 78.4488 1.52548 78.4488 2.27548C78.4488 3.04929 77.8285 3.68025 77.0379 3.68025C76.2473 3.68025 75.627 3.04929 75.627 2.27548C75.627 1.52548 76.2473 0.894531 77.0379 0.894531ZM75.8459 15.2993V5.43025H78.2299V15.2993H75.8459Z"
        fill="black"
      />
      <path d="M82.9484 15.2976H80.5645V0.5H82.9484V15.2976Z" fill="black" />
      <path
        d="M86.4754 0.894531C87.266 0.894531 87.8863 1.52548 87.8863 2.27548C87.8863 3.04929 87.266 3.68025 86.4754 3.68025C85.6848 3.68025 85.0645 3.04929 85.0645 2.27548C85.0645 1.52548 85.6848 0.894531 86.4754 0.894531ZM85.2834 15.2993V5.43025H87.6674V15.2993H85.2834Z"
        fill="black"
      />
      <path
        d="M94.3933 5.23828C95.6582 5.23828 96.838 5.89304 97.4947 6.65495V5.42876H99.8786V15.2978H97.4947V14.0359C96.8258 14.8454 95.6582 15.5002 94.3933 15.5002C91.5108 15.5002 89.3945 13.1907 89.3945 10.3692C89.3945 7.54781 91.5108 5.23828 94.3933 5.23828ZM91.7662 10.3692C91.7662 11.9049 93.0554 13.1669 94.6244 13.1669C96.1934 13.1669 97.4826 11.9049 97.4826 10.3692C97.4826 8.83352 96.1934 7.57161 94.6244 7.57161C93.0676 7.55971 91.7662 8.82161 91.7662 10.3692Z"
        fill="black"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_1872_45236"
        x1="5.46176"
        y1="8.68174"
        x2="9.52086"
        y2="8.68174"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A900FF" />
        <stop offset="1" stopColor="#8C06F9" />
      </linearGradient>
      <clipPath id="clip0_1872_45236">
        <rect width="100" height="15" fill="white" transform="translate(0 0.5)" />
      </clipPath>
    </defs>
  </svg>
)
