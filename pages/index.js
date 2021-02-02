import styles from '../styles/index.module.scss'
import ImagesDisplayComponent from '../components/ImagesDisplayComponent'

import Image from 'next/image'
import { BsDownload, BsHeart } from 'react-icons/bs'
import CountUp from 'react-countup';
import { getUserData, getUserPhotos } from '../util/util';


export default function Index({ userData, userPhotos }) {
    return(
        <div className={styles.index}>
            <Image 
                src={userData.profile_image.large}
                alt={`Imagem de ${userData.name}`}
                width={120}
                height={120}
            />
            <h1>@{userData.username}</h1>
            <h2>{userData.name}</h2>
            <div className={styles.stats}>
                <h3>
                    <BsDownload style={{ marginRight: '7px' }}/> 
                    Downloads <span>
                        <CountUp end={userData.downloads} />
                    </span>
                </h3>
                <h3 style={{ marginLeft: '50px' }}>
                    <BsHeart style={{ marginRight: '7px', color: '#ff6459' }}/> 
                    Likes <span>
                        <CountUp end={userData.total_likes} />
                    </span>
                </h3>
            </div>
            <ImagesDisplayComponent userPhotos={userPhotos} />
        </div>
    )
}

export async function getStaticProps() {
    const myUserName = 'jose_marques98'
    const userData = await getUserData(myUserName, process.env.ACCESS_KEY)
    const userPhotos = await getUserPhotos(myUserName, process.env.ACCESS_KEY)

    /* const res = await fetch(`https://api.unsplash.com/users/${myUserName}/?client_id=${process.env.ACCESS_KEY}`)
    const json = await res.json() */

    return {
        props: {
            userData,
            userPhotos
        },
        revalidate: 60
    }
}