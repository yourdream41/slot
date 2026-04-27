/* ============================================
   SLOT BURST - GAME ENGINE
   ============================================ */

// ==========================================
// CONFIG - 定数・設定
// ==========================================
// ===== 画像ヘルパー関数 =====
function renderIcon(item, w='100%', h='100%') {
  if (item.img) {
    return `<img src="${item.img}" style="width:${w};height:${h};object-fit:contain;" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span style="display:none">${item.emoji}</span>`;
  }
  return item.emoji;
}
function renderCharIcon(char, w='100%', h='100%') {
  if (char.deformedImg) {
    return `<img src="${char.deformedImg}" style="width:${w};height:${h};object-fit:contain;" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span style="display:none">${char.emoji}</span>`;
  }
  return char.emoji;
}
function renderEnemyIcon(enemy) {
  if (enemy.img) {
    return `<img src="${enemy.img}" style="width:100%;height:100%;object-fit:contain;" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span style="display:none">${enemy.emoji}</span>`;
  }
  return enemy.emoji;
}

const CONFIG = {
  GAME_WIDTH: 390,
  GAME_HEIGHT: 844,
  TOTAL_STAGES: 7,

  // キャラ定義
CHARACTERS: [
{ id: 0, name: 'Char_A', element: 'fire',    color: '#ff4444', emoji: '🔥', skillName: 'インフェルノ',       baseDamage: 150, deformedImg: './image/char_fire_icon.png',    cutinImg: './image/char_fire_cutin.png',    allSameImg: './image/char_fire_allsame.png',    feverImg: './image/char_fire_fever.png' },
{ id: 1, name: 'Char_B', element: 'ice',     color: '#44aaff', emoji: '❄️', skillName: 'アイスエイジ',       baseDamage: 100, deformedImg: './image/char_ice_icon.png',     cutinImg: './image/char_ice_cutin.png',     allSameImg: './image/char_ice_allsame.png',     feverImg: './image/char_ice_fever.png' },
{ id: 2, name: 'Char_C', element: 'thunder', color: '#ffdd00', emoji: '⚡', skillName: 'サンダーレイン',     baseDamage: 80,  deformedImg: './image/char_thunder_icon.png', cutinImg: './image/char_thunder_cutin.png', allSameImg: './image/char_thunder_allsame.png', feverImg: './image/char_thunder_fever.png' },
{ id: 3, name: 'Char_D', element: 'wind',    color: '#44ff88', emoji: '🌀', skillName: 'ゲイルフォース',     baseDamage: 100, deformedImg: './image/char_wind_icon.png',   cutinImg: './image/char_wind_cutin.png',   allSameImg: './image/char_wind_allsame.png',   feverImg: './image/char_wind_fever.png' },
{ id: 4, name: 'Char_E', element: 'dark',    color: '#bb44ff', emoji: '🌑', skillName: 'ダークマター',       baseDamage: 60,  deformedImg: './image/char_dark_icon.png',   cutinImg: './image/char_dark_cutin.png',   allSameImg: './image/char_dark_allsame.png',   feverImg: './image/char_dark_fever.png' },
],

  // ステージ定義 (spins増加)
STAGES: [
  { enemies: [
      { name: 'スライム',   emoji: '🟢', img: './image/enemy_slime.png',        hp: 120, weakness: null },
      { name: 'コウモリ',   emoji: '🦇', img: './image/enemy_bat.png',           hp: 100, weakness: null },
    ], spins: 5, coinReward: 30 },
  { enemies: [
      { name: 'ゴブリン',   emoji: '👺', img: './image/enemy_goblin.png',        hp: 200, weakness: 'fire' },
      { name: 'スケルトン', emoji: '💀', img: './image/enemy_skeleton.png',      hp: 180, weakness: 'ice' },
      { name: 'スライム',   emoji: '🟢', img: './image/enemy_slime.png',         hp: 120, weakness: null },
    ], spins: 6, coinReward: 40 },
  { enemies: [
      { name: 'ゴーレム',   emoji: '🗿', img: './image/enemy_golem.png',         hp: 600, weakness: 'thunder' },
      { name: 'ゴブリン',   emoji: '👺', img: './image/enemy_goblin.png',        hp: 300, weakness: 'fire' },
      { name: 'コウモリ',   emoji: '🦇', img: './image/enemy_bat.png',           hp: 200, weakness: null },
    ], spins: 7, coinReward: 50 },
  { enemies: [
      { name: 'ダークナイト',   emoji: '🛡️', img: './image/enemy_dark_knight.png',  hp: 500, weakness: 'wind' },
      { name: 'ウィッチ',       emoji: '🧙', img: './image/enemy_witch.png',         hp: 400, weakness: 'dark' },
      { name: 'ゴブリン',       emoji: '👺', img: './image/enemy_goblin.png',        hp: 300, weakness: 'fire' },
      { name: 'スケルトン',     emoji: '💀', img: './image/enemy_skeleton.png',      hp: 250, weakness: 'ice' },
    ], spins: 8, coinReward: 60 },
  { enemies: [
      { name: 'ドラゴンパピー', emoji: '🐉', img: './image/enemy_dragon_puppy.png',  hp: 700, weakness: 'ice' },
      { name: 'ゴーレム',       emoji: '🗿', img: './image/enemy_golem.png',         hp: 600, weakness: 'thunder' },
      { name: 'ダークナイト',   emoji: '🛡️', img: './image/enemy_dark_knight.png',  hp: 500, weakness: 'wind' },
    ], spins: 8, coinReward: 70 },
  { enemies: [
      { name: 'デスナイト',     emoji: '⚔️', img: './image/enemy_death_knight.png',  hp: 800, weakness: 'fire' },
      { name: 'アイスゴーレム', emoji: '🧊', img: './image/enemy_ice_golem.png',     hp: 700, weakness: 'thunder' },
      { name: 'ダークメイジ',   emoji: '🔮', img: './image/enemy_dark_mage.png',     hp: 600, weakness: 'wind' },
      { name: 'ドラゴンパピー', emoji: '🐉', img: './image/enemy_dragon_puppy.png',  hp: 500, weakness: 'ice' },
    ], spins: 9, coinReward: 80 },
  { enemies: [
      { name: 'ドラゴンロード', emoji: '🐲', img: './image/enemy_dragon_lord.png',   hp: 5000, weakness: null, isBoss: true, phases: 3 },
    ], spins: 10, coinReward: 200 },
],

  // ダメージ設定
  DAMAGE: {
    baseDamage: 100,
    noMatchDamage: 20,
    lineMultiplier: [0, 1.0, 2.5, 5.0],
    feverMultiplier: 15.0,
    weaknessMultiplier: 2.0,
    critChance: 0.15,
    critMultiplier: 2.0,
  },

  // ライン定義
  LINES: [
    [0,1,2], [3,4,5], [6,7,8],        // 横3列
    [0,3,6], [1,4,7], [2,5,8],        // ★ 縦3列を追加
    [0,4,8], [2,4,6],                  // 斜め2本
  ],

  // フィーバーゲージ
  FEVER: {
    maxGauge: 100,
    gainPerLine: 20,
    gainPerSpin: 5,
  },

  // レリック定義
  RELICS: [
{ id: 'heavy_dice',      name: '重い賽子',           emoji: '🎲', img: './image/relic_heavy_dice.png',    desc: 'LUCK+1',              effect: { type: 'luck', value: 1 },           cost: 60,  rarity: 'common' },
{ id: 'golden_dice',     name: '黄金の賽子',         emoji: '✨', img: './image/relic_golden_dice.png',   desc: 'LUCK+2',              effect: { type: 'luck', value: 2 },           cost: 120, rarity: 'rare' },
{ id: 'golden_line',     name: '金のライン',         emoji: '📐', img: './image/relic_golden_line.png',   desc: '斜めライン+50%',       effect: { type: 'diagonalBonus', value: 0.5 }, cost: 80,  rarity: 'uncommon' },
{ id: 'chain_mirror',    name: '連鎖の鏡',           emoji: '🪞', img: './image/relic_chain_mirror.png',  desc: '2ライン→3ライン昇格',  effect: { type: 'lineUpgrade' },              cost: 150, rarity: 'rare' },
{ id: 'pursuit_blade',   name: '追撃の刃',           emoji: '🗡️', img: './image/relic_pursuit_blade.png', desc: '揃い後追加ダメージ+30', effect: { type: 'bonusDamage', value: 30 },  cost: 60,  rarity: 'common' },
{ id: 'vampire_fang',    name: '吸血の牙',           emoji: '🧛', img: './image/relic_vampire_fang.png',  desc: '与ダメ10%コイン化',    effect: { type: 'vampiric', value: 0.1 },     cost: 90,  rarity: 'uncommon' },
{ id: 'spin_charger',    name: 'スピンチャージャー', emoji: '🔋', img: './image/relic_spin_charger.png',  desc: '3ライン揃いでスピン+1', effect: { type: 'spinRecover' },             cost: 110, rarity: 'rare' },
{ id: 'fever_boost',     name: 'フィーバーブースト', emoji: '💥', img: './image/relic_fever_boost.png',   desc: 'ゲージ蓄積2倍',        effect: { type: 'feverBoost', value: 2 },     cost: 100, rarity: 'uncommon' },
{ id: 'crimson_ring',    name: '紅蓮の指輪',         emoji: '🔴', img: './image/relic_crimsonring.png',   desc: '中央横ラインのダメージ×2',                                             cost: 70,  rarity: 'common'   },
{ id: 'deathmark',       name: 'デスマーク',         emoji: '💀', img: './image/relic_deathmark.png',     desc: '敵HP30%以下で与ダメ×2',                                               cost: 130, rarity: 'rare'     },
{ id: 'enchantgem',      name: 'エンチャントジェム', emoji: '💎', img: './image/relic_enchantgem.png',    desc: '次のショップが全品無料',                                               cost: 95,  rarity: 'uncommon' },
{ id: 'vortexreel',      name: '渦巻きリール',       emoji: '🌀', img: './image/relic_vortexreel.png',    desc: 'LUCKが必ず中央マスのキャラで発動',                                     cost: 130, rarity: 'rare'     },
{ id: 'infinitechain',   name: '無限連鎖',           emoji: '♾️', img: './image/relic_infinitechain.png', desc: '揃い後1マス再抽選→揃えば追加ダメージ',                                cost: 95,  rarity: 'uncommon' },
{ id: 'circusdice',      name: 'サーカスダイス',     emoji: '🎪', img: './image/relic_circusdice.png',    desc: 'スピンのたびにLUCKが変動',                                             cost: 70,  rarity: 'uncommon' },
{ id: 'jestermask',      name: '道化師の仮面',       emoji: '🎭', img: './image/relic_jestermask.png',    desc: 'ライン不成立で次スピンLUCK+7',                                         cost: 60,  rarity: 'common'   },
{ id: 'wargod',          name: '戦神の剣',           emoji: '⚔️', img: './image/relic_wargod.png',        desc: '敵3体以上でダメージ×1.5',                                              cost: 90,  rarity: 'uncommon' },
{ id: 'bloodpact',       name: '血の契約',           emoji: '🩸', img: './image/relic_bloodpact.png',     desc: 'スピンのたびに与ダメ永続+5',                                           cost: 140, rarity: 'rare'     },
{ id: 'crystalball',     name: '予言の水晶',         emoji: '🔮', img: './image/relic_crystalball.png',   desc: 'バトル最初の1スピンは必ず2ライン以上揃う',                             cost: 80,  rarity: 'rare'     },
{ id: 'goldblock',       name: '金塊',               emoji: '💰', img: './image/relic_goldblock.png',     desc: 'ステージクリア報酬コイン+50%',                                         cost: 85,  rarity: 'uncommon' },
{ id: 'interestjar',     name: '利子の壺',           emoji: '🏦', img: './image/relic_interestjar.png',   desc: 'ショップ入場時コイン×1.1',                                             cost: 60,  rarity: 'common'   },
{ id: 'jewelmerchant',   name: '宝石商',             emoji: '💎', img: './image/relic_jewelmerchant.png', desc: 'コイン200超で毎スピン+5コイン',                                        cost: 120, rarity: 'rare'     },
{ id: 'magicwallet',     name: '財布の魔法',         emoji: '👛', img: './image/relic_magicwallet.png',   desc: 'ショップ全品-20%割引',                                                 cost: 90,  rarity: 'uncommon' },
{ id: 'goldencrown',     name: '黄金の王冠',         emoji: '👑', img: './image/relic_goldencrown.png',   desc: 'コイン100以上でダメージ×1.5',                                          cost: 140, rarity: 'rare'     },
{ id: 'fevercore',       name: 'フィーバーコア',     emoji: '🔥', img: './image/relic_fevercore.png',     desc: 'フィーバーダメージ×1.5',                                               cost: 100, rarity: 'uncommon' },
{ id: 'superconductor',  name: '超電導体',           emoji: '⚡', img: './image/relic_superconductor.png',desc: 'フィーバー後3スピンFeverゲージ蓄積×3',                                cost: 140, rarity: 'rare'     },
{ id: 'healgrass',       name: '回復草',             emoji: '🌿', img: './image/relic_healgrass.png',     desc: '敵撃破のたびにスピン+1',                                               cost: 130, rarity: 'rare'     },
{ id: 'magnet',          name: 'マグネット',         emoji: '🧲', img: './image/relic_magnet.png',        desc: 'ショップのレリック枠が常時+1',                                          cost: 80,  rarity: 'uncommon' },
{ id: 'moonlight',       name: '月光の加護',         emoji: '🌙', img: './image/relic_moonlight.png',     desc: 'ボス戦開始時フィーバーゲージ+50',                                      cost: 85,  rarity: 'uncommon' },
{ id: 'alchemist',       name: '錬金術師',           emoji: '⚗️', img: './image/relic_alchemist.png',     desc: 'アイテム使用後の次スピンダメージ×2',                                   cost: 140, rarity: 'rare'     },
{ id: 'curseddice',      name: '呪いのダイス',       emoji: '🎲', img: './image/relic_curseddice.png',    desc: 'スピンごとに5%でランダム敵即死（ボス除く）',                           cost: 130, rarity: 'rare'     },
{ id: 'miraclecoin',     name: '奇跡のコイン',       emoji: '🪙', img: './image/relic_miraclecoin.png',   desc: '与ダメの10%をコインゲット',                                            cost: 200, rarity: 'legend'   },
{ id: 'doubleline',      name: 'ダブルライン',       emoji: '💥', img: './image/relic_doubleline.png',    desc: '同キャラ2本以上で全体爆発+200',                                        cost: 160, rarity: 'rare'     },
{ id: 'destinykey',      name: '運命の鍵',           emoji: '🔑', img: './image/relic_destinykey.png',    desc: 'ステージ開始時に宝箱3択',                                              cost: 65,  rarity: 'common'   },
{ id: 'fatecoin',        name: '運命のコイン',       emoji: '🎲', img: './image/relic_fatecoin.png',      desc: 'スピンのたびにコインが2倍か半分',                                      cost: 80,  rarity: 'uncommon' },
{ id: 'jokercard', name: 'ジョーカーカード', emoji: '🃏', img: './image/relic_jokercard.png', desc: '左列が未選択キャラで成立する', cost: 160, rarity: 'rare' },
{ id: 'feverwave', name: '波動のフィーバー', emoji: '🌊', img: './image/relic_feverwave.png', desc: '全キャラフィーバー同時発動→以後fever封印', cost: 90, rarity: 'uncommon' },
{ id: 'stormcore', name: '嵐のコア', emoji: '🌪️', img: './image/relic_stormcore.png', desc: 'スピンのたびに風キャラカットイン', cost: 200, rarity: 'legend' },
{ id: 'infernocore', name: '業火のコア', emoji: '🔥', img: './image/relic_infernocore.png', desc: '3ライン時に他キャラのライン効果も発動', cost: 250, rarity: 'legend' },
{ id: 'explodedevice', name: '爆裂装置', emoji: '🎆', img: './image/relic_explodedevice.png', desc: 'フィーバー使用時に紙吹雪3回+シェイク3回', cost: 110, rarity: 'uncommon' },
  ],

  // ショップ追加商品（ShopSystemのgenerateShopItemsで上書きされるため最小限）
  SHOP_EXTRAS: [],
};

// ==========================================
// GAME STATE
// ==========================================
const GameState = {
  phase: 'title', // title, deck, battle, reward, shop, gameover, clear
  currentStage: 0,
  spinsLeft: 0,
  coins: 0,
  luck: 0,
  relics: [],
  enemies: [],
  feverGauge: 0,
  feverReady: false,
  rerollTickets: 0,
  slowTickets: 0,
  items: [],           // ★ 追加：持ち越しアイテム
  nextFeverFill: false,
  reelConfig: [], // which character IDs are in the reel
  selectedDeck: [],
  slotResult: Array(9).fill(null),
  isSpinning: false,
  totalDamageDealt: 0,
  totalSpinsUsed: 0,
  totalLinesMatched: 0,
  totalFevers: 0,
  bossPhase: 0,

  reset() {
    this.currentStage = 0;
    this.spinsLeft = 0;
    this.coins = 0;
    this.luck = 0;
    this.relics = [];
    this.enemies = [];
    this.feverGauge = 0;
    this.feverReady = false;
    this.rerollTickets = 0;
    this.slowTickets = 0;
    this.items = [];     // ★ 追加
    this.nextFeverFill = false;
    this.reelConfig = [];
    this.selectedDeck = [];
    this.slotResult = Array(9).fill(null);
    this.isSpinning = false;
    this.totalDamageDealt = 0;
    this.totalSpinsUsed = 0;
    this.totalLinesMatched = 0;
    this.totalFevers = 0;
    this.bossPhase = 0;
    this.firePassiveActive = false;
    this.icePassiveActive = false;
    this.thunderPassiveActive = false;
    this.stageSnapshot = null;
    this.mirrorshieldActive = false;
    this.nextShopFree = false;
    this.bloodpactBonus = 0;
    this.crystalballUsed = false;
    this.superConductorSpins = 0;
    this.feverDisabled = false;
    this.alchemistNextDouble = false;
    this.berserkerActive = false;
    this.adrenalineSpins = 0;
    this.starburstActive = false;
    this.tridentActive = false;
    this.critChargeActive = false;
    this.sureshottActive = false;
    this.oracleSlot = null;
    this.wildcardActive = false;
  }
};

// ==========================================
// AUDIO SYSTEM
// ==========================================
const AudioSystem = {
  ctx: null,

  init() {
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
  },

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  },

  _play(freq, duration, type = 'square', volume = 0.15) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(volume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
    osc.connect(gain).connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  },

  playSpinStart() {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => this._play(300 + i * 100, 0.08, 'square', 0.1), i * 50);
    }
  },

  playReelStop() {
    this._play(500, 0.15, 'sine', 0.2);
    setTimeout(() => this._play(600, 0.1, 'sine', 0.15), 50);
  },

  playHit() {
    this._play(200, 0.15, 'sawtooth', 0.12);
    this._play(400, 0.1, 'square', 0.08);
  },

  playCrit() {
    this._play(800, 0.2, 'square', 0.15);
    setTimeout(() => this._play(1200, 0.3, 'sine', 0.12), 80);
  },

  playLineMatch() {
    this._play(600, 0.2, 'sine', 0.12);
    setTimeout(() => this._play(800, 0.2, 'sine', 0.12), 100);
    setTimeout(() => this._play(1000, 0.3, 'sine', 0.1), 200);
  },

  playCutin() {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => this._play(400 + i * 200, 0.15, 'sawtooth', 0.1), i * 60);
    }
    setTimeout(() => this._play(1400, 0.5, 'sine', 0.15), 300);
  },

  playFever() {
    for (let i = 0; i < 8; i++) {
      setTimeout(() => this._play(300 + i * 150, 0.2, 'sawtooth', 0.12), i * 80);
    }
    setTimeout(() => {
      this._play(1600, 0.6, 'sine', 0.2);
      this._play(800, 0.6, 'sine', 0.15);
    }, 700);
  },

  playUIClick() {
    this._play(700, 0.06, 'sine', 0.1);
  },

  playVictory() {
    const notes = [523, 659, 784, 1047];
    notes.forEach((n, i) => {
      setTimeout(() => this._play(n, 0.3, 'sine', 0.12), i * 150);
    });
  },

  playGameOver() {
    const notes = [400, 350, 300, 200];
    notes.forEach((n, i) => {
      setTimeout(() => this._play(n, 0.4, 'sawtooth', 0.1), i * 200);
    });
  },

  playEnemyDefeat() {
    this._play(1000, 0.15, 'square', 0.1);
    setTimeout(() => this._play(1200, 0.2, 'sine', 0.12), 100);
  },

  playBuy() {
    this._play(800, 0.1, 'sine', 0.1);
    setTimeout(() => this._play(1000, 0.15, 'sine', 0.12), 80);
  },
};

// ==========================================
// EFFECT SYSTEM - 演出
// ==========================================
const EffectSystem = {
  // ダメージ数字ポップアップ(敵の上)
  showDamageNumber(enemyEl, damage, type = 'normal', element = null) {
    const popup = document.createElement('div');
    popup.className = `damage-popup ${type}`;
    if (element) popup.classList.add(`element-${element}`);
    popup.textContent = damage >= 0 ? `-${Math.round(damage)}` : `${Math.round(damage)}`;
    const sprite = enemyEl.querySelector('.enemy-sprite');
    if (sprite) {
      sprite.appendChild(popup);
      popup.style.left = '50%';
      popup.style.top = '0';
      popup.style.transform = 'translateX(-50%)';
    }
    setTimeout(() => popup.remove(), 1000);
  },

  // 敵ヒット演出
  enemyHit(enemyEl) {
    enemyEl.classList.add('enemy-hit');
    setTimeout(() => enemyEl.classList.remove('enemy-hit'), 400);
  },

  // 画面揺れ
  shakeScreen(heavy = false) {
    const el = document.getElementById('game-screen');
    el.classList.remove('shaking', 'shaking-heavy');
    void el.offsetWidth; // reflow
    el.classList.add(heavy ? 'shaking-heavy' : 'shaking');
    setTimeout(() => el.classList.remove('shaking', 'shaking-heavy'), heavy ? 700 : 500);
  },

  // 画面フラッシュ
  flashScreen(color = '#fff') {
    const el = document.getElementById('screen-flash');
    el.style.background = color;
    el.classList.remove('active');
    void el.offsetWidth;
    el.classList.add('active');
    setTimeout(() => el.classList.remove('active'), 400);
  },

  addDamageLog(text, type = 'hit') {
    // ★ 右パネルのログに出力
    const log = document.getElementById('panel-damage-log');
    if (!log) return;
    const entry = document.createElement('div');
    entry.className = `log-entry ${type === 'crit' ? 'crit' : ''}`;
    entry.textContent = text;
    // 先頭に追加（column-reverseで最新が上に見える）
    log.insertBefore(entry, log.firstChild);
    // 最大20件
    while (log.children.length > 13) {
      log.removeChild(log.lastChild);
    }
  },

  // スロットセル点灯 (マッチ)
  highlightMatchedCells(indices) {
    indices.forEach(i => {
      const cell = document.querySelectorAll('.slot-cell')[i];
      if (cell) {
        cell.classList.add('matched');
        setTimeout(() => cell.classList.remove('matched'), 600);
      }
    });
  },

  // ライン光線
  showLineBeam(lineIndex, color) {
  const svg = document.getElementById('line-svg');
  const grid = document.getElementById('slot-grid');
  if (!grid || !svg) return;

  const cells = document.querySelectorAll('.slot-cell');
  const line = CONFIG.LINES[lineIndex];

  // ★ svgではなくgridを基準にする（SVGはgrid上に重なっているため）
  const gridRect = grid.getBoundingClientRect();

  const points = line.map(idx => {
    const cellRect = cells[idx].getBoundingClientRect();
    return {
      x: cellRect.left - gridRect.left + cellRect.width / 2,
      y: cellRect.top  - gridRect.top  + cellRect.height / 2,
    };
  });

  const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  svgEl.setAttribute('x1', points[0].x);
  svgEl.setAttribute('y1', points[0].y);
  svgEl.setAttribute('x2', points[2].x);
  svgEl.setAttribute('y2', points[2].y);
  svgEl.setAttribute('stroke', '#' + color);
  svgEl.setAttribute('class', 'line-beam active');
  svg.appendChild(svgEl);
  setTimeout(() => svgEl.remove(), 800);
  },

  // カットイン演出
  async showCutin(character) {
    const overlay = document.getElementById('cutin-overlay');
    const bg = document.getElementById('cutin-bg');
    const img = document.getElementById('cutin-image');
    const name = document.getElementById('cutin-name');
    const skill = document.getElementById('cutin-skill');

    bg.style.background = `radial-gradient(circle, ${character.color}88, ${character.color}22)`;
    // Use cutin image if available, otherwise show emoji
    if (character.cutinImg) {
      img.style.backgroundImage = `url(${character.cutinImg})`;
      img.textContent = '';
    } else {
      img.style.backgroundImage = 'none';
      img.textContent = character.emoji;
      img.style.fontSize = '120px';
      img.style.display = 'flex';
      img.style.alignItems = 'center';
      img.style.justifyContent = 'center';
    }
    name.textContent = character.name;
    skill.textContent = character.skillName;

    overlay.classList.add('active');
    AudioSystem.playCutin();
    EffectSystem.shakeScreen(true);
    EffectSystem.flashScreen(character.color);

    await EffectSystem.wait(1300);
    overlay.classList.remove('active');
  },

  async showAllSameCutin(character) {
    const overlay = document.getElementById('cutin-overlay');
    const bg = document.getElementById('cutin-bg');
    const img = document.getElementById('cutin-image');
    const name = document.getElementById('cutin-name');
    const skill = document.getElementById('cutin-skill');
    bg.style.background = `radial-gradient(circle, ${character.color}cc, ${character.color}11)`;
    const src = character.allSameImg || character.cutinImg;
    if (src) {
      img.style.backgroundImage = `url(${src})`;
      img.textContent = '';
    } else {
      img.style.backgroundImage = 'none';
      img.textContent = character.emoji;
      img.style.fontSize = '120px';
      img.style.display = 'flex';
      img.style.alignItems = 'center';
      img.style.justifyContent = 'center';
    }
    name.textContent = character.name;
    skill.textContent = '★ FEVER READY ★';
    overlay.classList.add('active', 'allsame-effect');
    for (let i = 0; i < 3; i++) {
      setTimeout(() => EffectSystem.flashScreen(character.color), i * 150);
    }
    EffectSystem.shakeScreen(true);
    const cells = document.querySelectorAll('.slot-cell');
    cells.forEach((c, i) => setTimeout(() => c.classList.add('matched'), i * 60));
    AudioSystem.playCutin();
    await EffectSystem.wait(1400);
    overlay.classList.remove('active', 'allsame-effect');
    cells.forEach(c => c.classList.remove('matched'));
  },

  // フィーバー演出
  async showFever(character, totalDamage) {
    const overlay = document.getElementById('fever-overlay');
    const charEl = document.getElementById('fever-character');
    const explosion = document.getElementById('fever-explosion');
    const damageEl = document.getElementById('fever-damage');

// 変更後
    const feverSrc = character.feverImg || character.cutinImg;
    if (feverSrc) {
      charEl.style.backgroundImage = `url(${feverSrc})`;
      charEl.textContent = '';
    } else {
      charEl.style.backgroundImage = 'none';
      charEl.textContent = character.emoji;
      charEl.style.fontSize = '150px';
      charEl.style.display = 'flex';
      charEl.style.alignItems = 'center';
      charEl.style.justifyContent = 'center';
    }
    explosion.style.background = `radial-gradient(circle, ${character.color}, transparent)`;
    damageEl.textContent = '';

    // ★ 既存パーティクルを事前に全削除
    document.querySelectorAll('.particle').forEach(p => p.remove());

    overlay.classList.add('active');
    AudioSystem.playFever();

    // ★ setTimeoutのIDを保持してoverlay終了時にキャンセル
    const timers = [];
    timers.push(setTimeout(() => EffectSystem.shakeScreen(true), 200));
    timers.push(setTimeout(() => EffectSystem.flashScreen(character.color), 800));
    timers.push(setTimeout(() => EffectSystem.flashScreen('#fff'), 1000));
    timers.push(setTimeout(() => EffectSystem.shakeScreen(true), 1000));
// 変更後
    timers.push(setTimeout(() => {
      if (overlay.classList.contains('active')) {
        const gs = document.getElementById('game-screen');
        const cx = gs.offsetWidth / 2;
        const cy = gs.offsetHeight / 2;
        EffectSystem.spawnParticles(character.element, cx, cy, 40);
      }
    }, 900));
    timers.push(setTimeout(() => {
      if (overlay.classList.contains('active')) {
        EffectSystem._countUpDamage(damageEl, totalDamage);
      }
    }, 1200));

    await EffectSystem.wait(2800);

    // ★ overlay終了時にタイマーとパーティクルを全クリア
    timers.forEach(id => clearTimeout(id));
    overlay.classList.remove('active');
    document.querySelectorAll('.particle').forEach(p => p.remove());
  },

  _countUpDamage(el, target) {
    let current = 0;
    const step = Math.max(1, Math.floor(target / 30));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      el.textContent = Math.round(current);
    }, 30);
  },

  // パーティクル生成
  spawnParticles(element, cx, cy, count = 20) {
    const container = document.getElementById('game-screen') || document.body;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const dist = 60 + Math.random() * 120;
      const px = Math.cos(angle) * dist;
      const py = Math.sin(angle) * dist;  // ★ -50を削除して全方向に均等に散らす
      p.className = `particle particle-${element}`;
      p.style.left = cx + 'px';
      p.style.top = cy + 'px';
      p.style.setProperty('--px', px + 'px');
      p.style.setProperty('--py', py + 'px');
      p.style.animationDelay = (Math.random() * 0.3) + 's';
      container.appendChild(p);
      setTimeout(() => p.remove(), 2000);
    }
  },

  // 紙吹雪
  spawnConfetti(container, count = 50) {
    const colors = ['#ff2299', '#00ffee', '#ffdd00', '#44ff88', '#bb44ff', '#ff8800', '#fff'];
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle particle-confetti';
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.left = Math.random() * 390 + 'px';
      p.style.top = -20 + 'px';
      p.style.setProperty('--px', (Math.random() - 0.5) * 200 + 'px');
      p.style.setProperty('--py', 600 + Math.random() * 300 + 'px');
      p.style.animationDelay = Math.random() * 2 + 's';
      p.style.width = (4 + Math.random() * 8) + 'px';
      p.style.height = (4 + Math.random() * 8) + 'px';
      container.appendChild(p);
      setTimeout(() => p.remove(), 5000);
    }
  },

  // タイトル画面パーティクル
  spawnTitleParticles() {
    const container = document.getElementById('title-particles');
    if (!container) return;
    setInterval(() => {
      const p = document.createElement('div');
      p.className = 'particle particle-star';
      p.style.left = Math.random() * 390 + 'px';
      p.style.top = Math.random() * 844 + 'px';
      p.style.setProperty('--px', (Math.random() - 0.5) * 100 + 'px');
      p.style.setProperty('--py', -(50 + Math.random() * 100) + 'px');
      container.appendChild(p);
      setTimeout(() => p.remove(), 1500);
    }, 200);
  },

  wait(ms) {
    return new Promise(r => setTimeout(r, ms));
  }
};

// ==========================================
// SLOT ENGINE
// ==========================================
const SlotEngine = {
  spinIntervals: [null, null, null], // per column
  reelSymbols: [], // flat array of what's in each reel position

  generateReelSymbols() {
    // Build reel based on selected deck
    const deck = GameState.selectedDeck;
    // Each column has its own symbol pool
    this.reelSymbols = [];
    for (let col = 0; col < 3; col++) {
      const pool = [];
      // Each character appears 2 times by default
      deck.forEach(charId => {
        pool.push(charId, charId);
      });
      this.reelSymbols.push(pool);
    }
  },

  spin() {
    GameState.isSpinning = true;
        // ★ LUCK確定マスをスピン開始時に決定
    SlotEngine._luckySlots = [];
    // sureshottActive: LUCK判定を強制成功扱い（=全9マス確定）
    const effectiveLuck = GameState.sureshottActive ? Math.max(GameState.luck, 8) : GameState.luck;
    if (effectiveLuck > 0) {
      const count = Math.min(effectiveLuck + 1, 9);  // 最大9マス
      const allIndices = [0,1,2,3,4,5,6,7,8];
      const shuffled = allIndices.sort(() => Math.random() - 0.5);
      SlotEngine._luckySlots = shuffled.slice(0, count);
      // ★ デッキが空でないことを確認してからcharIdを決定
      if (GameState.selectedDeck.length > 0) {
        // vortexreel: 中央マス(index=4)のキャラにluckyCharIdを固定
        if (GameState.relics.some(r => r.id === 'vortexreel')) {
          SlotEngine._luckyCharId = GameState.slotResult[4] ?? GameState.selectedDeck[0];
        } else {
          SlotEngine._luckyCharId = GameState.selectedDeck[
            Math.floor(Math.random() * GameState.selectedDeck.length)
          ];
        }
      } else {
        SlotEngine._luckySlots = [];
      }
    }
    // sureshottActiveは1スピンで使い切り
    if (GameState.sureshottActive) GameState.sureshottActive = false;
    const cells = document.querySelectorAll('.slot-cell');

    // Clear previous
    cells.forEach(cell => {
      cell.classList.remove('locked', 'matched');
      cell.classList.add('spinning');
      cell.removeAttribute('data-element'); 
    });

    AudioSystem.playSpinStart();

    // Randomize display during spin
    this.spinIntervals.forEach((_, col) => {
      this.spinIntervals[col] = setInterval(() => {
        for (let row = 0; row < 3; row++) {
          const idx = row * 3 + col;
          const pool = this.reelSymbols[col];
          const randCharId = pool[Math.floor(Math.random() * pool.length)];
          const char = CONFIG.CHARACTERS[randCharId];
          const inner = cells[idx].querySelector('.slot-cell-inner');
          if (inner) {
            inner.style.color = char.color;
            inner.innerHTML = renderCharIcon(char, '72px', '72px');
          }
        }
      }, 80);
    });

    // Auto-stop columns with delay
    const stopDelay = 600;
    return new Promise(resolve => {
      setTimeout(() => this.stopColumn(0), stopDelay);
      setTimeout(() => this.stopColumn(1), stopDelay * 2);
      setTimeout(() => this.stopColumn(2, resolve), stopDelay * 3);
    });
  },

  stopColumn(col, callback) {
    clearInterval(this.spinIntervals[col]);
    this.spinIntervals[col] = null;
    const cells = document.querySelectorAll('.slot-cell');
    // crystalball: バトル最初のスピン時、ランダム2ライン分のキャラを確定させる
    if (GameState.relics.some(r => r.id === 'crystalball') && !GameState.crystalballUsed && col === 0 && GameState.totalSpinsUsed === 0) {
      GameState.crystalballUsed = true;
      // ランダムに2行を選んでデッキからキャラを確定
      const allRows = [0, 1, 2];
      const shuffled = allRows.sort(() => Math.random() - 0.5);
      const lockedRows = [shuffled[0], shuffled[1]];
      lockedRows.forEach(row => {
        const charId = GameState.selectedDeck[Math.floor(Math.random() * GameState.selectedDeck.length)];
        const char = CONFIG.CHARACTERS[charId];
        for (let c = 0; c < 3; c++) {
          const idx = row * 3 + c;
          GameState.slotResult[idx] = charId;
          // 演出は対応する列が停止した時に反映するため、ここではslotResultのみセット
          // ただし、現在停止中の列(col=0)については即時反映
        }
      });
      // luckSlotsとして登録（各列の停止処理で反映される）
      SlotEngine._crystalLockedRows = lockedRows;
      EffectSystem.flashScreen('#88aaff');
      const gs = document.getElementById('game-screen');
      const cx = gs.offsetWidth / 2, cy = gs.offsetHeight / 2;
      EffectSystem.spawnParticles('ice', cx, cy, 40);
    }

    const deck = GameState.selectedDeck;

    // Apply LUCK: guaranteed character placements
    const allCharIds = [0, 1, 2, 3, 4];
    // actReshuffle適用中：未選択キャラも含む全キャラを抽選プールに使用
    const effectiveDeck = SlotEngine._reshuffleActive ? allCharIds : deck;
    for (let row = 0; row < 3; row++) {
      const idx = row * 3 + col;
      let charId;

        // actWildcard: 全マス指定キャラで確定
        if (SlotEngine._wildcardCharId !== undefined && SlotEngine._wildcardCharId !== null) {
          charId = SlotEngine._wildcardCharId;
        }

        // crystalball: 確定行ならスロット結果を上書き
        if ((charId === undefined || charId === null) && SlotEngine._crystalLockedRows && SlotEngine._crystalLockedRows.includes(row)) {
          charId = GameState.slotResult[idx];
        }

        // Check if LUCK gives a guaranteed slot
        const flatIdx = row * 3 + col;
        if ((charId === undefined || charId === null) && SlotEngine._luckySlots && SlotEngine._luckySlots.includes(flatIdx)) {
          charId = SlotEngine._luckyCharId;
        }

        if (charId === undefined || charId === null || !CONFIG.CHARACTERS[charId]) {
          charId = effectiveDeck[Math.floor(Math.random() * effectiveDeck.length)];
        }
      GameState.slotResult[idx] = charId;
      const char = CONFIG.CHARACTERS[charId];
      const inner = cells[idx].querySelector('.slot-cell-inner');
      if (inner) {
        inner.style.color = char.color;
        inner.innerHTML = renderCharIcon(char, '72px', '72px');
      }

      cells[idx].classList.remove('spinning');
      cells[idx].classList.add('locked');
      cells[idx].setAttribute('data-element', char.element);
    }

    AudioSystem.playReelStop();

    // Apply fire wild relic
    if (GameState.relics.some(r => r.id === 'burning_reel')) {
      this._applyFireWild(col);
    }

    if (callback) {
      setTimeout(() => {
        GameState.isSpinning = false;
        callback();
      }, 200);
    }
  },

  _applyFireWild(col) {
    const fireCharId = CONFIG.CHARACTERS.findIndex(c => c.element === 'fire');
    if (fireCharId === -1) return;
    if (!GameState.selectedDeck.includes(fireCharId)) return;

    const cells = document.querySelectorAll('.slot-cell');

    for (let row = 0; row < 3; row++) {
      const idx = row * 3 + col;
      if (GameState.slotResult[idx] === fireCharId) {
        const adjacents = [];
        // ★ 右隣のみ（まだ停止していない列）に限定。左（停止済み）は触らない
        if (col < 2) adjacents.push(row * 3 + (col + 1));

        adjacents.forEach(adjIdx => {
          // ★ spinning中のセルは書き換えない（まだ回転中は無視）
          if (cells[adjIdx].classList.contains('spinning')) return;
          if (GameState.slotResult[adjIdx] === null) return;
          if (GameState.slotResult[adjIdx] === fireCharId) return;

          GameState.slotResult[adjIdx] = fireCharId;
          const inner = cells[adjIdx].querySelector('.slot-cell-inner');
          const char = CONFIG.CHARACTERS[fireCharId];
          if (inner) {
            inner.style.color = char.color;
            inner.innerHTML = renderCharIcon(char, '44px', '44px');
          }
        });
      }
    }
  },

  checkLines() {
    const result = GameState.slotResult;
    const matchedLines = [];

    CONFIG.LINES.forEach((line, lineIdx) => {
      const chars = line.map(i => result[i]);
      if (chars[0] !== null && chars[0] === chars[1] && chars[1] === chars[2]) {
        matchedLines.push({
          lineIndex: lineIdx,
          characterId: chars[0],
          cells: line,
          isDiagonal: lineIdx >= 6,  // ★ 斜めは最後の2本（インデックス6,7）
        });
      }
    });

    // jokercard: 先頭列(列0)の3マスが、未選択キャラ2種のどちらか一方で揃うと縦ライン成立扱い
    if (GameState.relics.some(r => r.id === 'jokercard')) {
      const allCharIds = [0, 1, 2, 3, 4];
      const unselected = allCharIds.filter(id => !GameState.selectedDeck.includes(id));
      // 縦ライン0(列0=cells[0,3,6])で、未選択2キャラのどちらかなら揃い扱い
      const col0Cells = [0, 3, 6];
      const col0Chars = col0Cells.map(i => result[i]);
      if (col0Chars.every(c => c !== null && unselected.includes(c)) && !matchedLines.find(ml => ml.lineIndex === 0)) {
        const charId = col0Chars[0];
        matchedLines.push({ lineIndex: 0, characterId: charId, cells: col0Cells, isDiagonal: false });
      }
    }
    const allSame = result.every(c => c !== null && c === result[0]);
    return { matchedLines, allSame, allSameChar: allSame ? result[0] : null };
  },
};

// ==========================================
// BATTLE SYSTEM
// ==========================================
const BattleSystem = {
  async processSpinResult() {
    const { matchedLines, allSame, allSameChar } = SlotEngine.checkLines();
    const lineCount = matchedLines.length;

    // stormcore: スピンのたびに風カットイン+全敵に40ダメージ
    if (GameState.relics.some(r => r.id === 'stormcore')) {
      const windId = GameState.selectedDeck.includes(3) ? 3
        : GameState.selectedDeck[Math.floor(Math.random() * GameState.selectedDeck.length)];
      const windChar = CONFIG.CHARACTERS[windId];
      await EffectSystem.showCutin(windChar);
      BattleSystem.applyDamageToAll(40, windChar);
      EffectSystem.addDamageLog('🌪️ 嵐のコア -40全体', 'hit');
    }

    GameState.totalSpinsUsed++;
    // interestjar: コイン200枚以上のとき毎スピン+5コイン
    if (GameState.relics.some(r => r.id === 'interestjar') && GameState.coins >= 200) {
      GameState.coins += 5;
      UIManager.updateHUD();
    }
    GameState.totalLinesMatched += lineCount;
    // bloodpact: スピンのたびに与ダメ永続+5
    if (GameState.relics.some(r => r.id === 'bloodpact')) {
      GameState.bloodpactBonus += 5;
    }

    // Fever gauge
    let feverGain = CONFIG.FEVER.gainPerSpin;
    if (lineCount > 0) feverGain += CONFIG.FEVER.gainPerLine * lineCount;
    if (GameState.relics.some(r => r.id === 'feverboost')) feverGain *= 2;
    if (GameState.thunderPassiveActive) feverGain *= 1.1;

    // superconductor: フィーバー後3スピンゲージ蓄積×3
    if (GameState.superConductorSpins > 0) {
      feverGain *= 3;
      GameState.superConductorSpins--;
    }
    GameState.feverGauge = Math.min(CONFIG.FEVER.maxGauge, GameState.feverGauge + feverGain);

    // chain_mirror relic: 2lines → 3lines
    let effectiveLineCount = lineCount;
    if (lineCount === 2 && GameState.relics.some(r => r.id === 'chain_mirror')) {
      effectiveLineCount = 3;
    }

    if (GameState.feverGauge >= CONFIG.FEVER.maxGauge) {
      GameState.feverGauge = CONFIG.FEVER.maxGauge;
      GameState.feverReady = true;
      UIManager.updateFeverGauge();
      if (allSame) {
        const char = CONFIG.CHARACTERS[allSameChar];
        await EffectSystem.showAllSameCutin(char);
      }
    }

    if (lineCount === 0) {
      const damage = CONFIG.DAMAGE.noMatchDamage;
      const target = BattleSystem.getFirstAliveEnemy();
      if (target) {
        BattleSystem.applyDamageToEnemy(target.index, damage, null);
      }
    } else {
      for (let i = 0; i < matchedLines.length; i++) {
        const ml = matchedLines[i];
        const char = CONFIG.CHARACTERS[ml.characterId];

        EffectSystem.highlightMatchedCells(ml.cells);
        EffectSystem.showLineBeam(ml.lineIndex, char.color);

        await EffectSystem.wait(150);  // ★ 修正

        const baseAtk = char.baseDamage ?? CONFIG.DAMAGE.baseDamage;
        let damage = baseAtk * CONFIG.DAMAGE.lineMultiplier[Math.min(effectiveLineCount, 3)];

        // Diagonal bonus relic
        if (ml.isDiagonal && GameState.relics.some(r => r.id === 'golden_line')) {
          damage *= 1.5;
        }

        // Bonus damage relic
        if (GameState.relics.some(r => r.id === 'pursuit_blade')) {
          damage += 30;
        }

        // crimson_ring: 中央横ライン（lineIndex=1）のみダメージ×2
        if (ml.lineIndex === 1 && GameState.relics.some(r => r.id === 'crimson_ring')) {
          damage *= 2;
        }

        const isCrit = false;
        const charId = ml.characterId;

        if (charId === 2) {
          // ⚡ 雷：全体均等ダメージ
          BattleSystem.applyDamageToAll(damage, char);
          AudioSystem.playLineMatch();

        } else if (charId === 1) {
          // ❄️ 氷：単体攻撃 + LUCK+1
          const target = BattleSystem.getFirstAliveEnemy();
          if (target) {
            BattleSystem.applyDamageToEnemy(target.index, damage, char);
            AudioSystem.playLineMatch();
          }
          GameState.luck = Math.min(GameState.luck + 1, 3);
          UIManager.updateHUD();  // ★ LUCK表示を即時更新

        } else if (charId === 3) {
          // 🌀 風：単体攻撃 + 2列以上でスピン+1
          const target = BattleSystem.getFirstAliveEnemy();
          if (target) {
            BattleSystem.applyDamageToEnemy(target.index, damage, char);
            AudioSystem.playLineMatch();
          }
          if (effectiveLineCount >= 2) {
            GameState.spinsLeft++;
            UIManager.updateHUD();
          }

        } else if (charId === 4) {
          // 🌑 闇：最大HP15%ダメージ
          const target = BattleSystem.getFirstAliveEnemy();
          if (target) {
            const percentDmg = Math.floor(target.enemy.maxHp * 0.15);
            BattleSystem.applyDamageToEnemy(target.index, percentDmg, char);
            AudioSystem.playLineMatch();
          }

        } else {
          // 🔥 火：単体高火力
          const target = BattleSystem.getFirstAliveEnemy();
          if (target) {
            BattleSystem.applyDamageToEnemy(target.index, damage, char);
            AudioSystem.playLineMatch();
          }
        }

    // Vampiric relic
    if (GameState.relics.some(r => r.id === 'vampirefang')) {
      GameState.coins += Math.floor(damage * 0.1);
      UIManager.updateHUD();
    }
    // miraclecoin: 与ダメの10%コイン化
    if (GameState.relics.some(r => r.id === 'miraclecoin')) {
      GameState.coins += Math.floor(damage * 0.1);
      UIManager.updateHUD();
    }
      }

      // 3+lines: cutin
      if (effectiveLineCount >= 3) {
        const cutinChar = CONFIG.CHARACTERS[matchedLines[0].characterId];
        await EffectSystem.showCutin(cutinChar);
        if (GameState.relics.some(r => r.id === 'spin_charger')) {
          GameState.spinsLeft++;
          UIManager.updateHUD();
        }
        // infernocore: 手持ち他キャラのライン効果も発動
        if (GameState.relics.some(r => r.id === 'infernocore')) {
          const triggeredCharId = matchedLines[0].characterId;
          const otherCharIds = GameState.selectedDeck.filter(id => id !== triggeredCharId);
          for (const id of otherCharIds) {
            const c = CONFIG.CHARACTERS[id];
            await EffectSystem.showCutin(c);
            const baseDmg = c.baseDamage ?? CONFIG.DAMAGE.baseDamage;
            const dmg = baseDmg * CONFIG.DAMAGE.lineMultiplier[3];
            if (id === 2) {
              BattleSystem.applyDamageToAll(dmg, c);
            } else if (id === 1) {
              const t = BattleSystem.getFirstAliveEnemy();
              if (t) BattleSystem.applyDamageToEnemy(t.index, dmg, c);
              GameState.luck = Math.min(GameState.luck + 1, 3);
              UIManager.updateHUD();
            } else if (id === 4) {
              const t = BattleSystem.getFirstAliveEnemy();
              if (t) BattleSystem.applyDamageToEnemy(t.index, Math.floor(t.enemy.maxHp * 0.15), c);
            } else {
              const t = BattleSystem.getFirstAliveEnemy();
              if (t) BattleSystem.applyDamageToEnemy(t.index, dmg, c);
            }
            EffectSystem.addDamageLog(`🔥 業火連鎖！`, 'crit');
            AudioSystem.playLineMatch();
          }
        }
      } else if (effectiveLineCount >= 2) {
        EffectSystem.shakeScreen(false);
        EffectSystem.flashScreen(CONFIG.CHARACTERS[matchedLines[0].characterId].color);
      }
    }

// doubleline: 同キャラ2本以上で全体爆発+200
if (GameState.relics.some(r => r.id === 'doubleline') && matchedLines.length >= 2) {
  const charCounts = {};
  matchedLines.forEach(ml => { charCounts[ml.characterId] = (charCounts[ml.characterId] || 0) + 1; });
  const hasDouble = Object.values(charCounts).some(v => v >= 2);
  if (hasDouble) {
    BattleSystem.applyDamageToAll(200, null);
    EffectSystem.flashScreen('#ffffff');
    setTimeout(() => EffectSystem.flashScreen('#ff4400'), 150);
    EffectSystem.shakeScreen(true);
    const gs = document.getElementById('game-screen');
    const cx = gs.offsetWidth / 2, cy = gs.offsetHeight / 2;
    ['fire','ice','thunder','wind','dark'].forEach((el, i) => {
      setTimeout(() => EffectSystem.spawnParticles(el, cx, cy, 10), i * 50);
    });
    EffectSystem.addDamageLog('💥 ダブルライン爆発！', 'crit');
  }
}

// curseddice: 5%でランダム敵即死（ボス除く）
if (GameState.relics.some(r => r.id === 'curseddice')) {
      if (Math.random() < 0.05) {
        const alive = GameState.enemies.filter(e => e.hp > 0 && !e.isBoss);
        if (alive.length > 0) {
          const target = alive[Math.floor(Math.random() * alive.length)];
          const idx = GameState.enemies.indexOf(target);
          target.hp = 0;
          target.defeated = true;
          const enemyEl = document.querySelectorAll('.enemy-card')[idx];
          if (enemyEl) enemyEl.classList.add('defeated');
          EffectSystem.flashScreen('#ff0000');
          EffectSystem.shakeScreen(false);
          EffectSystem.addDamageLog('💀 呪い発動！', 'crit');
        }
      }
    }

    UIManager.updateFeverGauge();
    UIManager.updateEnemyDisplay();

    // 一時LUCKボーナスをスピン後にリセット
    if (GameState.tempLuckBonus && GameState.tempLuckBonus > 0) {
      GameState.luck = Math.max(0, GameState.luck - GameState.tempLuckBonus);
      GameState.tempLuckBonus = 0;
    }
    // crystalball: 1スピンで使い切り
    if (SlotEngine._crystalLockedRows) {
      SlotEngine._crystalLockedRows = null;
    }
    // actReshuffle / actWildcard: 1スピンで使い切り
    if (SlotEngine._reshuffleActive) SlotEngine._reshuffleActive = false;
    if (SlotEngine._wildcardCharId !== undefined && SlotEngine._wildcardCharId !== null) {
      SlotEngine._wildcardCharId = null;
    }
    UIManager.updateHUD();

    // infinitechain: 揃わなかったマスを1つ再抽選
    if (GameState.relics.some(r => r.id === 'infinitechain')) {
      const matchedCells = matchedLines.flatMap(ml => ml.cells);
      const unmatchedCells = [0,1,2,3,4,5,6,7,8].filter(i => !matchedCells.includes(i));
      if (unmatchedCells.length > 0) {
        const targetIdx = unmatchedCells[Math.floor(Math.random() * unmatchedCells.length)];
        const cells = document.querySelectorAll('.slot-cell');
        const targetCell = cells[targetIdx];
        targetCell.style.boxShadow = '0 0 16px #ffdd00';
        targetCell.classList.add('spinning');
        await EffectSystem.wait(650);
        const newCharId = GameState.selectedDeck[Math.floor(Math.random() * GameState.selectedDeck.length)];
        GameState.slotResult[targetIdx] = newCharId;
        const newChar = CONFIG.CHARACTERS[newCharId];
        const inner = targetCell.querySelector('.slot-cell-inner');
        if (inner) {
          inner.style.color = newChar.color;
          inner.innerHTML = renderCharIcon(newChar, '72px', '72px');
        }
        targetCell.classList.remove('spinning');
        targetCell.classList.add('locked');
        targetCell.style.boxShadow = '';
        targetCell.setAttribute('data-element', newChar.element);
        AudioSystem.playReelStop();
        // 再チェックして新ラインを元のmatchedLinesに合算
        const { matchedLines: newLines } = SlotEngine.checkLines();
        const addedLines = newLines.filter(nl => !matchedLines.some(ml => ml.lineIndex === nl.lineIndex));
        if (addedLines.length > 0) {
          for (const ml of addedLines) {
            matchedLines.push(ml);
            const char = CONFIG.CHARACTERS[ml.characterId];
            EffectSystem.highlightMatchedCells(ml.cells);
            EffectSystem.showLineBeam(ml.lineIndex, char.color);
            await EffectSystem.wait(150);
            const baseAtk = char.baseDamage ?? CONFIG.DAMAGE.baseDamage;
            const totalLines = matchedLines.length;
            let damage = baseAtk * CONFIG.DAMAGE.lineMultiplier[Math.min(totalLines, 3)];
            const charId = ml.characterId;
            if (charId === 2) {
              BattleSystem.applyDamageToAll(damage, char);
            } else {
              const target = BattleSystem.getFirstAliveEnemy();
              if (target) BattleSystem.applyDamageToEnemy(target.index, damage, char);
            }
            AudioSystem.playLineMatch();
          }
          EffectSystem.addDamageLog('♾️ 無限連鎖！', 'crit');
        }
      }
    }

    // circusdice: スピンのたびにLUCK変動
    if (GameState.relics.some(r => r.id === 'circusdice')) {
      const roll = Math.floor(Math.random() * 3);
      if (roll === 0) {
        GameState.luck = 0;
      } else {
        GameState.luck += roll;
      }
      UIManager.updateHUD();
      EffectSystem.addDamageLog(`🎪 LUCK → ${GameState.luck}`, 'hit');
    }

    // jestermask: ラインが揃わなかった場合、次のスピンLUCK+7
    if (lineCount === 0 && GameState.relics.some(r => r.id === 'jestermask')) {
      GameState.luck += 7;
      GameState.tempLuckBonus = (GameState.tempLuckBonus || 0) + 7;
      EffectSystem.addDamageLog('🎭 LUCK+7！', 'hit');
      UIManager.updateHUD();
    }

    // fatecoin: スピンのたびにコイン2倍か半分
    if (GameState.relics.some(r => r.id === 'fatecoin')) {
      if (Math.random() < 0.5) {
        GameState.coins *= 2;
        EffectSystem.addDamageLog('💰 コイン2倍！', 'crit');
      } else {
        GameState.coins = Math.floor(GameState.coins / 2);
        EffectSystem.addDamageLog('💸 コイン半減...', 'hit');
      }
      UIManager.updateHUD();
    }

    // jewelmerchant: コイン200超で毎スピン+5コイン
    if (GameState.relics.some(r => r.id === 'jewelmerchant') && GameState.coins > 200) {
      GameState.coins += 5;
      UIManager.updateHUD();
    }

    // ★ ミラーシールド：同じ目でprocessSpinResultを再実行
    if (GameState.mirrorshieldActive) {
      GameState.mirrorshieldActive = false;
      EffectSystem.addDamageLog('🪞 ミラー発動！', 'crit');
      EffectSystem.flashScreen('#ffffff');
      EffectSystem.shakeScreen(false);
      await EffectSystem.wait(400);
      await BattleSystem.processSpinResult();

    return;
    }
  },

  applyDamageToEnemy(enemyIdx, damage, character) {
    const enemy = GameState.enemies[enemyIdx];
    if (!enemy || enemy.hp <= 0) return;
    // fire passive 50%補正
    if (GameState.firePassiveActive) damage = Math.round(damage * 1.5);
    // deathmark: 敵HP30%以下でダメージ×2
    if (GameState.relics.some(r => r.id === 'deathmark') && enemy.hp <= enemy.maxHp * 0.3) {
      damage = Math.round(damage * 2);
    }
    // wargod: 敵3体以上でダメージ×1.5
    if (GameState.relics.some(r => r.id === 'wargod') && GameState.enemies.filter(e => e.hp > 0).length >= 3) {
      damage = Math.round(damage * 1.5);
    }
    // goldencrown: コイン100以上でダメージ×1.5
    if (GameState.relics.some(r => r.id === 'goldencrown') && GameState.coins >= 100) {
      damage = Math.round(damage * 1.5);
    }
    // alchemist: アイテム使用後の次スピンダメージ×2
    if (GameState.alchemistNextDouble) {
      damage = Math.round(damage * 2);
      GameState.alchemistNextDouble = false;
    }
    // bloodpact: 累積ボーナス加算
    if (GameState.bloodpactBonus > 0) {
      damage += GameState.bloodpactBonus;
    }
    // ★ 倍率系はスピン由来ダメージのみ適用（characterが指定されている時のみ）
    if (character) {
      // adrenaline: 次3スピンのダメージ×2
      if (GameState.adrenalineSpins > 0) {
        damage = Math.round(damage * 2);
        if (!GameState._adrenalineLogged) {
          EffectSystem.addDamageLog('💉 アドレナリン×2', 'crit');
          GameState._adrenalineLogged = true;
        }
      }
      // berserker: このステージ残スピン中ダメージ×1.5
      if (GameState.berserkerActive) {
        damage = Math.round(damage * 1.5);
        if (!GameState._berserkerLogged) {
          EffectSystem.addDamageLog('🧪 バーサーカー×1.5', 'crit');
          GameState._berserkerLogged = true;
        }
      }
      // trident: 次のスピンのダメージ×1.3
      if (GameState.tridentActive) {
        damage = Math.round(damage * 1.3);
        if (!GameState._tridentLogged) {
          EffectSystem.addDamageLog('🔱 三叉×1.3', 'crit');
          GameState._tridentLogged = true;
        }
      }
      // critCharge: 次のスピンのダメージ×3
      if (GameState.critChargeActive) {
        damage = Math.round(damage * 3);
        if (!GameState._critLogged) {
          EffectSystem.addDamageLog('⚡ クリティカル×3', 'crit');
          GameState._critLogged = true;
        }
      }
    }
    damage = Math.round(damage);
    enemy.hp = Math.max(0, enemy.hp - damage);
    GameState.totalDamageDealt += damage;
    // vampire_fang: 与ダメ10%をコイン化
    if (GameState.relics.some(r => r.id === 'vampire_fang')) {
      const coinGain = Math.max(1, Math.floor(damage * 0.1));
      GameState.coins += coinGain;
      EffectSystem.addDamageLog(`🧛 +${coinGain}コイン`, 'hit');
      UIManager.updateHUD();
    }
    // ★ ログをここで出す（補正後の実ダメージ）
    EffectSystem.addDamageLog(`-${damage}`, 'hit');
    const enemyEl = document.querySelectorAll('.enemy-card')[enemyIdx];
    if (enemyEl) {
      EffectSystem.showDamageNumber(enemyEl, damage, 'normal', null);
      EffectSystem.enemyHit(enemyEl);
      AudioSystem.playHit();
      if (character) {
        const rect = enemyEl.getBoundingClientRect();
        const gameRect = document.getElementById('game-screen').getBoundingClientRect();
        EffectSystem.spawnParticles(character.element, rect.left - gameRect.left + rect.width/2, rect.top - gameRect.top + rect.height/2, 8);
      }
    }
    // Check defeat
    if (enemy.hp <= 0) {
      enemy.defeated = true;
      if (enemyEl) enemyEl.classList.add('defeated');
      AudioSystem.playEnemyDefeat();

      // healgrass: 敵撃破時にスピン+1
      if (GameState.relics.some(r => r.id === 'healgrass')) {
        GameState.spinsLeft += 1;
        UIManager.updateHUD();
      }
      // 変更後
      // ★ 撃墜ボーナスは氷パッシブ時のみ・残スピン×5コイン（上限30）
      if (GameState.icePassiveActive && !enemy.isBoss) {
        const finalBonus = Math.min(GameState.spinsLeft * 5, 30);
        if (finalBonus > 0) {
          GameState.coins += finalBonus;
          EffectSystem.addDamageLog(`+${finalBonus}コイン 撃墜ボーナス`, 'hit');
          UIManager.updateHUD();
        }
      }

      // ★ ボスフェーズ移行：派手演出
      if (enemy.isBoss && enemy.phases && GameState.bossPhase < enemy.phases - 1) {
        GameState.bossPhase++;
        enemy.hp = Math.floor(enemy.maxHp * (1 - GameState.bossPhase * 0.1));
        enemy.defeated = false;
        if (enemyEl) enemyEl.classList.remove('defeated');
        GameFlow._triggerBossPhaseBreak(GameState.bossPhase, enemy, enemyEl);
      }
    }

    UIManager.updateEnemyDisplay();
  },

  applyDamageToAll(damage, character) {
    GameState.enemies.forEach((enemy, idx) => {
      if (enemy.hp > 0) {
        BattleSystem.applyDamageToEnemy(idx, damage, character);
      }
    });
  },

  getFirstAliveEnemy() {
    for (let i = 0; i < GameState.enemies.length; i++) {
      if (GameState.enemies[i].hp > 0) {
        return { enemy: GameState.enemies[i], index: i };
      }
    }
    return null;
  },

  _freezeEnemy(idx) {
    const enemyEl = document.querySelectorAll('.enemy-card')[idx];
    if (enemyEl) {
      enemyEl.classList.add('enemy-frozen');
      setTimeout(() => enemyEl.classList.remove('enemy-frozen'), 3000);
    }
  },
  
  isStageClear() {
    return GameState.enemies.every(e => e.hp <= 0);
  },

  isGameOver() {
    return GameState.spinsLeft <= 0 && !this.isStageClear();
  },
};

// ==========================================
// REWARD SYSTEM
// ==========================================
const RewardSystem = {
  generateRewards(rarityList) {
    const pool = [...CONFIG.RELICS];
    const owned = GameState.relics.map(r => r.id);
    // 旧レリック除外
    const legacyIds = ['heavy_dice','golden_dice','golden_line','chain_mirror','burning_reel','pursuit_blade','vampire_fang','spin_charger','fever_boost'];
    const available = pool.filter(r => !owned.includes(r.id) && !legacyIds.includes(r.id));

    const buffs = [
      { id: 'buff_atk',  name: '攻撃力UP',      emoji: '⚔️', img: './image/buff_atk.png',  desc: '基礎ダメージ+20',    effect: { type: 'atkBuff',   value: 20 }, rarity: 'common'   },
      { id: 'buff_coin', name: 'コインボーナス', emoji: '💰', img: './image/buff_coin.png', desc: 'コイン+50',          effect: { type: 'coinBonus', value: 50 }, rarity: 'common'   },
      { id: 'buff_spin', name: 'スピン追加',     emoji: '🔄', img: './image/buff_spin.png', desc: '次ステージスピン+2', effect: { type: 'spinBonus', value: 2  }, rarity: 'uncommon' },
      { id: 'buff_luck', name: 'ラッキースター', emoji: '⭐', img: './image/buff_luck.png', desc: '次のスピンのみLUCK+5', effect: { type: 'tempLuck', value: 5  }, rarity: 'uncommon' },
    ];

    const allRewards = [...available, ...buffs];

    // rarityList指定時はレアリティ別抽選
    if (rarityList && Array.isArray(rarityList)) {
      const selected = [];
      rarityList.forEach(rarity => {
        const rPool = allRewards.filter(r => (r.rarity || 'common') === rarity);
        if (rPool.length > 0) {
          const idx = Math.floor(Math.random() * rPool.length);
          const picked = rPool[idx];
          selected.push(picked);
          const removeIdx = allRewards.indexOf(picked);
          if (removeIdx >= 0) allRewards.splice(removeIdx, 1);
        } else if (allRewards.length > 0) {
          const idx = Math.floor(Math.random() * allRewards.length);
          selected.push(allRewards.splice(idx, 1)[0]);
        }
      });
      return selected;
    }

    // 通常: 必ず3つ返す（足りなければバフを重複可で補充）
    const selected = [];
    for (let i = 0; i < 3 && allRewards.length > 0; i++) {
      const idx = Math.floor(Math.random() * allRewards.length);
      selected.push(allRewards.splice(idx, 1)[0]);
    }
    while (selected.length < 3) {
      // 足りない時はバフ4種から重複OKで補充
      selected.push({ ...buffs[Math.floor(Math.random() * buffs.length)] });
    }
    return selected;
  },

  currentRewards: [],
  onSelectCallback: null,

  applyReward(reward) {
    // effectが無い=レリック扱い
    if (!reward.effect) {
      if (!GameState.relics.find(r => r.id === reward.id)) {
        GameState.relics.push(reward);
      }
      UIManager.updateRelicDisplay();
      UIManager.updateHUD();
      return;
    }
    switch (reward.effect.type) {
      case 'luck':
        GameState.luck += reward.effect.value;
        break;
      case 'tempLuck':
        // 次スピンのみLUCK+N（buff_luck新仕様）
        GameState.luck += reward.effect.value;
        GameState.tempLuckBonus = (GameState.tempLuckBonus || 0) + reward.effect.value;
        break;
      case 'atkBuff':
        CONFIG.DAMAGE.baseDamage += reward.effect.value;
        break;
      case 'coinBonus':
        GameState.coins += reward.effect.value;
        break;
      case 'spinBonus':
        GameState.spinsLeft += reward.effect.value;
        break;
      default:
        if (!GameState.relics.find(r => r.id === reward.id)) {
          GameState.relics.push(reward);
        }
        break;
    }
    UIManager.updateRelicDisplay();
    UIManager.updateHUD();
  },

  showRewardScreen(onSelect) {
    const rewards = RewardSystem.generateRewards();
    RewardSystem.currentRewards = rewards;
    RewardSystem.onSelectCallback = onSelect;
    RewardSystem.renderRewards(rewards, onSelect);
    UIManager.showScreen('reward-screen');
  },

  renderRewards(rewards, onSelect) {
    const container = document.getElementById('reward-cards');
    container.innerHTML = '';

    rewards.forEach(reward => {
      const card = document.createElement('div');
      card.className = 'reward-card';
      card.innerHTML = `
        <div class="reward-card-icon">${renderIcon(reward, '48px', '48px')}</div>
        <div class="reward-card-name">${reward.name}</div>
        <div class="reward-card-desc">${reward.desc}</div>
        <div class="reward-card-rarity" style="color:${RewardSystem.rarityColor(reward.rarity)}">${reward.rarity || 'common'}</div>
      `;
      card.addEventListener('click', () => {
        AudioSystem.playUIClick();
        RewardSystem.applyReward(reward);
        onSelect();
      });
      container.appendChild(card);
    });

    if (GameState.rerollTickets > 0) {
      const rerollBtn = document.createElement('button');
      rerollBtn.id = 'reward-reroll-btn';
      rerollBtn.className = 'btn-secondary';
      rerollBtn.style.cssText = 'display:block;width:60%;margin:4px auto 0;font-size:0.8rem;padding:6px;opacity:0.8;';
      rerollBtn.textContent = `🔄 リロール (残${GameState.rerollTickets}回)`;
      rerollBtn.addEventListener('click', () => {
        AudioSystem.playUIClick();
        GameState.rerollTickets--;
        const newRewards = RewardSystem.generateRewards();
        RewardSystem.currentRewards = newRewards;
        RewardSystem.renderRewards(newRewards, onSelect);
      });
      container.appendChild(rerollBtn);
    }
  },

  rarityColor(rarity) {      // ★ アンダースコア削除
    switch (rarity) {
      case 'common':   return '#aaa';
      case 'uncommon': return '#44ff88';
      case 'rare':     return '#ffdd00';
      default:         return '#aaa';
    }
  }
};


// ==========================================
// SHOP SYSTEM
// ==========================================
const ShopSystem = {
  currentItems: [],

  generateShopItems() {
    const relicItems = [];
    const actionItems = [];
    // マグネット所持時：レリック枠+1（通常2 → 3）
    const relicSlotCount = GameState.relics.some(r => r.id === 'magnet') ? 3 : 2;

    // レリック枠 rarity重み付き抽選
    const legacyIds = ['heavy_dice','golden_dice','golden_line','chain_mirror','burning_reel','pursuit_blade','vampire_fang','spin_charger','fever_boost'];
    const availableRelics = CONFIG.RELICS.filter(r => !GameState.relics.find(gr => gr.id === r.id) && !legacyIds.includes(r.id));
    
    const rarityTable = [
      { rarity: 'common', weight: 50 },
      { rarity: 'uncommon', weight: 30 },
      { rarity: 'rare', weight: 15 },
      { rarity: 'legend', weight: 5 },
    ];

    function pickRarity() {
      const total = rarityTable.reduce((sum, r) => sum + r.weight, 0);
      let roll = Math.random() * total;
      for (const r of rarityTable) {
        roll -= r.weight;
        if (roll <= 0) return r.rarity;
      }
      return 'common';
    }

    for (let i = 0; i < relicSlotCount && availableRelics.length > 0; i++) {
      let rarity = pickRarity();
      let pool = availableRelics.filter(r => r.rarity === rarity);

      if (pool.length === 0) {
        pool = availableRelics;
      }

      const picked = pool[Math.floor(Math.random() * pool.length)];
      const pickedIdx = availableRelics.findIndex(r => r.id === picked.id);
      relicItems.push({ ...availableRelics.splice(pickedIdx, 1)[0], shopType: 'relic' });
    }

    // ★ 任意発動アイテム枠（スロー系削除、新アイテムに差し替え）
const actionPool = [
  { id: 'act_damage',    name: '闇の矢',           emoji: '🏹', img: './image/act_damage.png',  desc: 'ランダム敵1体に200ダメージ', cost: 60,  type: 'actDamage'    },
  { id: 'act_spin',      name: '加速装置',          emoji: '⚙️', img: './image/act_spin.png',    desc: 'スピン+1',                  cost: 50,  type: 'actSpin'      },
  { id: 'act_fever',     name: 'フィーバー充填',    emoji: '⚡', img: './image/act_fever.png',   desc: '次ステージ開始ゲージMAX',   cost: 80,  type: 'feverFill'    },
  { id: 'act_luck',      name: 'ラッキーチャーム',  emoji: '🍀', img: './image/act_luck.png',    desc: '次スピンLUCK+2',            cost: 40,  type: 'actLuck'      },
  { id: 'act_coinup',    name: 'コイン袋',          emoji: '💰', img: './image/act_coin.png',    desc: 'コイン+80',                 cost: 0,   type: 'actCoin'      },
  { id: 'reroll_ticket',   name: 'リロールチケット', emoji: '🔄', img: './image/act_reroll.png',      desc: '報酬選択やり直し1回',     cost: 40,  type: 'rerollTicket'  },
  { id: 'act_mirrorshield', name: 'ミラーシールド',  emoji: '🪞', img: './image/act_mirrorshield.png', desc: '次のスピンを2回分発動する', cost: 90,  type: 'mirrorshield'  },

  // ==== ここから新規バトルアイテム ====
  { id: 'actadrenaline',  name: 'アドレナリン',         emoji: '💉', img: './image/act_adrenaline.png',   desc: '次の3スピンのダメージ×2',                 cost: 80,  type: 'actAdrenaline'  },
  { id: 'actstarburst',   name: 'スターバースト',       emoji: '🌟', img: './image/act_starburst.png',    desc: '次のスピンのFeverゲージ蓄積+50',        cost: 60,  type: 'actStarburst'   },
  { id: 'actberserker',   name: 'バーサーカー薬',       emoji: '🧪', img: './image/act_berserker.png',    desc: 'このステージ残りスピン中ダメージ×1.5・コイン獲得0', cost: 90,  type: 'actBerserker'  },
  { id: 'acttrident',     name: '三叉の槍',             emoji: '🔱', img: './image/act_trident.png',      desc: '次のスピンで全ラインビーム演出＋ダメージ×1.3',     cost: 75,  type: 'actTrident'    },
  { id: 'actcrit',        name: 'クリティカルチャージ', emoji: '⚡', img: './image/act_crit.png',         desc: '次のスピンのダメージが×3',               cost: 60,  type: 'actCrit'       },
  { id: 'actextratime',   name: '時間延長',             emoji: '⏰', img: './image/act_extratime.png',    desc: 'スピン+3',                               cost: 90,  type: 'actExtraTime'  },
  { id: 'actdivide',      name: '山分け',               emoji: '💰', img: './image/act_divide.png',       desc: '現在のコイン×1.5',                       cost: 0,   type: 'actDivide'     },
  { id: 'acttimeloop',    name: 'タイムループ',         emoji: '🔄', img: './image/act_timeloop.png',     desc: '風のfever効果（テンペスト）を1回だけ発動する',    cost: 150, type: 'actTimeLoop'   },
  { id: 'actexplode',     name: '爆裂装置',             emoji: '🎆', img: './image/act_explode.png',      desc: '意味のない大爆発演出（ダメージなし）',   cost: 90,  type: 'actExplode'    },
  { id: 'actBombFall',    name: '爆発落ちなんてサイテー！', emoji: '💣', img: './image/act_bombfall.png', desc: '買った瞬間ゲーム画面が崩壊してゲームオーバー',  cost: 0,   type: 'actBombFall'   },
  { id: 'actvolcano',     name: '火山',                 emoji: '🌋', img: './image/act_volcano.png',      desc: '全敵に150ダメージ',                       cost: 80,  type: 'actVolcano'    },
  { id: 'actthunder',     name: '雷撃',                 emoji: '⚡', img: './image/act_thunder.png',      desc: 'ランダム3体に各120ダメージ',              cost: 70,  type: 'actThunder'    },
  { id: 'acttornado',     name: '竜巻',                 emoji: '🌪️', img: './image/act_tornado.png',      desc: 'スロットを再抽選＋スピン消費なし',        cost: 60,  type: 'actTornado'    },
  { id: 'actdarkball',    name: '闇玉',                 emoji: '🌑', img: './image/act_darkball.png',     desc: 'HP最大の敵に最大HPの30%ダメージ',         cost: 75,  type: 'actDarkBall'   },
  { id: 'actchain',       name: '連鎖弾',               emoji: '🔗', img: './image/act_chain.png',        desc: '生存敵全員に80ダメージずつ連鎖',          cost: 70,  type: 'actChain'      },
  { id: 'actmegabomb',    name: 'メガボム',             emoji: '💥', img: './image/act_megabomb.png',     desc: '全敵に300ダメージ',                       cost: 130, type: 'actMegaBomb'   },
  { id: 'actfrost',       name: '凍結',                 emoji: '❄️', img: './image/act_frost.png',        desc: '次のスピンのLUCK+10',                     cost: 50,  type: 'actFrost'      },
  { id: 'actreshuffle',   name: 'リシャッフル',         emoji: '🔀', img: './image/act_reshuffle.png',    desc: '未選択キャラ含めて1回スピン+LUCK+4',      cost: 70,  type: 'actReshuffle'  },
  { id: 'actwildcard',    name: 'ワイルドカード',       emoji: '🎴', img: './image/act_wildcard.png',     desc: 'ランダム1キャラで全9マスを強制揃え',      cost: 110, type: 'actWildcard'   },
  { id: 'actsureshot',    name: '必中弾',               emoji: '🎯', img: './image/act_sureshot.png',     desc: '次スピンのLUCK判定を強制成功扱い',        cost: 75,  type: 'actSureShot'   },
];
    // 3個ランダム選出
    const shuffled = actionPool.sort(() => Math.random() - 0.5);
    for (let i = 0; i < 3; i++) {
      actionItems.push({ ...shuffled[i], shopType: 'action' });
    }

    this.currentItems = [...relicItems, ...actionItems];
    return { relicItems, actionItems };
  },

  buyItem(itemIdx) {
    const item = ShopSystem.currentItems[itemIdx];
    if (!item || item.soldOut) return false;
    const isFree = GameState.nextShopFree;
    let actualCost = isFree ? 0 : item.cost;
    // magicwallet: ショップ全品-20%割引
    if (!isFree && GameState.relics.some(r => r.id === 'magicwallet')) {
      actualCost = Math.floor(actualCost * 0.8);
    }
    if (item.type !== 'actCoin' && GameState.coins < actualCost) return false;

    GameState.coins -= actualCost;
    AudioSystem.playBuy();

      switch (item.type) {
        case 'rerollTicket':
          GameState.rerollTickets++;
          break;
        case 'feverFill':
          GameState.nextFeverFill = true;
          break;
        case 'actCoin':
          // 即時発動
          GameState.coins += 80;
          break;
        case 'actDamage':
        case 'actSpin':
        case 'actLuck':
        case 'mirrorshield':
        case 'actAdrenaline':
        case 'actStarburst':
        case 'actBerserker':
        case 'actTrident':
        case 'actCrit':
        case 'actExtraTime':
        case 'actDivide':
        case 'actTimeLoop':
        case 'actExplode':
        case 'actBombFall':
        case 'actVolcano':
        case 'actThunder':
        case 'actTornado':
        case 'actDarkBall':
        case 'actChain':
        case 'actMegaBomb':
        case 'actFrost':
        case 'actReshuffle':
        case 'actWildcard':
        case 'actSureShot':
          // ★ 持ち越しアイテムとしてGameState.itemsに格納
          GameState.items.push({ ...item });
          UIManager.updateItemDisplay();
          break;
        default:
          // レリック購入：relicsに追加し、luck系効果は即反映
          if (!GameState.relics.find(r => r.id === item.id)) {
            GameState.relics.push(item);
          }
          if (item.effect && item.effect.type === 'luck') {
            GameState.luck += item.effect.value;
          }
          break;
      }

    // enchantgem: ショップ退場時にフラグリセット（最後の購入後もクリア）
    item.soldOut = true;
    UIManager.updateRelicDisplay();
    UIManager.updateHUD();
    return true;
  },

  showShopScreen(onClose) {
    const { relicItems, actionItems } = this.generateShopItems();
    const container = document.getElementById('shop-items');
    container.innerHTML = '';
    // enchantgem: 次のショップ全品無料（フラグはショップ閉じる時にクリア）
    if (GameState.nextShopFree) {
      const banner = document.createElement('div');
      banner.style.cssText = 'text-align:center;color:#44ff88;font-weight:bold;padding:8px;animation:pulse 1s infinite;';
      banner.textContent = '💎 全品無料！';
      container.appendChild(banner);
    }
    // interestjar: ショップ入場時コイン×1.1
    if (GameState.relics.some(r => r.id === 'interestjar')) {
      GameState.coins = Math.floor(GameState.coins * 1.1);
      UIManager.updateHUD();
    }
    document.getElementById('shop-coin-display').textContent = GameState.coins;
    

    // ★ レリック枠ヘッダー
    const relicHeader = document.createElement('div');
    relicHeader.className = 'shop-category-header';
    relicHeader.textContent = '🔮 レリック（常時効果）';
    container.appendChild(relicHeader);

    relicItems.forEach((item, idx) => {
      container.appendChild(ShopSystem.createShopItemEl(item, idx));
    });

    // ★ アイテム枠ヘッダー
    const actionHeader = document.createElement('div');
    actionHeader.className = 'shop-category-header';
    actionHeader.textContent = '⚡ アイテム（即時効果）';
    container.appendChild(actionHeader);

    actionItems.forEach((item, idx) => {
      container.appendChild(ShopSystem.createShopItemEl(item, relicItems.length + idx));
    });

    const skipBtn = document.getElementById('shop-skip-btn');
    const newSkipBtn = skipBtn.cloneNode(true);
    skipBtn.parentNode.replaceChild(newSkipBtn, skipBtn);
    newSkipBtn.addEventListener('click', () => {
      AudioSystem.playUIClick();
      // enchantgem: ショップ退場時に全品無料フラグをクリア
      GameState.nextShopFree = false;
      onClose();
    });

    UIManager.showScreen('shop-screen');
  },

  createShopItemEl(item, idx) {
    const el = document.createElement('div');
    el.className = 'shop-item';
    if (GameState.coins < item.cost && item.type !== 'actCoin') el.style.opacity = '0.4';
    el.innerHTML = `
      <div class="shop-item-icon">${renderIcon(item, '36px', '36px')}</div>
      <div class="shop-item-info">
        <div class="shop-item-name">${item.name}</div>
        <div class="shop-item-desc">${item.desc}</div>
      </div>
      <div class="shop-item-price">${item.cost > 0 ? '💰' + item.cost : '無料'}</div>
    `;

    // ★ クリックイベント追加（これが抜けていた）
      el.addEventListener('click', () => {
        if (ShopSystem.buyItem(idx)) {
          el.classList.add('sold-out');
          document.getElementById('shop-coin-display').textContent = GameState.coins;
          UIManager.updateRelicDisplay();
          UIManager.updateHUD();
          // ★ 全アイテムの購入可否を再チェック
          document.querySelectorAll('.shop-item').forEach((shopEl, i) => {
            const shopItem = ShopSystem.currentItems[i];
            if (!shopItem) return;
            if (shopItem.soldOut) {
              shopEl.style.opacity = '0.4';
              return;
            }
            // actCoinは常に購入可能
            if (shopItem.type === 'actCoin') {
              shopEl.style.opacity = '1';
              return;
            }
            shopEl.style.opacity = GameState.coins >= shopItem.cost ? '1' : '0.4';
          });
        }
      });

    return el;
  },
};

// ==========================================
// UI MANAGER
// ==========================================
const UIManager = {
  showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');
  },

  updateHUD() {
    document.getElementById('hud-stage').textContent = `STAGE ${GameState.currentStage + 1}/${CONFIG.TOTAL_STAGES}`;
    document.getElementById('hud-spin').textContent = `SPIN: ${GameState.spinsLeft}`;
    document.getElementById('hud-coin').textContent = `💰 ${GameState.coins}`;
    // ★ 追加
    const luckEl = document.getElementById('hud-luck');
    if (luckEl) luckEl.textContent = `🍀 LUCK: ${GameState.luck}`;

    // ★ コインボーナス表示（残スピン×10）
    const bonusEl = document.getElementById('coin-bonus-value');
    if (bonusEl) {
      const stage = CONFIG.STAGES[GameState.currentStage];
      // ★ ボスステージは非表示
      const isBossStage = stage && stage.enemies.some(e => e.isBoss);
      if (isBossStage) {
        bonusEl.parentElement.style.display = 'none';
      } else {
        bonusEl.parentElement.style.display = '';
        bonusEl.textContent = GameState.spinsLeft * 10;
      }
    }
  },
    buildCharPanel() {
    const container = document.getElementById('panel-char-list');
    if (!container) return;
    container.innerHTML = '';

    const passiveDesc = {
      fire:    'パッシブ: 全ダメージ+50',
      ice:     'パッシブ: コインボーナス固定',
      thunder: 'パッシブ: Feverゲージ蓄積+10%',
      wind:    'パッシブ: ステージ開始スピン+2',
      dark:    'パッシブ: 開始時全敵HP-20%',
    };
    const alignDesc = {
      fire:    '揃い: 高火力単体',
      ice:     '揃い: LUCK+1/列',
      thunder: '揃い: 全体均等',
      wind:    '揃い: 2列以上でスピン+1',
      dark:    '揃い: 最大HP割合ダメージ',
    };

    const skillDesc = {
      fire:   '全敵に大ダメージ',
      ice:    '連打で追加ダメージ(5秒)',
      thunder:'スピン数×50ダメージ',
      wind:   '状態をスナップショットに巻き戻す',
      dark:   '75%の確率で即撃破',
    };
GameState.selectedDeck.forEach((charId, index) => {
  const char = CONFIG.CHARACTERS[charId];
  const card = document.createElement('div');
  card.className = 'panel-char-card';
  card.style.borderLeftColor = char.color;
  card.innerHTML = `
    <div class="panel-char-header" style="color:${char.color}">${char.emoji} ${char.name}</div>
    <div class="panel-char-row">${passiveDesc[char.element]}</div>
    <div class="panel-char-row">${alignDesc[char.element]}</div>
    <div class="panel-char-row" style="font-size:0.65rem;opacity:0.7;">必殺: ${char.skillName}<br>${skillDesc[char.element]}</div>
  `;

  // index 2以降（3番目・4番目）は左に出す
  card.addEventListener('mouseenter', function() {
    const tooltip = this.querySelector('.deck-char-tooltip');
    if (!tooltip) return;
    if (index >= 2) {
      tooltip.style.left = 'auto';
      tooltip.style.right = '110%';
    } else {
      tooltip.style.left = '110%';
      tooltip.style.right = 'auto';
    }
  });

  container.appendChild(card);
});
  },

  updateEnemyDisplay() {
    const container = document.getElementById('enemy-container');
    container.innerHTML = '';

    GameState.enemies.forEach((enemy, idx) => {
      const card = document.createElement('div');
      card.className = `enemy-card${enemy.hp <= 0 ? ' defeated' : ''}`;
      const hpPercent = Math.max(0, (enemy.hp / enemy.maxHp) * 100);

      card.innerHTML = `
      <div class="enemy-sprite">${renderEnemyIcon(enemy)}</div>
      <div class="enemy-hp-bar"><div class="enemy-hp-fill" style="width:${hpPercent}%"></div></div>
      <div class="enemy-hp-text">${Math.max(0, Math.round(enemy.hp))} / ${enemy.maxHp}</div>
      <div class="enemy-name">${enemy.name}${enemy.isBoss ? ' ★' : ''}</div>
      `;
      container.appendChild(card);
    });
  },

  elementLabel(element) {
    const labels = { fire: '🔥火', ice: '❄️氷', thunder: '⚡雷', wind: '🌀風', dark: '🌑闇' };
    return labels[element] || element;
  },

  buildSlotGrid() {
  const grid = document.getElementById('slot-grid');
  grid.innerHTML = '';
  const svg = document.getElementById('line-svg');
  svg.innerHTML = `<defs><filter id="glow"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`;

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.className = 'slot-cell';
    cell.innerHTML = `<div class="slot-cell-inner"></div>`;
    grid.appendChild(cell);
  }

  // ★ グリッド描画後にSVGサイズをgridに合わせる
  requestAnimationFrame(() => {
    const rect = grid.getBoundingClientRect();
    svg.style.width  = rect.width  + 'px';
    svg.style.height = rect.height + 'px';
  });
  },

  updateSlotDisplay() {
    const cells = document.querySelectorAll('.slot-cell');
    GameState.slotResult.forEach((charId, i) => {
      const inner = cells[i]?.querySelector('.slot-cell-inner');
      if (inner && charId !== null) {
        const char = CONFIG.CHARACTERS[charId];
        inner.style.color = char.color;
        inner.innerHTML = renderCharIcon(char, '44px', '44px');
      }
    });
  },

  updateFeverGauge() {
    const fill = document.getElementById('fever-fill');
    const maxText = document.getElementById('fever-max-text');
    const container = document.getElementById('fever-gauge-container');
    const skillArea = document.getElementById('fever-skill-area');
    const skillButtons = document.getElementById('fever-skill-buttons');
    const percent = (GameState.feverGauge / CONFIG.FEVER.maxGauge) * 100;
    fill.style.width = percent + '%';

    // feverwave: 永久封印時はゲージ非表示
    if (GameState.feverDisabled) {
      fill.style.width = '0%';
      maxText.classList.remove('active');
      container.classList.remove('fever-ready');
      skillArea.style.display = 'none';
      skillButtons.innerHTML = '<div style="color:#888;font-size:0.75rem;text-align:center;">🌊 封印済み</div>';
      return;
    }

    if (GameState.feverReady) {
      maxText.classList.add('active');
      container.classList.add('fever-ready');
      skillArea.style.display = 'block';
      skillButtons.innerHTML = '';
      GameState.selectedDeck.forEach(charId => {
        const char = CONFIG.CHARACTERS[charId];
        const btn = document.createElement('button');
        btn.className = 'fever-skill-btn';
        btn.style.borderColor = char.color;
        btn.style.color = char.color;
        btn.innerHTML = `${renderCharIcon(char, '24px', '24px')}<span>${char.skillName}</span>`;
        btn.addEventListener('click', () => {
          if (GameState.isSpinning) return;
          AudioSystem.playUIClick();
          GameFlow.useFeverSkill(charId);
        });
        skillButtons.appendChild(btn);
      });                          // ← これが抜けていた
    } else {
      maxText.classList.remove('active');
      container.classList.remove('fever-ready');
      skillArea.style.display = 'none';
      skillButtons.innerHTML = '';
    }
  },

  updateRelicDisplay() {
    const container = document.getElementById('relic-display');
    container.innerHTML = '';
    GameState.relics.forEach(relic => {
      const el = document.createElement('div');
      el.className = 'relic-icon';
      el.innerHTML = `${renderIcon(relic, '28px', '28px')}<div class="relic-tooltip">${relic.name}: ${relic.desc}</div>`;
      container.appendChild(el);
    });
  },

  // ★ ここから追加
  updateItemDisplay() {
    const container = document.getElementById('battle-item-list');
    if (!container) return;
    container.innerHTML = '';
    if (GameState.items.length === 0) {
      container.style.display = 'none';
      return;
    }
    container.style.display = 'flex';
    GameState.items.forEach((item, idx) => {
      const btn = document.createElement('button');
      btn.className = 'battle-item-btn';
      btn.innerHTML = `${item.emoji}<span>${item.name}</span>`;
      btn.title = item.desc;
      btn.addEventListener('click', () => {
        if (GameState.isSpinning) return;
        GameFlow.useItem(idx);
      });
      container.appendChild(btn);
    });
  },
  // ★ ここまで追加

  buildDeckSelect() {
    const container = document.getElementById('deck-char-list');
    container.innerHTML = '';
    GameState.selectedDeck = [];

    CONFIG.CHARACTERS.forEach((char, idx) => {
      const el = document.createElement('div');
      el.className = 'deck-char';
      el.setAttribute('data-element', char.element);
      el.style.color = char.color;
      el.innerHTML = `
        <div class="deck-char-icon" style="background:${char.color}22; border: 2px solid ${char.color}">${renderCharIcon(char)}</div>
        <div class="deck-char-name">${char.name}</div>
        <div class="deck-char-element">${UIManager.elementLabel(char.element)}</div>
          `;

      el.addEventListener('click', () => {
        AudioSystem.playUIClick();
        if (el.classList.contains('selected')) {
          el.classList.remove('selected');
          GameState.selectedDeck = GameState.selectedDeck.filter(id => id !== idx);
        } else if (GameState.selectedDeck.length < 3) {
          el.classList.add('selected');
          GameState.selectedDeck.push(idx);
        }
        document.getElementById('deck-count').textContent = `${GameState.selectedDeck.length} / 3`;
        document.getElementById('deck-confirm-btn').disabled = GameState.selectedDeck.length !== 3;
      });

      el.addEventListener('mouseenter', () => {
        const panel = document.getElementById('deck-preview-panel');
        const passiveDesc = { fire: '🔥 全ダメ+50%', ice: '❄️ 撃墜ボーナス', thunder: '⚡ Fever+10%', wind: '🌀 スピン+2', dark: '🌑 敵HP-20%' };
        const alignDesc = { fire: '単体高火力', ice: '単体+LUCK+1', thunder: '全体均等', wind: '単体+2列でSP+1', dark: '最大HP15%' };
        const skillDesc = { fire: '全敵に大ダメージ', ice: '5秒間連打ダメージ', thunder: 'スピン数×50', wind: '開始時に巻き戻し', dark: '75%で即撃破' };
        document.getElementById('preview-emoji').innerHTML = renderCharIcon(char, '48px', '48px');
        document.getElementById('preview-name').style.color = char.color;
        document.getElementById('preview-name').textContent = char.name;
        document.getElementById('preview-passive').textContent = passiveDesc[char.element];
        document.getElementById('preview-align').textContent = alignDesc[char.element];
        document.getElementById('preview-skill').textContent = `必殺: ${char.skillName}`;
        document.getElementById('preview-skill-desc').textContent = skillDesc[char.element];

        // ★ キャラカードの位置を取得してパネルを横に出す
        const deckScreen = document.getElementById('deck-screen');
        const screenRect = deckScreen.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        const relTop = elRect.top - screenRect.top;
        const relLeft = elRect.right - screenRect.left + 8;  // カードの右8px横

        const panelWidth = 160;
        const spaceRight = screenRect.right - elRect.right;
        if (spaceRight < panelWidth + 16) {
           panel.style.left = (elRect.left - screenRect.left - panelWidth + 40) + 'px';
        } else {
        panel.style.left = (elRect.right - screenRect.left + 8) + 'px';
        }
        panel.style.top = relTop + 'px';
        panel.style.display = 'block';
      });

      el.addEventListener('mouseleave', () => {
        document.getElementById('deck-preview-panel').style.display = 'none';
      });

      container.appendChild(el);  // ★ 1回だけ
    });

    document.getElementById('deck-count').textContent = '0 / 3';
    document.getElementById('deck-confirm-btn').disabled = true;
  },
};

// ==========================================
// GAME FLOW - メインフロー
// ==========================================
const GameFlow = {
  init() {
    // Title screen
    EffectSystem.spawnTitleParticles();

    document.getElementById('start-btn').addEventListener('click', () => {
      AudioSystem.init();
      AudioSystem.resume();
      AudioSystem.playUIClick();
      this.showDeckSelect();
    });
  },

  showDeckSelect() {
    GameState.reset();
    const log = document.getElementById('panel-damage-log');
    if (log) log.innerHTML = '';
    UIManager.showScreen('deck-screen');
    UIManager.buildDeckSelect();

    const confirmBtn = document.getElementById('deck-confirm-btn');
    const newBtn = confirmBtn.cloneNode(true);
    confirmBtn.parentNode.replaceChild(newBtn, confirmBtn);
    newBtn.addEventListener('click', () => {
      if (GameState.selectedDeck.length >= 3) {
        AudioSystem.playUIClick();
        this.startGame();
      }
    });
  },

  startGame() {
    GameState.phase = 'battle';
    SlotEngine.generateReelSymbols();
    UIManager.showScreen('game-screen');
    UIManager.buildSlotGrid();
    this.startStage(0);
  },

  async startStage(stageNum) {
    GameState.currentStage = stageNum;
    const stage = CONFIG.STAGES[stageNum];
    GameState.spinsLeft = stage.spins;
    GameState.enemies = stage.enemies.map(e => ({
      ...e,
      maxHp: e.hp,
      defeated: false,
    }));
    GameState.slotResult = Array(9).fill(null);
    GameState.bossPhase = 0;
    GameState.crystalballUsed = false;

    // Fever fill from shop
    if (GameState.nextFeverFill) {
      GameState.feverGauge = CONFIG.FEVER.maxGauge;
      GameState.feverReady = true;
      GameState.nextFeverFill = false;
    }

    GameState.firePassiveActive = false;
    GameState.icePassiveActive = false;
    GameState.thunderPassiveActive = false;

    // ★ パッシブ適用（デッキに入っているキャラ全員分）
       const deck = GameState.selectedDeck;
    deck.forEach(charId => {
      const char = CONFIG.CHARACTERS[charId];

      // 🔥 火パッシブ: GameStateにフラグ保存（ダメージ計算時に+50）
      if (char.element === 'fire') {
        GameState.firePassiveActive = true;
      }

      // ❄️ 氷パッシブ: GameStateにフラグ保存（コインボーナス固定）
      if (char.element === 'ice') {
        GameState.icePassiveActive = true;
      }

      // ⚡ 雷パッシブ: GameStateにフラグ保存（Feverゲージ蓄積+10%）
      if (char.element === 'thunder') {
        GameState.thunderPassiveActive = true;
      }

      // 🌀 風パッシブ: ステージ開始時スピン+2
      if (char.element === 'wind') {
        GameState.spinsLeft += 2;
      }

      // 🌑 闇パッシブ: 全敵HPを20%削減
    if (char.element === 'dark') {
      GameState.enemies.forEach(enemy => {
        const reduction = Math.floor(enemy.maxHp * 0.2);
        enemy.hp = Math.max(1, enemy.hp - reduction);
      });
    }
    // moonlight: ボスステージ開始時にFeverゲージ+50
    if (GameState.relics.some(r => r.id === 'moonlight')) {
      const stage = CONFIG.STAGES[stageNum];
      const isBossStage = stage && stage.enemies.some(e => e.isBoss);
      if (isBossStage) {
        GameState.feverGauge = Math.min(CONFIG.FEVER.maxGauge, GameState.feverGauge + 50);
        if (GameState.feverGauge >= CONFIG.FEVER.maxGauge) {
          GameState.feverGauge = CONFIG.FEVER.maxGauge;
          GameState.feverReady = true;
        }
        UIManager.updateFeverGauge();
      }
    }
    });

    // ★ 風ロールバック用スナップショット（2-8）
    GameState.stageSnapshot = {
      spinsLeft: GameState.spinsLeft,
      feverGauge: GameState.feverGauge,
      enemies: GameState.enemies.map(e => ({ ...e })),
    };

    // Clear damage log
    document.getElementById('damage-log').innerHTML = '';

    UIManager.updateHUD();
    UIManager.updateEnemyDisplay();
    UIManager.updateFeverGauge();
    UIManager.updateRelicDisplay();

    // Reset slot display
    const cells = document.querySelectorAll('.slot-cell');
    cells.forEach(cell => {
      cell.classList.remove('spinning', 'locked', 'matched');
      const inner = cell.querySelector('.slot-cell-inner');
      if (inner) { inner.textContent = '?'; inner.style.color = ''; }
    });

    this._setupSpinButton();
        // ★ 左パネルのキャラ性能一覧を更新
    UIManager.updateItemDisplay();  // ★ 追加
    UIManager.buildCharPanel();
        // destinykey: ステージ開始時にレア1・アンコモン2の報酬から1つ選ぶ
    if (GameState.relics.some(r => r.id === 'destinykey')) {
      await new Promise(resolve => {
        const overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:400;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;';
        overlay.innerHTML = '<div style="color:#ffd700;font-size:1.2rem;font-weight:bold;">🗝️ 運命の鍵が発動！ 1つ選べ</div>';
        const rewards = RewardSystem.generateRewards(['rare','uncommon','uncommon']);
        rewards.forEach(reward => {
          const btn = document.createElement('button');
          btn.style.cssText = 'background:#1a1a2e;border:2px solid #ffd700;color:#fff;padding:12px 20px;border-radius:8px;cursor:pointer;font-size:0.9rem;min-width:240px;text-align:left;display:flex;flex-direction:column;gap:4px;';
          btn.innerHTML = `
            <div style="display:flex;align-items:center;gap:8px;font-size:1rem;font-weight:bold;">${renderIcon(reward, '24px', '24px')} ${reward.name}</div>
            <div style="font-size:0.75rem;color:#aaa;">${reward.desc || ''}</div>
            <div style="font-size:0.7rem;color:${RewardSystem.rarityColor(reward.rarity)};">${reward.rarity || 'common'}</div>
          `;
          btn.addEventListener('click', () => {
            RewardSystem.applyReward(reward);
            document.body.removeChild(overlay);
            resolve();
          });
          overlay.appendChild(btn);
        });
        document.body.appendChild(overlay);
        AudioSystem._play(150, 0.3, 'sawtooth', 0.05);
        EffectSystem.flashScreen('#333333');
      });
    }
  },

  useItem(idx) {
    const item = GameState.items[idx];
    if (!item) return;
    AudioSystem.playUIClick();
    switch (item.type) {
      case 'actDamage': {
        const alive = GameState.enemies
          .map((e, i) => ({ e, i }))
          .filter(x => x.e.hp > 0);
        if (alive.length > 0) {
          const t = alive[Math.floor(Math.random() * alive.length)];
          const dmg = 200;
          t.e.hp = Math.max(0, t.e.hp - dmg);
          GameState.totalDamageDealt += dmg;
          if (t.e.hp <= 0) { t.e.defeated = true; }
          EffectSystem.addDamageLog(`💥 -${dmg}`, 'crit');
          UIManager.updateEnemyDisplay();
          UIManager.updateHUD();
          if (BattleSystem.isStageClear()) {
            AudioSystem.playVictory();
            EffectSystem.flashScreen('#44ff88');
            setTimeout(() => GameFlow.onStageClear(), 800);
          }
        }
        break;
      }
      case 'actSpin':
        GameState.spinsLeft++;
        EffectSystem.addDamageLog(`⚡ スピン+1`, 'hit');
        UIManager.updateHUD();
        break;
      case 'actLuck':
        GameState.luck += 2;
        GameState.tempLuckBonus = (GameState.tempLuckBonus || 0) + 2;
        EffectSystem.addDamageLog(`🍀 LUCK+2`, 'hit');
        UIManager.updateHUD();
        break;
      case 'mirrorshield':
        GameState.mirrorshieldActive = true;
        EffectSystem.addDamageLog('🪞 ミラー待機中...', 'hit');
        break;
      case 'actAdrenaline':
        GameState.adrenalineSpins = 3;
        EffectSystem.addDamageLog('💉 アドレナリン×2 (3スピン)', 'crit');
        EffectSystem.flashScreen('#ff4488');
        break;
      case 'actStarburst':
        GameState.starburstActive = true;
        EffectSystem.addDamageLog('🌟 スターバースト待機', 'hit');
        EffectSystem.flashScreen('#ffdd44');
        break;
      case 'actBerserker':
        GameState.berserkerActive = true;
        EffectSystem.addDamageLog('🧪 バーサーカー発動 ×1.5', 'crit');
        EffectSystem.flashScreen('#aa0000');
        EffectSystem.shakeScreen(true);
        break;
      case 'actTrident':
        GameState.tridentActive = true;
        EffectSystem.addDamageLog('🔱 三叉の槍 ×1.3', 'hit');
        EffectSystem.flashScreen('#44aaff');
        break;
      case 'actCrit':
        GameState.critChargeActive = true;
        EffectSystem.addDamageLog('⚡ クリティカル充填 ×3', 'crit');
        EffectSystem.flashScreen('#ffff00');
        EffectSystem.shakeScreen(true);
        break;
      case 'actExtraTime':
        GameState.spinsLeft += 3;
        EffectSystem.addDamageLog('⏰ スピン+3', 'crit');
        UIManager.updateHUD();
        break;
      case 'actDivide':
        GameState.coins = Math.floor(GameState.coins * 1.5);
        EffectSystem.addDamageLog(`💰 コイン×1.5 (${GameState.coins})`, 'crit');
        UIManager.updateHUD();
        break;
      case 'actTimeLoop':
        if (GameState.stageSnapshot) {
          GameState.spinsLeft = GameState.stageSnapshot.spinsLeft;
          GameState.feverGauge = GameState.stageSnapshot.feverGauge;
          GameState.enemies = GameState.stageSnapshot.enemies.map(e => ({...e}));
          UIManager.updateHUD();
          UIManager.updateFeverGauge();
          UIManager.updateEnemyDisplay();
          EffectSystem.addDamageLog('🔄 タイムループ発動', 'crit');
          EffectSystem.flashScreen('#44ff88');
          EffectSystem.shakeScreen(true);
        }
        break;
      case 'actExplode': {
        const gs = document.getElementById('game-screen');
        EffectSystem.spawnConfetti(gs, 200);
        EffectSystem.shakeScreen(true);
        EffectSystem.flashScreen('#ff8800');
        setTimeout(() => { EffectSystem.spawnConfetti(gs, 200); EffectSystem.shakeScreen(true); EffectSystem.flashScreen('#ffff00'); }, 300);
        setTimeout(() => { EffectSystem.spawnConfetti(gs, 200); EffectSystem.shakeScreen(true); EffectSystem.flashScreen('#ff0088'); }, 600);
        EffectSystem.addDamageLog('🎆 大爆発！(意味なし)', 'crit');
        break;
      }
      case 'actBombFall':
        EffectSystem.flashScreen('#ff0000');
        EffectSystem.shakeScreen(true);
        EffectSystem.addDamageLog('💣 爆発落ち...', 'crit');
        setTimeout(() => GameFlow.onGameOver(), 1000);
        break;
      case 'actVolcano': {
        BattleSystem.applyDamageToAll(150, null);
        EffectSystem.addDamageLog('🌋 火山噴火 -150', 'crit');
        EffectSystem.flashScreen('#ff4400');
        EffectSystem.shakeScreen(true);
        UIManager.updateEnemyDisplay();
        UIManager.updateHUD();
        if (BattleSystem.isStageClear()) {
          AudioSystem.playVictory();
          EffectSystem.flashScreen('#44ff88');
          setTimeout(() => GameFlow.onStageClear(), 800);
        }
        break;
      }
      case 'actThunder': {
        const alive = GameState.enemies.map((e, i) => ({ e, i })).filter(x => x.e.hp > 0);
        for (let i = 0; i < 3 && alive.length > 0; i++) {
          const t = alive[Math.floor(Math.random() * alive.length)];
          BattleSystem.applyDamageToEnemy(t.i, 120, null);
        }
        EffectSystem.addDamageLog('⚡ 雷撃 ×3', 'crit');
        EffectSystem.flashScreen('#ffff44');
        EffectSystem.shakeScreen(true);
        UIManager.updateEnemyDisplay();
        UIManager.updateHUD();
        if (BattleSystem.isStageClear()) {
          AudioSystem.playVictory();
          EffectSystem.flashScreen('#44ff88');
          setTimeout(() => GameFlow.onStageClear(), 800);
        }
        break;
      }
      case 'actTornado':
        // 1スピン前の状態に巻き戻し（敵HP・コイン・スピン数・フィーバー）
        if (GameState.preSpinSnapshot) {
          GameState.spinsLeft = GameState.preSpinSnapshot.spinsLeft;
          GameState.feverGauge = GameState.preSpinSnapshot.feverGauge;
          GameState.coins = GameState.preSpinSnapshot.coins;
          GameState.enemies = GameState.preSpinSnapshot.enemies.map(e => ({...e}));
          GameState.bloodpactBonus = GameState.preSpinSnapshot.bloodpactBonus;
          UIManager.updateHUD();
          UIManager.updateFeverGauge();
          UIManager.updateEnemyDisplay();
          EffectSystem.addDamageLog('🌪️ 竜巻 1スピン巻き戻し', 'crit');
          EffectSystem.flashScreen('#88ffaa');
          EffectSystem.shakeScreen(true);
        } else {
          EffectSystem.addDamageLog('🌪️ 巻き戻し対象なし', 'hit');
        }
        break;
      case 'actDarkBall': {
        const alive = GameState.enemies.map((e, i) => ({ e, i })).filter(x => x.e.hp > 0);
        if (alive.length > 0) {
          alive.sort((a, b) => b.e.hp - a.e.hp);
          const target = alive[0];
          const dmg = Math.floor(target.e.maxHp * 0.3);
          BattleSystem.applyDamageToEnemy(target.i, dmg, null);
          EffectSystem.addDamageLog(`🌑 闇玉 -${dmg}`, 'crit');
          EffectSystem.flashScreen('#440088');
          EffectSystem.shakeScreen(true);
          UIManager.updateEnemyDisplay();
          UIManager.updateHUD();
          if (BattleSystem.isStageClear()) {
            AudioSystem.playVictory();
            EffectSystem.flashScreen('#44ff88');
            setTimeout(() => GameFlow.onStageClear(), 800);
          }
        }
        break;
      }
      case 'actChain': {
        const alive = GameState.enemies.map((e, i) => ({ e, i })).filter(x => x.e.hp > 0);
        alive.forEach((target, i) => {
          setTimeout(() => {
            BattleSystem.applyDamageToEnemy(target.i, 80, null);
            UIManager.updateEnemyDisplay();
            UIManager.updateHUD();
            if (i === alive.length - 1 && BattleSystem.isStageClear()) {
              AudioSystem.playVictory();
              EffectSystem.flashScreen('#44ff88');
              setTimeout(() => GameFlow.onStageClear(), 800);
            }
          }, i * 150);
        });
        EffectSystem.addDamageLog(`🔗 連鎖弾 ×${alive.length}`, 'crit');
        EffectSystem.flashScreen('#ffaa44');
        break;
      }
      case 'actMegaBomb': {
        BattleSystem.applyDamageToAll(300, null);
        EffectSystem.addDamageLog('💥 メガボム -300', 'crit');
        EffectSystem.flashScreen('#ff0000');
        EffectSystem.shakeScreen(true);
        const gs = document.getElementById('game-screen');
        EffectSystem.spawnConfetti(gs, 150);
        UIManager.updateEnemyDisplay();
        UIManager.updateHUD();
        if (BattleSystem.isStageClear()) {
          AudioSystem.playVictory();
          EffectSystem.flashScreen('#44ff88');
          setTimeout(() => GameFlow.onStageClear(), 800);
        }
        break;
      }
      case 'actFrost':
        GameState.luck += 10;
        GameState.tempLuckBonus = (GameState.tempLuckBonus || 0) + 10;
        EffectSystem.addDamageLog('❄️ 凍結 LUCK+10', 'hit');
        EffectSystem.flashScreen('#88ddff');
        UIManager.updateHUD();
        break;
      case 'actReshuffle':
        // 未選択キャラ含む全キャラから抽選+LUCK+4
        SlotEngine._reshuffleActive = true;
        GameState.luck += 4;
        GameState.tempLuckBonus = (GameState.tempLuckBonus || 0) + 4;
        EffectSystem.addDamageLog('🔀 リシャッフル LUCK+4', 'hit');
        EffectSystem.flashScreen('#aa44ff');
        UIManager.updateHUD();
        break;
      case 'actWildcard': {
        // ランダム1キャラを選んで全9マス確定（次スピンに適用）
        const allCharIds = [0, 1, 2, 3, 4];
        const wildId = allCharIds[Math.floor(Math.random() * allCharIds.length)];
        SlotEngine._wildcardCharId = wildId;
        const wildChar = CONFIG.CHARACTERS[wildId];
        EffectSystem.addDamageLog(`🎴 ワイルドカード: ${wildChar.name}全揃い`, 'crit');
        EffectSystem.flashScreen(wildChar.color);
        EffectSystem.shakeScreen(true);
        break;
      }
      case 'actSureShot':
        GameState.sureshottActive = true;
        EffectSystem.addDamageLog('🎯 必中弾 LUCK判定突破', 'crit');
        EffectSystem.flashScreen('#ffff44');
        break;
    }
    // ★ switchの外・全ケース共通でアイテム消費
    GameState.items.splice(idx, 1);
    UIManager.updateItemDisplay();
  },

  _setupSpinButton() {
    const spinBtn = document.getElementById('spin-btn');
    spinBtn.disabled = false;

    const newBtn = spinBtn.cloneNode(true);
    spinBtn.parentNode.replaceChild(newBtn, spinBtn);

    newBtn.addEventListener('click', async () => {
      if (GameState.isSpinning || GameState.spinsLeft <= 0) return;
      newBtn.disabled = true;

      // ★ スピン直前のスナップショット（actTornado用：1スピン前に戻す）
      GameState.preSpinSnapshot = {
        spinsLeft: GameState.spinsLeft,
        feverGauge: GameState.feverGauge,
        coins: GameState.coins,
        enemies: GameState.enemies.map(e => ({...e})),
        bloodpactBonus: GameState.bloodpactBonus,
      };

      GameState.spinsLeft--;
      UIManager.updateHUD();

      // starburst: 次スピンFever蓄積+50
      if (GameState.starburstActive) {
        GameState.feverGauge = Math.min(CONFIG.FEVER.maxGauge, GameState.feverGauge + 50);
        if (GameState.feverGauge >= CONFIG.FEVER.maxGauge) GameState.feverReady = true;
        UIManager.updateFeverGauge();
        GameState.starburstActive = false;
      }

      await SlotEngine.spin();
      await BattleSystem.processSpinResult();
      UIManager.updateEnemyDisplay();

      // スピン消費後：1回限定フラグをクリア、カウンタをデクリメント
      if (GameState.adrenalineSpins > 0) GameState.adrenalineSpins--;
      if (GameState.tridentActive) GameState.tridentActive = false;
      if (GameState.critChargeActive) GameState.critChargeActive = false;
      // 倍率ログのフラグもリセット
      GameState._adrenalineLogged = false;
      GameState._berserkerLogged = false;
      GameState._tridentLogged = false;
      GameState._critLogged = false;

      // Check stage clear
      if (BattleSystem.isStageClear()) {
        UIManager.updateHUD();
        AudioSystem.playVictory();
        EffectSystem.flashScreen('#44ff88');
        await EffectSystem.wait(800);
        GameFlow.onStageClear();
        return;
      }

      // Check game over
      if (GameState.spinsLeft <= 0) {
        await EffectSystem.wait(500);
        GameFlow.onGameOver();
        return;
      }

      newBtn.disabled = false;
    });
  },

  async _triggerBossPhaseBreak(phase, enemy, enemyEl) {
    const phaseLabels = ['', 'SECOND FORM', 'FINAL PHASE'];
    const phaseColors = ['', '#ff6600', '#ff0000'];
    const label = phaseLabels[phase] || `PHASE ${phase + 1}`;
    const color = phaseColors[phase] || '#ff0000';

    // ★ フェーズ突入テキストを画面中央に表示
    const textEl = document.createElement('div');
    textEl.id = 'boss-phase-text';
    textEl.textContent = label;
    textEl.style.cssText = `
      position:absolute; inset:0; display:flex; align-items:center;
      justify-content:center; font-size:2.8rem; font-weight:900;
      color:${color}; text-shadow:0 0 40px ${color}, 0 0 80px #fff;
      z-index:150; pointer-events:none; letter-spacing:0.08em;
      animation: bossPhaseAnim 1.8s ease forwards;
    `;
    document.getElementById('game-screen').appendChild(textEl);

    // ★ 連続フラッシュ
    EffectSystem.flashScreen('#ffffff');
    setTimeout(() => EffectSystem.flashScreen(color), 150);
    setTimeout(() => EffectSystem.flashScreen('#ffffff'), 300);
    setTimeout(() => EffectSystem.flashScreen(color), 500);

    // ★ 強振動
    EffectSystem.shakeScreen(true);
    setTimeout(() => EffectSystem.shakeScreen(true), 400);

    // ★ 敵アイコン巨大化
    if (enemyEl) {
      const sprite = enemyEl.querySelector('.enemy-sprite');
      if (sprite) {
        sprite.style.transition = 'transform 0.2s ease';
        sprite.style.transform = 'scale(2.5)';
        setTimeout(() => { sprite.style.transform = 'scale(1)'; }, 600);
      }
    }

    // ★ 爆発パーティクル大量生成
    const gameRect = document.getElementById('game-screen').getBoundingClientRect();
    let px = 195, py = 200;
    if (enemyEl) {
      const r = enemyEl.getBoundingClientRect();
      px = r.left - gameRect.left + r.width / 2;
      py = r.top - gameRect.top + r.height / 2;
    }
    EffectSystem.spawnParticles('fire', px, py, 60);
    setTimeout(() => EffectSystem.spawnParticles('thunder', px, py, 40), 200);
    setTimeout(() => EffectSystem.spawnParticles('dark', px, py, 40), 400);

    // ★ 背景色侵食（game-screenの背景を一時変更）
    const gameScreen = document.getElementById('game-screen');
    gameScreen.style.transition = 'background 0.3s';
    gameScreen.style.background = `radial-gradient(circle at center, ${color}44, #0a0a0f)`;
    setTimeout(() => { gameScreen.style.background = ''; }, 1500);

    // ログ
    EffectSystem.addDamageLog(`💥 ${label}！`, 'crit');

    AudioSystem.playFever();

    await new Promise(r => setTimeout(r, 1800));
    textEl.remove();
  },

// 変更後
  async useFeverSkill(charId) {
    if (!GameState.feverReady) return;
    if (GameState.isSpinning) return;
    if (GameState.phase !== 'battle') return;
    GameState.isSpinning = true;
    GameState.feverReady = false;
    GameState.feverGauge = 0;
    GameState.totalFevers++;
    // superconductor: フィーバー使用後3スピン間、フィーバーゲージ増加量3倍
    if (GameState.relics.some(r => r.id === 'superconductor')) {
      GameState.superConductorSpins = 3;
    }
    UIManager.updateFeverGauge();

    const char = CONFIG.CHARACTERS[charId];

    // feverwave: 全キャラのフィーバーを同時発動→以後fever永久使用不可
    if (GameState.relics.some(r => r.id === 'feverwave')) {
      for (const id of GameState.selectedDeck) {
        const c = CONFIG.CHARACTERS[id];
    if (id === 0) {
      let dmg = CONFIG.DAMAGE.baseDamage * CONFIG.DAMAGE.feverMultiplier;
      if (GameState.relics.some(r => r.id === 'fevercore')) dmg = Math.round(dmg * 1.5);
      if (GameState.relics.some(r => r.id === 'goldencrown')) dmg = Math.round(dmg * 1.5);
          EffectSystem.highlightMatchedCells([0,1,2,3,4,5,6,7,8]);
          await EffectSystem.showFever(c, dmg);
          BattleSystem.applyDamageToAll(dmg, c);
          EffectSystem.shakeScreen(true);
          EffectSystem.flashScreen(c.color);
        } else if (id === 1) {
          await this.skillFrostbite(c);
        } else if (id === 2) {
          let dmg = GameState.spinsLeft * 50;
          if (GameState.relics.some(r => r.id === 'fevercore')) dmg = Math.round(dmg * 1.5);
          EffectSystem.highlightMatchedCells([0,1,2,3,4,5,6,7,8]);
          await EffectSystem.showFever(c, dmg);
          BattleSystem.applyDamageToAll(dmg, c);
          EffectSystem.shakeScreen(true);
          EffectSystem.flashScreen(c.color);
        } else if (id === 3) {
          await this.skillTempest(c);
        } else if (id === 4) {
          await this.skillAbyssFall(c);
        }
      }
      GameState.feverDisabled = true;
      UIManager.updateFeverGauge();
      UIManager.updateEnemyDisplay();
      UIManager.updateHUD();
      GameState.isSpinning = false;
      if (BattleSystem.isStageClear()) {
        UIManager.updateHUD();
        AudioSystem.playVictory();
        EffectSystem.flashScreen('#44ff88');
        const spinBtn = document.querySelector('.spin-button');
        if (spinBtn) spinBtn.disabled = true;
        await new Promise(r => setTimeout(r, 800));
        GameFlow.onStageClear();
      }
      return;
    }

    if (charId === 0) {
      // 🔥 火：インフェルノ / 全体に超大ダメージ
      let damage = CONFIG.DAMAGE.baseDamage * CONFIG.DAMAGE.feverMultiplier;
      if (GameState.relics.some(r => r.id === 'fevercore')) damage = Math.round(damage * 1.5);
      EffectSystem.highlightMatchedCells([0,1,2,3,4,5,6,7,8]);
      await EffectSystem.showFever(char, damage);
      BattleSystem.applyDamageToAll(damage, char);
      EffectSystem.shakeScreen(true);
      EffectSystem.flashScreen(char.color);
      EffectSystem.addDamageLog(`🔥 インフェルノ -${Math.round(damage)}`, 'crit');

    } else if (charId === 1) {  // 氷
     await this.skillFrostbite(char);
    } else if (charId === 2) {
      let dmg = GameState.spinsLeft * 50;
      if (GameState.relics.some(r => r.id === 'fevercore')) dmg = Math.round(dmg * 1.5);
      if (GameState.relics.some(r => r.id === 'goldencrown')) dmg = Math.round(dmg * 1.5);
      EffectSystem.highlightMatchedCells([0,1,2,3,4,5,6,7,8]);
      await EffectSystem.showFever(char, dmg);
      BattleSystem.applyDamageToAll(dmg, char);
      EffectSystem.shakeScreen(true);
      EffectSystem.flashScreen(char.color);
      EffectSystem.addDamageLog(`⚡ -${dmg}`, 'crit');
    } else if (charId === 3) {
     await this.skillTempest(char);
    } else if (charId === 4) {
    await this.skillAbyssFall(char);
    }

// ★ 必ずawait完了後に実行
UIManager.updateEnemyDisplay();
UIManager.updateHUD();
// superconductor: フィーバー後3スピンFeverゲージ蓄積×3
if (GameState.relics.some(r => r.id === 'superconductor')) {
  GameState.superConductorSpins = 3;
}
// explodedevice: フィーバー使用時に紙吹雪3回+シェイク3回
if (GameState.relics.some(r => r.id === 'explodedevice')) {
  const gs = document.getElementById('game-screen');
  EffectSystem.spawnConfetti(gs, 150);
  EffectSystem.shakeScreen(true);
  setTimeout(() => { EffectSystem.spawnConfetti(gs, 150); EffectSystem.shakeScreen(true); }, 400);
  setTimeout(() => { EffectSystem.spawnConfetti(gs, 150); EffectSystem.shakeScreen(true); }, 800);
}
GameState.isSpinning = false;

    if (BattleSystem.isStageClear()) {
      UIManager.updateHUD();
      AudioSystem.playVictory();
      EffectSystem.flashScreen('#44ff88');
      // ★ spinボタンを即座にdisabledにしてクリック不可にする
      const spinBtn = document.querySelector('.spin-button');
      if (spinBtn) spinBtn.disabled = true;
      await new Promise(r => setTimeout(r, 800));
      GameFlow.onStageClear();
      return;
    }
  },

  async skillFrostbite(char) {
    // 連打UIを表示
    const overlay = document.createElement('div');
    overlay.id = 'frostbite-overlay';
    overlay.innerHTML = `
      <div id="frostbite-inner">
        <div id="frostbite-title">❄️ フロストバイト！</div>
        <div id="frostbite-instruction">ボタンを連打しろ！</div>
        <div id="frostbite-timer">5</div>
        <button id="frostbite-btn">❄️ 連打！</button>
        <div id="frostbite-count">0 ヒット</div>
      </div>
    `;
    document.getElementById('game-screen').appendChild(overlay);

    let hitCount = 0;
    let timeLeft = 5;
    const maxDamage = 200;

    const btn = document.getElementById('frostbite-btn');
    const countEl = document.getElementById('frostbite-count');
    const timerEl = document.getElementById('frostbite-timer');

    // 連打検知（mousedown + touchstart両対応）
    const onHit = (e) => {
      e.preventDefault();
      if (hitCount >= maxDamage) return;
      hitCount = Math.min(hitCount + 5, maxDamage);
      countEl.textContent = `${hitCount} ダメージ`;
      btn.style.transform = 'scale(0.92)';
      setTimeout(() => { btn.style.transform = 'scale(1)'; }, 80);
      AudioSystem.playHit();
    };
    btn.addEventListener('mousedown', onHit);
    btn.addEventListener('touchstart', onHit, { passive: false });

    // カウントダウン
    await new Promise(resolve => {
      const interval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
          clearInterval(interval);
          resolve();
        }
      }, 1000);
    });

    btn.removeEventListener('mousedown', onHit);
    btn.removeEventListener('touchstart', onHit);
    overlay.remove();

    // ダメージ適用
    const target = BattleSystem.getFirstAliveEnemy();
    if (target) {
      BattleSystem.applyDamageToEnemy(target.index, hitCount, char);
      EffectSystem.addDamageLog(`❄️ フロストバイト -${hitCount}`, 'crit');
    }

    // ★ ダメージ確定後にchar_ice_feverを派手に演出
    const feverOverlay = document.createElement('div');
    feverOverlay.style.cssText = `
      position:absolute;inset:0;z-index:350;
      display:flex;align-items:center;justify-content:center;
      pointer-events:none;overflow:hidden;
      background:radial-gradient(circle, #44aaffcc 0%, #0044ff44 50%, transparent 75%);
    `;
    const feverImg = document.createElement('img');
    feverImg.src = './image/char_ice_fever.png';
    feverImg.style.cssText = `
      width:400px;height:400px;object-fit:contain;
      opacity:0;transform:scale(0.1) translateY(60px);
      transition:all 0.25s cubic-bezier(0.16,1,0.3,1);
      filter:drop-shadow(0 0 40px #44aaff)
             drop-shadow(0 0 80px #0088ff)
             drop-shadow(0 0 120px #ffffff88)
             brightness(1.3);
    `;
    feverOverlay.appendChild(feverImg);
    document.getElementById('game-screen').appendChild(feverOverlay);

    AudioSystem.playFever();
    EffectSystem.flashScreen(char.color);
    EffectSystem.shakeScreen(true);

    await EffectSystem.wait(30);
    feverImg.style.opacity = '1';
    feverImg.style.transform = 'scale(1.25) translateY(0)';

    const cx = document.getElementById('game-screen').offsetWidth / 2;
    const cy = document.getElementById('game-screen').offsetHeight / 2;
    EffectSystem.spawnParticles('ice', cx, cy, 80);
    setTimeout(() => { EffectSystem.flashScreen('#ffffff'); EffectSystem.shakeScreen(true); }, 150);
    setTimeout(() => EffectSystem.spawnParticles('ice', cx, cy, 60), 200);
    setTimeout(() => { EffectSystem.flashScreen(char.color); EffectSystem.shakeScreen(true); }, 350);
    setTimeout(() => EffectSystem.spawnParticles('ice', cx, cy, 50), 400);
    setTimeout(() => EffectSystem.flashScreen('#ffffff'), 600);
    setTimeout(() => { EffectSystem.shakeScreen(true); EffectSystem.spawnParticles('ice', cx, cy, 40); }, 700);

    await EffectSystem.wait(1000);
    feverImg.style.opacity = '0';
    feverImg.style.transform = 'scale(2.0) translateY(-80px)';
    await EffectSystem.wait(400);
    feverOverlay.remove();
  },

async skillTempest(char) {
  const gameScreen = document.getElementById('game-screen');

  const imgOverlay = document.createElement('div');
  imgOverlay.style.cssText = `position:absolute;inset:0;z-index:300;display:flex;align-items:center;justify-content:center;pointer-events:none;overflow:hidden;`;
  const charImg = document.createElement('div');
  charImg.style.cssText = `font-size:260px;line-height:1;opacity:0;transform:scale(0.2) rotate(-20deg);transition:all 0.35s cubic-bezier(0.16,1,0.3,1);filter:drop-shadow(0 0 40px #44ff88) drop-shadow(0 0 80px #44ff8888);`;
    const tempestSrc = char.feverImg || char.cutinImg;
    if (tempestSrc) {
      charImg.innerHTML = `<img src="${tempestSrc}" style="width:300px;height:300px;object-fit:contain;filter:drop-shadow(0 0 40px #44ff88)drop-shadow(0 0 80px #00ffaa88);">`;
    } else {
      charImg.textContent = char.emoji;
    }
  imgOverlay.appendChild(charImg);
  gameScreen.appendChild(imgOverlay);

  AudioSystem.playSpinStart();
  setTimeout(() => AudioSystem.playCutin(), 200);
  setTimeout(() => AudioSystem.playFever(), 500);

  await EffectSystem.wait(50);
  charImg.style.opacity = '1';
  charImg.style.transform = 'scale(1.1) rotate(5deg)';

  EffectSystem.flashScreen(char.color);
  EffectSystem.shakeScreen(true);
  gameScreen.classList.add('tempest-warp');
  const cx = gameScreen.offsetWidth / 2;
  const cy = gameScreen.offsetHeight / 2;
  EffectSystem.spawnParticles('wind', cx, cy, 80);
  setTimeout(() => EffectSystem.spawnParticles('wind', cx, cy, 60), 150);
  setTimeout(() => EffectSystem.spawnParticles('wind', cx, cy, 50), 300);
  setTimeout(() => EffectSystem.flashScreen('#00ffaa'), 200);
  setTimeout(() => EffectSystem.flashScreen(char.color), 400);
  setTimeout(() => EffectSystem.shakeScreen(true), 300);
  setTimeout(() => EffectSystem.flashScreen('#ffffff'), 600);
  setTimeout(() => EffectSystem.shakeScreen(true), 700);

  await EffectSystem.wait(900);

  charImg.style.opacity = '0';
  charImg.style.transform = 'scale(2) rotate(20deg)';
  gameScreen.classList.remove('tempest-warp');
  await EffectSystem.wait(400);
  imgOverlay.remove();

  if (GameState.stageSnapshot) {
    GameState.spinsLeft = GameState.stageSnapshot.spinsLeft;
    GameState.feverGauge = GameState.stageSnapshot.feverGauge;
    GameState.enemies = GameState.stageSnapshot.enemies.map(e => ({...e}));
    UIManager.updateHUD();
    UIManager.updateFeverGauge();
    UIManager.updateEnemyDisplay();
  }
  EffectSystem.addDamageLog('巻き戻し！', 'hit');
},

async skillAbyssFall(char) {
  const aliveEnemies = GameState.enemies
    .map((e, i) => ({ enemy: e, index: i }))
    .filter(e => e.enemy.hp > 0);
  if (aliveEnemies.length === 0) return;
  const target = aliveEnemies[Math.floor(Math.random() * aliveEnemies.length)];
  const success = Math.random() < 0.75;
  const gameScreen = document.getElementById('game-screen');
  const cx = gameScreen.offsetWidth / 2;
  const cy = gameScreen.offsetHeight / 2;

  const imgOverlay = document.createElement('div');
  imgOverlay.style.cssText = `position:absolute;inset:0;z-index:300;display:flex;align-items:center;justify-content:center;pointer-events:none;overflow:hidden;background:radial-gradient(circle, #bb44ff22, transparent 70%);`;
  const charImg = document.createElement('div');
  charImg.style.cssText = `font-size:260px;line-height:1;opacity:0;transform:scale(0.1) translateY(100px);transition:all 0.3s cubic-bezier(0.16,1,0.3,1);filter:drop-shadow(0 0 60px #bb44ff) drop-shadow(0 0 120px #8800ff88);`;
  const abysSrc = char.feverImg || char.cutinImg;
  if (abysSrc) {
    charImg.innerHTML = `<img src="${abysSrc}" style="width:300px;height:300px;object-fit:contain;filter:drop-shadow(0 0 60px #bb44ff)drop-shadow(0 0 120px #8800ff88);">`;
  } else {
    charImg.textContent = char.emoji;
  }
  imgOverlay.appendChild(charImg);
  gameScreen.appendChild(imgOverlay);

  const blackout = document.createElement('div');
  blackout.style.cssText = `position:absolute;inset:0;background:#000;opacity:0;z-index:299;transition:opacity 0.3s;pointer-events:none;`;
  gameScreen.appendChild(blackout);

  AudioSystem.playHit();
  setTimeout(() => AudioSystem.playHit(), 150);
  setTimeout(() => AudioSystem.playCutin(), 300);
  setTimeout(() => AudioSystem.playFever(), 600);

  await EffectSystem.wait(50);
  blackout.style.opacity = '0.85';
  charImg.style.opacity = '1';
  charImg.style.transform = 'scale(1.15) translateY(0)';

  EffectSystem.shakeScreen(true);
  EffectSystem.flashScreen(char.color);
  EffectSystem.spawnParticles('dark', cx, cy, 80);
  setTimeout(() => { EffectSystem.flashScreen('#000000'); EffectSystem.shakeScreen(true); }, 200);
  setTimeout(() => EffectSystem.spawnParticles('dark', cx, cy, 60), 250);
  setTimeout(() => { EffectSystem.flashScreen(char.color); EffectSystem.shakeScreen(true); }, 400);
  setTimeout(() => EffectSystem.spawnParticles('dark', cx, cy, 50), 450);
  setTimeout(() => EffectSystem.flashScreen('#ffffff'), 600);
  setTimeout(() => { EffectSystem.shakeScreen(true); EffectSystem.spawnParticles('dark', cx, cy, 40); }, 650);

  await EffectSystem.wait(800);

  charImg.style.opacity = '0';
  charImg.style.transform = 'scale(0.5) translateY(-150px)';
  blackout.style.opacity = '0';
  await EffectSystem.wait(350);
  imgOverlay.remove();
  blackout.remove();

  if (success) {
    target.enemy.hp = 0;
    target.enemy.defeated = true;
    const enemyEl = document.querySelectorAll('.enemy-card')[target.index];
    if (enemyEl) enemyEl.classList.add('defeated');
    AudioSystem.playEnemyDefeat();
    EffectSystem.flashScreen('#ffffff');
    EffectSystem.shakeScreen(true);
    EffectSystem.spawnParticles('dark', cx, cy, 60);
    setTimeout(() => EffectSystem.flashScreen(char.color), 100);
    EffectSystem.addDamageLog('即撃破！', 'crit');
  } else {
    EffectSystem.flashScreen('#ff0000');
    EffectSystem.addDamageLog('...失敗', 'hit');
  }
},


  onStageClear() {
    let coinReward = CONFIG.STAGES[GameState.currentStage].coinReward;
    // berserker: コイン獲得0
    if (GameState.berserkerActive) {
      coinReward = 0;
      GameState.berserkerActive = false;
    }
    const totalCoin = GameState.relics.some(r => r.id === 'goldblock')
      ? Math.floor(coinReward * 0.5)
      : coinReward;
    GameState.coins += totalCoin;
    UIManager.updateHUD();



    if (GameState.currentStage >= CONFIG.TOTAL_STAGES - 1) {
      // Game clear!
      this.onGameClear();
      return;
    }

    // Show reward screen
    RewardSystem.showRewardScreen(() => {
      UIManager.updateRelicDisplay();
      // Show shop
      ShopSystem.showShopScreen(() => {
        // Next stage
        UIManager.showScreen('game-screen');
        UIManager.buildSlotGrid();
        this.startStage(GameState.currentStage + 1);
      });
    });
  },

  onGameOver() {
    GameState.phase = 'gameover';
    AudioSystem.playGameOver();
    UIManager.showScreen('gameover-screen');

    // ★ 戦績を表示
    const stageEl = document.getElementById('gameover-stage');
    stageEl.textContent = GameState.currentStage + 1;

    // ★ ゲームオーバー画面に戦績を追加
    const existing = document.getElementById('gameover-stats');
    if (existing) existing.remove();
    const stats = document.createElement('div');
    stats.id = 'gameover-stats';
    stats.className = 'clear-stats';
    stats.innerHTML = `
      <div class="clear-stat-row"><span class="clear-stat-label">総ダメージ</span><span class="clear-stat-value">${GameState.totalDamageDealt.toLocaleString()}</span></div>
      <div class="clear-stat-row"><span class="clear-stat-label">総スピン数</span><span class="clear-stat-value">${GameState.totalSpinsUsed}</span></div>
      <div class="clear-stat-row"><span class="clear-stat-label">ライン数</span><span class="clear-stat-value">${GameState.totalLinesMatched}</span></div>
      <div class="clear-stat-row"><span class="clear-stat-label">フィーバー</span><span class="clear-stat-value">${GameState.totalFevers}回</span></div>
      <div class="clear-stat-row"><span class="clear-stat-label">獲得コイン</span><span class="clear-stat-value">${GameState.coins}</span></div>
    `;
    document.getElementById('gameover-screen').appendChild(stats);

    const retryBtn = document.getElementById('retry-btn');
    const newBtn = retryBtn.cloneNode(true);
    retryBtn.parentNode.replaceChild(newBtn, retryBtn);
    newBtn.addEventListener('click', () => {
      AudioSystem.playUIClick();
      this.showDeckSelect();
    });
  },

  onGameClear() {
    GameState.phase = 'clear';
    AudioSystem.playVictory();

    // ★ 戦績（クリアランク追加）
    const totalSpins = GameState.totalSpinsUsed;
    const rank = totalSpins <= 30 ? 'S' : totalSpins <= 50 ? 'A' : totalSpins <= 70 ? 'B' : 'C';
    const rankColor = { S: '#ffdd00', A: '#44ff88', B: '#44aaff', C: '#aaa' }[rank];

    const stats = document.getElementById('clear-stats');
    stats.innerHTML = `
      <div class="clear-rank" style="color:${rankColor}">RANK ${rank}</div>
      <div class="clear-stat-row"><span class="clear-stat-label">総ダメージ</span><span class="clear-stat-value">${GameState.totalDamageDealt.toLocaleString()}</span></div>
      <div class="clear-stat-row"><span class="clear-stat-label">総スピン数</span><span class="clear-stat-value">${GameState.totalSpinsUsed}</span></div>
      <div class="clear-stat-row"><span class="clear-stat-label">ライン数</span><span class="clear-stat-value">${GameState.totalLinesMatched}</span></div>
      <div class="clear-stat-row"><span class="clear-stat-label">フィーバー</span><span class="clear-stat-value">${GameState.totalFevers}回</span></div>
      <div class="clear-stat-row"><span class="clear-stat-label">獲得コイン</span><span class="clear-stat-value">${GameState.coins}</span></div>
    `;

    UIManager.showScreen('clear-screen');

    const clearParticles = document.getElementById('clear-particles');
    EffectSystem.spawnConfetti(clearParticles, 80);
    setTimeout(() => EffectSystem.spawnConfetti(clearParticles, 60), 1500);

    const clearBtn = document.getElementById('clear-retry-btn');
    const newBtn = clearBtn.cloneNode(true);
    clearBtn.parentNode.replaceChild(newBtn, clearBtn);
    newBtn.addEventListener('click', () => {
      AudioSystem.playUIClick();
      this.showDeckSelect();
    });
  },
};

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  GameFlow.init();
});
