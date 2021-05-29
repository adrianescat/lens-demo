import React, { useState, ReactElement } from 'react'
import { Lens } from '../../types/lens';
import styles from './Dashboard.module.scss';
import DashboardMenu from '../DashboardMenu';
import UnderConstruction from '../UnderConstruction';
import LensList from '../LensList';

interface Props {
  lens: Array<Lens>
}

export enum DashboardCategories {
  LENSLIST = 'lens',
  PATIENTS = 'patients',
  HOSPITALS = 'hospitals',
}

export default function Dashboard({ lens }: Props): ReactElement {
  const [category, setCategory] = useState(DashboardCategories.LENSLIST);

  return (
    <section className={styles.dashboard}>
      <DashboardMenu setCategory={setCategory} />
      { category === DashboardCategories.LENSLIST && (<LensList lens={lens} />)}
      { category === DashboardCategories.PATIENTS && (<UnderConstruction />)}
      { category === DashboardCategories.HOSPITALS && (<UnderConstruction />)}
    </section>
  )
}
