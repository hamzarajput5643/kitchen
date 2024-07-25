import { useMembershipTypes } from "@app/services/queries";
import "./Types.scss";
import PricingPlans from "@app/components/pricing/PricingPlans";

const MemberShipType = () => {
  const { data: types, isLoading: isTypesLoading } = useMembershipTypes({ skip: false });

  if (isTypesLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <div className="MemberShipType-box">
          <div className="MemberShipType-header">
            <h4>Membership type</h4>
          </div>
          <div className="MemberShipType-body">
            <div className="row">
              <div className="col-3">
                <div className="MemberShipType-card">
                  <div className="MemberShipType-card-header">
                    <h6>Features</h6>
                  </div>
                  <div className="MemberShipType-card-body">
                    <p>Manage Order</p>
                    <p>Manage Sales</p>
                    <p>Manage Menu items</p>
                    <p>Number of items</p>
                    <p>MemberShip Length</p>
                    <p>Price</p>
                  </div>
                </div>
              </div>
              {types?.map((type, index) => (
                <PricingPlans key={index} index={index} type={type} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberShipType;