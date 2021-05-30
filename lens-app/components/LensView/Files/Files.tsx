import React, { ReactElement } from 'react'
import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Files.module.scss';

import {
  File,
  Flag,
  Problem,
  Allergy,
  Medication,
} from '../../../types/lens';

interface Props {
  lensId: string;
  activeDot: string;
  files: Array<File>;
  flags: Array<Flag>;
  problems: Array<Problem>;
  allergies: Array<Allergy>;
  medications: Array<Medication>;
  handleDotClick: (name: string) => void;
}

export default function Files({
  lensId,
  activeDot,
  files,
  flags,
  problems,
  allergies,
  medications,
  handleDotClick,
}: Props): ReactElement {
  const hasFiles = files.length > 0;

  return (
    <section className={styles.fileSection}>
      <div className={styles.header}>
        <button className={styles.doneButton}>
          <Link href="/dashboard">
            Done
          </Link>
        </button>
      </div>
      {hasFiles && <div className={classnames(styles.files, hasFiles ? styles.hasFiles : '')}>
        {files.map((file: File, index: number) => (
          <div className={styles.file} key={file.id}>
            <Image
              src={`/img/${lensId}_${index}.png`}
              alt="file"
              width={file.width}
              height={file.height}
            />

            {/* flags */}
            {flags.filter((flag: Flag) => flag.page === index).map((flag: Flag) => (
              <span
                key={flag.name}
                data-info={flag.name}
                className={classnames(styles.dot, flag.name === activeDot ? styles.active : '')}
                style={{
                  top: `${flag.box.t}%`,
                  left: `${flag.box.l}%`,
                }}
                onClick={() => handleDotClick(flag.name)}
              />
            ))}

            {/* problems */}
            {problems.filter((problem: Problem) => problem.page === index).map((problem: Problem) => (
              <span
                key={problem.name}
                data-info={problem.name}
                className={classnames(styles.dot, problem.name === activeDot ? styles.active : '')}
                style={{
                  top: `${problem.box.t}%`,
                  left: `${problem.box.l}%`,
                }}
                onClick={() => handleDotClick(problem.name)}
              />
            ))}

            {/* allergies */}
            {allergies.filter((allergy: Allergy) => allergy.page === index).map((allergy: Allergy) => (
              <span
                key={allergy.name}
                data-info={allergy.name}
                className={classnames(styles.dot, allergy.name === activeDot ? styles.active : '')}
                style={{
                  top: `${allergy.box.t}%`,
                  left: `${allergy.box.l}%`,
                }}
                onClick={() => handleDotClick(allergy.name)}
              />
            ))}

            {/* medications */}
            {medications.filter((medication: Medication) => medication.page === index).map((medication: Medication) => (
              <span
                key={medication.name}
                data-info={medication.name}
                className={classnames(styles.dot, medication.name === activeDot ? styles.active : '')}
                style={{
                  top: `${medication.box.t}%`,
                  left: `${medication.box.l}%`,
                }}
                onClick={() => handleDotClick(medication.name)}
              />
            ))}
          </div>
        ))}
      </div>}
    </section>
  )
}
