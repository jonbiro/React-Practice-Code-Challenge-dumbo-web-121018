import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi";

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
			props.sushis.slice(props.counter, props.counter+4).map(sushi => { return <Sushi sushi={sushi} key={sushi.id} clickHandler={props.plateClickHandler} money={props.money}/>})
        }
        <MoreButton clickHandler={props.moreClickHandler}  />
      </div>
    </Fragment>
  )
}

export default SushiContainer