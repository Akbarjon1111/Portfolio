import "./Services.css"

const Services = () => {
  return (
    <div className="services">
      <div className="service-header">
        <h3>SERVICES</h3>
        <h1>Design that solves problems, one product at a time.</h1>
      </div>
      <div className="service-carts">
        <div className="cart">
            <img src="../../../src/assets/cart-img1.png" alt="" />
            <h2>What I can do for you</h2>
            <p>Faster, better products that your users love. Here's all the services I provide:</p>
            <ul>
                <li>Design Strategy</li>
                <li>Web and Mobile App Design</li>
                <li>Front-end Development</li>
            </ul>
        </div>
        <div className="cart">
            <img src="../../../src/assets/cart-img2.png" alt="" />
            <h2>Applications I'm fluent in</h2>
            <p>Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual.</p>
            <ul>
                <li>Sketch</li>
                <li>Webflow</li>
                <li>Figma</li>
            </ul>
        </div>
        <div className="cart">
            <img src="../../../src/assets/cart-img3.png" alt="" />
            <h2>What you can expect</h2>
            <p>I design products that are more than pretty. I make them shippable and usable.</p>
            <ul>
                <li>Clean and functional</li>
                <li>Device and user friendly</li>
                <li>Efficient and maintainable</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Services
