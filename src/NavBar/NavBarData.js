import React from 'react'

import { HomeOutlined , FundProjectionScreenOutlined } from '@ant-design/icons';

export const NavBarData = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeOutlined />,
    className: 'nav-text',
  },

  {
    title: 'Projects',
    path: '/projects',
    icon: <FundProjectionScreenOutlined />,
    className: 'nav-text',
  }
]
