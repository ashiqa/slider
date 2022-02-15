import React, { useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Waypoint } from "react-waypoint";
import SearchBox from "components/SearchBox/SearchBox";
import { SearchContext } from "contexts/search/search.context";
import { useStickyDispatch } from "contexts/app/app.provider";
import { FormattedMessage } from "react-intl";
import {
  BannerWrapper,
  BannerHeading,
  BannerSubHeading,
  BannerComponent
} from "./Banner.style";

const Banner = ({ imageUrl, intlTitleId, intlDescriptionId }) => {
  const { state, dispatch } = useContext(SearchContext);

  const history = useHistory();
  const location = useLocation();
  // const { text } = state;

  const pathname = location.pathname;

  const handleSearchInput = text => {
    dispatch({
      type: "UPDATE",
      payload: {
        ...state,
        text
      }
    });
  };

  function handleClickSearchButton() {
    const { page, ...urlState } = state;

    history.push(
      {
        pathname: pathname,
        query: { ...urlState }
      },
      {
        pathname: pathname === "/" ? `${pathname}grocery` : pathname,
        query: { ...urlState }
      },
      { shallow: true }
    );
  }
  const useDispatch = useStickyDispatch();
  const setSticky = useDispatch({ type: "SET_STICKY" })
  const removeSticky = useDispatch({ type: "REMOVE_STICKY" })

  const onWaypointPositionChange = ({ currentPosition }) => {
    if (!currentPosition || currentPosition === "above") {
      setSticky();
      // useDispatch({ type: "SET_STICKY" })
    }
  };

  return (
    <BannerWrapper
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    >
      <BannerComponent>
        <BannerHeading>
          <FormattedMessage
            id={intlTitleId}
            defaultMessage="Set Your Title Through Language File"
            values={{ minute: 90 }}
          />
        </BannerHeading>
        <BannerSubHeading>
          <FormattedMessage
            id={intlDescriptionId}
            defaultMessage="Set Your Description Through Language File"
          />
        </BannerSubHeading>

        <SearchBox
          style={{
            width: 700,
            boxShadow: "0 21px 36px rgba(0,0,0,0.05)",
            borderRadius: "6px",
            overflow: "hidden"
          }}
          handleSearch={value => handleSearchInput(value)}
          // value={state.text || ""}
          value={""}
          onClick={handleClickSearchButton}
          className="banner-search"
          pathname={pathname}
        />
        {/* <Waypoint
          onEnter={removeSticky}
          onLeave={setSticky}
          onPositionChange={onWaypointPositionChange}
        /> */}
      </BannerComponent>
    </BannerWrapper>
  );
};
export default Banner;
