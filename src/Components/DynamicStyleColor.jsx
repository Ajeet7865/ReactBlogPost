
const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

export default function DynamicStyleColor() {
    const listItems = products.map(product =>
        <li
            key={product.id}
            style={{
                color: product.isFruit ? 'red' : 'green'
            }}
        >
            {product.title}
        </li>
    );

    return (
        <>
            <h3>Dynamic Style Color</h3>
            <ul>{listItems}</ul>
        </>
    );
}
