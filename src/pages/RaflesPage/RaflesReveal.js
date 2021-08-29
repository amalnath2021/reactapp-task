import React, { Component } from 'react';
import FormContainer from '../../common/FormContainer';
import FormRow from '../../common/FormRow';
import SimpleCard from "../../common/Cards";
import { RAFLE_GOLD } from "../../assets/images";
import { Button } from "reactstrap";


class RaflesReveal extends Component {
  constructor(props) {
    super(props);
    this.props.getRaflesDetails();
    console.log(this.props.getRaflesDetails());
    this.state = {
        tasks: []          
    }
  }


  componentDidMount(){

    console.log("rafless" , this.props.getRaflesDetails());
    console.log(this.props.rafles.task);
    this.setState({ tasks: this.props.rafles.task});
  }
  onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };

  onDragOver = (ev) => {
    console.log("dragover:");

    ev.preventDefault();
  };

  onDrop = (ev, cat) => {
    console.log("droppped:", ev, cat);
    let id = ev.dataTransfer.getData("id");
    let currentTask = '';
    let remTasks = this.props.rafles.task.map(task => {
      if(task.name === id) {
        currentTask = task;
        task.isDisabled = true;
      }
      return task;
    })
    console.log("redis rem task", remTasks)
    this.setState({tasks: remTasks});
    if(currentTask.category === 'success') {
      this.setState({showSuccess: true, showFailure: false})
    } else {
      this.setState({
        showSuccess: false,
        showFailure: true
      })
    }
  };

 

  render() {
    let tasks = [];
console.log("render:", this.props.rafles.task)
console.log( "state:",this.state.tasks);
this.props.rafles.task.length > 0 && this.props.rafles.task.forEach((t) => {
      tasks.push(
        <div
          key={t.name}
          onDragStart={(e) => this.onDragStart(e, t.name)}
          draggable
          className={`draggable cardChild shadow-1 wrapper ${t.isDisabled && 'disabled'}`}
        >
          <img class="rafleImage" src={RAFLE_GOLD} />
          <p>{t.name}</p>
        </div>
      );
    });

    return (
      <>
        <FormContainer formTitle="">
          <FormRow>
            <div class="col-md-3">
              <SimpleCard>
                <div
                  className="wip"
                  onDragOver={(e) => this.onDragOver(e, )}
                  onDrop={(e) => {
                    this.onDrop(e, "wip");
                  }}
                >
                  {tasks}
                </div>
              </SimpleCard>
            </div>
            <div class="col-md-9">
              <SimpleCard>
                <div className="container-drag">
                  <div
                    className="droppable"
                    onDragOver={(e) => this.onDragOver(e)}
                    onDrop={(e) => this.onDrop(e, "complete")}
                  >
                    {tasks.complete}
                    
                  </div>
                  <div className="row">
                    
                {this.state.showSuccess && <div className="succes-msg col-md-12">
                  <p>Congratulations</p>
                  <p>You've just won spinning bit coin from the silver Raffle</p>
                  <Button color="primary">Redeem</Button>
                </div>}
                {this.state.showFailure && <div className="failure-msg col-md-12">
                  <p>Awww...Bad Luck</p>
                  <p>Lady luck not in your favour for this silver Raffle</p>
                  <Button color="primary">Try Again</Button>
                </div>}
              </div>
                </div>
                
              </SimpleCard>
            
            </div>
          </FormRow>
        </FormContainer>
      </>
    );
  }
}

export default RaflesReveal;
