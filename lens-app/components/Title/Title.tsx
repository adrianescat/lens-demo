import React, { ReactElement } from 'react';
import classNames from 'classnames';
import styles from './Title.module.scss'

interface Props {
  className?: string;
}

export default function Title(props: Props): ReactElement {
  return (
    <h1 className={classNames(styles.title, props.className)}>
      Lens
    </h1>
  )
}