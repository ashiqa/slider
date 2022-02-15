import React from 'react';
import { SearchIconSmall } from '../AllSvgIcon';
import { SearchWrapper, Icon, Input } from './SearchField.style';

type Props = {
  [x];
  className?;
  icon?;
  name;
  placeholder?;
};
export default function SearchField({
  className,
  icon = <SearchIconSmall />,
  name,
  placeholder,
  ...props
}: Props) {
  const classes = `search-wrapper ${className}`;
  return (
    <SearchWrapper className={classes.trim()}>
      {icon && <Icon>{icon}</Icon>}
      <Input
        name={name}
        className="search-input"
        type="search"
        placeholder={placeholder}
        {...props}
      />
    </SearchWrapper>
  );
}
