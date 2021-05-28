import styles from './Title.module.scss'

export default function Title(): JSX.Element {
  return (
    <h1 className={styles.title}>
      Welcome to <a href="https://nextjs.org">Next.js!</a>
    </h1>
  )
}