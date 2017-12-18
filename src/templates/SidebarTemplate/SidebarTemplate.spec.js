import React from 'react'
import { shallow } from 'enzyme'

import SidebarTemplate from './'
import blackwhite from './themes/blackwhite'
import MenuBar from 'src/components/MenuBar'
import { blackwhite as blackWhiteMenu } from 'src/components/MenuBar/themes'

describe('<SidebarTemplate />', () => {
  test('blackwhite theme returns blackwhite theme MenuBar', () => {
    const component = shallow(<SidebarTemplate theme={blackwhite} />)
    expect(component.find(MenuBar).prop('theme')).toBe(blackWhiteMenu)
  })
})
