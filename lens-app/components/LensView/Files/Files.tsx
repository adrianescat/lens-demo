import React, { useState, useEffect, useCallback, ReactElement } from 'react'
import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Files.module.scss';
import Onboarding from '../Onboarding';

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
  const [flagOnboarding, setFlagOnboarding] = useState(false);
  const [problemOnboarding, setProblemOnboarding] = useState(false);
  const [medicationOnboarding, setMedicationOnboarding] = useState(false);
  const [onboardingsDone, setOnboardingsDone] = useState({ flag: false, problem: false, medication: false });

  const turnOffOnboarding = useCallback((trigger, flagName, setter) => {
    if (trigger) {
      setter(false);
      setOnboardingsDone({ ...onboardingsDone, [flagName]: true });
    }
  }, [onboardingsDone]);

  const handleDotClickWithOnboarding = useCallback((name: string, triggerName: string, setter) => {
    handleDotClick(name);

    if (!onboardingsDone[triggerName]) {
      setter(true);
    }
  }, [onboardingsDone]);

  const handleRandomClick = useCallback(() => {
    turnOffOnboarding(flagOnboarding, 'flag', setFlagOnboarding);
    turnOffOnboarding(problemOnboarding, 'problem', setProblemOnboarding);
    turnOffOnboarding(medicationOnboarding, 'medication', setMedicationOnboarding);
  }, [flagOnboarding, problemOnboarding, medicationOnboarding]);

  useEffect(() => {
    document.body.addEventListener('click', handleRandomClick, true);

    if (onboardingsDone['flag'] && onboardingsDone['problem'] && onboardingsDone['medication']) {
      document.body.removeEventListener('click', handleRandomClick, true);
    }

    return () => {
      document.body.removeEventListener('click', handleRandomClick, true);
    }
  }, [
    handleRandomClick,
    handleDotClickWithOnboarding,
    turnOffOnboarding,
    flagOnboarding,
    problemOnboarding,
    medicationOnboarding,
    onboardingsDone
  ]);

  useEffect(() => {
    if (!!flags.filter((flag: Flag) => flag.name === activeDot).length && !onboardingsDone['flag']) {
      setFlagOnboarding(true);
    }

    if (!!problems.filter((problem: Problem) => problem.name === activeDot).length && !onboardingsDone['problem']) {
      setProblemOnboarding(true);
    }

    if (!!medications.filter((medication: Medication) => medication.name === activeDot).length && !onboardingsDone['medication']) {
      setMedicationOnboarding(true);
    }
  }, [activeDot, onboardingsDone])

  const hasFiles = files.length > 0;
  const isOnboardingActive = flagOnboarding || problemOnboarding || medicationOnboarding;

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
          <div className={classnames(styles.file, isOnboardingActive ? styles.isOnboardingActive : '')} key={file.id}>
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
                onClick={() => handleDotClickWithOnboarding(flag.name, 'flag', setFlagOnboarding)}
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
                onClick={() => handleDotClickWithOnboarding(problem.name, 'problem', setProblemOnboarding)}
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
                onClick={() => handleDotClickWithOnboarding(medication.name, 'medication', setMedicationOnboarding)}
              />
            ))}
          </div>
        ))}
      </div>}
      {flags.length > 0 && (
        <Onboarding
          isActive={flagOnboarding}
          title="Flag"
          description="Lens reads the patients existing medical records, and flags any mention of severe conditions."
        />
      )}
      {problems.length > 0 && (
        <Onboarding
          isActive={problemOnboarding}
          title="Problem"
          description="Lens can recognize problems that are not included in the existing medical records."
        />
      )}
      {medications.length > 0 && (
        <Onboarding
          isActive={medicationOnboarding}
          title="Medications"
          description="Lens can recognize medications that have not been added to existing medical records."
        />
      )}
    </section>
  )
}
