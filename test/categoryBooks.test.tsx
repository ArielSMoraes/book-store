import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import React from 'react'
import CategoryBooks, { H2 } from '../src/categoryBooks'
import ListBooks from '../src/listBooks'

Enzyme.configure({ adapter: new Adapter() })

describe('CategoryBooks', () => {
  test('category has a title ', () => {
    const wrapper = shallow(<CategoryBooks category='Action' />)

    expect(wrapper.find(H2)).toHaveLength(1)
  })

  test('category name is used as title', () => {
    const wrapper = shallow(<CategoryBooks category='Action' />)

    expect(wrapper.find(H2).text()).toBe('Action')
  })

  test('should call ListBooks with correct term', () => {
    const wrapper = shallow(<CategoryBooks category='Action' />)

    const listBooksTerm = toJson(wrapper.find(ListBooks)).props.term

    expect(listBooksTerm).toBe('Action')
  })
})
