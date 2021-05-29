import React, { ReactElement } from 'react'
import { Lens } from '../../types/lens';
import styles from './LensList.module.scss';
import LensBox from '../LensBox';

interface Props {
  lens: Array<Lens>
}

export default function LensList({ lens }: Props): ReactElement {
  return (
    <div role="List of lens" aria-label="List of lens" className={styles.lensList}>
      {lens.map((lens: Lens, index: Number) => (
        <LensBox key={`${lens.patient}-${lens.fileId}`} data={lens} />
      ))}
    </div>
  )
}
