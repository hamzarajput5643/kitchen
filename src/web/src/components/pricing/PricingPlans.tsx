import { MembershipType } from "@app/app/interfaces/MembershipType";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

interface PricingProps {
    index: number;
    type: MembershipType;
}

const PricingPlans: React.FC<PricingProps> = ({ index, type }) => {
    return (
        <div className="col-3" key={index}>
            <div className="MemberShipType-card">
                <div className="MemberShipType-card-header">
                    <h6>{type.description}</h6>
                </div>
                <div className="MemberShipType-card-body">
                    {type.orders && <p><TiTick /></p>}
                    {type.sales && <p><TiTick /></p>}
                    {type.items && <p><TiTick /></p>}
                    <p>{type.noOfItems}</p>
                    <p>{type.lengthDesc}</p>
                    <p>{type.price}</p>
                    <Link to={`/admin/membership/payment/${type.typeId}`} className="btn btn-lg btn-block btn-outline-primary">
                        Upgrade Now!
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PricingPlans;