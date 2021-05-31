import React, { ReactElement } from 'react'
import styles from './DashboardMenu.module.scss';
import { DashboardCategories } from '../Dashboard/Dashboard';

export interface Props {
  setCategory: (categoryName: DashboardCategories) => void;
}

export default function DashboardMenu({ setCategory }: Props): ReactElement {
  return (
    <aside className={styles.aside}>
      <ul>
        <li onClick={() => setCategory(DashboardCategories.LENSLIST)}>
          Lens
          </li>
        <li onClick={() => setCategory(DashboardCategories.PATIENTS)}>
          Patients
          </li>
        <li onClick={() => setCategory(DashboardCategories.HOSPITALS)}>
          Hospitals
          </li>
      </ul>
    </aside>
  )
}
