const arrayOfSpeakers = [
  [
    {
      photo: './assets/img/speaker1.png',
      name: 'Jordan Walke',
      subTitle: 'Former Employee at Facebook and creator of React js library.',
      message:
      'The importance of the frontend experience for developers and users.',
    },
    {
      photo: './assets/img/speaker2.png',
      name: 'Ryan Dahl',
      subTitle: 'Original developer of the Node js. Javascript runtime.',
      message:
      'Using the same language in everything and the efficient use of time.',
    },
  ],
  [
    {
      photo: './assets/img/speaker3.png',
      name: 'Yukihiro Matsumoto',
      subTitle: 'Creator and designer of RUBY. Defender of open source projects.',
      message:
      'Backend and high-level apps with one of the most dynamic language.',
    },
    {
      photo: './assets/img/speaker4.png',
      name: 'Jimmy Wales',
      subTitle: 'Co-founder of the online non-profit encyclopedia Wikipedia.',
      message:
      'Freedom of speech and challenges in the digital era. Software policies in social apps.',
    },
  ],
  [
    {
      photo: './assets/img/speaker5.png',
      name: 'Håkon Wium Lie',
      subTitle: 'First to proposed the CSS technology for web in October 10 of 1994.',
      message:
      'Why styles and user experience are more important than choosing a programming language.',
    },
    {
      photo: './assets/img/speaker6.png',
      name: 'Brendan Eich',
      subTitle: 'Creator of the JavaScript programming language and co-founder of the Mozilla project.',
      message:
      'The evolution of Javascript and things to come. Opinions and debate forum.',
    },
  ],
];

// Speakers section is being display 2 by 2, thats why we used an Array of Arrays of objects

const speakersCards = document.getElementById('speakerCards');

for (let firstArray = 0; firstArray < arrayOfSpeakers.length; firstArray += 1) {
  speakersCards.innerHTML += `<div class="speakersCards-container-group" id="speakersCardGroup${firstArray}"></div>`;

  const speakersCardsGroup = document.getElementById(`speakersCardGroup${firstArray}`);

  for (let innerArray = 0; innerArray < arrayOfSpeakers[firstArray].length; innerArray += 1) {
    speakersCardsGroup.innerHTML += `<div class="speakersCards-container-one">
    <img src="${arrayOfSpeakers[firstArray][innerArray].photo}" width="150" />
    <div class="speakersCards-container-one-text">
      <span>${arrayOfSpeakers[firstArray][innerArray].name}</span>
      <h6 class="speakersCards-container-one-text-h6-sub">
      ${arrayOfSpeakers[firstArray][innerArray].subTitle}
      </h6>
      <hr />
      <h6 class="speakersCards-container-one-text-h6">
      ${arrayOfSpeakers[firstArray][innerArray].message}
      </h6>
    </div>
  </div>`;
  }
}