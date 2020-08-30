import React, { Fragment } from 'react';
import SubjectComponent from './SubjectComponent/SubjectComponent';
import Group from './Group/Group';
import AnotherUser from './AnotherUser/AnotherUser';
const Chat = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-sm-4">
          <SubjectComponent />
        </div>
        <div className="col-sm-4">
          <AnotherUser />
        </div>
      </div>

      <Group />
    </Fragment>
  )
}

export default Chat;
