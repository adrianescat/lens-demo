import React from 'react';
import UserMenu from '.';

export default {
  component: UserMenu,
  title: 'UserMenu',
};

const user = { id: 'id', name: 'Adrian Escat' }

export function Basic(): React.ReactNode {
  return (
    <UserMenu user={user} />
  );
}
