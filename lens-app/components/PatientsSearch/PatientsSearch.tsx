import React, { useState, useEffect, ReactElement } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dateFormat from 'dateformat';
import Image from 'next/image';
import { Patient, Lens } from '../../types/lens';
import styles from './PatientsSearch.module.scss';
import LensList from '../LensList';


export default function PatientsSearch(): ReactElement {
  const [searchInput, setSearchInput] = useState('');
  const [patient, setPatient] = useState<undefined | Patient>(undefined);
  const [relatedLens, setRelatedLens] = useState<[] | Array<Lens>>([]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchInput(e.target.value);
  }

  useEffect(() => {
    async function fetchLensForPatient(id: string) {
      const res = await fetch(`http://localhost:3000/api/lens/${patient.emrId}`);
      const data = await res.json();

      if (data.lens) {
        setRelatedLens(data.lens);
      } else {
        setRelatedLens([]);
      }
    }

    if (patient) {
      fetchLensForPatient(patient.emrId);
    } else {
      setRelatedLens([]);
    }
  }, [patient]);

  async function handleSearch(): Promise<void> {
    if (searchInput.length === 0) {
      setPatient(undefined);
    } else {
      const res = await fetch(`http://localhost:3000/api/patients/${searchInput}`);
      const data = await res.json();

      if (data.patient) {
        setPatient(data.patient);
      } else {
        setPatient(undefined);
      }
    }
  }

  return (
    <div className={styles.patientsSearch}>
      <div className={styles.searchBox}>
        <input
          role="search"
          placeholder="Search patients by ID e.g: MT00034"
          value={searchInput}
          onChange={handleInputChange}
          className={styles.searchInput}
        />
        <button
          className={styles.searchButton}
          onClick={handleSearch}
        >
          <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
        </button>
      </div>

      {!patient && (
        <div className={styles.empty}>
          <Image
            src="/img/empty_results.svg"
            alt="Empty results"
            width={300}
            height={300}
          />
          <div className="resultsText">0 Results</div>
        </div>
      )}

      {patient && (
        <div className={styles.patientInfo}>
          <div><strong>{patient.firstName} {patient.middleName} {patient.lastName}</strong></div>
          <div>Id: {patient.emrId}</div>
          <div>Home phone: {patient.homePhone}</div>
          <div>Mobile phone: {patient.mobilePhone}</div>
          <div>Work phone: {patient.workPhone}</div>
          <div>Birthday: {dateFormat(new Date(patient.dateOfBirth), 'mm/dd/yyyy')}</div>
        </div>
      )}

      {relatedLens.length > 0 && (
        <LensList lens={relatedLens} />
      )}
    </div>
  )
}
