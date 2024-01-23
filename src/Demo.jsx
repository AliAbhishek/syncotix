import React, { useState } from 'react'

import { MultiSelect } from '@mantine/core'

const TailSide = () => {

  const data = [
    { value : "1", label : "react"  },
    { value : "2", label : "js"  }
  ]

  const changeHandler = (e) =>{
    console.log(e)
  }
  return (
    <>
        <MultiSelect
          label="Your favorite libraries"
          placeholder="Pick value"
          data={data}
          searchable
          onChange={changeHandler}
        />
    </>
  )
}

export default TailSide