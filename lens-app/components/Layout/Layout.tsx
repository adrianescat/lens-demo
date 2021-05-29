import React, { ReactElement } from 'react';
import styles from './Layout.module.scss';

export default function Layout({ children }): ReactElement {
  return <div className={styles.layout}>{children}</div>
}