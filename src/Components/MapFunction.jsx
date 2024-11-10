import React from 'react'

const Product = ({ name, price }) => {
    return (
        <div className="col-sm-3">
            <h6>Product Name : {name}</h6>
            <p>Price : {price}</p>
        </div>
    )
}

const MapFunction = () => {
    const fruits = ["Apple", "Mango", "Orange", "Banana", "GFG"];
    const products = [
        { id: 1, name: "Laptop", price: "$1000" },
        { id: 2, name: "Phone", price: "$500" },
        { id: 3, name: "Tablet", price: "$300" }
    ];
    const employees = [
        { id: 1, name: "John Doe", position: "Developer" },
        { id: 2, name: "Jane Smith", position: "Designer" },
        { id: 3, name: "Mark Taylor", position: "Manager" }
    ];
    const tasks = [
        { id: 1, task: "Buy groceries", completed: false },
        { id: 2, task: "Finish project", completed: true },
        { id: 3, task: "Walk the dog", completed: false }
    ];

    return (
        <>
            <h4>Basic Map Function</h4>
            <h1 className="text-3xl font-bold underline text-red">
      Hello world!
    </h1>
            {
                // Single Return Kr Rhe Hain Toh Return Likhne Ki Jarurat Nhi Hai
                fruits.map(fruit => <div key={fruit}> {fruit}</div>)
            }

            <h4>Map With Array Object</h4>
            <div className='row'>
                {products.map((product) => (
                    <div key={product.id} className='col-sm-3'>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>


            <h4>Rendering a Table from an Array of Objects</h4>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h4>Using map with Conditional Rendering</h4>
            <ul>
                {
                    tasks.map((task) =>
                        <li key={task.id} style={{ color: task.completed ? 'green' : 'red' }}>{task.task}</li>
                    )
                }
            </ul>

            <h4>Map Using Mapping Component</h4>
            {
                products.map((item) => (
                    <Product key={item.id} name={item.name} price={item.price} />
                ))
            }

        </>
    )
}

export default MapFunction