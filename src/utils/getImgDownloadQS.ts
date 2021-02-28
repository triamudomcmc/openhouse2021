const getImgDownloadQS = (type, squareDis) => {
  if (type === 'wishes') {
    if (squareDis) {
      return 'sq'
    } else {
      return 'pot'
    }
  } else {
    if (squareDis) {
      return 'nwsq'
    } else {
      return 'nwpot'
    }
  }
}

export default getImgDownloadQS
