// import React, { useState } from 'react';
// import { Button, Popover } from 'antd';
// const Float = () => {
//   const [clicked, setClicked] = useState(false);
//   const [hovered, setHovered] = useState(false);
//   const hide = () => {
//     setClicked(false);
//     setHovered(false);
//   };
//   const handleHoverChange = (open) => {
//     setHovered(open);
//     setClicked(false);
//   };
//   const handleClickChange = (open) => {
//     setHovered(false);
//     setClicked(open);
//   };
//   const hoverContent = <div>This is hover content.</div>;
//   const clickContent = <div>This is click content.</div>;
//   return (
//     <Popover
//       style={{
//         width: 500,
//       }}
//       content={hoverContent}
//       title="Hover title"
//       trigger="hover"
//       open={hovered}
//       onOpenChange={handleHoverChange}
//     >
//       <Popover
//         content={
//           <div>
//             {clickContent}
//             <a onClick={hide}>Close</a>
//           </div>
//         }
//         title="Click title"
//         trigger="click"
//         open={clicked}
//         onOpenChange={handleClickChange}
//       >
//         <Button>Hover and click / 悬停并单击</Button>
//       </Popover>
//     </Popover>
//   );
// };
// export default Float;

import {Component, useState} from "react";
import { CommentOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { FloatButton, Drawer, Space, Button, ConfigProvider } from "antd";

const App = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

    const globalTokens = {
        token: {
            colorPrimary: "#1677ff",
            controlHeightLG: "50px",
        },
        Component: {
            
            }
    }
  return (
    <>
        <ConfigProvider theme={globalTokens}>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{
          insetInlineEnd: 24,
        }}
        icon={<PlusCircleOutlined />}
        onClick={showDrawer}
        tooltip="Apply Now"
      >
      </FloatButton.Group>
    </ConfigProvider>
      {/* <FloatButton.Group
      trigger="hover"
      type="primary"
      style={{
        insetInlineEnd: 94,
      }}
      icon={<CustomerServiceOutlined />}
    >
      <FloatButton />
      <FloatButton icon={<CommentOutlined />} />
    </FloatButton.Group> */}


<Drawer
        title="Drawer with extra actions"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        // extra={
        //   <Space>
        //     <Button onClick={onClose}>Cancel</Button>
        //     <Button type="primary" onClick={onClose}>
        //       OK
        //     </Button>
        //   </Space>
        // }
        >
            {/* 
            apply link 
            https://forms.gle/Mhqez7JrPM4iQE9A9

            contact details
            Dineth Bandara 
LCVP  for Digital experience and B2C Marketing - AIESEC in SLIIT 
078 746 7510


Kavithi Moonasingha
LCVP for Incoming Global Talent/ Teacher - AIESEC in SLIIT 
076 589 6187
            */}
        <div className="text-center p-8 bg-white shadow-lg rounded-lg">
    <h1 className="text-4xl font-bold mb-4 text-gray-800">Apply Now</h1>
    <p className="text-lg text-slate-600 mb-6">Apply now to be a part of the organizing committee of Benchmark 3.0</p>
    <a href="https://forms.gle/Mhqez7JrPM4iQE9A9" target="_blank" rel="noreferrer">
        <Button type="primary" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">Apply Now</Button>
    </a>
    <h1 className="text-4xl font-bold mt-10 mb-4 text-gray-800">Contact Details</h1>
    <p className="text-lg text-slate-600 mb-2">Contact the LCVPs for more information</p>
    
    <div className="mt-4 space-y-6">
        <div>
            <p className="font-semibold text-lg text-gray-800">Dineth Bandara</p>
            <p className="text-slate-600">LCVP for Digital Experience and B2C Marketing - AIESEC in SLIIT</p>
            <p className="text-slate-600">0787467510</p>
        </div>
        <div>
            <p className="font-semibold text-lg text-gray-800">Kavithi Moonasingha</p>
            <p className="text-slate-600">LCVP for Incoming Global Talent/ Teacher - AIESEC in SLIIT</p>
            <p className="text-slate-600">0765896187</p>
        </div>
    </div>
</div>

        </Drawer>
    </>
  );
};
export default App;
