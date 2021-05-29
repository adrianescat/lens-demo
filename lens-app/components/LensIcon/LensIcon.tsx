import React, { ReactElement } from 'react'
import { faFileMedical, faFlask, faFilePrescription } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classnames from 'classnames';
import styles from './LensIcon.module.scss';
import { LensType } from '../../types/lens';

const iconMap = {
  [LensType.HISTORY]: faFileMedical,
  [LensType.METAB_LAB_REPORT]: faFlask,
  [LensType.RX_PRESC_REQ]: faFilePrescription,
}


interface Props {
  label: string;
  className?: string;
  title: string;
}

export default function LensIcon({ label, className, title }: Props): ReactElement {
  return (
    <div className={classnames(styles.lensIcon, className)} title={title} aria-label={title}>
      <FontAwesomeIcon className={styles.flagIcon} icon={iconMap[label]} />
    </div>
  )
}
