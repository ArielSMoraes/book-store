import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'

Enzyme.configure({ adapter: new Adapter() })
// import toJson from 'enzyme-to-json'

import CategoryBooks, { H2 } from '../src/categoryBooks'

describe('CategoryBooks', () => {
  test('category has a title ', () => {
    const wrapper = shallow(<CategoryBooks category='Action' />)
    expect(wrapper.find(H2)).toHaveLength(1)
  })

  test('category name is used as title ', () => {
    const wrapper = shallow(<CategoryBooks category='Action' />)
    expect(wrapper.find(H2).text()).toBe('Action')
  })
})
