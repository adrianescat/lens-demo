import React, { ReactElement } from 'react'
import Image from 'next/image';
import styles from './UnderConstruction.module.scss';

export default function UnderConstruction(): ReactElement {
  return (
    <div className={styles.underConstruction}>
      <Image
        src="/img/under_construction.svg"
        alt="Under construction"
        width={300}
        height={300}
      />

      <div>Coming Soon</div>
    </div>
  )
}
