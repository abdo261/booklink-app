import { Avatar, AvatarGroup } from '@nextui-org/react'
import React from 'react'

const AvatarGroupeCmp = ({likes}) => {
  return (
    <AvatarGroup isBordered max={3}  size='sm'>
      {
        likes.map((l,i)=>(
           <Avatar  src={`${process.env.REACT_APP_API_BASE_URL}/images/profiles/${l.user.profile.image}`} />
        ))
      }
  </AvatarGroup>  )
}

export default AvatarGroupeCmp