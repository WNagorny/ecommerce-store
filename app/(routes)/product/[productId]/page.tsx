import getProducts from '@/actions/get-products'
import getProduct from '@/actions/get-product'
import Container from '@/components/ui/container'

interface ProductPageProps {
	params: {
		productId: string
	}
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
	const product = await getProduct(params.productId)
	const suggestedProducts = await getProducts({
		categoryId: product?.category?.id,
	})

	return (
		<div className='bg-white'>
			<Container>
				<div className='px-4 py-10 sm:px-6 lg:px-8'>
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
               {/* Gallery*/ }
            </div>
            </div>
			</Container>
		</div>
	)
}

export default ProductPage
