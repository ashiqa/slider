import React from 'react';
import Table from 'rc-table';
import Collapse, { Panel } from 'rc-collapse';
import Progress from 'components/ProgressBox/ProgressBox';

import {
  OrderListHeader,
  TrackID,
  Status,
  OrderMetas,
  Meta,
  CardWrapper,
  OrderDetail,
  DeliveryInfo,
  DeliveryAddress,
  Address,
  CostCalculation,
  PriceRow,
  Price,
  ProgressWrapper,
  OrderTable,
  OrderTableMobile,
} from './OrderCard.style';

import { CURRENCY } from 'helper/constant';


const components = {
  table: OrderTable,
};

const OrderCard = ({
  onClick,
  className,
  columns,
  progressData,
  orders,
}) => {
  //   const displayDetail = className === 'active' ? '100%' : '0';
  const addAllClasses = ['accordion'];

  if (className) {
    addAllClasses.push(className);
  }
  return (
    <>
      <Collapse
        accordion={true}
        className={addAllClasses.join(' ')}
        defaultActiveKey='active'
        expandIcon={() => {}}
      >
        {orders.map((order) => (
          <Panel
            header={
              <CardWrapper onClick={onClick}>
                <OrderListHeader>
                  <TrackID>
                    Order <span>#{order.id}</span>
                  </TrackID>
                  <Status>{progressData[order.status - 1]}</Status>
                </OrderListHeader>

                <OrderMetas>
                  <Meta>
                    Order Date: <span>{order.date}</span>
                  </Meta>
                  <Meta>
                    Delivery Time: <span>{order.deliveryTime}</span>
                  </Meta>
                  <Meta className='price'>
                    Total Price:
                    <span>
                      {CURRENCY}
                      {order.amount}
                    </span>
                  </Meta>
                </OrderMetas>
              </CardWrapper>
            }
            headerClass='accordion-title'
            key={order.id}
          >
            <OrderDetail>
              <DeliveryInfo>
                <DeliveryAddress>
                  <h3>Delivery Address</h3>
                  <Address>{order.deliveryAddress}</Address>
                </DeliveryAddress>

                <CostCalculation>
                  <PriceRow>
                    Subtotal
                    <Price>
                      {CURRENCY}
                      {order.subtotal}
                    </Price>
                  </PriceRow>
                  <PriceRow>
                    Discount
                    <Price>
                      {CURRENCY}
                      {order.discount}
                    </Price>
                  </PriceRow>
                  <PriceRow>
                    Delivery Fee
                    <Price>
                      {CURRENCY}
                      {order.deliveryFee}
                    </Price>
                  </PriceRow>
                  <PriceRow className='grandTotal'>
                    Total
                    <Price>
                      {CURRENCY}
                      {order.amount}
                    </Price>
                  </PriceRow>
                </CostCalculation>
              </DeliveryInfo>

              <ProgressWrapper>
                <Progress data={progressData} status={order.status} />
              </ProgressWrapper>

              <OrderTableMobile>
                <Table
                  columns={columns}
                  data={order.products}
                  rowKey={record => record.id}
                  components={components}
                  scroll={{ x: 450 }}
                  // scroll={{ y: 250 }}
                />
              </OrderTableMobile>
            </OrderDetail>
          </Panel>
        ))}
      </Collapse>
    </>
  );
};

export default OrderCard;
