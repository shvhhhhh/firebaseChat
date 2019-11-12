import React, { memo } from "react";

export default memo(({ message, time, userName, fromSameUser = true }) => (
  <div
    className={`d-flex justify-content-${fromSameUser ? "end" : "start"} mb-4`}
  >
    <div className="img_cont_msg">
      {!fromSameUser && (
        <div
          style={{
            backgroundColor: "white",
            fontWeight: "bolder",
            fontSize: "16px",
            textAlign: "center",
            padding: "6px 0px",
            overflow: "hidden"
          }}
          src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
          className="rounded-circle user_img_msg"
        >
          {`${userName}`}
        </div>
      )}
    </div>
    <div className={`msg_cotainer${fromSameUser ? "_send" : ""}`}>
      {message || "ERROR ERROR ERROR ERROR ERROR"}
      <span className={`msg_time${fromSameUser ? "_send" : ""}`}>
        <b>{!fromSameUser && `${userName} . `}</b>{" "}
        {new Date(time).toLocaleTimeString()}
      </span>
    </div>
  </div>
));
