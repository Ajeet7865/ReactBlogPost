import React from 'react'
import Card from './Card';
import { Outlet } from 'react-router-dom';

const CardData = [
    {
        id: 1,
        name: 'John Doe',
        position: 'Software Engineer',
        city: 'New York',
        imageUrl: 'https://via.placeholder.com/150'
    },
    {
        id: 2,
        name: 'Jane Smith',
        position: 'Product Manager',
        city: 'San Francisco',
        imageUrl: 'https://via.placeholder.com/150'
    },
    {
        id: 3,
        name: 'Mike Brown',
        position: 'UX Designer',
        city: 'Chicago',
        imageUrl: 'https://via.placeholder.com/150'
    },
];

const CardList = () => {
    return (
        <div className='row'>
            {CardData.map((card) => (
                <div key={card.id} className='col-sm-4'>
                    <Card title={card.name} description={card.position} src={card.imageUrl}>
                        {/* Component Ke Andar Kuch Bhi Likhenge TOh Woh Children Kehlaayega */}
                        <span>Hello This is Children Text</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, blanditiis.</p>
                    </Card>
                </div>

            ))}
            <Outlet />
        </div>
    )
}   

export default CardList;