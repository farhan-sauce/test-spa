import React, { useEffect } from 'react'
import { useHistory, Link } from "react-router-dom";

const MAX_COUNTER = 5
const IMAGES = [...Array(50).keys()];

const MultipleURLChange1 = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const delayTime = urlParams.get('delayTime') || 2000;

  const history = useHistory();

  const handleMultipleRequest = ((currentCounter) => {
    const urls = []
    for (let i = currentCounter; i <= currentCounter + 10; i ++) {
      const delay = Math.ceil(delayTime / 1000);
      urls.push(`https://reqres.in/api/users/${i}?delay=${delay}`)
    }
    Promise.all(urls.map(u=>fetch(u)))
      .then(() => console.log('done'))
      .catch((err) => console.error(err))
      .finally(() => {
        if (currentCounter < MAX_COUNTER) {
          handleMultipleRequest(currentCounter + 1)
        }
      })
  })

  const updateURLs = () => {
    history.push({ search: '?color=pink' })
    setTimeout(() => {
      history.push("/multiple-2")
    }, 7000)
    // setTimeout(() => {
    //   history.push({ search: '?color=white' })
    // }, 2000)
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
        Multiple URL Change-1
      </h3>
      <div>
        <Link to="/multiple-2" id="multiple-2">Multiple URL - 2</Link>
      </div>
      <div>
        <p>Random Images</p>
        {IMAGES.map((item) => item === 0 ? null : (
          <div key={item} style={{ 'width': 200, 'height': 200 }}>
            <img src={`https://dummyimage.com/${item*10}/09f/fff.png`} alt="check" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MultipleURLChange1;
