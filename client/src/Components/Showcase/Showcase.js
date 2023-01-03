import ShowcaseStyle from './Showcase.module.css'

const Showcase = () => {
  return (
    <div className={ShowcaseStyle.container}>
        <h2>Websites We Launched</h2>
        <small>Our favorite recent projects</small>
        <div className={ShowcaseStyle.layout}>
            <div className={ShowcaseStyle.item}>
                <img src="/product-blue.png.webp" alt="" />
                <h1>Tripleseat</h1>
                <small>SaaS | Technology | WordPress | B2B</small>
            </div>
            <div className={ShowcaseStyle.item}>
                <img src="/product-pink.jpg.webp" alt="" />
                <h1>Luseta Beauty</h1>
                <small>Beauty | Shopify | Build </small>
            </div>
            <div className={ShowcaseStyle.item}>
                <img src="/product-red.png.webp" alt="" />
                <h1>A+ Products</h1>
                <small>Retail | Shopify | B2B | Build </small>
            </div>
            <div className={ShowcaseStyle.item}>
                <img src="/product-green.png.webp" alt="" />
                <h1>VRC</h1>
                <small>Corporate | WordPress | B2B | Build </small>
            </div>

        </div>

    </div>
  )
}
export default Showcase