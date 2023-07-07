import { register } from 'swiper/element/bundle'
import { Image } from '@chakra-ui/react'

register()

export const PhotosPage = () => {
  const images = [
    `https://rowlingdemo.files.wordpress.com/2011/07/e76494ac.jpeg?w=1632`,
    `https://rowlingdemo.files.wordpress.com/2011/07/tumblr_o04s4c8ci11sfie3io1_1280.jpg`,
    `https://rowlingdemo.files.wordpress.com/2011/07/tumblr_nzgppclzet1sfie3io1_1280.jpg`,
    `https://rowlingdemo.files.wordpress.com/2011/07/photo-1422157245273-e08b638b4b00.jpeg?w=1632`,
    `https://rowlingdemo.files.wordpress.com/2011/07/photo-1422157245273-e08b638b4b00.jpeg?w=1632`,
    `https://rowlingdemo.files.wordpress.com/2011/07/photo-1422393462206-207b0fbd8d6b.jpeg?w=1632`,
  ]

  return (
    <>
      <swiper-container
        slides-per-view='1'
        navigation='true'
        pagination='true'
        loop='true'
      >
        {images.map((img) => {
          return (
            <swiper-slide key={img}>
              <Image
                objectFit={'cover'}
                aspectRatio={'16/9'}
                src={img}
                alt=''
              />
            </swiper-slide>
          )
        })}
      </swiper-container>
    </>
  )
}
