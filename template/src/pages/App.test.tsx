import React from 'react'
import { shallow } from 'enzyme'
import App from '@/pages/App'

it('render App', () => {
  const app = shallow(<App />)
  expect(app.text()).toMatch(/ifui/)
})
