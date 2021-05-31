import React, { ReactElement } from 'react'
import classnames from 'classnames';
import styles from './PopoverMenu.module.scss';

export interface Props {
  list: Array<any>;
  children: ReactElement;
}

export default function PopoverMenu({ list, children }: Props): ReactElement {
  return (
    <div className={styles.popoverWrapper}>
      {children}
      <div className={styles.popoverContent}>
        <ul>
          {list.map((option: any, index) => (
            <li key={`option-${index}`} className={classnames(styles.popoverLi, option.value ? styles.readOnly : '')}>
              <span>{option.label ? option.label : option}</span>
              {option.value && (
                <span className={styles.value}>{option.value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
