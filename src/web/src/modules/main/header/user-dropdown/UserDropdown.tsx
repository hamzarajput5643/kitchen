import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { StyledBigUserImage, StyledSmallUserImage } from '@app/styles/common';
import {
  UserBody,
  UserFooter,
  UserHeader,
  UserMenuDropdown,
} from '@app/styles/dropdown-menus';
import { } from '@app/index';
import { useAppDispatch, useAppSelector } from '@app/store/store';
import { DateTime } from 'luxon';
import { logoutAsync, selectAuth } from '@app/store/reducers/auth';
import { useDispatch } from 'react-redux';

const UserDropdown = () => {
  const navigate = useNavigate();
  const [t] = useTranslation();
  const currentUser = useAppSelector(selectAuth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useAppDispatch();

  const logOut = async (event: any) => {
    dispatch(logoutAsync());
    event.preventDefault();
    setDropdownOpen(false);
  };

  const navigateToProfile = (event: any) => {
    event.preventDefault();
    setDropdownOpen(false);
    navigate('/admin/profile');
  };

  return (
    <UserMenuDropdown isOpen={dropdownOpen} hideArrow>
      <StyledSmallUserImage
        slot="head"
        src=""
        fallbackSrc="/img/default-profile.png"
        alt="User"
        width={25}
        height={25}
        rounded
      />
      <div slot="body">
        <UserHeader className=" bg-primary">
          <StyledBigUserImage
            src=""
            fallbackSrc="/img/default-profile.png"
            alt="User"
            width={90}
            height={90}
            rounded
          />
          {/* <p>
            {currentUser?.email}
            <small>
              <span>Member since </span>
              {currentUser?.metadata?.creationTime && (
                <span>
                  {DateTime.fromRFC2822(
                    currentUser?.metadata?.creationTime
                  ).toFormat('dd LLL yyyy')}
                </span>
              )}
            </small>
          </p> */}
        </UserHeader>
        {/* <UserBody>
          <div className="row">
            <div className="col-4 text-center">
              <Link to="/">{t('header.user.followers')}</Link>
            </div>
            <div className="col-4 text-center">
              <Link to="/">{t('header.user.sales')}</Link>
            </div>
            <div className="col-4 text-center">
              <Link to="/">{t('header.user.friends')}</Link>
            </div>
          </div>
        </UserBody> */}
        <UserFooter>
          <button
            type="button"
            className="btn btn-default btn-flat"
            onClick={navigateToProfile}
          >
            {t('header.user.profile')}
          </button>
          <button
            type="button"
            className="btn btn-default btn-flat float-right"
            onClick={logOut}
          >
            {t('login.button.signOut')}
          </button>
        </UserFooter>
      </div>
    </UserMenuDropdown>
  );
};

export default UserDropdown;