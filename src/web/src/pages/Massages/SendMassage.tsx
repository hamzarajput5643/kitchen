import React from "react";
import "./SendMassage.scss";

const SendMassage = () => {
  return (
    <>
      <div className="SendMassage-box">
        <div className="SendMassage-header">
          <h4>Send Massage</h4>
        </div>
        <div className="SendMassage-body">
          <div className="row">
            <div className="col-12">
              <label className="SendMassage-lable"> Send To</label>
              <input className="SendMassage-input" type="text" />
            </div>
            <div className="col-12">
              <label className="SendMassage-lable"> Subject</label>
              <input className="SendMassage-input" type="text" />
            </div>
            <div className="col-12">
              <label className="SendMassage-lable">Massage Text</label>
              <textarea className="SendMassage-textarea" rows={5} />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-12">
              <button className="btn-send">Send</button>
              <button className="btn-cancel">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendMassage;