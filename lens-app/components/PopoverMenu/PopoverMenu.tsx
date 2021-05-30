import React, { ReactElement } from 'react'
import classnames from 'classnames';
import styles from './PopoverMenu.module.scss';

interface Props {
  list: Array<any>;
  children: ReactElement;
  isReadOnly?: boolean;
}

export default function PopoverMenu({ list, children, isReadOnly = false }: Props): ReactElement {
  return (
    <div className={styles.popoverWrapper}>
      {children}
      <div className={styles.popoverContent}>
        <ul className={styles.popoverUl}>
          {list.map((option: any) => (
            <li className={classnames(styles.popoverLi, isReadOnly ? styles.readOnly : '')}>
              <span>{option}</span>
              {isReadOnly && option.value && (
                <span className={styles.value}>{option.value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
