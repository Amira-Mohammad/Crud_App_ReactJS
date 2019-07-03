import React, { Component }  from 'react';

class CourseList extends Component {
  state = {
    isEdit:false
  }
  renderCourse = () =>{
    return(
      <li>
      <span>{this.props.details.name}</span>
      <button onClick={()=>{this.toggleEdit()}}>Edit Course</button>
      <button onClick={()=>{this.props.deleteCourse()}}>Delete Course</button>
    </li>

    )
  }
  // toggleEdit
  toggleEdit = ()=>{
    let {isEdit}=this.state;
    this.setState({
      isEdit : !isEdit
    })
  }
  updateCourseItem = (e)=>{
    e.preventDefault();
    this.props.editCourse(this.props.index , this.input.value);
    this.toggleEdit();
  }


  renderForm = () =>{
    return(
    <form onSubmit={this.updateCourseItem}>
      <input type = "text" ref = {(v)=>{this.input = v}} defaultValue={this.props.details.name} />
      <button>Update Course Name </button>
    </form>
  ) }
  render() {
    let {isEdit} = this.state;
    return (
        <React.Fragment>{ isEdit?this.renderForm(): this.renderCourse()}</React.Fragment>
    );
  }
}

export default CourseList;
