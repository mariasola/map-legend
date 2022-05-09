
const getLegendData = () => {
  return (fetch(
    `https://raw.githubusercontent.com/Vizzuality/front-end-code-challenge/master/data.json`
  )
    .then(response => response.json())
    .catch(error => {
      console.log('There was an error in Fetch:' + error?.message);
    })
  )
};

export default getLegendData;
