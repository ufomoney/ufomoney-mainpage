import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0xBCfCcbde45cE874adCB698cC183deBcF17952812',
  uniswapFactoryV2: '0xBCfCcbde45cE874adCB698cC183deBcF17952812',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  UNIRouter: '0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

// export const contractAddresses = {
//   sushi: {
//     1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
//   },
//   masterChef: {
//     1: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd',
//   },
//   weth: {
//     1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
//   },
//   xSushi: {
//     1: '0x8798249c2e607446efb7ad49ec89dd1865ff4272'
//   }
// }




// export const supportedPools = [
//   {
//     pid: 12,
//     lpAddresses: {
//       1: '0x795065dCc9f64b5614C407a6EFDC400DA6221FB0',
//     },
//     tokenAddresses: {
//       1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
//     },
//     name: 'Sushi Party!',
//     symbol: 'SUSHI-ETH SLP',
//     tokenSymbol: 'SUSHI',
//     icon: '🍣',
//   },
//   {
//     pid: 18,
//     lpAddresses: {
//       1: '0xdafd66636e2561b0284edde37e42d192f2844d40', //change this
//     },
//     tokenAddresses: {
//       1: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
//     },
//     name: 'UNI Unicorn',
//     symbol: 'UNI-ETH SLP',
//     tokenSymbol: 'UNI',
//     icon: '🦄',
//   },
//   {
//     pid: 0,
//     lpAddresses: {
//       1: '0x06da0fd433C1A5d7a4faa01111c044910A184553',
//     },
//     tokenAddresses: {
//       1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
//     },
//     name: 'Tether Turtle',
//     symbol: 'USDT-ETH SLP',
//     tokenSymbol: 'USDT',
//     icon: '🐢',
//   },
//   {
//     pid: 1,
//     lpAddresses: {
//       1: '0x397FF1542f962076d0BFE58eA045FfA2d347ACa0',
//     },
//     tokenAddresses: {
//       1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
//     },
//     name: 'Circle Snail',
//     symbol: 'USDC-ETH SLP',
//     tokenSymbol: 'USDC',
//     icon: '🐌',
//   },
//   {
//     pid: 2,
//     lpAddresses: {
//       1: '0xC3D03e4F041Fd4cD388c549Ee2A29a9E5075882f',
//     },
//     tokenAddresses: {
//       1: '0x6b175474e89094c44da98b954eedeac495271d0f',
//     },
//     name: 'Donald DAI',
//     symbol: 'DAI-ETH SLP',
//     tokenSymbol: 'DAI',
//     icon: '🦆',
//   },
//   {
//     pid: 3,
//     lpAddresses: {
//       1: '0xF1F85b2C54a2bD284B1cf4141D64fD171Bd85539',
//     },
//     tokenAddresses: {
//       1: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
//     },
//     name: 'Spartan Dollar',
//     symbol: 'SUSD-ETH SLP',
//     tokenSymbol: 'SUSD',
//     icon: '🦍',
//   },
//   {
//     pid: 7,
//     lpAddresses: {
//       1: '0x001b6450083e531a5a7bf310bd2c1af4247e23d4',
//     },
//     tokenAddresses: {
//       1: '0x04fa0d235c4abf4bcf4787af4cf447de572ef828',
//     },
//     name: 'Umami Squid',
//     symbol: 'UMA-ETH SLP',
//     tokenSymbol: 'UMA',
//     icon: '🦑',
//   },
//   {
//     pid: 9,
//     lpAddresses: {
//       1: '0xA75F7c2F025f470355515482BdE9EFA8153536A8',
//     },
//     tokenAddresses: {
//       1: '0xba11d00c5f74255f56a5e366f4f77f5a186d7f55',
//     },
//     name: 'Band-osaurus',
//     symbol: 'BAND-ETH SLP',
//     tokenSymbol: 'BAND',
//     icon: '🦖',
//   },
//   {
//     pid: 8,
//     lpAddresses: {
//       1: '0xC40D16476380e4037e6b1A2594cAF6a6cc8Da967',
//     },
//     tokenAddresses: {
//       1: '0x514910771af9ca656af840dff83e8264ecf986ca',
//     },
//     name: 'Toadie Marine',
//     symbol: 'LINK-ETH SLP',
//     tokenSymbol: 'LINK',
//     icon: '🐸',
//   },
//   {
//     pid: 10,
//     lpAddresses: {
//       1: '0xCb2286d9471cc185281c4f763d34A962ED212962',
//     },
//     tokenAddresses: {
//       1: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
//     },
//     name: 'Ample Chicks',
//     symbol: 'AMPL-ETH SLP',
//     tokenSymbol: 'AMPL',
//     icon: '🐥',
//   },
//   {
//     pid: 4,
//     lpAddresses: {
//       1: '0x31503dcb60119a812fee820bb7042752019f2355',
//     },
//     tokenAddresses: {
//       1: '0xc00e94cb662c3520282e6f5717214004a7f26888',
//     },
//     name: 'Compound Truffle',
//     symbol: 'COMP-ETH SLP',
//     tokenSymbol: 'COMP',
//     icon: '🍄',
//   },
//   {
//     pid: 5,
//     lpAddresses: {
//       1: '0x5E63360E891BD60C69445970256C260b0A6A54c6',
//     },
//     tokenAddresses: {
//       1: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03',
//     },
//     name: 'Aave Boar',
//     symbol: 'LEND-ETH SLP',
//     tokenSymbol: 'LEND',
//     icon: '🐗',
//   },
//   {
//     pid: 6,
//     lpAddresses: {
//       1: '0xA1d7b2d891e3A1f9ef4bBC5be20630C2FEB1c470',
//     },
//     tokenAddresses: {
//       1: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
//     },
//     name: 'Synthetic Snake',
//     symbol: 'SNX-ETH SLP',
//     tokenSymbol: 'SNX',
//     icon: '🐍',
//   },
//   {
//     pid: 11,
//     lpAddresses: {
//       1: '0x088ee5007C98a9677165D78dD2109AE4a3D04d0C',
//     },
//     tokenAddresses: {
//       1: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
//     },
//     name: 'YFI Whale',
//     symbol: 'YFI-ETH SLP',
//     tokenSymbol: 'YFI',
//     icon: '🐋',
//   },
//   {
//     pid: 13,
//     lpAddresses: {
//       1: '0x611cde65dea90918c0078ac0400a72b0d25b9bb1',
//     },
//     tokenAddresses: {
//       1: '0x408e41876cccdc0f92210600ef50372656052a38',
//     },
//     name: 'REN Rhino',
//     symbol: 'REN-ETH SLP',
//     tokenSymbol: 'REN',
//     icon: '🦏',
//   },
//   {
//     pid: 14,
//     lpAddresses: {
//       1: '0xaad22f5543fcdaa694b68f94be177b561836ae57',
//     },
//     tokenAddresses: {
//       1: '0x68A118Ef45063051Eac49c7e647CE5Ace48a68a5',
//     },
//     name: 'BASED Bull',
//     symbol: 'BASED-sUSD SLP',
//     tokenSymbol: 'BASED',
//     icon: '🐂',
//   },
//   {
//     pid: 15,
//     lpAddresses: {
//       1: '0x117d4288b3635021a3d612fe05a3cbf5c717fef2',
//     },
//     tokenAddresses: {
//       1: '0x476c5E26a75bd202a9683ffD34359C0CC15be0fF',
//     },
//     name: 'SRM Shark',
//     symbol: 'SRM-ETH SLP',
//     tokenSymbol: 'SRM',
//     icon: '🦈',
//   },
//   {
//     pid: 16,
//     lpAddresses: {
//       1: '0x95b54c8da12bb23f7a5f6e26c38d04acc6f81820',
//     },
//     tokenAddresses: {
//       1: '0xaba8cac6866b83ae4eec97dd07ed254282f6ad8a',
//     },
//     name: 'YAMv2',
//     symbol: 'YAMv2-ETH SLP',
//     tokenSymbol: 'YAMv2',
//     icon: '🍠',
//   },
//   {
//     pid: 17,
//     lpAddresses: {
//       1: '0x58Dc5a51fE44589BEb22E8CE67720B5BC5378009',
//     },
//     tokenAddresses: {
//       1: '0xD533a949740bb3306d119CC777fa900bA034cd52',
//     },
//     name: 'CRV Crocodile',
//     symbol: 'CRV-ETH SLP',
//     tokenSymbol: 'CRV',
//     icon: '🐊',
//   },
//   {
//     pid: 19,
//     lpAddresses: {
//       1: '0x36e2FCCCc59e5747Ff63a03ea2e5C0c2C14911e7',
//     },
//     tokenAddresses: {
//       1: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
//     },
//     name: "Chef's Menu",
//     symbol: 'xSUSHI-ETH SLP',
//     tokenSymbol: 'xSUSHI',
//     icon: '👨🏻‍🍳',
//   },
//   {
//    pid: 20,
//    lpAddresses: {
//      1: '0x0Cfe7968e7c34A51217a7C9b9dc1690F416E027e',
//    },
//    tokenAddresses: {
//      1: '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
//    },
//    name: "Chef's Menu",
//    symbol: 'cDAI-DAI SLP',
//    tokenSymbol: 'cDAI',
//    icon: '‍👨🏻‍🍳',
//  },
//  {
//    pid: 21,
//    lpAddresses: {
//      1: '0xceff51756c56ceffca006cd410b03ffc46dd3a58',
//    },
//    tokenAddresses: {
//      1: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
//    },
//    name: "Chef's Menu",
//    symbol: 'WBTC-ETH SLP',
//    tokenSymbol: 'WBTC',
//    icon: '👨🏻‍🍳',
//  },
//  {
//    pid: 22,
//    lpAddresses: {
//      1: '0xf169CeA51EB51774cF107c88309717ddA20be167',
//    },
//    tokenAddresses: {
//      1: '0x2ba592F78dB6436527729929AAf6c908497cB200',
//    },
//    name: "Chef's Menu",
//    symbol: 'CREAM-ETH SLP',
//    tokenSymbol: 'CREAM',
//    icon: '👨🏻‍🍳',
//  },
//  {
//    pid: 23,
//    lpAddresses: {
//      1: '0x17b3C19Bd640a59E832AB73eCcF716CB47419846',
//    },
//    tokenAddresses: {
//      1: '0xD5525D397898e5502075Ea5E830d8914f6F0affe',
//    },
//    name: "Chef's Menu",
//    symbol: 'MEME-ETH SLP',
//    tokenSymbol: 'MEME',
//    icon: '👨🏻‍🍳',
//  },
//  {
//    pid: 24,
//    lpAddresses: {
//      1: '0xFcff3b04C499A57778ae2CF05584ab24278A7FCb',
//    },
//    tokenAddresses: {
//      1: '0x0d438f3b5175bebc262bf23753c1e53d03432bde',
//    },
//    name: "Chef's Menu",
//    symbol: 'wNXM-ETH SLP',
//    tokenSymbol: 'wNXM',
//    icon: '👨🏻‍🍳',
//  },
//  {
//    pid: 25,
//    lpAddresses: {
//      1: '0x382c4a5147Fd4090F7BE3A9Ff398F95638F5D39E',
//    },
//    tokenAddresses: {
//      1: '0x5dbcf33d8c2e976c6b560249878e6f1491bca25c',
//    },
//    name: "Chef's Menu",
//    symbol: 'yUSD-ETH SLP',
//    tokenSymbol: 'yUSD',
//    icon: '👨🏻‍🍳',
//  },
//  {
//    pid: 26,
//    lpAddresses: {
//      1: '0x2024324a99231509a3715172d4f4f4e751b38d4d',
//    },
//    tokenAddresses: {
//      1: '0x5dbcf33d8c2e976c6b560249878e6f1491bca25c',
//    },
//    name: "Chef's Menu",
//    symbol: 'yUSD-WBTC SLP',
//    tokenSymbol: 'yUSD',
//    icon: '👨🏻‍🍳',
//  },
//  {
//    pid: 27,
//    lpAddresses: {
//      1: '0x0be88ac4b5C81700acF3a606a52a31C261a24A35',
//    },
//    tokenAddresses: {
//      1: '0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b',
//    },
//    name: "Chef's Menu",
//    symbol: 'CRO-ETH SLP',
//    tokenSymbol: 'CRO',
//    icon: '👨🏻‍🍳',
//  },
//  {
//    pid: 28,
//    lpAddresses: {
//      1: '0x518d6CE2D7A689A591Bf46433443C31615b206C5',
//    },
//    tokenAddresses: {
//      1: '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d',
//    },
//    name: "Chef's Menu",
//    symbol: 'renBTC-WBTC SLP',
//    tokenSymbol: 'renBTC',
//    icon: '👨🏻‍🍳',
//  },
// ]





// JUICYSWAP SETTINGS

export const CHAIN_ID = 56

export const contractAddresses = {
  sushi: {
    56: '0x3B72Ac46888f72dD6a6B2076Ca96fcc18e75a935',
  },
  masterChef: {
    56: '0x2c7cd9468A3F9fEfb13E1BA49E4Fee406f1C13d6',
  },
  weth: {
    56: '0x3b72ac46888f72dd6a6b2076ca96fcc18e75a935',
  },
  xSushi: {
    56: '0x8798249c2e607446efb7ad49ec89dd1865ff4272' // NOTE: Not in use
  }
}



export const supportedPools = [
  // {
  //   pid: 0,
  //   lpAddresses: {
  //     56: '0x3B72Ac46888f72dD6a6B2076Ca96fcc18e75a935', // LP Token Address
  //   },
  //   tokenAddresses: {
  //     56: '0x3B72Ac46888f72dD6a6B2076Ca96fcc18e75a935', // Token, i.e. "DAI"
  //   },
  //   name: 'Stake UFO!',
  //   symbol: 'UFO',
  //   tokenSymbol: 'UFO',
  //   icon: '👽',
  // },
  {
    pid: 27,
    lpAddresses: {
      56: '0x43599A3C53f0d3514945F1b7eab420f11c6326D8',
    },
    tokenAddresses: {
      56: '0x2E427a0EbeAf2656A23FC289b12CE48f9CC3Fb7A',
    },
    getLPtoken: {
      56: '0x2E427a0EbeAf2656A23FC289b12CE48f9CC3Fb7A',
    },
    name: 'Stake UFO-SUFO LP!',
    symbol: 'UFO-SUFO LP',
    tokenSymbol: 'UFO-SUFO',
    icon: '👾',
  },   
  {
    pid: 25,
    lpAddresses: {
      56: '0x04533cEe3FdF190da9dFf61B2358c4198e6AAC04',
    },
    tokenAddresses: {
      56: '0x3B72Ac46888f72dD6a6B2076Ca96fcc18e75a935',
    },
    getLPtoken: {
      56: 'BNB',
    },
    name: 'Stake UFO-BNB LP!',
    symbol: 'UFO-BNB LP',
    tokenSymbol: 'UFO-BNB',
    icon: '🚀',
  },
  {
    pid: 26,
    lpAddresses: {
      56: '0xfFc6E4edb4752ded606d336F7eCf7e01f21f305a',
    },
    tokenAddresses: {
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    getLPtoken: {
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    name: 'Stake UFO-BUSD LP!',
    symbol: 'UFO-BUSD LP',
    tokenSymbol: 'UFO-BUSD',
    icon: '🛸',
  },
  {
    pid: 0,
    lpAddresses: {
      56: '0x3B72Ac46888f72dD6a6B2076Ca96fcc18e75a935',
    },
    tokenAddresses: {
      56: '0x3B72Ac46888f72dD6a6B2076Ca96fcc18e75a935',
    },
    getLPtoken: {
      56: '0x3B72Ac46888f72dD6a6B2076Ca96fcc18e75a935',
    },
    name: 'Stake UFO!',
    symbol: 'UFO',
    tokenSymbol: 'UFO',
    icon: '👽',
  },
  {
    pid: 28,
    lpAddresses: {
      56: '0x2E427a0EbeAf2656A23FC289b12CE48f9CC3Fb7A',
    },
    tokenAddresses: {
      56: '0x2E427a0EbeAf2656A23FC289b12CE48f9CC3Fb7A',
    },
    getLPtoken: {
      56: '0x2E427a0EbeAf2656A23FC289b12CE48f9CC3Fb7A',
    },
    name: 'Stake SUFO!',
    symbol: 'SUFO',
    tokenSymbol: 'SUFO',
    icon: '💎',
  },
  // },
  // {
  //   pid: 3,
  //   lpAddresses: {
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8', // LP Token Address
  //   },
  //   tokenAddresses: {
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8', // Token, i.e. "DAI"
  //   },
  //   name: 'Stake ETH!',
  //   symbol: 'ETH',
  //   tokenSymbol: 'ETH',
  //   icon: '🦏',
  // },
  // {
  //   pid: 4,
  //   lpAddresses: {
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c', // LP Token Address
  //   },
  //   tokenAddresses: {
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c', // Token, i.e. "DAI"
  //   },
  //   name: 'Stake BTCB!',
  //   symbol: 'BTCB',
  //   tokenSymbol: 'BTCB',
  //   icon: '👴',
  // },
  // {
  //   pid: 5,
  //   lpAddresses: {
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', // LP Token Address
  //   },
  //   tokenAddresses: {
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', // Token, i.e. "DAI"
  //   },
  //   name: 'Stake Cake!',
  //   symbol: 'Cake',
  //   tokenSymbol: 'Cake',
  //   icon: '🥞',
  // },
  // {
  //   pid: 6,
  //   lpAddresses: {
  //     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402', // LP Token Address
  //   },
  //   tokenAddresses: {
  //     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402', // Token, i.e. "DAI"
  //   },
  //   name: 'Stake DOT!',
  //   symbol: 'DOT',
  //   tokenSymbol: 'DOT',
  //   icon: '👾',
  // },
  // {
  //   pid: 7,
  //   lpAddresses: {
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', // LP Token Address
  //   },
  //   tokenAddresses: {
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', // Token, i.e. "DAI"
  //   },
  //   name: 'Stake USDC!',
  //   symbol: 'USDC',
  //   tokenSymbol: 'USDC',
  //   icon: '💲',
  // },
  // {
  //   pid: 8,
  //   lpAddresses: {
  //     56: '0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb', // LP Token Address
  //   },
  //   tokenAddresses: {
  //     56: '0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb', // Token, i.e. "DAI"
  //   },
  //   name: 'Stake SFP!',
  //   symbol: 'SFP',
  //   tokenSymbol: 'SFP',
  //   icon: '🎩',
  // },
  // {
  //   pid: 10,
  //   lpAddresses: {
  //     56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', // LP Token Address
  //   },
  //   tokenAddresses: {
  //     56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', // Token, i.e. "DAI"
  //   },
  //   name: 'Stake WBNB!',
  //   symbol: 'WBNB',
  //   tokenSymbol: 'WBNB',
  //   icon: '📀',
  // },
  // {
  //   pid: 11,
  //   lpAddresses: {
  //     56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47', // LP Token Address
  //   },
  //   tokenAddresses: {
  //     56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47', // Token, i.e. "DAI"
  //   },
  //   name: 'Stake ADA!',
  //   symbol: 'ADA',
  //   tokenSymbol: 'ADA',
  //   icon: '🚿',
  // },
  // {
  //   pid: 12,
  //   lpAddresses: {
  //     56: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe', // LP Token Address
  //   },
  //   tokenAddresses: {
  //     56: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe', // Token, i.e. "DAI"
  //   },
  //   name: 'Stake XRP!',
  //   symbol: 'XRP',
  //   tokenSymbol: 'XRP',
  //   icon: '🎀',
  // },
  // {
  //   pid: 13,
  //   lpAddresses: {
  //     56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1', // LP Token Address
  //   },
  //   tokenAddresses: {
  //     56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1', // Token, i.e. "DAI"
  //   },
  //   name: 'Stake UNI!',
  //   symbol: 'UNI',
  //   tokenSymbol: 'UNI',
  //   icon: '🦄',
  // },
  // {
  //   pid: 14,
  //   lpAddresses: {
  //     56: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94', // LP Token Address
  //   },
  //   tokenAddresses: {
  //     56: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94', // Token, i.e. "DAI"
  //   },
  //   name: 'Stake LTC!',
  //   symbol: 'LTC',
  //   tokenSymbol: 'LTC',
  //   icon: '🜛',
  // },
  // {
  //   pid: 15,
  //   lpAddresses: {
  //     56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd', // LP Token Address
  //   },
  //   tokenAddresses: {
  //     56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd', // Token, i.e. "DAI"
  //   },
  //   name: 'Stake LINK!',
  //   symbol: 'LINK',
  //   tokenSymbol: 'LINK',
  //   icon: '🧞',
  // },
  // {
  //   pid: 16,
  //   lpAddresses: {
  //     56: '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf', // LP Token Address
  //   },
  //   tokenAddresses: {
  //     56: '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf', // Token, i.e. "DAI"
  //   },
  //   name: 'Stake BCH!',
  //   symbol: 'BCH',
  //   tokenSymbol: 'BCH',
  //   icon: '👑',
  // },
  // {
  //   pid: 17,
  //   lpAddresses: {
  //     56: '0xba2ae424d960c26247dd6c32edc70b295c744c43', // LP Token Address
  //   },
  //   tokenAddresses: {
  //     56: '0xba2ae424d960c26247dd6c32edc70b295c744c43', // Token, i.e. "DAI"
  //   },
  //   name: 'Stake DOGE!',
  //   symbol: 'DOGE',
  //   tokenSymbol: 'DOGE',
  //   icon: '🐶',
  // },
  // {
  //   pid: 18,
  //   lpAddresses: {
  //     56: '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6', // LP Token Address
  //   },
  //   tokenAddresses: {
  //     56: '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6', // Token, i.e. "DAI"
  //   },
  //   name: 'Stake EOS!',
  //   symbol: 'EOS',
  //   tokenSymbol: 'EOS',
  //   icon: '💧',
  // },
  // {
  //   pid: 19,
  //   lpAddresses: {
  //     56: '0x111111111117dc0aa78b770fa6a738034120c302', // LP Token Address
  //   },
  //   tokenAddresses: {
  //     56: '0x111111111117dc0aa78b770fa6a738034120c302', // Token, i.e. "DAI"
  //   },
  //   name: 'Stake 1INCH!',
  //   symbol: '1INCH',
  //   tokenSymbol: '1INCH',
  //   icon: '🎠',
  // },
  // {
  //   pid: 20,
  //   lpAddresses: {
  //     56: '0x47bead2563dcbf3bf2c9407fea4dc236faba485a', // LP Token Address
  //   },
  //   tokenAddresses: {
  //     56: '0x47bead2563dcbf3bf2c9407fea4dc236faba485a', // Token, i.e. "DAI"
  //   },
  //   name: 'Stake SXP!',
  //   symbol: 'SXP',
  //   tokenSymbol: 'SXP',
  //   icon: '🔥',
  // },
  // {
  //   pid: 21,
  //   lpAddresses: {
  //     56: '0xa184088a740c695e156f91f5cc086a06bb78b827', // LP Token Address
  //   },
  //   tokenAddresses: {
  //     56: '0xa184088a740c695e156f91f5cc086a06bb78b827', // Token, i.e. "DAI"
  //   },
  //   name: 'Stake AUTO!',
  //   symbol: 'AUTO',
  //   tokenSymbol: 'AUTO',
  //   icon: '🌠',
  // },
]

