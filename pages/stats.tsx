import type { NextPage } from 'next'
import type { ApiData } from './api/hello';
import { useEffect, useState } from 'react';

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
      <>
        <h1>Stat Overview</h1>
        <h2>{data.name}</h2>
      </>
    )
}

export default Stats;