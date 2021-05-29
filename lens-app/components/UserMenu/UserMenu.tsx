import React, { ReactElement } from 'react'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './UserMenu.module.scss';
import { User } from '../../types/user';

interface Props {
  user: User;
}

export default function UserMenu({ user }: Props): ReactElement {
  return (
    <div className={styles.userMenu}>
      <span>{user.name}</span>
      <span className={styles.iconContainer}>
        <FontAwesomeIcon className={styles.settingsIcon} icon={faCog} />
      </span>
    </div>
  )
}
