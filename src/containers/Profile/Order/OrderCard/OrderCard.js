import React from 'react';
import {
  SingleOrderList,
  OrderListHeader,
  TrackID,
  Status,
  OrderMetas,
  Meta,
} from './OrderCard.style';
import { FormattedMessage } from 'react-intl';

import { CURRENCY } from 'helper/constant';

const OrderCard= ({
  orderId,
  onClick,
  className,
  status,
  date,
  deliveryTime,
  amount,
}) => {
  return (
    <>
      <SingleOrderList onClick={onClick} className={className}>
        <OrderListHeader>
          <TrackID>
            <FormattedMessage
              id='intlOrderCardTitleText'
              defaultMessage='Order'
            />
            <span>#{orderId}</span>
          </TrackID>
          <Status>{status}</Status>
        </OrderListHeader>

        <OrderMetas>
          <Meta>
            <FormattedMessage
              id='intlOrderCardDateText'
              defaultMessage='Order Date'
            />
            : <span>{date}</span>
          </Meta>
          <Meta>
            <FormattedMessage
              id='deliveryTimeText'
              defaultMessage='Delivery Time'
            />
            : <span>{deliveryTime}</span>
          </Meta>
          <Meta className='price'>
            <FormattedMessage
              id='intlOrderCardTotalText'
              defaultMessage='Total Price'
            />
            :
            <span>
              {CURRENCY}
              {amount}
            </span>
          </Meta>
        </OrderMetas>
      </SingleOrderList>
    </>
  );
};

export default OrderCard;