import { mount } from "auth/AuthApp"
import React, { useRef, useEffect } from "react"
import { useHistory } from "react-router-dom"

export default () => {
  const history = useHistory();
  const ref = useRef(null)

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath:history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = location;
        if (pathname !== nextPathName) {
          history.push(nextPathName)
        }
        // console.log(nextPathName);
      }
    })
    history.listen(onParentNavigate)
  }, [])

  return (
    <div ref={ref}></div>
  )

}