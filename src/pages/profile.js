import React from 'react';
import {Link} from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Modal } from '@redq/reuse-modal';
import { GET_LOGGED_IN_CUSTOMER } from 'graphql/query/customer.query';
import { ProfileProvider } from 'contexts/profile/profile.provider';
import SettingsContent from 'containers/Profile/Settings/Settings';
import {
  PageWrapper,
  SidebarSection,
  ContentBox,
} from 'containers/Profile/Profile.style';
import Sidebar from 'containers/Profile/Sidebar/Sidebar';
import { SEO } from 'components/seo';
import SiteFooter from 'components/SiteFooter/SiteFooter';
import { FormattedMessage } from 'react-intl';
import { withApollo } from 'helper/apollo';

const ProfilePage= ({ deviceType }) => {
  const { data, error, loading } = useQuery(GET_LOGGED_IN_CUSTOMER);
  if (!data || loading) {
    return <div>loading...</div>;
  }
  if (error) return <div>{error.message}</div>;
  return (
    <>
      <SEO title='Profile - KiuStore' description='Profile Details' />
      <ProfileProvider initData={data.me}>
        <Modal>
          <PageWrapper>
            <SidebarSection>
              <Sidebar />
            </SidebarSection>
            <ContentBox>
              <SettingsContent deviceType={deviceType} />
            </ContentBox>

            <SiteFooter style={{ marginTop: 50 }}>
              <FormattedMessage
                id='siteFooter'
                defaultMessage='KiuDelivery is a product of'
              />
              &nbsp; <Link to='https://www.github.com/larrykamau'>Void Labs</Link>
            </SiteFooter>
          </PageWrapper>
        </Modal>
      </ProfileProvider>
    </>
  );
};

export default withApollo(ProfilePage);
