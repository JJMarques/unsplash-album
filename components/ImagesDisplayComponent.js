import Image from 'next/image'
import styles from '../styles/ImagesDisplayComponent.module.scss'

export default function ImagesDisplayComponent({ userPhotos }) {
    return(
        <div className={styles.imagesDisplay}>
            {userPhotos.map(image => (
                <a key={image.id} href={image.links.html} target="_blank" rel="noreferrer">
                    <Image 
                        src={image.urls.raw} 
                        alt={image.alt_description || 'Imagem de José Marques'}
                        width={400}
                        height={500}
                    />
                </a>
            ))}
        </div>
    )
}