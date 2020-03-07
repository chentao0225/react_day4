import React, {Component} from 'react'
import uuid from 'uuid'
export default class Add extends Component {
    contentRef=React.createRef();
    add=()=>{
        let {addComment}=this.props;
        let userName=this.userName.value.trim();
        let content=this.contentRef.current.value.trim();
        if(userName===''||content===''){
            alert('必填项不能为空')
            return
        }
        let obj={
            commentId:uuid(),
            userName,
            content
        }
        addComment(obj)
        this.userName.value=''
        this.contentRef.current.value='';
    }
    render() {
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" ref={(input)=>{this.userName=input}}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" ref={this.contentRef}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}