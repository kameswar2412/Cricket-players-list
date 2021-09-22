
import {Component} from 'react';
import axios from 'axios';
import './App.css'

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            playerList:[],
            playerDetails:{}
        }
    }

    componentDidMount() {
      axios.get(`http://localhost:3000/player`)
        .then((res)=>{
            this.setState({
                playerList:res.data
            },this.getDetails)
        })
    }

    decrementPlayer= () => {
        const {count}=this.state
        if(count>0){
        this.setState({count:count-1},this.getDetails)}
        
    }

    incrementPlayer= () => {
        const {count}=this.state
        if(count < this.state.playerList.length-1){
        this.setState({count:count+1},this.getDetails)}
    }

    getDetails = () => {
        const {count,playerList} =this.state
        this.setState({playerDetails:playerList[count]})
    }

    render() {
        const {pName,pImg,country,icciRank} = this.state.playerDetails
        
        return (
            <div>
                <div className="heading">
                    <h5>Click below buttons to change Player!!</h5>
                </div>
               
                <div className="b-f-d-g" >  
                       <div className="box">
                            <button  onClick={this.decrementPlayer}>Prev </button>
                        </div>
                    <div >

                        <div >
                            <img width="50%"  alt='xyun' src={pImg}/>
                        </div>
                        <div >
                            <div >
                                <h1 >{pName}</h1>
                                <h3>ICCI T20 RANK :  <span>{icciRank}</span> </h3>
                                <h3 >{country}</h3>
                            </div>
                        </div>
                    </div>
                         <div className="box">
                          <button  onClick={this.incrementPlayer}>Next</button>
                        </div>
                </div>
            </div>
        );
    }
}
 
export default Player;

