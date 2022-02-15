import React, { useContext } from 'react';
import { Link,useLocation, useHistory } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import Sticky from 'react-stickynode';
import { Scrollbars } from 'react-custom-scrollbars';
import Popover from 'components/Popover/Popover';
import { ArrowDropDown, CategoryIcon } from 'components/AllSvgIcon';
import { SearchContext } from 'contexts/search/search.context';
import { useLocale } from 'contexts/language/language.provider';
import { useStickyState } from 'contexts/app/app.provider';
import {
  SidebarMobileLoader,
  SidebarLoader,
} from 'components/Placeholder/Placeholder';
import { FormattedMessage } from 'react-intl';
import {
  CategoryWrapper,
  TreeWrapper,
  PopoverHandler,
  PopoverWrapper,
  SidebarWrapper,
  RequestMedicine,
  Loading,
} from './Sidebar.style';

import { TreeMenu } from 'components/TreeMenu/TreeMenu';

import { GET_CATEGORIES } from 'graphql/query/category.query';

import { REQUEST_MEDICINE_PAGE } from 'constants/navigation';


const SidebarCategory = ({
  deviceType: { mobile, tablet, desktop },
  type,
}) => {
  const { state, dispatch } = useContext(SearchContext);
  const history = useHistory();
  const location = useLocation();
  const pathname = location.pathname;
  const query = new URLSearchParams(location.search);
  const { data, loading } = useQuery(GET_CATEGORIES, {
    variables: { type },
  });
  const selectedQueries = query.get("category");

  const { isRtl } = useLocale();

  const handleCategorySelection = (slug) => {
    const updatedQuery = state.text
      ? { text: state.text, category: slug }
      : { category: slug };
    history.push({
      pathname: pathname,
      query: updatedQuery,
    });
  };
  const isSidebarSticky = useStickyState('isSidebarSticky');

  if (!data || loading) {
    if (mobile || tablet) {
      return <SidebarMobileLoader />;
    }

    return <SidebarLoader />;
  }

  return (
    <CategoryWrapper>
      <PopoverWrapper>
        <Popover
          handler={
            <PopoverHandler>
              <div>
                <CategoryIcon />
                Select your Category
              </div>
              <div>
                <ArrowDropDown />
              </div>
            </PopoverHandler>
          }
          className='category-popover'
          content={
            <>
              {type === 'medicine' && (
                <Link to={REQUEST_MEDICINE_PAGE}>
                  <RequestMedicine>
                    <FormattedMessage id='reqMedicine' />
                  </RequestMedicine>
                </Link>
              )}
              <TreeMenu
                data={data.categories}
                onClick={handleCategorySelection}
                active={selectedQueries}
              />
            </>
          }
        />
      </PopoverWrapper>

      <SidebarWrapper style={{ paddingTop: type === 'medicine' ? 0 : 45 }}>
        <Sticky enabled={isSidebarSticky} top={type === 'medicine' ? 89 : 110}>
          {type === 'medicine' && (
            <Link to={REQUEST_MEDICINE_PAGE}>
              <RequestMedicine>
                <FormattedMessage id='reqMedicine' />
              </RequestMedicine>
            </Link>
          )}

          <Scrollbars
            universal
            autoHide
            autoHeight
            autoHeightMax={688}
            renderView={(props) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  marginLeft: isRtl ? props.style.marginRight : 0,
                  marginRight: isRtl ? 0 : props.style.marginRight,
                }}
              />
            )}
          >
            <TreeWrapper>
              <TreeMenu
                data={data.categories}
                onClick={handleCategorySelection}
                active={selectedQueries}
              />
            </TreeWrapper>
          </Scrollbars>
        </Sticky>
      </SidebarWrapper>
    </CategoryWrapper>
  );
};

export default SidebarCategory;
