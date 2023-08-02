import React, {Component} from'react';

class counter extends Component{
    state={
        value:this.props.counter.value
        //tags:['tag1','tag2','tag3']
    };
/*
renderTags(){
    if(this.state.tags===0)return <p>There are no tags</p>;
    return <ul>
    {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
       </ul>
}*/

//constructor(){
  //  super();
   // this.handleIncrement=this.handleIncrement.bind(this)}


   handleIncrement=()=>{
this.setState({value:this.props.counter.value +1});
}
render(){
    //console.log("props", this.props);
    return(<div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement}
        className='btn btn-secondary btn-sm'>Increment</button>
  <button onClick={()=>this.props.onDelete(this.props.counter.id)}
   className='btn btn-danger btn-sm m-2'>Delete</button>
  {/*{this.renderTags()}*/}
   
    </div>
    
    
    )}


     getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

formatCount(){
    const{value}=this.state
return value === 0 ? 'zero': value;
}
}
export default counter;