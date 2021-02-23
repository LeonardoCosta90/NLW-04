import styles from '../styles/components/Profile.module.css';

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/12099276?s=460&u=1a21d6eb381a6de62a08139fd16ce54486e2b7eb&v=4" alt="Leonardo Costa"></img>
      <div>
        <strong>Leonardo Costa</strong>
        <p>
          <img src="icons/level.svg" alt="level"></img>
          Level 1
        </p>
      </div>
    </div>
  );
}