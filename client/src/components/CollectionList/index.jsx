import styles from "./collectionlist.module.css";
import CollectionCard from "../CollectionCard";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function CollectionList() {
  const topNFTs = useSelector((state) => state.nfts);
  const profile = useSelector((state) => state.user);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  function handleClick() {
    MySwal.fire({
      title: 'Entering Top Gallery will cost you 1 credit. Do you want to proceed?',
      background: '#191c29',
      color: '#ef9afa',
      confirmButtonColor: 'rgb(132 204 22)',
      showCancelButton: true,
      cancelButtonColor: 'rgb(239 68 68)'
    })
    .then(response => {
      const { isConfirmed } = response;

      if (isConfirmed) {
        navigate('/top')
      }
    })

  }
  useEffect(() => {
    // dispatch(getTopNFTs(true));
  }, []);

  return <>
    <div className={styles.wrapper}>
      <div className={styles.collectionList}>
        <div className={styles.container}>
          <div className={styles.button}>
            <h1 className="text-indigo-600">Top Items Collections</h1>
            {/* <Link to="/top"> */}
              <button
                className={styles.btn}
                onClick={handleClick}>
                Enter
              </button>
            {/* </Link> */}
          </div>
          <div className={styles.cards}>
            {topNFTs.map((topNFTs) => (
              <CollectionCard
                imageUrl={topNFTs.imageUrl}
                title={topNFTs.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </>;
}
