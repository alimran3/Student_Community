"use client"
import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';

export const FacebookMsg = () => {
  return (
    <FacebookProvider appId="1304410247406246" chatSupport>
      <CustomChat pageId="463424306856020" minimized={true}/>
    </FacebookProvider>    
  );
}
