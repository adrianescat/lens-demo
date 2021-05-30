import React, { ReactElement } from 'react'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Lens } from '../../types/lens';
import styles from './LensList.module.scss';
import LensBox from '../LensBox';

interface Props {
  lens: Array<Lens>
}

export default function LensList({ lens }: Props): ReactElement {
  return (
    <div className={styles.lensListContainer}>
      <div className={styles.lensListFilters}>
        <div className={styles.filtersPills}>
          <div>
            {lens.length} results
          </div>
        </div>
        <div role="Filter" aria-label="Filter" className={styles.filtersOptions}>
          <span>Filter</span>
          <span><FontAwesomeIcon className={styles.filterIcon} icon={faSlidersH} /></span>
        </div>
      </div>
      <div role="List of lens" aria-label="List of lens" className={styles.lensList}>
        {lens.map((lens: Lens, index: Number) => (
          <LensBox key={lens.id} data={lens} />
        ))}
      </div>
    </div>
  )
}
