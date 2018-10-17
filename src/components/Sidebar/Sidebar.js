import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { renren } from 'react-icons-kit/icomoon/renren';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { leaf } from 'react-icons-kit/icomoon/leaf';

//specify the base color/background of the parent container if needed 
const Sidebar = () => (
    <div style={{
        background: '#315a9b', color: 'white',
        width: 250,
        height: 1800,
        marginLeft:-20,
        marginTop:-22,
    }}> 
        <SideNav
            highlightColor='#AEECFB'
            highlightBgColor='#2686E0'
            defaultSelected='sales'
            onItemSelection={(id, parent) => {
                console.log('id', id);
                console.log('parent', parent);
                // redirect to a page using window.location.href
                window.location.href = id;
                //window.location.href = "http://stackoverflow.com";
            }}
        >       
            <Nav id="/" className="appNav">
                <NavIcon><SvgIcon size={20} icon={renren}/></NavIcon>    
                <NavText > Home </NavText>
            </Nav>
            <Nav id='/Companies' className="appNav">
                <NavIcon><SvgIcon size={20} icon={leaf}/></NavIcon>

                <NavText > Clients </NavText>
            </Nav>
            <Nav id='/phone' className="appNav">
                <NavIcon><SvgIcon size={20} icon={leaf}/></NavIcon>
                <NavText> Phone/email </NavText>
            </Nav>
            <Nav id='/Wip' className="appNav">
                <NavIcon><SvgIcon size={20} icon={leaf}/></NavIcon>
                <NavText> WIP </NavText>
            </Nav>

            <Nav id='/ToDo' className="appNav">
                <NavIcon><SvgIcon size={20} icon={leaf}/></NavIcon>
                <NavText> ToDo </NavText>
            </Nav>
        </SideNav>
    </div>
)
export default Sidebar;