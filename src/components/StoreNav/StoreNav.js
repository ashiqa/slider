import React from 'react';
import NavLink from '../NavLink/NavLink';
import StoreNavWrapper, { StoreNavLinks } from './StoreNav.style';
import { GroceryIcon, MakeupIcon, DressIcon, Handbag } from '../AllSvgIcon';

const StoreNav= ({
  className,
  items = [],
}) => {
  return (
    <StoreNavWrapper className={className}>
      <StoreNavLinks>
        {items.map((item, index) => (
          <NavLink
            className='store-nav-link'
            href={item.link}
            label={item.label}
            icon={item.icon}
            key={index}
          />
        ))}
      </StoreNavLinks>
    </StoreNavWrapper>
  );
};

export default StoreNav;
