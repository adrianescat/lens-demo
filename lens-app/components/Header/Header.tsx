import React, { ReactElement } from 'react';
import classnames from 'classnames';
import styles from './Header.module.scss';
import Title from '../Title';
import UserMenu from '../UserMenu';
import { User } from '../../types/user';

interface Props {
  user: User;
}

export default function Header({ user }: Props): ReactElement {
  return (
    <header className={classnames(styles.header, 'container')}>
      <Title className={styles.brand} />
      <UserMenu user={user} />
    </header>
  )
}
