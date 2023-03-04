import { Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import React from 'react'
import { NothingSelectedView,NoteView } from '../views'

export const JournalPage = () => {
  return (
    <>
        <JournalLayout>
          <NoteView/>
          {/* <NothingSelectedView/> */}
          {/* <Typography> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit assumenda amet repellat quo earum aperiam ullam, nemo repellendus repudiandae, dolor expedita. Veniam tenetur odit necessitatibus sequi quam, voluptatum voluptas quaerat. </Typography> */}
          {/* noting selected */}
          {/*notew view */}
        </JournalLayout>
    </>

  )
}
