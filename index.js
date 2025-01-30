//call api for list of players
//return player data  
//render player data
//display name stats and team
//add back button

//if user clicks player
//call fetchplayerdetails by playerid
//if user clicks back to roster
//call fetch players ()
//show roster page

const state = { playerList: [], playerDetails: {} }
const main = document.querySelector(`main`);
const getPlayers = async () => {
  try {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-FT/players`);
    const jsonObject = await response.json();
    const allPlayers = jsonObject.data.players;
    console.log(jsonObject);

    state.playerList = allPlayers;
    renderPlayers();

  } catch (err) {
    console.log(err);
    const body = document.querySelector(`body`);
    const p = document.createElement(`p`);
    p.innerText = `error fetching players`,

      body.append(p);
  }
}

const renderPlayers = () => {
  let ol = document.createElement(`ol`);


  main.innerHTML = ``;
  state.playerList.forEach((singlePlayer) => {
    const li = document.createElement(`li`);
    li.innerText = singlePlayer.name;
    li.addEventListener(`click`, () => {
      state.playerDetails = singlePlayer;
      renderPlayerDetails();
    });
    ol.append(li);
  })
main.append(ol)


}

const renderPlayerDetails = () => {
  //const button = document.createElement(`button`);
  console.log (state.playerDetails)
  
  
  
  
  const detailsHTML = `
    <h2> ${ state.playerDetails.name }</h2>
      <p>${state.playerDetails}</p>
      <p1>${state.playerDetails.breed}<p1>
      <p2>${state.playerDetails.status}<p2>
      <p3>${state.playerDetails.}<p3>
  `

  const button = document.createElement(`button`);

//state.playerDetails.breed


  button.innerText = `back`;
  button.addEventListener(`click`, () => {
    renderPlayers();
  });

  main.innerHTML = detailsHTML;
  main.append(button);
}
getPlayers();



// if (!ol) {
// console.warn("no <ol> element found. Creating one.");
//ol.document.createElement("ol")
//document.body.appendChild(ol);
//}