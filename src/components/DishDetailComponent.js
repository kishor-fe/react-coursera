import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
    
        }

function RenderComments({selectedDish}) {
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
    
        const DishDetail = (props) =>    {
            console.log('Render invoked');
            const selectedDish = props.dish;
            console.log('Rendering :'+selectedDish)
            if (selectedDish != null) {
                return (
                    <div className="container">
                        <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish = {selectedDish}/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments selectedDish = { selectedDish} />
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
    

export default DishDetail;