import React, { ReactElement } from 'react'
import { faStar, faHospitalUser, faFlag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dateFormat from 'dateformat';
import Link from 'next/link';
import { Lens } from '../../types/lens';
import styles from './LensBox.module.scss';
import LensIcon from '../LensIcon';

export interface Props {
  data: Lens;
}

export default function LensBox({ data }: Props): ReactElement {
  const date = dateFormat(new Date(data.lastUpdated), 'mm/dd/yyyy');

  return (
    <Link href={`/lens/${data.id}`}>
      <div role="Lens" aria-label="Lens" className={styles.lensBox}>
        <div>
          <div className={styles.name}>
            {`${data.patient.firstName} ${data.patient.lastName}`}
          </div>
          <div className={styles.id}>id: {data.patient.emrId}</div>
        </div>
        <div className={styles.summaryScore} title="Summary score" aria-label="Summary score">
          <span>
            <FontAwesomeIcon className={styles.scoreIcon} icon={faStar} />
          </span>
          <span>
            {data.summaryScore}
          </span>
        </div>

        <div className={styles.patientScore} title="Patient score" aria-label="Patient score">
          <span>
            <FontAwesomeIcon className={styles.patientIcon} icon={faHospitalUser} />
          </span>
          <span>
            {data.patientScore}
          </span>
        </div>
        <div className={styles.lastUpdated}>Last updated: {date}</div>
        {data.urgent && (
          <div className={styles.urgentWrapper} title="Urgent" aria-label="Urgent">
            <div className={styles.urgentRibbon}>
              <FontAwesomeIcon className={styles.flagIcon} icon={faFlag} />
            </div>
          </div>)
        }
        <LensIcon label={data.summaryLabel} title={data.summary} className={styles.lensIcon} />
      </div>
    </Link>
  )
}
