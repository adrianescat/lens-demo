import React, { Dispatch, ReactElement, SetStateAction } from 'react'
import classnames from 'classnames';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './LensInfoGroup.module.scss';
import {
  Lens,
  File,
  Flag,
  Problem,
  Allergy,
  Medication,
  flagActions,
} from '../../../types/lens';
import PopoverMenu from '../../PopoverMenu';

interface Props {
  groupName: string;
  list: Array<any>;
  listDone: Array<Flag | Problem | Allergy | Medication>;
  activeDot: string,
  actions?: Array<any>
  hasActions?: boolean;
  isDoneList?: boolean;
  listSetter: Dispatch<SetStateAction<[] | Flag[]>>;
  handleClearDot: () => void;
  listDoneSetter: Dispatch<SetStateAction<[] | Flag[]>>;
  handleDotClick: (name: string) => void;
  handleRemoveItem: (name: string, collection, setter) => void;
  handleMoveItem: (name: string, collection, setter, collectionMoveTo, setterMoveTo) => void;
}

export default function LensInfoGroup({
  groupName,
  list,
  listDone,
  hasActions,
  isDoneList,
  actions,
  activeDot,
  listSetter,
  handleClearDot,
  listDoneSetter,
  handleDotClick,
  handleRemoveItem,
  handleMoveItem,
}: Props): ReactElement {
  if (list.length === 0) {
    return null;
  }
  console.log(groupName)
  return (
    <div className={styles.contentGroup}>
      <div className={styles.contentGroupTitle}>
        {groupName}
      </div>
      {list.map((item) => (
        <div
          key={item.name}
          className={classnames(styles.contentGroupItem, activeDot === item.name ? styles.active : '')}
        >
          <span
            className={styles.groupItemName}
            onClick={() => handleDotClick(item.name)}
          >
            {!isDoneList && <span
              className={styles.delete}
              onClick={() => handleRemoveItem(item.name, list, listSetter)}
            >
              <FontAwesomeIcon className={styles.trashIcon} icon={faTrashAlt} />
            </span>}
            {item.humanName}
            {hasActions && (item.moreInfo || actions) && <div className={styles.actionMenu}>
              <PopoverMenu
                list={item.moreInfo ? item.moreInfo : actions}
              >
                <span className={styles.actionLabel}>{item.moreInfo ? 'More Info' : 'Action'}</span>
              </PopoverMenu>
            </div>}
          </span>
          <div className={styles.groupItemSubContent}>
            <div
              className={styles.subContentCancel}
              onClick={handleClearDot}
            >
              Cancel
            </div>
            <div
              className={styles.subContentConfirm}
              onClick={() => handleMoveItem(item.name, list, listSetter, listDone, listDoneSetter)}
            >
              {isDoneList ? 'Remove' : 'Confirm'}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
