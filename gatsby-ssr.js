import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="geistLight"
      rel="preload"
      href="/fonts/Geist/Geist-Light.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="geistRegular"
      rel="preload"
      href="/fonts/Geist/Geist-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="geistBold"
      rel="preload"
      href="/fonts/Geist/Geist-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ])
}