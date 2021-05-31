import React, { ReactElement } from 'react';
import classnames from 'classnames';
import styles from './Header.module.scss';
import Title from '../Title';
import UserMenu from '../UserMenu';
import { User } from '../../types/user';
import Link from 'next/link';

export interface Props {
  user: User;
}

export default function Header({ user }: Props): ReactElement {
  return (
    <header className={classnames(styles.header, 'container')}>
      <Link href="/">
        <>
          <Title className={styles.brand} />
        </>
      </Link>
      <UserMenu user={user} />
    </header>
  )
}
