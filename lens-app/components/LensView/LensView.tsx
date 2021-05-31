import React, { useState, ReactElement } from 'react';
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
import LensInfoGroup from './LensInfoGroup';
import Files from './Files';

export interface Props {
  data: Lens;
}

export default function LensView({ data }: Props): ReactElement {
  const [activeDot, setActiveDot] = useState('');
  const [selectedTabId, setSelectedTabId] = useState('tab1');
  const [flags, setFlags] = useState<[] | Array<Flag>>(data.flags?.length > 0 ? data.flags : []);
  const [problems, setProblems] = useState<[] | Array<Problem>>(data.problems?.length > 0 ? data.problems : []);
  const [allergies, setAllergies] = useState<[] | Array<Allergy>>(data.allergies?.length > 0 ? data.allergies : []);
  const [medications, setMedication] = useState<[] | Array<Medication>>(data.medications?.length > 0 ? data.medications : []);
  const [flagsDone, setflagsDone] = useState<[] | Array<Flag>>([]);
  const [problemsDone, setProblemsDone] = useState<[] | Array<Flag>>([]);
  const [allergiesDone, setAllergiesDone] = useState<[] | Array<Flag>>([]);
  const [medicationsDone, setMedicationsDone] = useState<[] | Array<Flag>>([]);

  // const hasFiles = data.files.length > 0;

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
      <Files
        lensId={data.id}
        transformations={data?.documentTransformations}
        activeDot={activeDot}
        files={data.files}
        flags={data.flags}
        problems={data.problems}
        allergies={data.allergies}
        medications={data.medications}
        handleDotClick={handleDotClick}
      />
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

                <LensInfoGroup
                  groupName="Problem"
                  list={problems}
                  listDone={problemsDone}
                  activeDot={activeDot}
                  listSetter={setProblems}
                  handleClearDot={handleClearDot}
                  listDoneSetter={setProblemsDone}
                  handleDotClick={handleDotClick}
                  handleRemoveItem={handleRemoveItem}
                  handleMoveItem={handleMoveItem}
                />

                <LensInfoGroup
                  groupName="Allergy"
                  list={allergies}
                  listDone={allergiesDone}
                  activeDot={activeDot}
                  listSetter={setAllergies}
                  handleClearDot={handleClearDot}
                  listDoneSetter={setAllergiesDone}
                  handleDotClick={handleDotClick}
                  handleRemoveItem={handleRemoveItem}
                  handleMoveItem={handleMoveItem}
                />

                <LensInfoGroup
                  groupName="Medication"
                  list={medications}
                  listDone={medicationsDone}
                  hasActions
                  activeDot={activeDot}
                  listSetter={setMedication}
                  handleClearDot={handleClearDot}
                  listDoneSetter={setMedicationsDone}
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

                <LensInfoGroup
                  groupName="Problem"
                  isDoneList
                  list={problemsDone}
                  listDone={problems}
                  activeDot={activeDot}
                  listSetter={setProblemsDone}
                  handleClearDot={handleClearDot}
                  listDoneSetter={setProblems}
                  handleDotClick={handleDotClick}
                  handleRemoveItem={handleRemoveItem}
                  handleMoveItem={handleMoveItem}
                />

                <LensInfoGroup
                  groupName="Allergy"
                  isDoneList
                  list={allergiesDone}
                  listDone={allergies}
                  activeDot={activeDot}
                  listSetter={setAllergiesDone}
                  handleClearDot={handleClearDot}
                  listDoneSetter={setAllergies}
                  handleDotClick={handleDotClick}
                  handleRemoveItem={handleRemoveItem}
                  handleMoveItem={handleMoveItem}
                />

                <LensInfoGroup
                  groupName="Medication"
                  isDoneList
                  hasActions
                  list={medicationsDone}
                  listDone={medications}
                  activeDot={activeDot}
                  listSetter={setMedicationsDone}
                  handleClearDot={handleClearDot}
                  listDoneSetter={setMedication}
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
