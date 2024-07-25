import "./Membership.scss";

const MemberShip = () => {
  return (
    <>
      <div>
        <div className="MemberShip-box">
          <div className="MemberShip-header">
            <h4>Membership Status</h4>
          </div>
          <div className="MemberShip-body">
            <div>
              <h5>Hamza Kitchen Membership</h5>
            </div>
            <div className="row my-3">
              <div className="col-4">
                <h6 className="fw-bold">Membership Type</h6>
              </div>
              <div className="col-8">
                <p>free Trail</p>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <div style={{ background: "lightgray", padding: "0px 10px" }}>
                  <p>Your Membership is Active</p>
                </div>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-4">
                <h6 className="fw-bold">Expiration Date</h6>
              </div>
              <div className="col-8">
                <p>7/20/2024 12:00:00 AM</p>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-4">
                <h6 className="fw-bold">Renewal Price</h6>
              </div>
              <div className="col-8">
                <p>0.00</p>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-4">
                <h6 className="fw-bold">Auto Renewal is:</h6>
              </div>
              <div className="col-8">
                <p>ON</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button className="btn-Turn-Auto" >Turn Auto-Renewal OFF</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberShip;