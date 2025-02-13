import styles from "../../styles/mainInfoShop.module.css";
import {Image} from "../Image";

export function MainInfoShop() {
    const info = [
        {
            image: "/assets/book.png",
            text: "fdsfsfssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
        },
        {
            image: "/assets/book.png",
            text: "fdsfsfssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
        },
        {
            image: "/assets/book.png",
            text: "fdsfsfssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
        },
        {
            image: "/assets/book.png",
            text: "fdsfsfssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
        },
    ]
  
    return (
    <>

        <div className={styles.card}>
            {info.map(info => (
                <>
                 <div className={styles.container}>
                    <Image src={info.image} alt="" />
                    <p>{info.text}</p>
                 </div>
                </>
            ))}
        </div>
    </>
  );
}
