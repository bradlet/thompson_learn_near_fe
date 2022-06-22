import type { NextPage } from 'next';
import type { ApiData } from './api/hello';
import { useEffect, useState } from 'react';
import styles from '../styles/Stats.module.css';
import DisplayStats from '../components/DisplayStats';

const Stats: NextPage = () => {
    const [data, setData] = useState<ApiData | null>(null)
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('api/hello')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
  
    return (
      <div className={styles.stat_overview}>
          <div className={`${styles.page_title} ${styles.has_border}`}>
              <h1>Stat Overview</h1>
            </div>
        <h2>{data.name}</h2>
        <div>
            <DisplayStats {...data}/>
        </div>
      </div>
    )
}

export default Stats;