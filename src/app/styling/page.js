import React from 'react'
import style1 from "../style1.module.css"
import style3 from "../style3.module.css"
import style2 from "../style2.module.css"


const Styling = () => {
  return (
    <div>
        <h4 className='main'>First Heading</h4>
        <h4 className={style1.main}>second Heading</h4>
        <h4 className={style2.main}>Third Heading</h4>
        <h4 className={style3.main}>Fourth Heading</h4>

    </div>
  )
}

export default Styling