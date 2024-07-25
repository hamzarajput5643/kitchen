import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '@components';
import { Image } from '@profabric/react-components';
import styled from 'styled-components';
import i18n from '@app/utils/i18n';
import { useAppDispatch, useAppSelector } from '@app/store/store';
import { fetchDashboardNav } from '@app/store/reducers/dashboard';
import { capitalizeName } from '@app/utils/constants';

const StyledBrandImage = styled(Image)`
  float: left;
  line-height: 0.8;
  margin: -1px 8px 0 6px;
  opacity: 0.8;
  --pf-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23) !important;
`;

const StyledUserImage = styled(Image)`
  --pf-box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b !important;
`;

const MenuSidebar = () => {
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector((state) => state.dashboard);
    const sidebarSkin = useAppSelector((state) => state.ui.sidebarSkin);
    const menuItemFlat = useAppSelector((state) => state.ui.menuItemFlat);
    const menuChildIndent = useAppSelector((state) => state.ui.menuChildIndent);

    useEffect(() => {
        dispatch(fetchDashboardNav());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const userName = data?.userName || '';
    const userId = data?.userId || '';
    const hasKitchen = data?.hasKitchen || false;
    const hasMembership = data?.hasMembership || false;
    const formattedName = capitalizeName(userName);
    const profileImage = hasKitchen
        ? `/Kitchen/KitchenProfilePhoto/${data?.kitchenId}?size=medium`
        : `/User/UserProfilePhoto/${userId}?size=medium`;

    const generateMenuItems = (hasKitchen: boolean, hasMembership: boolean) => {
        let menuItems = [
            {
                name: i18n.t("My Vehicles"),
                icon: "fas fa-car nav-icon",
                path: "/admin/vehicles",
            },
            {
                name: i18n.t("Address Book"),
                icon: "fas fa-book nav-icon",
                path: "/admin/address",
            },
            {
                name: i18n.t("Account Setting"),
                icon: "fas fa-cog nav-icon",
                path: "/admin/account/setting",
            },
            {
                name: i18n.t("My Purchases"),
                icon: "fas fa-credit-card nav-icon",
                path: "/admin/purchase",
            },
        ];

        if (hasKitchen) {
            menuItems = [
                ...menuItems,
                {
                    name: i18n.t("My Menu Items"),
                    icon: "fas fa-utensils nav-icon",
                    path: "/admin/menu/items",
                },
                {
                    name: i18n.t("Customer Order"),
                    icon: "fas fa-envelope nav-icon",
                    path: "/admin/orders",
                },
                {
                    name: i18n.t("Message Center"),
                    icon: "fas fa-envelope nav-icon",
                    path: "/admin/messages",
                },
                {
                    name: i18n.t("My Sales"),
                    icon: "fas fa-dollar-sign nav-icon",
                    path: "/admin/sales",
                },
                {
                    name: i18n.t("Kitchen Setting"),
                    icon: "fas fa-cog nav-icon",
                    path: "/admin/kitchen/settings",
                },
            ];
        } else {
            menuItems = [
                ...menuItems,
                {
                    name: i18n.t("Search Meals"),
                    icon: "fas fa-utensils nav-icon",
                    path: "/admin/menu/items",
                },
                {
                    name: i18n.t("Message Center"),
                    icon: "fas fa-envelope nav-icon",
                    path: "/admin/messages",
                },
                {
                    name: i18n.t("Open New Kitchen"),
                    icon: "fas fa-plus nav-icon",
                    path: "/admin/kitchen/settings",
                },
            ];
        }

        if (hasMembership) {
            menuItems.push({
                name: i18n.t("Membership"),
                icon: "fas fa-user nav-icon",
                path: "/admin/membership",
            });
        } else {
            menuItems.push({
                name: i18n.t("Membership"),
                icon: "fas fa-user nav-icon",
                path: "/admin/membership/select",
            });
        }

        return menuItems;
    };

    return (
        <aside className={`main-sidebar elevation-4 ${sidebarSkin}`}>
            <Link to="/" className="brand-link">
                <StyledBrandImage
                    src="/src/Admin/img/logo.png"
                    alt="AdminLTE Logo"
                    width={33}
                    height={33}
                    rounded
                />
                <span className="brand-text font-weight-light">Divvy Dinner</span>
            </Link>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <StyledUserImage
                            src={profileImage}
                            alt="User Profile"
                            width={50}
                            height={50}
                            rounded
                        />
                    </div>
                    <div className="info">
                        <Link to={"/profile"} className="d-block">
                            {formattedName}
                        </Link>
                    </div>
                </div>

                <nav className="mt-2" style={{ overflowY: "hidden" }}>
                    <ul
                        className={`nav nav-pills nav-sidebar flex-column${menuItemFlat ? " nav-flat" : ""
                            }${menuChildIndent ? " nav-child-indent" : ""}`}
                        role="menu"
                    >
                        {generateMenuItems(hasKitchen, hasMembership).map((menuItem) => (
                            <MenuItem
                                key={menuItem.name + menuItem.path}
                                menuItem={menuItem}
                            />
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default MenuSidebar;