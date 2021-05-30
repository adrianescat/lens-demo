import React, { useState, ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classnames from 'classnames';
import styles from './LensView.module.scss';
import {
  Lens,
  File,
  Flag,
  Problem,
  Allergy,
  Medication,
  flagActions,
} from '../../types/lens';
import PopoverMenu from '../PopoverMenu';
import LensInfoGroup from './LensInfoGroup';

interface Props {
  data: Lens;
}

export default function LensView({ data }: Props): ReactElement {
  const [activeDot, setActiveDot] = useState('');
  const [selectedTabId, setSelectedTabId] = useState('tab1');
  const [flags, setFlags] = useState<[] | Array<Flag>>(data.flags.length > 0 ? data.flags : []);
  const [problems, setProblems] = useState<[] | Array<Problem>>(data.problems.length > 0 ? data.problems : []);
  const [allergies, setAllergies] = useState<[] | Array<Allergy>>(data.allergies.length > 0 ? data.allergies : []);
  const [medications, setMedication] = useState<[] | Array<Medication>>(data.medications.length > 0 ? data.medications : []);
  const [flagsDone, setflagsDone] = useState<[] | Array<Flag>>([]);

  const hasFiles = data.files.length > 0;

  function handleDotClick(name: string): void {
    setActiveDot(name);
  }

  function handleRemoveItem(name: string, collection, setter): void {
    const result = collection.filter((item) => item.name !== name);
    setter(result);
    setTimeout(handleClearDot, 0);
  }

  function handleMoveItem(name: string, collection, setter, collectionMoveTo, setterMoveTo): void {
    const item = collection.find((item) => item.name === name);
    const result = collection.filter((item) => item.name !== name);
    setter(result);
    setterMoveTo([...collectionMoveTo, item]);
    setTimeout(handleClearDot, 0);
  }

  function handleClearDot(): void {
    setActiveDot('none');
  }

  function handleTabClick(tabId: string): void {
    setActiveDot('none');
  }


  return (
    <div className={styles.lensView}>
      <section className={styles.fileSection}>
        <div className={styles.header}>
          <button className={styles.doneButton}>
            <Link href="/dashboard">
              Done
            </Link>
          </button>
        </div>
        {hasFiles && <div className={classnames(styles.files, hasFiles ? styles.hasFiles : '')}>
          {data.files.map((file: File, index: number) => (
            <div className={styles.file} key={file.id}>
              <Image
                src={`/img/${data.id}_${index}.png`}
                alt="file"
                width={file.width}
                height={file.height}
              />

              {/* flags */}
              {data.flags.filter((flag: Flag) => flag.page === index).map((flag: Flag) => (
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
              {data.problems.filter((problem: Problem) => problem.page === index).map((problem: Problem) => (
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
              {data.allergies.filter((allergy: Allergy) => allergy.page === index).map((allergy: Allergy) => (
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
              {data.medications.filter((medication: Medication) => medication.page === index).map((medication: Medication) => (
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
      <aside className={styles.sidebar}>
        <div className="navbar"></div>
        <div className={styles.heading}>Outline</div>
        <div className="sidebarTabs">
          <ul className={styles.tabs}>
            <li className={styles.tab}>
              <input type="radio" name="tabs" defaultChecked={selectedTabId === 'tab1'} id="tab1" />
              <label
                htmlFor="tab1"
                onClick={() => handleTabClick('tab1')}
              >
                Review
              </label>
              <div id="tab-content1" className={styles.content}>

                <LensInfoGroup
                  groupName="Flag"
                  list={flags}
                  listDone={flagsDone}
                  hasActions
                  actions={flagActions}
                  activeDot={activeDot}
                  listSetter={setFlags}
                  handleClearDot={handleClearDot}
                  listDoneSetter={setflagsDone}
                  handleDotClick={handleDotClick}
                  handleRemoveItem={handleRemoveItem}
                  handleMoveItem={handleMoveItem}
                />
              </div>
            </li>
            <li className={styles.tab}>
              <input type="radio" name="tabs" defaultChecked={selectedTabId === 'tab2'} id="tab2" />
              <label
                htmlFor="tab2"
                onClick={() => handleTabClick('tab2')}
              >
                Done
              </label>
              <div id="tab-content2" className={styles.content}>
                <LensInfoGroup
                  groupName="Flag"
                  isDoneList
                  list={flagsDone}
                  listDone={flags}
                  hasActions
                  actions={flagActions}
                  activeDot={activeDot}
                  listSetter={setflagsDone}
                  handleClearDot={handleClearDot}
                  listDoneSetter={setFlags}
                  handleDotClick={handleDotClick}
                  handleRemoveItem={handleRemoveItem}
                  handleMoveItem={handleMoveItem}
                />
              </div>
            </li>
          </ul>

        </div>
      </aside>
    </div>
  )
}
