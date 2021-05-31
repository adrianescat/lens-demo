import React, { useRef, useEffect, ReactElement } from 'react'
import classnames from 'classnames';
import styles from './Dot.module.scss';

export interface Props {
  name: string;
  isActive: boolean;
  top: number;
  left: number;
  onClick: () => void;
}

export default function Dot({
  name,
  isActive,
  top,
  left,
  onClick,
}: Props): ReactElement {
  const dotRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = dotRef.current

    if (isActive) {
      const coords = node.getBoundingClientRect();
      window.scroll(0, window.pageYOffset + coords.top - 300);
    }
  }, [isActive])

  return (
    <span
      ref={dotRef}
      key={name}
      data-info={name}
      className={classnames(styles.dot, isActive ? styles.active : '')}
      style={{
        top: `${top}%`,
        left: `${left}%`,
      }}
      onClick={onClick}
    />
  )
}
