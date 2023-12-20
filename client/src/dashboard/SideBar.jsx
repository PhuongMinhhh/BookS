
import React from 'react';

import { Sidebar } from 'flowbite-react';
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineUpload,
  HiShoppingBag,
  HiTable,
  HiUser,

} from 'react-icons/hi';

import imgLogo from '../assets/images/CarrotAvatar.png'
const SideBar = () => {
  return (

        <Sidebar  aria-label="Default sidebar example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} >
                <p>
                  Dashboard
                </p>
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/Upload" icon={HiOutlineUpload} labelColor="dark">
                <p>
                  Upload Book
                </p>
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} >
                <p>
                  Manage Books
                </p>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                <p>
                  Users
                </p>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                <p>
                  Products
                </p>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                <p>
                  Sign In
                </p>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable}>
                <p>
                  Sign Up
                </p>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>


  );
}
export default SideBar;