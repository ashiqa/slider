import React from 'react';
import { SEO } from 'components/seo';
import Order from 'containers/Profile/Order/Order';
import { PageWrapper, SidebarSection } from 'containers/Profile/Profile.style';
import Sidebar from 'containers/Profile/Sidebar/Sidebar';
import { withApollo } from 'helper/apollo';
import { Modal } from '@redq/reuse-modal';

const OrderPage = ({ deviceType }) => {
  return (
    <>
      <SEO title='Order - KiuStore' description='Order Details' />
      <Modal>
        <PageWrapper>
          {deviceType.desktop && (
            <SidebarSection>
              <Sidebar />
            </SidebarSection>
          )}

          <Order deviceType={deviceType} />
        </PageWrapper>
      </Modal>
    </>
  );
};

export default withApollo(OrderPage);
