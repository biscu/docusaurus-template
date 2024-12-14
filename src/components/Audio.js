import ReactHowler from 'react-howler'

const Audio = () => {
    return (
      <ReactHowler
        src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
        playing={true}
      />
    )
}
  
export default Audio