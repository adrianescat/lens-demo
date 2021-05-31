import React, { ReactElement } from 'react'
import classnames from 'classnames';
import styles from './Onboarding.module.scss';

interface Props {
  isActive?: boolean;
  title: string;
  description: string;
}

export default function Onboarding({
  isActive = false,
  title,
  description,
}: Props): ReactElement {
  return (
    <div className={classnames(styles.onboarding, isActive ? styles.active : '')}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
