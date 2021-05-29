import React, { ReactElement } from 'react';
import styles from './AppMenu.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function AppMenu(): ReactElement {
  return (
    <section className={styles.appMenu}>
      <Link href="/dashboard">
        <div className={styles.option}>
          <Image
            src="/img/dashboard.svg"
            alt="Go to dashboard"
            width={300}
            height={300}
          />

          <div>DASHBOARD</div>
        </div>
      </Link>

      <div className={styles.option}>
        <Image
          src="/img/add_lens.svg"
          alt="Add Lens"
          width={300}
          height={300}
          className={styles.unavailable}
        />

        <div>ADD LENS</div>
      </div>

      <div className={styles.option}>
        <Image
          src="/img/support.svg"
          alt="Support"
          width={300}
          height={300}
          className={styles.unavailable}
        />

        <div>SUPPORT</div>
      </div>
    </section>
  )
}
