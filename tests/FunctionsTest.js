// Helps to mimic div creations
let HTMLElements = {};
document.getElementById = jasmine
  .createSpy('HTML Element')
  .and.callFake(function (ID) {
    if (!HTMLElements[ID]) {
      var newElement = document.createElement('div');
      HTMLElements[ID] = newElement;
    }
    return HTMLElements[ID];
  });
TEST_PLAYERS = ['Hero'];

describe('Creating players', function () {
  it('should create a  valid JSON object \
    from given array of players', function () {
    let players = initPlayers(TEST_PLAYERS);

    expect(typeof players[0]).toBe('object');
  });

  it('should create equal number of players for \
    given players name', function () {
    let players = initPlayers(TEST_PLAYERS);
    let expectedLength = TEST_PLAYERS.length;

    expect(players.length).toBe(expectedLength);
  });

  

  it('should create player who is either Hero or Villain \
    ', function () {
    let players = initPlayers(TEST_PLAYERS);
    let keys = Object.keys(players[0]);
    let found = keys.findIndex((k) => k == 'strength');

    expect(found).toBeGreaterThan(-1);
    expect(players[0].type).toMatch(/(hero|villain)/);
  });
  it('should return a 0 < number <= 100', function () {
    let strength = getRandomStrength();

    expect(strength).toBeGreaterThan(0);
    expect(strength).toBeLessThanOrEqual(100);
  });

});


  

describe('Building player blocks', function () {
  it('should return a template for the players\
    ', function () {
    let players = initPlayers(TEST_PLAYERS);
    console.log(players);
    let fragment = buildPlayers(players, 'hero');
    fragment = fragment.replace(/\s/g, '');
    let expectedFragment = `
    <div class="player"><img src="${players[0].image}" alt="">
        <div class="name">${players[0].name}</div>
        <div class="strength">${players[0].strength}</div>
    </div>`;
    expectedFragment = expectedFragment.replace(/\s/g, '');

    expect(fragment).toBe(expectedFragment);
  });
});
