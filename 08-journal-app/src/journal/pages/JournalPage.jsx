import { IconButton, Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import React from 'react'
import { NothingSelectedView,NoteView } from '../views'
import { AddOutlined } from '@mui/icons-material'

export const JournalPage = () => {
  return (
    <>
        <JournalLayout>
          <NoteView/>
          {/* <NothingSelectedView/> */}
          {/* <Typography> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit assumenda amet repellat quo earum aperiam ullam, nemo repellendus repudiandae, dolor expedita. Veniam tenetur odit necessitatibus sequi quam, voluptatum voluptas quaerat. </Typography> */}
          <IconButton
            size='large'
            sx={{
              color: 'white',
              backgroundColor: 'error.main',
              ':hover': {backgroundColor: 'error.main', opacity: 0.9 },
              position: 'fixed',
              right: 50,
              bottom: 50
            }}
          >
            <AddOutlined sx={{fontSize: 30 }}/>
          </IconButton>
        </JournalLayout>
    </>

  )
}
