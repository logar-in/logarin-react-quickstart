import React from "react"
import styles from "./styles.module.css"

export default function Tooltip({ children, isError }) {
  const cls = isError ? styles.ox_icon_info_error : ""
  return (
    <div className={styles.ox_tooltip_container}>
      <div className={`${styles.ox_tool_tip_icon} ${cls}`}>{icInfo}</div>
      <div className={styles.ox_tool_tip}>{children}</div>
    </div>
  )
}
const icInfo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    width={17}
    height={17}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
    />
  </svg>
)
