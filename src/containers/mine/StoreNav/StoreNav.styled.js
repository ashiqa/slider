import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const StoreNavWrapper = styled(TabList)`
  width: 100%;
  overflow: hidden;
  z-index: 1;
  position: relative;
  /* height: 55px; */
`;

export const StoreNavLinks = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  height: 80px;
  overflow-y: hidden;
  overflow-x: auto;
  /* padding-top: 15px;
  padding-bottom: 25px; */
  padding-left: 15px;
  padding-right: 15px;
  .store-nav-link {
    margin-right: 10px;
    width: 200px;
    height: 35px;
    background: #6c3a1f;
    border-radius: 40px;
    cursor: pointer;
    transition: 0.4s;

    a {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: 700;
      color: #ffffff;
      padding: 4px 9px;
      border-radius: 6px;
      line-height: 1.2;
      white-space: nowrap;
      li {
        list-style: none;
      }
      svg {
        margin-right: 5px;
        flex-shrink: 0;
      }

      &.current-page {
        color: #6c3a1f;
        background-color: #f8f8f8;
      }
    }
  }
`;

export default StoreNavWrapper;
