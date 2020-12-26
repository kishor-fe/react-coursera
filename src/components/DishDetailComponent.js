/* eslint-disable no-useless-constructor */
import React, {Component} from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);
        }

        renderDish(selectedDish) {
            return (
                <Card>
                    <CardImg top src={selectedDish.image} alt={selectedDish.name}/>
                    <CardBody>
                        <CardTitle>{selectedDish.name}</CardTitle>
                        <CardText>{selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            );
    
        }

        renderComments(selectedDish) {
            if (selectedDish.comments.length === 0)
            {
                console.log('Empty Comment')
                return (<div><h4>Comments</h4></div>);
            }
               
            const comments = selectedDish.comments.map((comment) => {
                const date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)));
                return (
                    <div key={comment.id}>
                    <li>{comment.comment}</li>
                    <li>-- {comment.author}, {date}</li>
                    </div>
                );
            });
    
            return (
            <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {comments}
            </ul>
            </div>
            )
        }
    
        render() {
            const selectedDish = this.props.dish;
            console.log('Rendering :'+selectedDish)
            if (selectedDish != null) {
                return (
                    <div className="container">
                        <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(selectedDish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(selectedDish)}
                        </div>
                        </div>
                    </div>
                );
            } else {
                return (
                  <div></div>
                );
            }
    
        }
    }

export default DishDetail;