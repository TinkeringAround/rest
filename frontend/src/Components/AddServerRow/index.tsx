import React, { FC, useCallback, useState, useContext } from 'react'
import { Keyboard, Box } from 'grommet'

// Contexts
import { AppContext } from '../../Contexts'

// Atoms
import IconButton from '../../Atoms/iconButton'
import { SInput } from '../../Atoms/styled'

// ===============================================
const AddServerRow: FC = () => {
  const { addServer } = useContext(AppContext)
  const [newUrl, setNewUrl] = useState<string>('')

  const addServerHandler = useCallback(() => {
    if (newUrl !== '') {
      addServer(newUrl)
      setNewUrl('')
    }
  }, [newUrl, setNewUrl, addServer])

  return (
    <Keyboard onEnter={addServerHandler}>
      <Box
        width="90%"
        background="light"
        direction="row"
        margin="2rem 0 3rem"
        pad="0.5rem 1rem"
        align="center"
        style={{ borderRadius: 5 }}
      >
        <IconButton
          iconType="plus"
          wrapper="2.5rem"
          onClick={addServerHandler}
          margin="0 1rem 0 0"
        />
        <SInput
          value={newUrl}
          onChange={event => setNewUrl(event.target.value)}
          placeholder="Enter New URL"
        />
      </Box>
    </Keyboard>
  )
}

export default AddServerRow
