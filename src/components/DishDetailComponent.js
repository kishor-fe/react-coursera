import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

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

function RenderComments({dishComments}) {
            if (dishComments.length === 0)
            {
                console.log('Empty Comment')
                return (<div><h4>Comments</h4></div>);
            }
               
            const comments = dishComments.map((comment) => {
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
           const selectedDish = props.dish;
           if (selectedDish != null) {
                return (
                    <div className="container">
                        <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{selectedDish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{selectedDish.name}</h3>
                        <hr/>
                    </div>
                </div>
                        <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish = {selectedDish}/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments dishComments = { props.comments} />
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