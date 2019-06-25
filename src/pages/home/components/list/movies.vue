<template>
  <div class="skin">
    <div class="title">电影预告</div>
    <div class="video-box">
      <video-player class="video-player vjs-custom-skin" ref="videoPlayer"  :playsinline="true" :options="playerOptions" ></video-player>
        <div class="item-info">
          <p class="item-title">《大侦探皮卡丘》5月10日中美同步上映</p>
          <p class="item-desc">“小贱贱”瑞恩·雷诺兹配音皮卡丘！大叔音萌化</p>
        </div>
    </div>
    <div class="video-box">
      <video-player class="video-player vjs-custom-skin" ref="videoPlayer"  :playsinline="true" :options="playerOptions1" ></video-player>
        <div class="item-info">
          <p class="item-title">《X战警：黑凤凰》定档6月6提前北美上映</p>
          <p class="item-desc">法鲨一美全员回归！琴·葛蕾黑化，凤凰之力爆发！</p>
        </div>
    </div>
  </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
import 'videojs-flash'
export default {
  name: 'HomeMovies',
  props: {
    list: Array,
  },
  data () {
    return {
      fileAreaHeight: 200,
      fileType: 'mp4',
    }
  },
  computed: {
      playerOptions () {		// 使用计算属性
        const playerOptionsObj = {
          playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, // 如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          // preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          // aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: false, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: 'video/mp4',	// 资源格式写法：'video/mp4'，否则控制台会出现notSupportedMessage设置的错误
            src: 'http://vt1.doubanio.com/201905121548/804a213acd351992f908419d97637c89/view/movie/M/402430768.mp4' // url地址
          }],
          poster: 'https://img3.doubanio.com/view/movie_gallery_frame_hot_rec/normal/public/6ed6fd48d753ef3.jpg', // 你的封面地址
          // width: document.documentElement.clientWidth,
          height: this.fileAreaHeight,	// 设置高度，fluid需要设置成flase
          notSupportedMessage: '此视频暂无法播放...', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true  //全屏按钮
          }
        }
        return playerOptionsObj
      },
      	    playerOptions1 () {		// 使用计算属性
        const playerOptionsObj1 = {
          playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, // 如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          // preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          // aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: false, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: 'video/mp4',	// 资源格式写法：'video/mp4'，否则控制台会出现notSupportedMessage设置的错误
            src: 'http://vt1.doubanio.com/201905122024/50d6d5e8afb7d2cabb3f56d473e12fd4/view/movie/M/402460164.mp4' // url地址
          }],
          poster: 'https://img1.doubanio.com/view/movie_gallery_frame_hot_rec/normal/public/d7917d2a719c779.jpg', // 你的封面地址
          // width: document.documentElement.clientWidth,
          height: this.fileAreaHeight,	// 设置高度，fluid需要设置成flase
          notSupportedMessage: '此视频暂无法播放...', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true  //全屏按钮
          }
        }
        return playerOptionsObj1
      }
	  }}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  
  .skin
    margin-top: .2rem
    .title
      line-height: .8rem
      background: #eee
      text-indent: .2rem
    .item-info
      padding: .2rem
      .item-title
        line-height: .54rem
        font-size: .36rem
        ellipsis()
      .item-desc
        line-height: .4rem
        font-size: .32rem
        color: #ccc
        ellipsis()
</style>
