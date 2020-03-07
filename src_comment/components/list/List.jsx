import React, {Component} from 'react'
import Item from '../item/Item'
import './List.css'
export default class List extends Component {
    render() {

        let {comments,deleteComment}=this.props;
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display: 'none'}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((item,index)=>{
                            let commentObj={
                                commentId:item.commentId,
                                userName:item.userName,
                                content:item.content
                            }
                            return <Item key={item.commentId} {...commentObj} deleteComment={deleteComment}/>
                        })
                    }

                </ul>
            </div>

        )
    }
}