function getRandomIntInclusive(min, max) {
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);
    return Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
    // The maximum is inclusive and the minimum is inclusive
  }
  
  function restoArrayMake(dataArray) {
    // console.log('fired datahandler');
    // console.table(dataArray); // this is called "dot notation"
    const range = [...Array(15).keys()];
    const listItems = range.map((item, index) => {
      const restNum = getRandomIntInclusive(0, dataArray.length - 1);
      return dataArray[restNum];
    });
    // console.log(listItems);
    return listItems;
    // forEach for reference
    // range.forEach((item) => {
    //   console.log('range item', item);
    // });
  }
  
  function createHtmlList(collection) {
    // console.log('fired HTML creator');
    // console.table(collection);
    const targetList = document.querySelector('.resto-list');
    targetList.innerHTML = '';
    collection.forEach((item) => {
      const injectThisItem = `<li>${item.name}</li>`;
      targetList.innerHTML += injectThisItem;
    });
  }
  
  async function mainEvent() { // the async keyword means we can make API requests
    const form = document.querySelector('.speaker-form');
    const submit = document.querySelector('.submit_button');

    const resto = document.querySelector('#resto_name');
    const zipcode = document.querySelector('#zipcode');
    submit.style.display = 'none';
  
    const results = await fetch('/api/foodServicesPG'); // This accesses some data from our API
    const arrayFromJson = await results.json(); // This changes it into data we can use - an object
    // console.log(arrayFromJson);
  






    // prevent race condition on data load
    if (arrayFromJson.data.length > 0) {
      submit.style.display = 'block';

// allows us to change the var to anything, but pre-sets as array
      let currentArray = [];
      resto.addEventListener('input', async (event) => {
        console.log(event.target.value);

        if (currentArray.length < 1) {
          return;
        }

    const selectResto = currentArray.filter((item) => {
      const lowerName = item.name.toLowerCase();
      const lowerValue = event.target.value.toLowerCase();
      return lowerName.includes(lowerValue);
    });
        console.log(selectResto);
        createHtmlList(selectResto);
      });

      form.addEventListener('submit', async (submitEvent) => { // async has to be declared all the way to get an await
        submitEvent.preventDefault(); // This prevents your page from refreshing!
        // console.log('form submission'); // this is substituting for a "breakpoint"
        // arrayFromJson.data - we're accessing a key called 'data' on the returned object
        // it contains all 1,000 records we need
        currentArray = restoArrayMake(arrayFromJson.data);
        createHtmlList(currentArray);
      });
    }
  }
  // this actually runs first! It's calling the function above
  document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests