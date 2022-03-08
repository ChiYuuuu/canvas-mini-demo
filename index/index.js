const app = getApp()

Page({
  data: {
    canvasHegiht: '',
    canvasWidth: ''
  },
  onLoad() {
  
    // this.drawCanvas()
   
  },
  bindscroll(e){
   let top=  e.detail.scrollTop/ 2.4
    console.log(e)
    wx.createSelectorQuery()
    .select('#scrollview')
    .node()
    .exec((res) => {
      const scrollView = res[0].node;
      scrollView.scrollEnabled = true;
      console.log(top)
      scrollView.scrollTo({top:top})
    })
  },
  drawCanvas() {
    const query = wx.createSelectorQuery()
    query.select('#myCanvas')
      .fields({
        node: true,
        size: true
      })
      .exec((res) => {
        const canvas = res[0].node
        const ctx = canvas.getContext('2d')

        let imageResource1 = "./../static/img/wallhaven-v9v3r5.jpg"
        let imageResource2 = "./../static/img/wallhaven-v9v3r5.jpg"

        let imgWidth, imgHeight, wh
        const dpr = wx.getSystemInfoSync().pixelRatio
        let rpx = wx.getSystemInfoSync().windowWidth / 750

        wx.getImageInfo({
          src: imageResource1,
          success: res => {
            imgWidth = res.width
            imgHeight = res.height
            wh = imgWidth / imgHeight
            this.setData({
              canvasHegiht: 1700 + 'px'
            })
          }
        })
        canvas.width = res[0].width * dpr
        canvas.height = res[0].height * dpr
        ctx.scale(dpr, dpr)
        let img = canvas.createImage()
        let img2 = canvas.createImage()

        img.src = imageResource1
        img2.src = imageResource2

        img.onload = () => {
          console.log(img)
          let height = wx.getSystemInfoSync().windowWidth

          console.log(res[0].width)
          console.log(dpr)

          console.log(res[0].width)
          // ctx.drawImage(img,0,0,res[0].width ,imgHeight/dpr)

        }
        img2.onload = () => {
          console.log(img)

        }


      })
  }

})