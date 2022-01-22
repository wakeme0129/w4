const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'その日はとても暑かった。 so :insertx: は散歩をしていた。 途中で気づいたら :inserty:に到着した。 そこはとても面白い場所だった。 その時:insertz:。 私は急に思いついた。こんなに暑い日には美味しいかき氷を作って周りの人に渡したいと。';
const insertX = ['サンタクロース', 'マイメロディ', 'マリオ'];
const insertY = ['お菓子の城', 'ジャングルジム', 'ドッグカフェ'];
const insertZ = ['たくさんのお菓子を食べた', 'おばあちゃんと散歩をした', 'スマホゲームを始めた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
