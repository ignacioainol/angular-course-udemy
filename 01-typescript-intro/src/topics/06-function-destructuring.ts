
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 350.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {

    const { tax, products } = options;

    let total = 0;

    products.forEach(product => {
        total += product.price;
    });

    return [total, total * tax]
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxAmount] = taxCalculation({ products: shoppingCart, tax });
