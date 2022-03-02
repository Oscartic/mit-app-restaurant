import { useState } from 'react';
import { Skeleton, Switch, Card, Col, Link, Rate } from 'antd';
import styles from '../../styles/Skeleton.module.css';


const SkeletonCard = () => {
    
    const { Meta } = Card;
    const { Image } = Skeleton;
    
    const [loading, setLoading] = useState(true);

    const onChange = checked => {
        setLoading(!checked);
    };


    return (
        <>
            <Col className="gutter-row" xs={24} lg={6}>
                <Card
                    
                    cover={
                        <Image className={styles.skeleton_image}/>
                    }
                >
                    <Skeleton loading={loading}  active>
                        <Meta
                            title="Card title"
                            description="This is the description"
                        />
                    </Skeleton>
                </Card>
            </Col>
            <Col className="gutter-row" xs={24} lg={6}>
                <Card
                    cover={
                        <Image className={styles.skeleton_image}/>
                    }
                    
                >
                    <Skeleton loading={loading}  active>
                        <Meta
                            title="Card title"
                            description="This is the description"
                        />
                    </Skeleton>
                </Card>
            </Col>
            <Col className="gutter-row" xs={24} lg={6}>
                <Card
                    cover={
                        <Image className={styles.skeleton_image}/>
                    }
                    
                >
                    <Skeleton loading={loading} active>
                        <Meta
                            title="Card title"
                            description="This is the description"
                        />
                    </Skeleton>
                </Card>
            </Col>
            <Col className="gutter-row" xs={24} lg={6}>
                <Card
                    cover={
                        <Image className={styles.skeleton_image}/>
                    }
                    
                >
                    <Skeleton loading={loading}  active>
                        <Meta
                            title="Card title"
                            description="This is the description"
                        />
                    </Skeleton>
                </Card>
            </Col>              
        </>
    );
}


export default SkeletonCard;