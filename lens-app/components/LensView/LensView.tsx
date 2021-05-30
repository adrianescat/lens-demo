import React, { ReactElement } from 'react'
import styles from './LensView.module.scss';
import { Lens } from '../../types/lens';

interface Props {
  data: Lens;
}

export default function LensView({ data }: Props): ReactElement {
  return (
    <div className={styles.lensView}>
      {data.id}
    </div>
  )
}
