import React from 'react'
import { Oval } from "react-loader-spinner" 

const Loading = (props) => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "8rem 0",
      width: "100%"
    }}>
      <Oval
        height={80}
        width={80}
        color="var(--color-primary)"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#f7f7f7"
        strokeWidth={1}
        strokeWidthSecondary={1}
      />
    </div>
  )
}

export default Loading