import React, { useEffect } from 'react'
import { useHistory, Link } from "react-router-dom";

const MAX_COUNTER = 5
const IMAGES = [...Array(50).keys()];

const MultipleURLChange2 = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const delayTime = urlParams.get('delayTime') || 4000;

  const history = useHistory();

  const handleMultipleRequest = ((currentCounter) => {
    const urls = []
    for (let i = 0; i <=  5; i ++) {
      // const delay = Math.ceil(delayTime / 1000);
      urls.push(`https://reqres.in/api/users/${i}?delay=15`)
    }
    Promise.all(urls.map(u=>fetch(u)))
      .then(() => console.log('done'))
      .catch((err) => console.error(err))
      .finally(() => {
        if (currentCounter < MAX_COUNTER) {
          setTimeout(() => {
            handleMultipleRequest(currentCounter + 1)
          }, 6000)
        }
      })
  })

  const updateURLs = () => {
    history.push({ search: '?color=pink' })
    setTimeout(() => {
      history.push({ search: '?color=green' })
    }, 500)
    setTimeout(() => {
      history.push({ search: '?color=white' })
    }, 2000)
  }

  useEffect(() => {
    updateURLs()
    setTimeout(() => {
      handleMultipleRequest(1)
    }, 5000)
  }, []) // eslint-disable-line

  return (
    <section id="login-section">
      <h3>
        Multiple URL Change-2
      </h3>
      <div>
        <Link to="/multiple-1" id="multiple-1">Multiple URL - 1</Link>
      </div>
      <div>
        <span>
          {IMAGES.length}
        </span>
        <p> - Random Images</p>
        {IMAGES.map((item) => item === 0 ? null : (
          <div key={item} style={{ 'width': 200, 'height': 200 }}>
            <img src={`https://dummyimage.com/${item*10}/09f/fff.png`} alt="check" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MultipleURLChange2;
