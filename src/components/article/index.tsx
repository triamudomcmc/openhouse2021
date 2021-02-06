import React, { useState } from 'react'
import cn from 'classnames'
import { Clubs } from './Clubs'
import { General } from './General'
import { Programmes } from './Programmes'

export const Inside = ({ contents }) => {
  const [currentTab, setCurrentTab] = useState<'clubs' | 'programmes' | 'general'>('clubs')
  const getCurrentTab = () => {
    switch (currentTab) {
      case 'clubs':
        return <Clubs contents={contents} />
      case 'programmes':
        return <Programmes />
      case 'general':
        return <General />
    }
  }
  return (
    <div>
      <p onClick={() => setCurrentTab('clubs')}>ชมรม</p>
      <p onClick={() => setCurrentTab('programmes')}>สายการเรียน</p>
      <p onClick={() => setCurrentTab('general')}>การแข่งขัน</p>
      {getCurrentTab()}
    </div>
  )
}
