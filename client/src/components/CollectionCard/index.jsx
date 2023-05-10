import { useDispatch } from 'react-redux';
import styles from './collectioncard.module.css'
import { fetchUserAfterUnfavorited } from '../../actions/usersCreators';

export default function CollectionCard(props) {
    const dispatch = useDispatch();

    function handleUnfavorite() {
        dispatch(fetchUserAfterUnfavorited(props.id))
    }

    return(
        <div className={styles.card}>
            <img src={props.imageUrl}  />
            <div className={styles.description}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
            { props.action && props.action }
            <div className={styles.button}>
                <button
                className={styles.btn}
                onClick={handleUnfavorite}>
                    Unfavorite
                </button>
            </div>
        </div>
    )
}
